import { NgStyle } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';
import { AnimationService } from '../../services/animation.service';
import { Router } from '@angular/router';
import { GetLanguageService } from '../../services/get-language.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, TranslatePipe, NgStyle],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent extends AnimationService {

  http = inject(HttpClient)
  mailTest = true;
  pricacyWarning:boolean = false;
  validate:boolean = false;
  checkValidation: any;
  sendSuccesseful:boolean = false;
  language: "en" | "de" = "en";

  contactData = {
    name: "",
    email: "",
    message: "",
    privacy: false,
  }

  constructor(
      elRef: ElementRef,
      private lang: GetLanguageService,
      private router: Router,
    ) {
      super(elRef);
    }

  onSubmit(ngForm: NgForm) {
    if (ngForm.valid  && ngForm.form.valid && ngForm.submitted && this.contactData.privacy) {
      this.sendMail(ngForm)
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      ngForm.resetForm();
    }
  }

  post = {
    endPoint: 'https://marcelzalec.at/sendMail.php',
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
        complete: () => {
          // console.info('send post complete');
          this.sendSuccesseful = true;
          setTimeout(()=> {
            this.sendSuccesseful = false;
          })
        },
      });
      window.clearInterval(this.checkValidation)
  }

  resetContactData() {
    this.contactData = {
      name: "",
      email: "",
      message: "",
      privacy: false,
    } 
  }

  enableButton(ngForm: NgForm) {
    this.checkValidation = setInterval(() => {
      if (ngForm.valid  && ngForm.form.valid && this.contactData.privacy) {
        this.validate = true;
      } else {
        this.validate = false;
      }
    },1900)
  }

  getHref() {
    this.lang.checkLanguageInLocalstorge();
    this.setlanguage();
    if (this.language === "en") {
      this.router.navigateByUrl("/privacy/en");
    } else {
      this.router.navigateByUrl("/privacy");
    }
  }

  setlanguage() {
    this.language = this.lang.activeLanguage;
  }
}
