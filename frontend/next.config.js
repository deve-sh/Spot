/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	redirects: () => [{ source: '/docs', destination: '/docs/index', permanent: true }]
};

module.exports = nextConfig;
