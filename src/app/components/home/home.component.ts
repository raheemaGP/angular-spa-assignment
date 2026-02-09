import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
})
export class HomeComponent {
  title: string = 'Angular SPA Assignment';
  studentCount: number = 25;
  isActive: boolean = true;
}
