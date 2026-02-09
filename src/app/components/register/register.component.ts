import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule], 
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  onSubmit(form: any) {
    console.log('Form submitted:', form);
    if (form.valid) {
      console.log('Form values:', form.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
