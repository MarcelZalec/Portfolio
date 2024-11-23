import { CommonModule, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { DialogComponent } from './dialog/dialog.component';
import { ProjectsService, Project } from '../../services/project-data.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgStyle, CommonModule, TranslatePipe, DialogComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  // join:boolean = false;
  // poloLoco:boolean = false;
  // bubble:boolean = false;
  // projectpic:string = "";

  projectDb: Project[] = [];
  currentProject: Project | null = null;
  isDialogOpen = false;
  currentIndex: number = 0;
  hoverImg: string;

  constructor(private projectService: ProjectsService) {
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



  // mouseover(project:string) {
  //   project === 'join' ? (this.join = true): null;
  //   project === 'poloLoco' ? (this.poloLoco = true): null;
  //   project === 'bubble' ? (this.bubble = true): null;
  //   this.projectpic = project;
  // }

  // mouseout(project:string) {
  //   project === 'join' ? (this.join = false): null;
  //   project === 'poloLoco' ? (this.poloLoco = false): null;
  //   project === 'bubble' ? (this.bubble = false): null;
  //   this.projectpic = project;
  // }
}
