import { CalcService } from './../../../services/calc.service';
import { Component, OnInit } from '@angular/core';
import { NotifyService } from 'src/app/services/notify.service';

@Component({
    selector: 'app-pricing',
    templateUrl: './pricing.component.html',
    styleUrls: ['./pricing.component.css'],
    //providers:[CalcService] //create calc service obj only in this component scope 
    //it will be added in the module scope (app-modules) 
    //so we can use it in all the components 
})
export class PricingComponent {

    private myCalc;

    constructor(private notify: NotifyService,calc: CalcService) {
        //calc is now ready to use because
        //angular injects the object
        this.myCalc = calc;
     }
    public showSummary(): void {
        const arr = [10, 20, 30, 40];

        const sum = this.myCalc.getSum(arr);

        this.notify.success("Sum: " + sum);
    }

}
