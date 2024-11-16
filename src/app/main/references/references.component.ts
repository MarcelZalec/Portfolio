import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})
export class ReferencesComponent {

  i:number = 0;
  currentMessage:number = this.i;
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

  renderHtml(index:number) {
    let item = this.sayAbout[index];
    // console.log('renderHTML', item.comment);
    console.log('renderHTML', item.autor , index);
    return /*html*/`
      <div class="border-box">
        <div class="border-frame">
          <span>${item.comment}</span>
          <div>
            <div class="line"></div>
            <span>${item.autor}</span>
          </div>
        </div>
      </div>
    `;
  }


  forward(index:number) {
    this.i++;
    if (index == this.sayAbout.length -1) {
      this.i = 0
    }
    // console.log("forward" ,index);
    this.renderHtml(index);
  }

  backward(index:number) {
    this.i--;
    if (index === 0) {
      this.i = this.sayAbout.length -1;
    }
    // console.log("backward", index);
    this.renderHtml(index);
  }
}
