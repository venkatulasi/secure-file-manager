import axios from "axios";

type ApiErrorResponse = {
  success?: boolean;
  message?: string;
};

export function getApiErrorMessage(error: unknown): string {
  if (!axios.isAxiosError<ApiErrorResponse>(error)) {
    return "Something unexpected happened. Please try again.";
  }

  // No HTTP response received
  if (!error.response) {
    return "Unable to connect to the server. Please try again.";
  }

  const status = error.response.status;
  const message = error.response.data?.message;

  // Prefer safe, user-facing backend messages for client errors
  if (status >= 400 && status < 500) {
    if (typeof message === "string" && message.trim()) {
      return message;
    }

    return `Request failed (${status}).`;
  }

  // Don't expose arbitrary internal server error details
  if (status >= 500) {
    return "A server error occurred. Please try again later.";
  }

  return "Request failed. Please try again.";
}