import { Component, inject } from '@angular/core';
import { AboutMeComponent } from '../about-me/about-me.component';
import { SkillsComponent } from '../skills/skills.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ReferencesComponent } from '../references/references.component';
import { ContactComponent } from '../contact/contact.component';
import { CommonModule, NgStyle } from '@angular/common';
import { TranslatePipe} from '@ngx-translate/core';
import { DialogDataService } from '../../services/dialog-data.service';
import { DialogComponent } from '../projects/dialog/dialog.component';

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
    DialogComponent
  ],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent {
  github:boolean = false;
  linkedin:boolean = false;
  dialogOpen: boolean = false;
  repeatArray = Array(4)

  public dialogService = inject(DialogDataService);

  hover(id:string) {
    id === 'github' ? (this.github = true): null;
    id === 'linkedin' ? (this.linkedin = true): null;
  }

  hoverOut(id:string) {
    id === 'github' ? (this.github = false): null;
    id === 'linkedin' ? (this.linkedin = false): null;
  }
}
