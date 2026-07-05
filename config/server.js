module.exports = ({ env }) => {
  const publicUrl = env('PUBLIC_URL', '');

  return {
    host: env('HOST', '0.0.0.0'),
    port: env.int('PORT', 1337),
    url: publicUrl || undefined,
    proxy: env.bool('STRAPI_PROXY', false),
    app: {
      keys: env.array('APP_KEYS'),
    },
    webhooks: {
      populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
    },
  };
};
