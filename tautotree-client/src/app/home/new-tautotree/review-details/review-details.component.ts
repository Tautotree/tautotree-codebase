import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TautotreeService } from 'src/app/services/tautotree.service';

@Component({
  selector: 'app-review-details',
  templateUrl: './review-details.component.html',
  styleUrls: ['./review-details.component.css']
})
export class ReviewDetailsComponent implements OnInit, AfterViewInit {

  @ViewChild('image') image!: ElementRef

  constructor(public tautoTree: TautotreeService) { 
    this.tautoTree.currentState = 2;
    console.log(tautoTree.treeInstance)

    
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
      this.tautoTree.convertBlobToUrl(this.tautoTree.treeInstance.image, this.image)
  }

}
