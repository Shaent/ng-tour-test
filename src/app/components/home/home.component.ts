import {Component, OnInit} from '@angular/core';
import {TourService} from 'ngx-ui-tour-md-menu';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

    constructor(
        private tourService: TourService,
    ) {}

    ngOnInit() {
        this.tourService.initialize([{
            anchorId: 'anchor.1',
            content: 'This is a step from the eager loaded app module in the home component',
            title: 'Home Component',
            route: ''
        }, {
            anchorId: 'anchor.2',
            content: 'This is a step from the lazy loaded module-a module in the module-a component',
            title: 'Module-a Component',
            route: 'module-a'
        }, {
            anchorId: 'anchor.3',
            content: 'This is a step from the lazy loaded module-b module in the module-b component',
            title: 'Module-b Component',
            route: 'module-b'
        }]);


        this.tourService.initialize$.subscribe(data => console.log(data));
        this.tourService.start();
    }

}
