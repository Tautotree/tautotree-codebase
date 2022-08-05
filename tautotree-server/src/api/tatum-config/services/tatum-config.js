'use strict';

/**
 * tatum-config service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::tatum-config.tatum-config');
