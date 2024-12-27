import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetLanguageService {
  activeLanguage: any = '';

  checkLanguageInLocalstorge() {
    this.activeLanguage = localStorage.getItem("selectedLanguage")
  }

  constructor() {
    this.checkLanguageInLocalstorge();
  }
}
