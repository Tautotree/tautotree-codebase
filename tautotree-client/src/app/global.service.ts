import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public accounts = [];
  public trees: any = [];
  public e = new Subject();
  constructor() {
    this.e.subscribe(() => {
      fetch(`http://localhost:1337/api/nfts?walletAddress=${this.accounts[0]}`, {
        headers: {
          authorization: 'bearer 3a229f340a9a121fc6989b0dbf2d9dc3726cd504cc7d3fc788b1bd744e62356baad9cc2c7d65d130b8490b23fefddf0a79e168d14a9f63374b93b4f97d815fb3368387da3942b1b2bee765ee9973e940c6320cfcd940ae5c938e0b718e23165c502124e9e81e06650b3aee72b76a2398af0b7e7570e307d65938c9bd83885b0d'
        }
      }).then(x => {
        return x.json()
      }).then(x => {
        console.log(x);
        this.trees = x.ownedNfts.filter((i: any) => i.media.length)
      });
    })
  }
}
