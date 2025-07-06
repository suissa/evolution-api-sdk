export class EvolutionApiError extends Error {
	public readonly statusCode?: number;
	public readonly details?: unknown;

	constructor(message: string, cause?: unknown, statusCode?: number) {
		const extractedMessage = extractErrorMessage(cause);
		const finalMessage = extractedMessage || message || "Unknown error occurred";

		super(finalMessage);

		this.name = EvolutionApiError.name;
		this.message = finalMessage;
		this.statusCode = statusCode;
		this.details = cause;

		// Maintain proper stack trace
		if (Error.captureStackTrace) {
			Error.captureStackTrace(this, EvolutionApiError);
		}
	}
}

/**
 * Extracts error message from various Evolution API error response formats
 */
function extractErrorMessage(response: unknown): string | null {
	if (!response) {
		return null;
	}

	// Handle string responses
	if (typeof response === "string") {
		return response;
	}

	// Handle object responses
	if (typeof response === "object" && response !== null) {
		const errorObj = response as Record<string, any>;

		// Try different common error message paths
		const messagePaths = [
			// Direct error message
			errorObj.error,
			errorObj.message,
			errorObj.description,
			errorObj.detail,
			
			// Nested error messages
			errorObj.response?.error,
			errorObj.response?.message,
			errorObj.response?.description,
			errorObj.data?.error,
			errorObj.data?.message,
			
			// Array format messages (common in Evolution API)
			Array.isArray(errorObj.message) ? errorObj.message[0] : null,
			Array.isArray(errorObj.error) ? errorObj.error[0] : null,
			Array.isArray(errorObj.errors) ? errorObj.errors[0] : null,
		];

		for (const path of messagePaths) {
			if (typeof path === "string" && path.trim()) {
				return path.trim();
			}
			// Handle nested objects in arrays
			if (typeof path === "object" && path !== null) {
				const nestedMessage = extractErrorMessage(path);
				if (nestedMessage) {
					return nestedMessage;
				}
			}
		}

		// Handle validation errors (common format)
		if (errorObj.validation && Array.isArray(errorObj.validation)) {
			const validationErrors = errorObj.validation
				.map((v: any) => v.message || v.error || String(v))
				.filter(Boolean)
				.join(", ");
			if (validationErrors) {
				return `Validation error: ${validationErrors}`;
			}
		}

		// Handle specific Evolution API error patterns
		if (errorObj.statusCode && errorObj.statusText) {
			return `${errorObj.statusCode}: ${errorObj.statusText}`;
		}

		// Last resort: try to stringify the object meaningfully
		if (Object.keys(errorObj).length > 0) {
			try {
				return JSON.stringify(errorObj);
			} catch {
				return "[Complex error object]";
			}
		}
	}

	return null;
}

/**
 * Legacy error message patterns for specific Evolution API errors
 * Kept for backward compatibility
 */
const SpecificErrorPatterns = [
	{
		pattern: (obj: any) => 
			obj?.message?.some?.((m: any) => m?.exists === false && m?.jid && m?.number),
		message: "Provided number is not a valid WhatsApp number"
	},
	{
		pattern: (obj: any) => 
			obj?.message?.some?.((m: string) => typeof m === "string" && m.includes("Media upload failed")),
		message: "Media upload failed on all hosts"
	},
	{
		pattern: (obj: any) => 
			obj?.message?.some?.((m: string) => typeof m === "string" && m.includes("No session")),
		message: "No session found, try restarting your instance"
	},
	{
		pattern: (obj: any) => 
			obj?.message?.some?.((m: string) => typeof m === "string" && m.includes("AggregateError")),
		message: "Connection error occurred"
	},
	{
		pattern: (obj: any) => 
			obj?.message?.some?.((m: string) => typeof m === "string" && m.includes("AxiosError")),
		message: (obj: any) => obj.message[0] || "Network error occurred"
	},
];

/**
 * Enhanced error message extraction with specific pattern matching
 */
function getErrorMessage(response: unknown): string | null {
	// First try the general extraction
	const generalMessage = extractErrorMessage(response);
	if (generalMessage) {
		return generalMessage;
	}

	// Then try specific patterns
	if (typeof response === "object" && response !== null) {
		for (const { pattern, message } of SpecificErrorPatterns) {
			try {
				if (pattern(response)) {
					return typeof message === "string" ? message : message(response);
				}
			} catch {
				// Continue to next pattern if this one fails
			}
		}
	}

	return null;
}
