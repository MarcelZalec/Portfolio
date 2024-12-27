import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { GetLanguageService } from '../../services/get-language.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  language: "en" | "de" = "en";

  constructor(
    private lang: GetLanguageService,
    private router: Router,
  ) {}

  checkHref() {
    this.lang.checkLanguageInLocalstorge();
    this.setlanguage();
    if (this.language === "en") {
      this.router.navigateByUrl("/imprint/en");
    } else {
      this.router.navigateByUrl("/imprint");
    }
  }

  setlanguage() {
    this.language = this.lang.activeLanguage;
  }
}
