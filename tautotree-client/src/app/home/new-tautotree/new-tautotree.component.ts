import { Component, OnInit } from '@angular/core';
import { TautotreeService } from 'src/app/services/tautotree.service';

@Component({
  selector: 'app-new-tautotree',
  templateUrl: './new-tautotree.component.html',
  styleUrls: ['./new-tautotree.component.css']
})
export class NewTautotreeComponent implements OnInit {

  constructor(public tautoTree: TautotreeService) { }

  ngOnInit(): void {
  }

}
