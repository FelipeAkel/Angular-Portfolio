import { Component } from '@angular/core';

import { HeaderComponent } from '../../components/header/header.component';
import { IconesComponent } from "../../components/icones/icones.component";
import { ExperienceComponent } from '../../components/experience/experience.component';
import { ProjectsComponent } from '../../components/projects/projects.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    IconesComponent,
    ExperienceComponent,
    ProjectsComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
