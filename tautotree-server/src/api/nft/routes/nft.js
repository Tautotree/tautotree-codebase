'use strict';

/**
 * NFT router.
 */

module.exports = {
    routes: [
      { // Path defined with an URL parameter
        method: 'POST',
        path: '/nfts', 
        handler: 'nft.uploadFile',
        config: {
          auth: false,
          middlewares:['strapi::cors']
        },
      },
      { // Path defined with a regular expression
        method: 'GET',
        path: '/nfts', // Only match when the URL parameter is composed of lowercase letters
        handler: 'nft.getNFTsForWallet',
        config: {
          auth: false,
          middlewares:['strapi::cors']
        },
      },
      { // Path defined with a regular expression
        method: 'DELETE',
        path: '/nfts', // Only match when the URL parameter is composed of lowercase letters
        handler: 'nft.deleteNFT',
        config: {
          auth: false,
          middlewares:['strapi::cors']
        },
      },
      { // Path defined with a regular expression
        method: 'PUT',
        path: '/nfts', // Only match when the URL parameter is composed of lowercase letters
        handler: 'nft.sellNFT',
        config: {
          auth: false,
          middlewares:['strapi::cors']
        },
      }
    ]
  }