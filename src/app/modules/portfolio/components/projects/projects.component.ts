import { Component, signal } from '@angular/core';
import { IProjects } from '../../interface/IProjects';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  public arrayProjects = signal<IProjects[]>([
    {
      src: '/assets/img/projects/vfull.png',
      alt: 'Projeto FullStack',
      width: '100px',
      height: '51px',
      title: 'Vida FullStack',
      description: 'Descrição do Projeto...',
      links: [
        {
          name: 'Conheça o Blog',
          href: 'https://felipeakel.github.io/portfolio-pessoal/',
        },
      ],
    },
    {
      src: '/assets/img/projects/lista-de-tarefas.png',
      alt: 'Ícone do Sistema Gestão Musical - GM',
      width: '84px',
      height: '86px',
      title: 'Sistema Gestão Musical - GM',
      description: 'O sistema Gestão Musical - GM trata-se de um website responsável por apresentar o porfólio de um artista da música.',
      links: [
        {
          name: 'Saiba mais sobre o sistema',
          href: 'https://www.linkedin.com/in/felipe-akel-carvalho-florentino-009412135/details/projects/?profileUrn=urn%3Ali%3Afsd_profile%3AACoAACD8nokBiMc468lBvggAWUavWkg-psSa2C0',
        },
      ],
    },
    {
      src: '/assets/img/projects/lista-de-tarefas.png',
      alt: 'Ícone do Sistema Super Gestão - SG',
      width: '84px',
      height: '86px',
      title: 'Sistema Super Gestão - SG',
      description: 'O sistema Super Gestão - SG trata-se de um website responsável por gerenciar Produtos, Clientes e Vendas. Com isso, pode-se esperar funcionalidades como CRUD (Create, Read, Update, Delete), não somente isso, mas também Filtros, Envio de E-mails, Recuperação de dados de Endereço após preenchimento do CEP, entre outros recursos.',
      links: [
        {
          name: 'Saiba mais sobre o sistema GitHub',
          href: 'https://github.com/FelipeAkel/Laravel-Super-Gestao',
        },
      ],
    },
  ]);

}
