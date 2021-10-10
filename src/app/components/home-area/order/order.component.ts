import { Component, OnInit } from '@angular/core';
import { NotifyService } from 'src/app/services/notify.service';

// ng g c components/home-area/order

@Component({
    selector: 'app-order',
    templateUrl: './order.component.html',
    styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

    public tooltip = "Free Shipping!";
    public item = "";

    constructor(private notify: NotifyService) { }

    ngOnInit(): void {
    }

    public showHelp(args: MouseEvent): void { // args - event object 
        console.log(args);
        this.notify.error("Fill in the order form...");
        this.item = "";
    }

}
