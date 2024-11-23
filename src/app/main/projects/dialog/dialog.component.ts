import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Project} from '../../../services/project-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})
export class DialogComponent {
  @Input() project: Project | null = null;
  @Input() projectDb: Project[] = []; 
  @Input() currentIndex: number = 0; 
  @Output() close = new EventEmitter<void>();
  @Output() updateIndex = new EventEmitter<number>(); 

  onClose() {
    this.close.emit();
  }

  nextDialog() {  
    this.currentIndex = (this.currentIndex + 1) % this.projectDb.length;
    this.updateIndex.emit(this.currentIndex); 
    this.project = this.projectDb[this.currentIndex]; 
  }
}
