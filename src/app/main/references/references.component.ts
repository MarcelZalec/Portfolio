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
  sayAbout = [
    {
      comment: "Lukas has proven to be a reliable group partner. His technical skills and proactive approach were crucial to the success of our project.",
      autor: "H.Janisch - Team Partner",
    },
    {
      comment: "Peters here",
      autor: "H.Peters - Team Partner",
    },
    {
      comment: "Tesssssssst",
      autor: "H.Buchas - Team Partner",
    },
  ];

  constructor() {
    this.activMessage();
  }

  forward() {
    this.currentMessage = (this.currentMessage + 1) % this.sayAbout.length;
    this.activMessage()
  }

  backward() {
    this.currentMessage = (this.currentMessage - 1 + this.sayAbout.length ) % this.sayAbout.length;
    this.activMessage()
  }

  activMessage() {
    this.autor = this.sayAbout[this.currentMessage].autor;
    this.comment = this.sayAbout[this.currentMessage].comment;
  }
}
