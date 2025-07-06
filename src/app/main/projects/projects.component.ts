import { CommonModule } from '@angular/common';
import { Component, ElementRef } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { ProjectsService, Project } from '../../services/project-data.service';
import { AnimationService } from '../../services/animation.service';
import { DialogDataService } from '../../services/dialog-data.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent extends AnimationService {

  projectDb: Project[] = [];
  currentProject: Project | null = null;
  public isDialogOpen = false;
  currentIndex: number = 0;
  hoverImg: string;

  constructor(private projectService: ProjectsService, elRef: ElementRef, public dialogService: DialogDataService,) {
    super(elRef);
    this.projectDb = this.projectService.getProjects();
    this.hoverImg = '';
  }

  openDialog(index: number) {
    this.dialogService.setProject(index)
    this.dialogService.toggleScrollBehav();
    this.dialogService.open = true;
    setTimeout(() => {
      this.dialogService.opacity = '1';
      this.dialogService.translationX = 'translateX(0px)';
    }, 21);
  }
}
