import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';

const componentType: any = "Widget";
const isWebcomponent = false;
if(isWebcomponent){
    customElements.whenDefined("leaflet-new2").then(_=>{
        // readyElement();
    })
}else{
    // readyElement();
}

function readyElement(){
    const element = document.createElement('leaflet-new2');
    element.id="el-leaflet-new2";
    document.body.appendChild(element);
    setInnerText(element);
    setAttr(element);
}
function setInnerText(element: any){
    const text = "";
    if(text){
        element.innerText = parseDataAttribute({text:text}).text;
    }
}
function setAttr(element: any){
    const attributes = {"name":"\"Rahman\""};
    const parsed = parseDataAttribute(attributes);
    Object.keys(parsed).forEach(attr=>{
        if(componentType=== 'Native'){
            element.setAttribute(attr,parsed[attr]);
        }else{
            element[attr] = parsed[attr];
        }
    })
}
function parseDataAttribute(attributes: any){
    if(attributes === null || attributes === undefined){
        return attributes;
    }
    else if(typeof attributes === 'object'){
        Object.keys(attributes).forEach(attr => {
            attributes[attr] = parseDataAttribute(attributes[attr]);
        })
    }else{
        try{
            return JSON.parse(attributes);
        }catch{}
    }
    return attributes;
}

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, AfterViewInit {

  constructor(private el: ElementRef) { }
  ngAfterViewInit(): void {
    // customElements.whenDefined("leaflet-new2").then(_=>{
    //   readyElement();
    // });
    const element = document.createElement('leaflet-new2');
    element.style.width = '100%';
    element.style.height = '100%';
    element.style.display = 'block';
    
    element.id="el-leaflet-new2";
    this.el.nativeElement.querySelector('#map').appendChild(element);
    setInnerText(element);
    setAttr(element);
  }

  ngOnInit(): void {
  }

}
