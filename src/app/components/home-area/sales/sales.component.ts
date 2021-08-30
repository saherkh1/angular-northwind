import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-sales',
    templateUrl: './sales.component.html',
    styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
    public styling = { cool: true, large: true, bg: false };
    public desserts = [{id:1, name:"Ice Cream"},{id:2, name:"Pavlova"},{id:3, name:"Eclair"},{id:4, name:"kenaffa"}]
    constructor() { }
    
    ngOnInit(): void {
    }


}
