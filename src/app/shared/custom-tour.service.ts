import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TourService } from 'ngx-ui-tour-md-menu';

@Injectable({
  providedIn: 'root'
})
export class CustomTourService extends TourService {

  constructor(router: Router) {
    super(router)
  }

  test() {
    console.log('Test');
  }
}
