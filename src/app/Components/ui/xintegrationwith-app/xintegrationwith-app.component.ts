import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-xintegrationwith-app',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './xintegrationwith-app.component.html',
  styleUrl: './xintegrationwith-app.component.scss'
})
export class XintegrationwithAppComponent {
 // List of menu items
 menuItems: string[] = [
  // 'Home',
  'All integrations',
  'Calendar',
  'CRM',
  'Video Meetings',
  'Collaboration',
  'Communication'
];

// Track the active tab index
activeTab: number = 0;

// Method to set the active tab
setActiveTab(index: number): void {
  this.activeTab = index;
  }

  ALL_INTEGRATIONS = 
  [
    {
      name: 'Google Calendar',
      description: 'Vijay@esarwa.com',
      image: 'ttps://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Google_Meet_icon_%282020%29.svg/120px-Google_Meet_icon_%282020%29.svg.png',
      buttonLabel: 'Disconnet',
      buttonLink: 'https://calendar.google.com/calendar/u/0/r'
    },
    {
      name: 'Microsoft Outlook',
      description: 'Link Microsoft Outlook for automatic meeting recording and transcription.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Microsoft_Office_Teams_%282018%E2%80%93present%29.svg',
      buttonLabel: 'Connect',
      buttonLink: '#'
    },
    {
      name: 'Apple Calendar',
      description: 'Link Apple Calendar for automatic meeting recording and transcription.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Zoom_logo_2020.svg',
      buttonLabel: 'Connect',
      buttonLink: ''
    },
    {
      name: 'Salesforce',
      description: 'Syncs transcripts and AI Notes directly to Salesforce customers.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Webex_logo.svg/120px-Webex_logo.svg.png',
      buttonLabel: 'Connect',
      buttonLink: '#'
    },
    {
      name: 'HubSpot',
      description: 'Syncs transcripts and AI Notes directly to HubSpot customers.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Webex_logo.svg/120px-Webex_logo.svg.png',
      buttonLabel: 'Connect',
      buttonLink: '#'
    },
    {
      name: 'Zendesk Sell',
      description: 'Syncs transcripts and AI Notes directly to Pipedrive customers.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Webex_logo.svg/120px-Webex_logo.svg.png',
      buttonLabel: 'Connect',
      buttonLink: '#'
    },
    {
      name: 'Zoho CRM',
      description: 'Syncs transcripts and AI Notes directly to Zoho CRM customers.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Webex_logo.svg/120px-Webex_logo.svg.png',
      buttonLabel: 'Connect',
      buttonLink: '#'
    },
    {
      name: 'Zoom',
      description: 'Automatically create Zoom meetings for scheduled events.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Webex_logo.svg/120px-Webex_logo.svg.png',
      buttonLabel: 'Connect',
      buttonLink: '#'
    },
    {
      name: 'Microsoft OneNote',
      description: 'Export transcripts and AI Notes to Google Docs for viewing and editing.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Webex_logo.svg/120px-Webex_logo.svg.png',
      buttonLabel: 'Connect',
      buttonLink: '#'
    },
    {
      name: 'Slack',
      description: 'Receive notification for comments. Sync AI Notes to Slack channels.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Webex_logo.svg/120px-Webex_logo.svg.png',
      buttonLabel: 'Connect',
      buttonLink: '#'
    },
    {
      name: 'Microsoft OneDrive',
      description: 'Export transcripts, AI Notes, audio/video to Microsoft OneDrive for storage.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Webex_logo.svg/120px-Webex_logo.svg.png',
      buttonLabel: 'Connect',
      buttonLink: '#'
    },
  ];


  CALENDAR = [
    {
      name: 'Google Calendar',
      description: 'milind@esarwa.com',
      image: 'ttps://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Google_Meet_icon_%282020%29.svg/120px-Google_Meet_icon_%282020%29.svg.png',
      buttonLabel: 'Disconnet',
      buttonLink: 'https://calendar.google.com/calendar/u/0/r'
    },
    {
      name: 'Microsoft Outlook',
      description: 'Link Microsoft Outlook for automatic meeting recording and transcription.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Microsoft_Office_Teams_%282018%E2%80%93present%29.svg',
      buttonLabel: 'Connect',
      buttonLink: '#'
    },
    {
      name: 'Apple Calendar',
      description: 'Link Apple Calendar for automatic meeting recording and transcription.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Zoom_logo_2020.svg',
      buttonLabel: 'Connect',
      buttonLink: ''
    },
  ];


