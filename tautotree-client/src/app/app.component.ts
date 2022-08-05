import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'tautotree-client';
  @ViewChild('videoElement') videoElement!: ElementRef;  
  video!: HTMLVideoElement;

  ngAfterViewInit() {
    this.video = this.videoElement.nativeElement as HTMLVideoElement;
    this.start();

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position)=>{
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

  // capture() {
  //   this.drawImageToCanvas(this.videoElement.nativeElement);
  //   this.captures.push(this.canvas.nativeElement.toDataURL("image/png"));
  //   this.isCaptured = true;
  // }

  // drawImageToCanvas(image: any) {
  //   this.canvas.nativeElement
  //     .getContext("2d")
  //     .drawImage(image, 0, 0, this.WIDTH, this.HEIGHT);
  // }



}
