import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from 'src/app/global.service';

@Component({
  selector: 'app-my-trees',
  templateUrl: './my-trees.component.html',
  styleUrls: ['./my-trees.component.css']
})
export class MyTreesComponent implements OnInit {

  options = [
    { label: '📋 List', value: 'List'},
    { label: '🗺 Map', value: 'Map' }
  ];

  constructor(public g: GlobalService, public route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
