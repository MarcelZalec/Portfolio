import { CommonModule, NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import {TranslateService, TranslateModule, TranslatePipe, TranslateDirective} from '@ngx-translate/core';
import { MenuDialogComponent } from './menu-dialog/menu-dialog.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule ,NgStyle, NgClass , TranslateModule, TranslatePipe, TranslateDirective, MenuDialogComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  defaultLanguage: string = 'en';
  isGerman:boolean = false;
  about:boolean = false;
  skills:boolean = false;
  projects:boolean = false;
  dialogOpen:boolean = false;

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang(this.defaultLanguage)
  }


  // ngOnInit(): void {
  //   this.loadLanguageFromLocalStorage();
  // }

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

  private loadLanguageFromLocalStorage(): void {
    const storedLanguage = localStorage.getItem('selectedLanguage');
    if (storedLanguage) {
      this.translate.use(storedLanguage);
      if (storedLanguage === 'de') {
        this.isGerman = true;
      }
    } else {
      this.translate.use('en');
      this.isGerman = false;
    }
  }

  private saveLanguageToLocalStorage(language: string): void {
    localStorage.setItem('selectedLanguage', language);
  }

  openMenu() {
    this.dialogOpen = true;
  }

  closeMenu() {
    this.dialogOpen = false;
  }
}
