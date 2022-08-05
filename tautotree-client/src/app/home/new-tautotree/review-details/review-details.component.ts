import { AfterViewInit, Component, OnInit } from '@angular/core';
import { TautotreeService } from 'src/app/services/tautotree.service';

@Component({
  selector: 'app-review-details',
  templateUrl: './review-details.component.html',
  styleUrls: ['./review-details.component.css']
})
export class ReviewDetailsComponent implements OnInit, AfterViewInit {

  constructor(private tautoTree: TautotreeService) { }

  ngOnInit(): void {
    // this.tautoTree.currentState = 2;
  }

  ngAfterViewInit(): void {
    this.tautoTree.currentState = 3;
  }

}
