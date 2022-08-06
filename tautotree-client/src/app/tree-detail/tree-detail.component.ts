import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-tree-detail',
  templateUrl: './tree-detail.component.html',
  styleUrls: ['./tree-detail.component.css']
})
export class TreeDetailComponent implements OnInit {

  id: number = -1

  pf = parseInt

  constructor(private route: ActivatedRoute, public global: GlobalService) { 
    route.paramMap.subscribe((value)=>{
      if (value.get('id'))
        this.id = parseInt(value.get('id') as any);
    })
  }

  ngOnInit(): void {
  }

}
