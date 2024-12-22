import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { Project, ProjectsService } from './project-data.service';

@Injectable({
  providedIn: 'root'
})
export class DialogDataService {
  open: boolean = false;
  noScroll: boolean = false;
  translationY: string = 'translateY(-150%)';
  translationX: string = 'translateX(150%)';
  opacity: string = '0';
  containerOpacity: string = "";
  private renderer: Renderer2;
  currentIndex: number = 0;
  projectDb: Project[] = [];
  currentProject: Project | null = null;

  constructor(
    public rendererFactory: RendererFactory2,
    private projectService: ProjectsService,
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
    this.projectDb = this.projectService.getProjects();
  }

  toggleScrollBehav() {
    if (!this.noScroll) {
      this.noScroll = true;
      this.renderer.addClass(document.documentElement, 'noScroll');
    } else {
      this.noScroll = false;
      this.renderer.removeClass(document.documentElement, 'noScroll');
    }
  }

  closeDialog() {
    this.toggleScrollBehav();
    this.translationY = 'translateY(-150%)';
    this.translationX = 'translateX(-150%)';
    this.opacity = '0';
    setTimeout(() => {
      this.open = false;
      this.translationX = 'translateX(150%)';
    }, 125);
  }

  setProject(index:number) {
    this.currentProject = this.projectDb[index];
    this.currentIndex = index;
  }
}
