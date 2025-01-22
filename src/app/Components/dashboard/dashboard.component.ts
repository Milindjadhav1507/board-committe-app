import { Component, TemplateRef } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  providers: [NgbModalConfig, NgbModal],
})
export class DashboardComponent {
  constructor(private modalService: NgbModal, private fb: FormBuilder) {}
  openJoinMeeting(joinmeeting: TemplateRef<any>) {
    this.modalService.open(joinmeeting, {
      size: 'lg',
      backdrop: 'static',
      keyboard: false,
    });
  }
  openNewMeeting(newMeetingcontent: TemplateRef<any>) {
    this.modalService.open(newMeetingcontent, {
      size: 'xl',
      backdrop: 'static',
      keyboard: false,
    });
  }
  openNewmeetingdailog(dailogs: TemplateRef<any>) {
    this.modalService.open(dailogs, {
      size: 'lg',
      backdrop: 'static',
      keyboard: false,
    });
  }
  joinFromCalender(joincalender: TemplateRef<any>) {
    this.modalService.open(joincalender, {
      size: 'lg',
      backdrop: 'static',
      keyboard: false,
    });
  }
  openMeetingRoom(meetingroom: TemplateRef<any>) {
    this.modalService.open(meetingroom, {
      // size: 'xl',
      fullscreen: true,
      backdrop: 'static',
      keyboard: false,
    });
  }
}
