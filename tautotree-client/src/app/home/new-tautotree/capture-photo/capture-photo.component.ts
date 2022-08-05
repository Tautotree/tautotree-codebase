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

  getLoadedData(event: any) {
    let fileReader = new FileReader()
    let file = event.srcElement.files[0];
    console.log(file.name)
    if (file && file.name) {
      this.tautoTree.treeInstance.name = file.name;
    }
    fileReader.readAsArrayBuffer(file) 
    fileReader.onload = () => {
      let blob = new Blob(fileReader.result? [fileReader.result]: [])
      if (blob) {
        console.log(blob);
        this.tautoTree.treeInstance.image = blob
      }
    } 
  }

}
