// 기존 코드_ 혹시나 해서 남겨둠
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'image.msscdn.net',
//       },
//       {
//         protocol: 'https',
//         hostname: 'qnowgdysxtsldlsczdcs.supabase.co',
//       },
//     ],
//   },
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
        hostname: 'qnowgdysxtsldlsczdcs.supabase.co',
      },
    ],
  },
  experimental: {
    appDir: true,
  },
};

export default nextConfig;
