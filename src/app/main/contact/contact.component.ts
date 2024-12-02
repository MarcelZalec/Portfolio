import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, TranslatePipe],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  http = inject(HttpClient)
  mailTest = true;
  pricacyWarning:boolean = false;

  contactData = {
    name: "",
    email: "",
    message: "",
    privacy: false,
  }  

  onSubmit(ngForm: NgForm) {
    if (ngForm.valid  && ngForm.form.valid && ngForm.submitted && this.contactData.privacy) {
      this.sendMail(ngForm)
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      ngForm.resetForm();
    }
  }

  post = {
    endPoint: 'http://marcelzalec.at/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  sendMail(ngForm: NgForm) {    
    this.http.post(this.post.endPoint, this.post.body(this.contactData))
      .subscribe({
        next: (response) => {
          ngForm.resetForm();
          this.resetContactData()
        },
        error: (error) => {
          console.error(error);
        },
        complete: () => console.info('send post complete'),
      });
  }

  resetContactData() {
    this.contactData = {
      name: "",
      email: "",
      message: "",
      privacy: false,
    } 
  }
}
