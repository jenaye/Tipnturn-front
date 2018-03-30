import { Injectable, NgZone } from '@angular/core';
import { GoogleMapsAPIWrapper } from '@agm/core';
import { MapsAPILoader } from '@agm/core';
import { Observable, Observer } from 'rxjs';
import {environment} from "../../environments/environment";

declare var google: any;
@Injectable()
export class MapService extends GoogleMapsAPIWrapper {
  

  constructor(private __loader: MapsAPILoader, private __zone: NgZone) { 
    super(__loader, __zone);
    __loader.load().then(() => {
    });
  }
    getData(address: string) {
      let geocoder = new google.maps.Geocoder();
      return Observable.create(observer => {
          geocoder.geocode( { 'address': address}, function(results, status) {
              if (status == google.maps.GeocoderStatus.OK) {
                  observer.next(results[0].geometry.location);
                  observer.complete();                    
              } else {
                  console.log('Error - ', results, ' & Status - ', status);
                  observer.next({});
                  observer.complete();
              }
          });
      })
  }

}
