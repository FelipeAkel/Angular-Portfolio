import { Component, signal } from '@angular/core';
import { IExperience } from '../../interface/IExperience';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {

  public arrayExperience = signal<IExperience[]>([
    {
      summary: {
        strong: 'Analista de Sistemas PHP PL',
        p: 'Jul de 2024 - Até o presente momento',
      },
      text: '<p>- Desenvolvimento e manutenção de sistema utilizando, back-end, PHP - Laravel; <br>- Desenvolvimento e manutenção de sistema utilizando, front-end, Angular;</p>',
    },
    {
      summary: {
        strong: 'Analista de Sistemas PHP JR',
        p: 'Dez de 2021 - Jun de 2024',
      },
      text: '<p>- Realizar atividades de manutenção e desenvolvimento de sistemas utilizando linguagem PHP - Laravel; <br>- Atuar como apoio técnico no relacionamento com o Cliente;</p>',
    },
    {
      summary: {
        strong: 'Web Designer',
        p: 'Jan de 2016 - Jun de 2020',
      },
      text: '<p>- Produção e manutenção de projetos utilizando a arquitetura MVC com linguagem em PHP 5.6; <br>- Criação e manutenção de web sites implementados em Joomla e WordPress;</p>',
    },
    {
      summary: {
        strong: 'Web Designer',
        p: 'Jan de 2015 - Jan de 2016',
      },
      text: '<p>- Gestão de web site, com a ferramenta CMS Joomla, na publicação de artigos, correções de vulnerabilidade, liberação de acessos e atualização de templates;</p>',
    },
    {
      summary: {
        strong: 'Técnico de suporte em TI',
        p: 'Mai de 2013 - Dez de 2014',
      },
      text: '<p>- Atendimento ao usuário na soluções de problemas no computador, instalação, configuração de programas; <br>- Realização de manutenção preventiva e corretiva em equipamentos de informática.</p>',
    }
  ]);

}
