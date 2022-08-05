import { AfterContentInit, AfterViewInit, Component, OnInit } from '@angular/core';
import { TautotreeService } from 'src/app/services/tautotree.service';

@Component({
  selector: 'app-view-photo',
  templateUrl: './view-photo.component.html',
  styleUrls: ['./view-photo.component.css']
})
export class ViewPhotoComponent implements OnInit {

  constructor(private tautoTree: TautotreeService) {
    this.tautoTree.currentState = 1;
  }

  ngOnInit(): void {

  }

}
