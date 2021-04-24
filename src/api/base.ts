/**
 * The base URI for the backend
 */
export const BASE_URI =
  process.env.NODE_ENV === "development" ? "http://localhost:3000/dev" : "https://www.api.actuallycolab.org/production";
