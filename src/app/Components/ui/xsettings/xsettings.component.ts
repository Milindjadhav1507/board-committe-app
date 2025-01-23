import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-xsettings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './xsettings.component.html',
  styleUrl: './xsettings.component.scss',
})
export class XsettingsComponent {
  // Track the active tab index
  activeTab: number = 0;

  // Method to set the active tab
  setActiveTab(index: number): void {
    this.activeTab = index;
  }

  // List of menu items
  menuItems: string[] = [
    // 'Home',
    'All integrations',
    'Calendar',
    'CRM',
    'Video Meetings',
    'Collaboration',
    'Communication',
  ];
}
