import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { GlobalService } from './global.service';
import { TautotreeService } from './services/tautotree.service';

declare let ethereum: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit {

  constructor(private g: GlobalService, private tautoTree: TautotreeService) {}

  ngOnInit(): void {
    ethereum.request({ method: 'eth_requestAccounts' }).then((x: any) => {
      this.g.accounts = x;

    })
    
  }
  title = 'tautotree-client';
  @ViewChild('videoElement') videoElement!: ElementRef;  
  video!: HTMLVideoElement;

  ngAfterViewInit() {
    // this.video = this.videoElement.nativeElement as HTMLVideoElement;
    this.start();

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position)=>{
        this.tautoTree.treeInstance.lat = position.coords.latitude
        this.tautoTree.treeInstance.long = position.coords.longitude
        console.log(position)
      })
    } else {
      console.log("No permission")
    }
  }

  start() {
    // this.initCamera({ video: true, audio: false });
  }
   sound() {
    this.initCamera({ video: true, audio: true });
  }
  
  initCamera(config:any) {
    var browser = <any>navigator;

    browser.getUserMedia = (browser.getUserMedia ||
      browser.webkitGetUserMedia ||
      browser.mozGetUserMedia ||
      browser.msGetUserMedia);

    browser.mediaDevices.getUserMedia(config).then((stream: MediaStream) => {
      console.log(stream)
      if (this.video)
        // this.video.srcObject = stream
      // this.video.src = window.URL.createObjectURL(stream);
      this.video.play();
    });
  }

}
