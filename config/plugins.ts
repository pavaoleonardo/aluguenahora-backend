export default ({ env }) => ({
  upload: {
    config: {
      provider: env('NODE_ENV') === 'development' ? 'local' : 'cloudinary',
      providerOptions:
        env('NODE_ENV') === 'development'
          ? {
              sizeLimit: 10000000, // 10MB
              // folder to store files locally for admin preview
              path: './uploads',
            }
          : {
              cloud_name: env('CLOUDINARY_NAME'),
              api_key: env('CLOUDINARY_KEY'),
              api_secret: env('CLOUDINARY_SECRET'),
            },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
});
