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
      },
      { // Path defined with a regular expression
        method: 'GET',
        path: '/nfts', // Only match when the URL parameter is composed of lowercase letters
        handler: 'nft.getNFTsForWallet',
      }
    ]
  }