  CRM = 
  [
    {
      name: 'Salesforce',
      description: 'Syncs transcripts and AI Notes directly to Salesforce customers.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Microsoft_Office_Teams_%282018%E2%80%93present%29.svg',
      buttonLabel: 'Connect',
      buttonLink: '#'
    },
    {
      name: 'HubSpot',
      description: 'Syncs transcripts and AI Notes directly to HubSpot customers.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Zoom_logo_2020.svg',
      buttonLabel: 'Connect',
      buttonLink: ''
    },
    {
      name: 'Pipedrive',
      description: 'Syncs transcripts and AI Notes directly to Pipedrive customers.',
      image: 'ttps://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Google_Meet_icon_%282020%29.svg/120px-Google_Meet_icon_%282020%29.svg.png',
      buttonLabel: 'Learn more',
      buttonLink: 'https://calendar.google.com/calendar/u/0/r'
    },
    {
      name: 'Zendesk Sell',
      description: 'Syncs transcripts and AI Notes directly to ZendeskSell customers.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Webex_logo.svg/120px-Webex_logo.svg.png',
      buttonLabel: 'Connect',
      buttonLink: '#'
    },
    {
      name: 'Zoho CRM',
      description: 'Syncs transcripts and AI Notes directly to Zoho CRM customers.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Webex_logo.svg/120px-Webex_logo.svg.png',
      buttonLabel: 'Connect',
      buttonLink: '#'
    }
  ];

  VIDEO_MEETINGS = [
    {
      name: 'Microsoft Teams',
      description: 'Add Notta Bot to record and transcribe Microsoft Teams meetings. Syncs All Notes as messages.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Microsoft_Office_Teams_%282018%E2%80%93present%29.svg',
      buttonLabel: 'Connect',
      buttonLink: '#'
    },
    {
      name: 'Zoom',
      description: 'Automatically create Zoom meetings for scheduled events.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Zoom_logo_2020.svg',
      buttonLabel: 'Connect',
      buttonLink: ''
    },
    {
      name: 'Google Meet',
      description: 'Install Notta extension and add Notta Bot to record and transcribe Google Meet.',
      image: 'ttps://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Google_Meet_icon_%282020%29.svg/120px-Google_Meet_icon_%282020%29.svg.png',
      buttonLabel: 'Learn more',
      buttonLink: 'https://calendar.google.com/calendar/u/0/r'
    },

    {
      name: 'Webex',
      description: 'Add Notta Bot to record and transcribe Webex meeting. Syncs All Notes as messages.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Webex_logo.svg/120px-Webex_logo.svg.png',
      buttonLabel: 'Connect',
      buttonLink: '#'
    }
  ];

  COLLABORATION = [
    {
      name: 'Notion',
      description: 'Export transcripts and AI Notes to Notion for viewing and editing.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Microsoft_Office_Teams_%282018%E2%80%93present%29.svg',
      buttonLabel: 'Connect',
      buttonLink: '#'
    },
    {
      name: 'Google Docs',
      description: 'Export transcripts and AI Notes to Google Docs for viewing and editing.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Zoom_logo_2020.svg',
      buttonLabel: 'Connect',
      buttonLink: ''
    },
    {
      name: 'Google Meet',
      description: 'Install Notta extension and add Notta Bot to record and transcribe Google Meet.',
      image: 'ttps://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Google_Meet_icon_%282020%29.svg/120px-Google_Meet_icon_%282020%29.svg.png',
      buttonLabel: 'Learn more',
      buttonLink: 'https://calendar.google.com/calendar/u/0/r'
    },
    {
      name: 'Microsoft OneNote',
      description: 'Export transcripts and AI Notes to Google Docs for viewing and editing.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Webex_logo.svg/120px-Webex_logo.svg.png',
      buttonLabel: 'Connect',
      buttonLink: '#'
    },
    {
      name: 'ClickUp',
      description: 'Export transcripts and AI Notes to ClickUp for viewing and editing.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Webex_logo.svg/120px-Webex_logo.svg.png',
      buttonLabel: 'Connect',
      buttonLink: '#'
    },
  ];

  COMMUNICATION = [
    {
      name: 'Slack',
      description: 'Receive notification for comments. Sync AI Notes to Slack channels.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Microsoft_Office_Teams_%282018%E2%80%93present%29.svg',
      buttonLabel: 'Connect',
      buttonLink: '#'
    },
    {
      name: 'Microsoft Teams',
      description: 'Add Notta Bot to record and transcribe Microsoft Teams meeting. Syncs AI Notes as messages.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Zoom_logo_2020.svg',
      buttonLabel: 'Connect',
      buttonLink: ''
    },
    {
      name: 'Webex',
      description: 'Add Notta Bot to record and transcribe Webex meeting. Syncs AI Notes as messages.',
      image: 'ttps://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Google_Meet_icon_%282020%29.svg/120px-Google_Meet_icon_%282020%29.svg.png',
      buttonLabel: 'Connect',
      buttonLink: ''
    },
  ];
}
