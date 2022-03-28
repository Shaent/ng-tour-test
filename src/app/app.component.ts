import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    pages: Page[] = [{
        name: 'Home',
        path: '',
        tourAnchor: 'anchor.1'
    }, {
        name: 'Module A',
        path: 'module-a',
        tourAnchor: 'anchor.2'
    }, {
        name: 'Module B',
        path: 'module-b',
        tourAnchor: 'anchor.3'
    }];

}

interface Page {
    name: string;
    path: string;
    tourAnchor: string;
}
