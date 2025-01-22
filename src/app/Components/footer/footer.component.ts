import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  navShow: boolean | undefined;
  constructor(private router: Router) {
    this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) {
        if (ev.urlAfterRedirects === '/login') {
          console.log('footer off');
          this.navShow = true;
        } else {
          console.log('footer on');
          this.navShow = false;
        }
      }
    });
  }
}
