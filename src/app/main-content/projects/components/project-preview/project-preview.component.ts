import { Component, Input } from '@angular/core';
import { Project } from '../../../../interfaces/projects.interface';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonsComponent } from '../../../../shared/components/buttons/buttons.component';
import { CommonModule } from '@angular/common';
import { ProjectService } from '../../../../services/projects.service';

@Component({
  selector: 'app-project-preview',
  standalone: true,
  imports: [TranslateModule, ButtonsComponent, CommonModule],
  templateUrl: './project-preview.component.html',
  styleUrl: './project-preview.component.scss'
})
export class ProjectPreviewComponent {
  @Input() currentProject!: Project;
  @Input() last: boolean = false;
  @Input() index: number = 0;

  constructor(public projects: ProjectService) {}

}
