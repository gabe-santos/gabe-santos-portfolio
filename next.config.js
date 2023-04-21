/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	experimental: {
		appDir: true,
	},
	images: {
		disableStaticImages: true,
	},
};

module.exports = nextConfig;
