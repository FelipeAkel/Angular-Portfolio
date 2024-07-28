import { Component, signal } from '@angular/core';
import { IIcones } from '../../interface/IIcones';

@Component({
  selector: 'app-icones',
  standalone: true,
  imports: [],
  templateUrl: './icones.component.html',
  styleUrl: './icones.component.scss'
})
export class IconesComponent {

  public arrayIcones = signal<IIcones[]>([
    {
      src: '/assets/icons/tecnologias/html5.svg',
      alt: 'Ícone de HTML 5',
    },
    {
      src: '/assets/icons/tecnologias/css3.svg',
      alt: 'Ícone de CSS 3',
    },
    {
      src: '/assets/icons/tecnologias/angular.svg',
      alt: 'Ícone de Angular',
    },
    {
      src: '/assets/icons/tecnologias/javascript.svg',
      alt: 'Ícone de Java Script',
    },
    {
      src: '/assets/icons/tecnologias/nodejs.svg',
      alt: 'Ícone de Node Js',
    },
    {
      src: '/assets/icons/tecnologias/sass.svg',
      alt: 'Ícone de SCSS',
    },
  ]);

}
