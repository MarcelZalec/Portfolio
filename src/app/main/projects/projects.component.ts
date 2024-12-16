import { CommonModule, NgStyle } from '@angular/common';
import { Component, ElementRef } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { DialogComponent } from './dialog/dialog.component';
import { ProjectsService, Project } from '../../services/project-data.service';
import { AnimationService } from '../../services/animation.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgStyle, CommonModule, TranslatePipe, DialogComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent extends AnimationService {

  projectDb: Project[] = [];
  currentProject: Project | null = null;
  public isDialogOpen = false;
  currentIndex: number = 0;
  hoverImg: string;

  constructor(private projectService: ProjectsService, elRef: ElementRef) {
    super(elRef);
    this.projectDb = this.projectService.getProjects();
    this.hoverImg = '';
  }

  openDialog(index: number) {
    this.currentProject = this.projectDb[index];
    this.isDialogOpen = true;
    this.currentIndex = index;
  }

  closeDialog() {
    this.currentProject = null; 
    this.isDialogOpen = false;
  }
}
