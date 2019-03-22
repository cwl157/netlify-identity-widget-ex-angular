import { Component } from '@angular/core';
import { NetlifyIdentityService } from './netlifyIdentity.service';

@Component({
  selector: 'cl-nav',
  templateUrl: './nav.component.html'
})
export class NavComponent {
  netlifyService: NetlifyIdentityService
  constructor(ns: NetlifyIdentityService) {
    this.netlifyService = ns;
  }

  openModal(): void {
    console.log("open modal");
    this.netlifyService.get().open();
  }

  logout(): void {
    console.log("Logout");
    this.netlifyService.get().logout();
  }
}
