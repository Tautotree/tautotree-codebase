import { AfterViewInit, Component, OnInit } from '@angular/core';
import { TautotreeService } from 'src/app/services/tautotree.service';

@Component({
  selector: 'app-view-photo',
  templateUrl: './view-photo.component.html',
  styleUrls: ['./view-photo.component.css']
})
export class ViewPhotoComponent implements OnInit, AfterViewInit {

  constructor(private tautoTree: TautotreeService) { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    this.tautoTree.currentState = 2;
  }

}
