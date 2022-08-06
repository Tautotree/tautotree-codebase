import { Injectable } from '@angular/core';
import { GlobalService } from '../global.service';

@Injectable({
  providedIn: 'root'
})


export class TautotreeService {

  currentState: number = 0;
  treeInstance: TautoTree = {
    name: "",
    description: "",
    image: new Blob(),
    lat: 0,
    long: 0,
    walletAddress: ""
  };

  constructor(private g: GlobalService) { }

  postTautoTree() {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "bearer 6956f101bb1c3225e5645a511349f5310121f145d341a1c2f7fff3ad83256a252743cdca239ce3ed4357d0ce9e147ed6b9ec2109e81e4219f90b645a7cfd90b026c92ce973d75bd32f1e8bec94f7fc83029f0d881b130525f08f6fd1f30b8d99761444a1ce4b5f8648f0ba583ba3e5de9041b5fe1a4b337609ac9f940da6338a");

    var formdata = new FormData();
    formdata.append("image", this.treeInstance.image, this.treeInstance.name);
    formdata.append("name", this.treeInstance.name);
    formdata.append("description", this.treeInstance.description);
    formdata.append("lat", String(this.treeInstance.lat));
    formdata.append("long", String(this.treeInstance.long));
    formdata.append("walletAddress", this.g.accounts[0]);

    var requestOptions: RequestInit = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
    };

    fetch("http://localhost:1337/api/nfts", requestOptions)
      .then(response => console.log(response.text()))
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }

}

export type TautoTree = {
  name: string,
  description: string,
  image: Blob,
  lat: number,
  long: number,
  walletAddress: string

}