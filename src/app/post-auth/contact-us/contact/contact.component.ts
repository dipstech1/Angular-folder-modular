import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styles: ['agm-map { height: 300px; /* height is required */ }'],
})
export class ContactComponent implements OnInit {

  latitude 
  longitude 
  mapType = 'satellite';
  zoom = 15;
  constructor() { }

  ngOnInit() {

    this.getCurrentLocation()

  }

  async getCurrentLocation() {
    let coords = await this.getPosition();
    console.log("CIrd", coords)
    this.latitude = coords['latitude'];
    this.longitude = coords['longitude'];
    
  }

  getPosition = () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition((position) => { 
        resolve(position.coords);
      }, (err) => {
        reject(err);
      });
    });
  }

}
