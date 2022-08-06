## GET NFTs for Wallet
URL : GET http://localhost:1337/api/nfts?walletAddress=<wallet_address>
```
var myHeaders = new Headers();
myHeaders.append("Authorization", "bearer <Strapi_API_TOKEN>");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("http://localhost:1337/api/nfts?walletAddress=<wallet_address>", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
  
```

## Mint A Image
URL: POST http://localhost:1337/api/nfts

```
var myHeaders = new Headers();
myHeaders.append("Authorization", "bearer <Strapi_API_Token>");

var formdata = new FormData();
formdata.append("image", fileInput.files[0], "IMG_20220806_053923517.jpg");
formdata.append("name", "Neem Tree in Kalinga");
formdata.append("description", "A huge Neem tree welcoming us to the auditorium.");
formdata.append("lat", "12.992563");
formdata.append("long", "77.582845");
formdata.append("walletAddress", "<WalletAddress>");

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: formdata,
  redirect: 'follow'
};

fetch("http://localhost:1337/api/nfts", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```

## Transfer a NFT 
URL: PUT 

```
var myHeaders = new Headers();
myHeaders.append("Authorization", "bearer <Strapi_API_Token>");

var formdata = new FormData();
formdata.append("contractAddress", "<contract_addr>");
formdata.append("tokenID", "<token_id>");
formdata.append("toWalletAddress", "<to_wallet>");
formdata.append("fromWalletAddress", "<from_wallet>");

var requestOptions = {
  method: 'PUT',
  headers: myHeaders,
  body: formdata,
  redirect: 'follow'
};

fetch("http://localhost:1337/api/nfts", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

```

## Burn a NFT
URL : DELETE http://localhost:1337/api/nfts?contractAddress=<contract_addr>&tokenID=<tokken_id>&walletAddress=<wallet_address>

```
var myHeaders = new Headers();
myHeaders.append("Authorization", "bearer <Strapi_API_Token>");

var requestOptions = {
  method: 'DELETE',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("http://localhost:1337/api/nfts?contractAddress=<contract_addr>&tokenID=<token_id>&walletAddress=<wallet_addr>", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

```