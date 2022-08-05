import { AfterContentInit, AfterViewInit, Component, OnInit } from '@angular/core';
import { TautotreeService } from 'src/app/services/tautotree.service';

@Component({
  selector: 'app-view-photo',
  templateUrl: './view-photo.component.html',
  styleUrls: ['./view-photo.component.css']
})
export class ViewPhotoComponent implements OnInit {

  constructor(public tautoTree: TautotreeService) {
    this.tautoTree.currentState = 1;
  }

  ngOnInit(): void {

  }

  convertBlobToUrl(obj: any) {
    console.log(obj)
    var urlCreator = window.URL || window.webkitURL;
    var url = urlCreator.createObjectURL(obj)
    console.log(url)
    return url;
  }

}
