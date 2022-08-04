module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '7970d4dd63087409fe7cb11203f80174'),
  },
});
