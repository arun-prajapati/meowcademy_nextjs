/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'picsum.photos',
            },
            {
                protocol: 'https',
                hostname: 'api.meowcademy.com',
            },
            {
                protocol: 'https',
                hostname: 'meowacademy.flutterclone.com',
            },
           
        
        ],
    },
};

export default nextConfig;
