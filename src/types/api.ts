export interface APIRequestInit {
	method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
	params?: any; // Accept any object type for params
	body?: any; // Accept any object type for body
	headers?: Record<string, string>;
	isInstanceUrl?: boolean;
}
