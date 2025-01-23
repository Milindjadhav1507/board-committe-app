import { CommonModule } from '@angular/common';
import { Component, TemplateRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';  
interface Person {
  name: string;
}
interface Guest {
  firstName: string;
  lastName: string;
  email: string;
}

@Component({
  selector: 'app-xsettings',
  standalone: true,
  imports: [CommonModule,NgbAccordionModule,FormsModule ],
  templateUrl: './xsettings.component.html',
  styleUrl: './xsettings.component.scss'
})
export class XsettingsComponent {
  activeTab: string = 'calendar';
  constructor(private modalService: NgbModal) {}

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }


  openmeetigns(meets: TemplateRef<any>) {
    this.modalService.open(meets, {size: 'xl',backdrop: 'static',keyboard: false});
  }

  people: Person[] = [ { name: 'milind jadhav' }];
  removedPeople: Person[] = [];

   addRemovedPerson(person: Person) {
      this.removedPeople.push(person);
     this.people = this.people.filter(p => p.name !== person.name)
    }

 addPersonBack(person: Person) {
  this.people.push(person)
    this.removedPeople = this.removedPeople.filter(p => p.name !== person.name);
   }



   firstName: string = '';
   lastName: string = '';
   email: string = '';
   guests: Guest[] = [];
   firstNameError:string = '';
    addGuest() {
     if(!this.firstName.trim()){
       this.firstNameError = 'The first name field is required';
       return;
     } else {
      this.firstNameError = '';
     }
        const guest: Guest = {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email
        };
        this.guests.push(guest);
        this.firstName = '';
        this.lastName = '';
       this.email = '';
    }
}
