import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export interface ProjectUrls {
  project: string;
  github: string;
}

export interface Skillset {
  name: string;
  image: string;
}

export interface Project {
  name: string;
  tag: string;
  image: string;
  description: string;
  urls: ProjectUrls;
  skillset: Skillset[];
}

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  constructor(private translate: TranslateService) {}

  projects: Project[] = [
    {
      name: 'projects.join.name',
      tag: 'join',
      image: 'assets/img/poloLoco.png',
      description: 'projects.join.description',
      urls: {
        project: 'https://join.kai-schulz.dev/',
        github: '',
      },
      skillset: [
        {
          name: 'HTML',
          image: 'assets/img/svgs/html.svg',
        },
        {
          name: 'CSS',
          image: 'assets/img/svgs/css.svg',
        },
        {
          name: 'JavaScript',
          image: 'assets/img/svgs/javascript.svg',
        },
        {
          name: 'Firebase',
          image: 'assets/img/svgs/firebase.svg',
        },
      ],
    },
    {
      name: 'projects.sharky.name',
      tag: 'sharky',
      image: 'assets/img/poloLoco.png',
      description: 'projects.sharky.description',
      urls: {
        project: 'https://sharky.kai-schulz.dev/',
        github: 'https://github.com/sprrwDE/sharkie',
      },
      skillset: [
        {
          name: 'HTML',
          image: 'assets/img/svgs/html.svg',
        },
        {
          name: 'CSS',
          image: 'assets/img/svgs/css.svg',
        },
        {
          name: 'JavaScript',
          image: 'assets/img/svgs/javascript.svg',
        }
      ],
    },
    {
      name: 'projects.bubble.name',
      tag: 'bubble',
      image: 'assets/img/poloLoco.png',
      description: 'projects.bubble.description',
      urls: {
        project: '',
        github: '',
      },
      skillset: [
        {
          name: 'HTML',
          image: 'assets/img/svgs/html.svg',
        },
        {
          name: 'CSS',
          image: 'assets/img/svgs/css.svg',
        },
        {
          name: 'TypeScript',
          image: 'assets/img/svgs/typeScript.svg',
        },{
          name: 'Angular',
          image: 'assets/img/svgs/angular.svg',
        },
        {
          name: 'Firebase',
          image: 'assets/img/svgs/firebase.svg',
        },
      ],
    },
  ];

  getProjects(): Project[] {
    return this.projects.map((project) => ({
      ...project,
      description: this.translate.instant(project.description),
    }));
  }

}
