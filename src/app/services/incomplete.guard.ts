import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class IncompleteGuard implements CanDeactivate<unknown> {
    public static canLeave: boolean = true;
    canDeactivate(
        component: unknown,
        currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot,
        nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        if (!IncompleteGuard.canLeave){
            IncompleteGuard.canLeave = window.confirm("Sure you want to leave without submiting?");
        }
        return IncompleteGuard.canLeave;
    }

}
