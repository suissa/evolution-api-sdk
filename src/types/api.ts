// Internal interface used by the service
export interface APIRequestInit {
  method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  params?: any; // Accept any object type for params
  body?: any; // Accept any object type for body
  headers?: Record<string, string>;
  isInstanceUrl?: boolean;
  instance?: string;
}

// Public interface for method options that users can pass
export interface MethodOptions {
  /**
   * Instance name to use for this request (overrides default instance)
   */
  instance?: string;
}
