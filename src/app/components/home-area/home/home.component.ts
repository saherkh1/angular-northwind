import { Component } from '@angular/core';

// ng g c components/home-area/home

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {

    public tip: number;
    public displayTip(value: number) {
        this.tip = value;
    }

}
