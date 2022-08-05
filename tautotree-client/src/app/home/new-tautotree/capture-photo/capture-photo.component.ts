import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TautotreeService } from 'src/app/services/tautotree.service';

@Component({
  selector: 'app-capture-photo',
  templateUrl: './capture-photo.component.html',
  styleUrls: ['./capture-photo.component.css']
})
export class CapturePhotoComponent implements OnInit, AfterViewInit {

  @ViewChild('videoElement') videoElement!: ElementRef;  
  video!: HTMLVideoElement;

  constructor(private tautoTree: TautotreeService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
      this.video = this.videoElement.nativeElement;
      this.tautoTree.currentState = 0;
  }

}
