const domain = process.env.DOMAIN || "api.easeplantz.ga";
const hostname = process.env.NODE_ENV !== "production" ? "localhost" : domain;

module.exports = hostname;
