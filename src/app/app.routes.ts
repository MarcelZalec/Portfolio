import { Routes } from '@angular/router';
import { HeroSectionComponent } from './main/hero-section/hero-section.component';
import { ImpressumComponent } from './side-pages/impressum/impressum.component';

export const routes: Routes = [
    { path: '', component: HeroSectionComponent},
    { path: 'imprint', component: ImpressumComponent},
];
