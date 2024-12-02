import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslatePipe],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})
export class ReferencesComponent {

  currentMessage:number = 0;
  autor:string = "";
  comment:string = "";
  status:string = "";
  sayAbout = [
    {
      comment: "testimonials.t1.text",
      autor: "testimonials.t1.name",
      status:"testimonials.t1.status",
    },
    {
      comment: "testimonials.t2.text",
      autor: "testimonials.t2.name",
      status:"testimonials.t2.status",
    },
    {
      comment: "testimonials.t3.text",
      autor: "testimonials.t3.name",
      status:"testimonials.t3.status",
    },
  ];

  sayAboutlength:any = this.sayAbout.length;

  constructor() {
    this.activMessage();
  }

  forward() {
    this.currentMessage = (this.currentMessage + 1) % this.sayAboutlength;
    this.activMessage()
  }

  backward() {
    this.currentMessage = (this.currentMessage - 1 + this.sayAboutlength ) % this.sayAbout.length;
    this.activMessage()
  }

  activMessage() {
    this.autor = this.sayAbout[this.currentMessage].autor;
    this.comment = this.sayAbout[this.currentMessage].comment;
    this.status = this.sayAbout[this.currentMessage].status;
  }
}
