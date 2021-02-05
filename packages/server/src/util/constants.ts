export const IS_PROD = process.env.NODE_ENV === "production";
export const IS_SECURE = process.env.CLIENT_URL.includes("https://");
export const JWT_COOKIE_NAME = "JWT";
export const JWT_COOKIE_AGE = 1000 * 60 * 60 * 24 * 365 * 10;
