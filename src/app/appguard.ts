import { Injectable } from '@angular/core';
import { AppService } from './app-service';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class Appguard implements CanActivate, CanActivateChild {
  constructor(private service:AppService,private router:Router)
  {

  }
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(childRoute, state);
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean
  {
    let result = this.service.getAuthDetails();
    if (result == "true") {
      return true;
    }
    else {
      this.router.navigate(['/']);
      return false;
    }
  }
  
}
