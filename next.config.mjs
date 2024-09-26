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
            // {
            //     protocol: 'https',
            //     hostname: 'meowacademy.flutterclone.com',
            // },
           
        
        ],
        unoptimized:true
    },
};

export default nextConfig;
