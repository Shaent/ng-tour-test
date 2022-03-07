import { CustomTourService } from './../../shared/custom-tour.service';
import {Component, OnInit} from '@angular/core';
import {TourService} from 'ngx-ui-tour-md-menu';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

    constructor(
        private readonly tourService: TourService, // using this isntead of the customTourService works
        private customTourService: CustomTourService, // using this custom service that extends the TourService does not work
    ) {}

    ngOnInit() {
        this.customTourService.initialize([{
            anchorId: 'app-home',
            content: 'This is a step from the eager loaded app module in the home component',
            title: 'Home Component',
            route: ''
        }, {
            anchorId: 'module-a',
            content: 'This is a step from the lazy loaded module-a module in the module-a component',
            title: 'Module-a Component',
            route: 'module-a'
        }, {
            anchorId: 'module-b',
            content: 'This is a step from the lazy loaded module-b module in the module-b component',
            title: 'Module-b Component',
            route: 'module-b'
        }]);

        this.customTourService.start();
        this.customTourService.test();
    }

}
