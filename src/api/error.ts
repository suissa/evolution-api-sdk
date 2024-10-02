export class EvolutionApiError extends Error {
	constructor(message: string, cause?: unknown) {
		super(message, { cause });

		this.name = EvolutionApiError.name;
		this.message = message;
	}
}
