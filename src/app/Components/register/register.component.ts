import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,CalendarModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  date: Date[] | undefined;
}
