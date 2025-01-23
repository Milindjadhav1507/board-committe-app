import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';


import {  inject, TemplateRef, ViewEncapsulation } from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
	encapsulation: ViewEncapsulation.None,
})
export class NavbarComponent {
  navShow: boolean | undefined;
  private offcanvasService = inject(NgbOffcanvas);
  constructor(private router: Router) {
    this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) {
        if (ev.urlAfterRedirects === '/login') {
          console.log('navbar off');
          this.navShow = true;
        } else {
          console.log('navbar on');
          this.navShow = false;
        }
      }
    });
  }

  opensettings(setting: TemplateRef<any>) {
		this.offcanvasService.open(setting, { position: 'end' });
	}
// Track the active tab index
activeTab: number = 0;

// Method to set the active tab
setActiveTab(index: number): void {
  this.activeTab = index;
}

// List of menu items
menuItems: string[] = [
  // 'Home',
  'Task',
  'Polls',
  'Meetings',
  'Peoples',
  // 'Collaboration',
  // 'Communication',
];



}
