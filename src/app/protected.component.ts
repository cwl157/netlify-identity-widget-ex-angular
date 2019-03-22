import { Component } from '@angular/core';
import { NetlifyIdentityService } from './netlifyIdentity.service';

@Component({
  selector: 'cl-protected',
  templateUrl: './protected.component.html'
})
export class ProtectedComponent {
  constructor(private ns: NetlifyIdentityService) {

  }
}
