import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, GuardResult, MaybeAsync, RouterStateSnapshot } from '@angular/router';

export interface IDeactivate{
  canExit: () => boolean;
}
@Injectable({
  providedIn: 'root'
})
export class AppDeactivateGuardService implements CanDeactivate<IDeactivate> {
  canDeactivate(component: IDeactivate, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): boolean {
    
    return component.canExit ? component.canExit() : true;
  }
  
}
