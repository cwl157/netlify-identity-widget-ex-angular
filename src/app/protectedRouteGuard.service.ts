import { NetlifyIdentityService } from './netlifyIdentity.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
    providedIn: 'root',
  })

export class ProtectedRouteGuard implements CanActivate {
  constructor(private service: NetlifyIdentityService) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): | boolean {
    if (this.service.get().currentUser() !== null) {
        return true;
    }

    alert("You must be authenticated to view this page");
    return false;
  }
}