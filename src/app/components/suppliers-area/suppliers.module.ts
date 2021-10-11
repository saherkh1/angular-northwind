import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellersComponent } from './sellers/sellers.component';
import { RouterModule, Routes } from '@angular/router';
import { WholesalersComponent } from './wholesalers/wholesalers.component';
import { RetailersComponent } from './retailers/retailers.component';

const routes: Routes = [
    {
        path: "", component: SellersComponent, children: [
            { path: "wholesalers", component: WholesalersComponent }, // /suppliers/wholesalers
            { path: "retailers", component: RetailersComponent }, // /suppliers/retailers
        ]
    },
    // { path: "/sellers", component: SellersComponent}, //the route is now /suppliers/sellers
];

@NgModule({
    declarations: [
        SellersComponent,
        WholesalersComponent,
        RetailersComponent
    ],
    imports: [
        RouterModule.forChild(routes),//now there exist a router with the routes 
        CommonModule
    ]
})
export class SuppliersModule { }
