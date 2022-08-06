import { ElementRef, Injectable } from '@angular/core';
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
    myHeaders.append("Authorization", "bearer 3a229f340a9a121fc6989b0dbf2d9dc3726cd504cc7d3fc788b1bd744e62356baad9cc2c7d65d130b8490b23fefddf0a79e168d14a9f63374b93b4f97d815fb3368387da3942b1b2bee765ee9973e940c6320cfcd940ae5c938e0b718e23165c502124e9e81e06650b3aee72b76a2398af0b7e7570e307d65938c9bd83885b0d");

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
      .catch(error => console.log('error', error))
  }

  convertBlobToUrl(obj: any, image: ElementRef) {
    console.log(obj)
    var urlCreator = window.URL || window.webkitURL;
    var url = urlCreator.createObjectURL(obj)
    console.log(url)
    let fileReader = new FileReader()
    fileReader.readAsDataURL(obj)

    fileReader.onload = () => {
      (image.nativeElement as HTMLImageElement).src = fileReader.result as string
    }
    return url;
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