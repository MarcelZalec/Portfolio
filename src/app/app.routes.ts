import { Routes } from '@angular/router';
import { HeroSectionComponent } from './main/hero-section/hero-section.component';
import { ImpressumComponent } from './side-pages/impressum/impressum.component';
import { PrivacyComponent } from './side-pages/privacy/privacy.component';
import { ImprintComponent } from './side-pages/en/imprint/imprint.component';
import { PrivacyComponentEN } from './side-pages/en/privacy/privacy.component';

export const routes: Routes = [
    { path: '', component: HeroSectionComponent},
    { path: 'imprint', component: ImpressumComponent},
    { path: 'privacy', component: PrivacyComponent},

    { path: 'imprint/en', component: ImprintComponent},
    { path: 'privacy/en', component: PrivacyComponentEN},
];
