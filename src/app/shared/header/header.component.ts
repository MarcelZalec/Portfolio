import { CommonModule, NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import {TranslateService, TranslateModule, TranslatePipe, TranslateDirective} from '@ngx-translate/core';
import { MenuDialogComponent } from './menu-dialog/menu-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule ,NgStyle, NgClass , TranslateModule, TranslatePipe, TranslateDirective, MenuDialogComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isGerman:boolean = false;
  about:boolean = false;
  skills:boolean = false;
  projects:boolean = false;
  dialogOpen:boolean = false;

  constructor(private translate: TranslateService, private router: Router) {}


  ngOnInit(): void {
    this.loadLanguageFromLocalStorage();
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

  checkURL2() {
      if (this.router.url.match("privacy")) {
        if (!this.isGerman) {
          this.router.navigateByUrl("/privacy/en");
        } else {
          this.router.navigateByUrl("/privacy");
        }
      } else if(this.router.url.match("imprint")) {
        if (!this.isGerman) {
          this.router.navigateByUrl("/imprint/en")
        } else {
          this.router.navigateByUrl("/imprint")
        }
      } else {
        this.router.navigateByUrl("")
      }
  }
}
