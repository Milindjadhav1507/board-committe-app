import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-meeting-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './meeting-list.component.html',
  styleUrl: './meeting-list.component.scss'
})
export class MeetingListComponent {
  categories: string[] = ['All', 'Board Meetings', 'Project Reviews'];
  selectedCategory: string = 'All';

  meetings = [
    {
      id: 1,
      title: 'Board Meeting BQ344',
      time: 'Today, 2:00 PM',
      description: 'Discussion of Board assignments',
      participants: 8,
      category: 'Board Meetings',
    },
    {
      id: 2,
      title: 'Project UUA&&& Meeting',
      time: 'Tomorrow, 10:00 AM',
      description: 'Project progress review with the client',
      participants: 5,
      category: 'Project Reviews',
    },
    {
      id: 3,
      title: 'Quarterly Strategy Session',
      time: 'Friday, 11:00 AM',
      description: 'Planning strategy for Q2',
      participants: 12,
      category: 'Board Meetings',
    },
    {
      id: 4,
      title: 'Client Feedback Meeting',
      time: 'Next Monday, 3:00 PM',
      description: 'Gathering feedback from key clients',
      participants: 7,
      category: 'Project Reviews',
    },
  ];

  get filteredMeetings() {
    if (this.selectedCategory === 'All') {
      return this.meetings;
    }
    return this.meetings.filter(meeting => meeting.category === this.selectedCategory);
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
  }
}
