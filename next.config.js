module.exports = {
  redirects: async () => {
    return [
      {
        source: '/about',
        destination: '/',
        permanent: true,
      },
    ];
  },
  images: {
    domains: ['via.placeholder.com', 'avatars.githubusercontent.com'],
  },
};
