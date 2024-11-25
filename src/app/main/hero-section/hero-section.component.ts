import { Component, inject } from '@angular/core';
import { AboutMeComponent } from '../about-me/about-me.component';
import { SkillsComponent } from '../skills/skills.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ReferencesComponent } from '../references/references.component';
import { ContactComponent } from '../contact/contact.component';
import { CommonModule, NgStyle } from '@angular/common';
import { TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [
    AboutMeComponent,
    SkillsComponent,
    ProjectsComponent,
    ReferencesComponent,
    ContactComponent,
    NgStyle,
    CommonModule,
    TranslatePipe,
  ],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent {
  mouseOver:boolean = false;
  github:boolean = false;


  hover(id:string) {
    id === 'github' ? (this.github = true): null;
    id === 'linkedin' ? (this.github = true): null;
  }

  hoverOut(id:string) {
    id === 'github' ? (this.github = false): null;
    id === 'linkedin' ? (this.github = false): null;
  }

  checkMouseOver(ismouseOver: boolean) {
    this.mouseOver = ismouseOver;
    console.log("dfsdf");
  }
}
