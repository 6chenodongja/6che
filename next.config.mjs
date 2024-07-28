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


// 7/28 20:59
//7/29 12:29
// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'image.msscdn.net'
        },
        {
          protocol: 'https',
          hostname: 'developer.accuweather.com'
        },
        {
          protocol: 'https',
          hostname: 'qnqowgdysxtsldlszczdcs.supabase.co'
        }
      ]
    }
  };
  
  export default nextConfig;
  


