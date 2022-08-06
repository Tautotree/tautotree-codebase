import { HttpClient } from '@angular/common/http';
import { AfterContentInit, AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TautotreeService } from 'src/app/services/tautotree.service';

declare let tmImage: any;
@Component({
  selector: 'app-view-photo',
  templateUrl: './view-photo.component.html',
  styleUrls: ['./view-photo.component.css']
})
export class ViewPhotoComponent implements OnInit, AfterViewInit {

  @ViewChild('image') image!: ElementRef;
  @ViewChild('button') button!: ElementRef
  // metaData: any;
  // model: any;
  model: any
  maxPredictions: any;
  treePercent: number = 0;
  loading = false;

  constructor(public tautoTree: TautotreeService) {

    tmImage.load("./assets/model.json", "./assets/metadata.json").then((model : any) => {
      this.model = model;
      let maxPredictions = model.getTotalClasses();
      this.maxPredictions = maxPredictions
      console.log('maxPredictions', maxPredictions, model)
      this.predict()
    })
    
    
    this.tautoTree.currentState = 1;

  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
      this.convertBlobToUrl(this.tautoTree.treeInstance.image)
  }

  updateDesc(event: any) {
    console.log(event);
    this.tautoTree.treeInstance.description = (event.srcElement as HTMLTextAreaElement).innerText;
  }

  convertBlobToUrl(obj: any) {
    console.log(obj)
    var urlCreator = window.URL || window.webkitURL;
    var url = urlCreator.createObjectURL(obj)
    console.log(url)
    let fileReader = new FileReader()
    fileReader.readAsDataURL(obj)

    fileReader.onload = () => {
      (this.image.nativeElement as HTMLImageElement).src = fileReader.result as string
    }
    return url;
  }

  async predict() {
    this.loading = true
    const prediction = await this.model.predict(this.image.nativeElement);

    for (let i = 0; i < this.maxPredictions; i++) {
        if (prediction[i].className == "Trees") {
            this.treePercent=prediction[i].probability.toFixed(2);    
            console.log(this.treePercent)
        }
    }
    this.loading = false;

    // if (this.treePercent < 0.5) {
    //   (this.button.nativeElement as HTMLButtonElement).disabled = true;
    //   console.log("Disabled button");
    //   // NEED TO WORK ON THE DISABLE BUTTON
    // }
  }

}
