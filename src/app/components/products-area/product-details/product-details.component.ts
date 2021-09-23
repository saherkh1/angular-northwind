import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

    //dependency injection
    constructor(private myActivatedRout: ActivatedRoute) { }

    ngOnInit(): void {
        const id = this.myActivatedRout.snapshot.params.id;
        console.log(id)
    }

}
