import { NgClass, NgStyle } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-menu-dialog',
  standalone: true,
  imports: [NgClass, NgStyle, TranslatePipe],
  templateUrl: './menu-dialog.component.html',
  styleUrl: './menu-dialog.component.scss'
})
export class MenuDialogComponent {
  @Output() close = new EventEmitter<void>();

  defaultLanguage: string = 'en';
  isGerman:boolean = false;
  about:boolean = false;
  skills:boolean = false;
  projects:boolean = false;

  constructor() {

  }

  onClose() {
    this.close.emit();
  }

  mouseover(e: string) {
    e === 'about' ? (this.about = true) : null;
    e === 'skills' ? (this.skills = true) : null;
    e === 'projects' ? (this.projects = true) : null;
  }

  mouseout(e: string) {
    e === 'about' ? (this.about = false) : null;
    e === 'skills' ? (this.skills = false) : null;
    e === 'projects' ? (this.projects = false) : null;
  }
}
