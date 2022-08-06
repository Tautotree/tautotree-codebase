import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class TautotreeService {

  currentState: number = 0;
  treeInstance: TautoTree = {};

  constructor() { }

}

export type TautoTree = {
  name?: string,
  description?: string,
  image?: Blob,
  lat?: number,
  long?: number,
  walletAddress?: string

}