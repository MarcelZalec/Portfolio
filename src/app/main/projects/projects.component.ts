import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  join:boolean = false;
  poloLoco:boolean = false;
  bubble:boolean = false;
  projectpic:string = "";

  mouseover(project:string) {
    project === 'join' ? (this.join = true): null;
    project === 'poloLoco' ? (this.poloLoco = true): null;
    project === 'bubble' ? (this.bubble = true): null;
    this.projectpic = project;
  }

  mouseout(project:string) {
    project === 'join' ? (this.join = false): null;
    project === 'poloLoco' ? (this.poloLoco = false): null;
    project === 'bubble' ? (this.bubble = false): null;
    this.projectpic = project;
  }

  openDialog() {
    
  }
}
