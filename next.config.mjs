// const nextConfig = {
//     images: {
//         remotePatterns: [
//             {
//                 protocol: 'https',
//                 hostname: 'image.msscdn.net'
//             }
//         ]
//     },
//     images: {
//         remotePatterns: [
//             {
//                 protocol: 'https',
//                 hostname: 'image.msscdn.net'
//             },
//             {
//                 protocol: 'https',
//                 hostname: 'developer.accuweather.com'
//             }
//         ]
//     }
// };

// export default nextConfig;

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.msscdn.net',
      },
      {
        protocol: 'https',
        hostname: 'developer.accuweather.com',
      },
      {
        protocol: 'https',
        hostname: 'qnqowgdysxtsldlszczdcs.supabase.co',
      },
    ],
  },
};

export default nextConfig;
