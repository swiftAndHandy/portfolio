import { Component } from '@angular/core';
import { ProjectService } from '../../../../services/projects.service';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { ButtonsComponent } from "../../../../shared/components/buttons/buttons.component";

@Component({
  selector: 'app-project-fullscreen',
  standalone: true,
  imports: [TranslateModule, CommonModule, ButtonsComponent],
  templateUrl: './fullscreen.component.html',
  styleUrl: './fullscreen.component.scss'
})
export class ProjectFullScreenComponent {

  constructor(public projects: ProjectService){}

}
