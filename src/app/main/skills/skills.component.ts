import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { OverlayComponent } from './overlay/overlay.component';
import { AnimationService } from '../../services/animation.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule,TranslatePipe, OverlayComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent extends AnimationService {

  hover: boolean = false
  activeSkills: 'frontend'|'backend' = 'frontend'

  hoverTrue() {
    this.hover = true;
  }

  hoverFalse() {
    this.hover = false;
  }
}
