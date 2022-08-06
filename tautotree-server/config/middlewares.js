module.exports = [
  'strapi::errors',
  'strapi::security',
  {
    name:'strapi::cors',
    config: {
      origin: ['*'],
      enabled : true,
    }
  },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
