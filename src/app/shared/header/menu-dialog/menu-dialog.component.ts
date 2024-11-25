import { NgClass, NgStyle } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { HeaderComponent } from '../header.component';

@Component({
  selector: 'app-menu-dialog',
  standalone: true,
  imports: [NgClass, NgStyle, TranslatePipe, HeaderComponent],
  templateUrl: './menu-dialog.component.html',
  styleUrl: './menu-dialog.component.scss'
})
export class MenuDialogComponent {
  @Output() close = new EventEmitter<void>();

  defaultLanguage: string = 'de';
  isGerman:boolean = false;
  about:boolean = false;
  skills:boolean = false;
  projects:boolean = false;

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang(this.defaultLanguage)
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

  toggleLanguage() {
    if (this.isGerman) {
      this.isGerman = false;
      this.translate.use('en');
      this.saveLanguageToLocalStorage('en');
    } else {
      this.isGerman = true;
      this.translate.use('de');
      this.saveLanguageToLocalStorage('de');
    }
  }

  private saveLanguageToLocalStorage(language: string): void {
    localStorage.setItem('selectedLanguage', language);
  }
}
