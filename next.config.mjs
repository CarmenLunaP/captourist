/** @type {import('next').NextConfig} */
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
    images: {
        domains: [],
        // No need to add anything for local images
    },
};

export default  withNextIntl (nextConfig);
