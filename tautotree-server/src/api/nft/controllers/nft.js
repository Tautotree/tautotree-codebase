'use strict';

/**
 * NFT Controller.
 */

const {ipfsUpload, mintNFTWithUri, Currency, burnNFT, transferNFT, getNFTContractAddress }    = require('@tatumio/tatum');
// const { burnNFT }                               = require('@tatumio/tatum-polygon');
const {readFileSync}                            = require('fs'); 
const { Alchemy, Network }                      = require('alchemy-sdk');
// let upload                  = multer({storage: multer.memoryStorage()})
const { strapi } = require('@strapi/strapi').factories;

const config = {
    apiKey: process.env.ALCHEMY_API_KEY,
    network: Network.MATIC_MUMBAI,
};
const alchemy = new Alchemy(config);
module.exports = {
    async index(ctx, next) { // called by GET /hello 
      ctx.body = 'Hello World!'; // we could also send a JSON
    },
    async uploadFile(ctx, next) {
        console.log("Uploading File");
        let file = ctx.request.files.image;
        let metaData = {};
        metaData.name           = ctx.request.body.name;
        metaData.description    = ctx.request.body.description;
        metaData.latitude       = ctx.request.body.lat;
        metaData.longitude      = ctx.request.body.long;
        let walletAddress       = ctx.request.body.walletAddress;
        ctx.set('Access-Control-Allow-Origin', 'tautotree-tautotree-codebase-p7g64r94c6jq5-4200');
        ctx.set('X-Access-Control-Allow-Origin', 'tautotree-tautotree-codebase-p7g64r94c6jq5-4200');
        return this.uploadFileToIPFS(file, metaData, walletAddress);
    },

    async deleteNFT(ctx, next) {
        
        let contractAddr = ctx.request.query.contractAddress;
        let walletAddr   = ctx.request.query.walletAddress;
        let tokenID      = ctx.request.query.tokenID;
        console.log("Buring NFT: Contract: "+ contractAddr + " token: "+tokenID  + "walletAddr: "+ walletAddr);
        return burnNFT(true, {
            chain           : Currency.MATIC,
            tokenId         : tokenID,
            // fromPrivateKey  : walletAddr,
            contractAddress : contractAddr,
        }).then((burnResponse) => {
            console.log(burnResponse);
            return burnResponse;
        });
    },

    async sellNFT(ctx, next) {
        
        let contractAddr    = ctx.request.query.contractAddress;
        let toWalletAddr    = ctx.request.query.toWalletAddress;
        let fromWalletAddr  = ctx.request.query.fromWalletAddress;
        let tokenID         = ctx.request.query.tokenID;
        console.log("transfer NFT: Contract: "+ contractAddr + " token: "+tokenID  + "walletAddr: "+ toWalletAddr);
        return getNFTContractAddress(Currency.MATIC, "0x15aed103d325ac649f4aaf9342c624cef350dbd17c58ec34ea171787165226d4").then((respContract)=>{
            console.log(respContract);
            return respContract;
        })
        // return transferNFT(true, {
        //     chain           : Currency.MATIC,
        //     tokenId         : tokenID,
        //     // fromPrivateKey  : walletAddr,
        //     contractAddress : contractAddr,
        //     to              : toWalletAddr,
        //     from            : fromWalletAddr,
        // }).then((transferResponse) => {
        //     console.log(transferResponse);
        //     return transferResponse;
        // });
    },

    async uploadFileToIPFS(file, fileMeta, walletAddress){
        return ipfsUpload(readFileSync(file.path), fileMeta.name).then(fileHashResponse => {
            let fileHash = fileHashResponse.ipfsHash;  
            console.log(fileHash);
            console.log("FileHashResponse:" + fileHashResponse);
            fileMeta.image = `ipfs://` + fileHash;
            console.log(fileMeta);
            return this.uploadAndMintMeta(fileMeta, walletAddress).then((metaHashResponse) => {
                return {fileHashResponse, metaHashResponse}
            })
        })
    },

    async uploadAndMintMeta(fileMeta, walletAddress) {
        return ipfsUpload(JSON.stringify(fileMeta), "metadata.json").then(metaHashResponse => {
            let metaHash = metaHashResponse.ipfsHash; 
            console.log("MetaHashResponse:" + metaHashResponse);
            console.log(metaHash);
            return mintNFTWithUri(true, {
                to      : walletAddress,
                url     : `ipfs://`+metaHash,
                tokenId : '100000',
                chain   : Currency.MATIC,
            }).then(x=> {
                console.log("Sambavam Completed");
                return {metaHashResponse}
            })
            
        })
    },

    async getNFTsForWallet(ctx, next){
        console.log(ctx.request);
        console.log(ctx.request.query.walletAddress)
        let walletAddress       = ctx.request.query.walletAddress;
        
        console.log("Fetching NFTs for Wallet:" + walletAddress);
        ctx.set('Access-Control-Allow-Origin', 'tautotree-tautotree-codebase-p7g64r94c6jq5-4200');
        ctx.set('X-Access-Control-Allow-Origin', 'tautotree-tautotree-codebase-p7g64r94c6jq5-4200');
        return alchemy.nft.getNftsForOwner(walletAddress).then((nfts)=>{
            console.log(nfts);
            return nfts;
        })
    }

    // const ipfsHash = ipfsUpload(readFileSync('/Users/damodharan-2579/Desktop/yc.png'), 'yc.png').then(x => {

    //     console.log('file upload success!!')
    //     writeFileSync('./meta.json', `{
    //         "name": "Lorem Ipsum Dolor Test",
    //         "description": "Friendly Lorem OpenSea Creature that enjoys long swims in the ocean.",
    //         "image": "ipfs://${x.ipfsHash}"
    //       }`);
    
    //       ipfsUpload(readFileSync('./meta.json'), 'metadata.json').then(x => {
    //           const transactionHash = mintNFTWithUri(false, {
    //             to: '0x5d7FB2e3E88133237FD190cdcedD9f6d19a47605',
    //             url: `ipfs://${x.ipfsHash}`,
    //             tokenId: '100000',
    //             chain: Currency.MATIC,
                
    //         }).then(x => {
    //             console.log('minting success', x);
    //         })
    //       })
    //   });


    // const bb = busboy({headers: ctx.request.headers})
    // console.log("Req Headers:"+ ctx.request.headers);
    // let headers = ctx.request.headers;
    // console.log(JSON.stringify(headers));
    // bb.on('file', (name, file, info) =>{
    //     const {filename, encoding, mimeType} = info;
    //     file.on('data', (data) => {
    //         console.log('------------------IMAGE------------------')
    //         console.log(`File [${name}] got ${data.length} bytes`);
    //     }).on('close', () => {
    //         console.log(`File [${name}] done`);
    //     });
    // })
    // bb.on('field', (name, val, info) => {
    //     console.log(`Field [${name}]: value: %j`, val);
    //   });
    //   bb.on('close', () => {
    //     console.log('Done parsing form!');
    //     // res.writeHead(303, { Connection: 'close', Location: '/' });
    //     // res.end();
    //   });
    // //   ctx.request.pipe(bb);
  };
  