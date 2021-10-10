import { Injectable } from '@angular/core';
import {  CanActivate,  Router } from '@angular/router';
import store from '../redux/Store';
import { NotifyService } from './notify.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private notify: NotifyService,private router: Router) { }
    canActivate(): boolean {
        if(store.getState().authState.user) return true;
        this.notify.error("you are not logged-in")
        this.router.navigateByUrl("/login");
        return false;
    }


}
