import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/global.service';

@Component({
  selector: 'app-trees-list',
  templateUrl: './trees-list.component.html',
  styleUrls: ['./trees-list.component.css']
})
export class TreesListComponent implements OnInit {

  constructor(public g: GlobalService) { }

  trees: any = [];

  ngOnInit(): void {
    
  }

}
