const withPWA = require("@ducanh2912/next-pwa")({
	dest: "public",
	register: true,
	skipWaiting: true,
});

module.exports = withPWA({
	reactStrictMode: true,
});
