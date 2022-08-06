import { AfterViewInit, Component, ElementRef, Input, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

const componentType: any = "Widget";

declare let L: any;

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

  position: any = { lat: '', long: ''} 

  @Input() locations = [
    ["LOCATION_1", 11.8166, 122.0942],
    ["LOCATION_2", 11.9804, 121.9189],
    ["LOCATION_3", 10.7202, 122.5621],
    ["LOCATION_4", 11.3889, 122.6277],
    ["LOCATION_5", 10.5929, 122.6325]
  ];

  constructor(private el: ElementRef, public global: GlobalService) { 
    this.global.trees.forEach((element: any) => {
        this.locations.push([
          element.name, element.lat, element.long
        ])
    });
    this.locations = global.trees.map((x: any) => ([
      x.rawMetadata.name, 
      x.rawMetadata.latitude, 
      x.rawMetadata.longitude
    ]))
  }
  ngAfterViewInit(): void {
    // customElements.whenDefined("leaflet-new2").then(_=>{
    //   readyElement();
    // });
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position)=>{
        console.log('position', position);
        this.position.lat = position.coords.latitude
        this.position.long = position.coords.longitude
      })
    } else {
      console.log("No permission")
    }
    const element: any = document.createElement('leaflet-new2');
    element.style.width = '100%';
    element.style.height = '100%';
    element.style.display = 'block';
    
    element.id="el-leaflet-new2";
    this.el.nativeElement.querySelector('#map').appendChild(element);
    setInnerText(element);
    setAttr(element);

    setTimeout(() => {
      for (var i = 0; i < this.locations.length; i++) {
        let marker = new L.marker([this.locations[i][1], this.locations[i][2]])
          .bindPopup(this.locations[i][0])
          .addTo((element as any)._map);
      }

      element._map.panTo(new L.LatLng(this.locations[0][1], this.locations[0][2]));
      element._map.setZoom(9)
    }, 500)
    
  }

  ngOnInit(): void {
  }

}
