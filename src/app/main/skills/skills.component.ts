import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { OverlayComponent } from './overlay/overlay.component';
import { AnimationService } from '../../services/animation.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [TranslatePipe, OverlayComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent extends AnimationService {

  hover: boolean = false

  hoverTrue() {
    this.hover = true;
  }

  hoverFalse() {
    this.hover = false;
  }
}
