import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TautotreeService } from 'src/app/services/tautotree.service';

@Component({
  selector: 'app-capture-photo',
  templateUrl: './capture-photo.component.html',
  styleUrls: ['./capture-photo.component.css']
})
export class CapturePhotoComponent implements OnInit {

  @ViewChild('videoElement') videoElement!: ElementRef;  

  constructor(private tautoTree: TautotreeService) {
    this.tautoTree.currentState = 0;
  }

  ngOnInit(): void {
  }

}
