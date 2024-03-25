import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { AsyncPipe, CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ScrollService } from '../../scroll.service';



export interface ExampleTab {
  label: string;
  content: string;
  link?: string;
  image?: string;
}
@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.component.html',
  standalone: true,
  imports: [MatTabsModule, AsyncPipe, CommonModule, MatCardModule, MatButtonModule],
})
export class TabGroupAsyncExample {
  constructor(private scrollService: ScrollService) { }
  
  scrollTo(anchor: string): void {
    this.scrollService.scrollTo(anchor);
  }
  
  tabs: ExampleTab[] = [
    {
      label: 'Organo',
      content:
        'Organo é uma aplicação de gerenciamento de tarefas construída com React, representando um dos meus primeiros empreendimentos com essa biblioteca. Originou-se durante o curso de React ministrado pela Alura, e aproveitei a oportunidade para explorar várias tecnologias complementares, incluindo React Router, Context API, Styled Components e Axios, entre outras. Para fornecer acesso ao projeto, optei por hospedá-lo na plataforma Vercel, garantindo assim sua disponibilidade e desempenho otimizados.',
      link: 'https://organo-six-topaz.vercel.app/',
      image: 'assets/organo.svg',
    },
    {
      label: 'Memoteca',
      content: 'Memoteca é uma aplicação de gerenciamento de memórias, marcando meu primeiro projeto desenvolvido com Angular. Durante sua criação, mergulhei fundo nos recursos e conceitos fundamentais da biblioteca, explorando componentes, serviços, rotas, formulários reativos e observáveis, entre outros aspectos essenciais. Optei por hospedar o projeto na plataforma Vercel, assegurando sua disponibilidade e um desempenho otimizado para os usuários. Este projeto não apenas ampliou minha compreensão do Angular, mas também me proporcionou uma base sólida para futuros empreendimentos nesta tecnologia emocionante.',
      link: 'https://thoughts-ochre.vercel.app/',
      image: 'assets/memoteca.svg',
    },
    {
      label: 'Jornada',
      content: 'Jornada foi meu segundo projeto com Angular, desenvolvido durante um curso no Alura. Ele representa um sistema de compra de passagens aéreas, onde explorei extensivamente os recursos da biblioteca Angular Material, desde cards e botões até datepickers, chips e icons. Ao hospedar o projeto na plataforma Vercel, garanti disponibilidade contínua e desempenho otimizado, consolidando não apenas meu domínio do Angular, mas também minha capacidade de criar experiências de usuário intuitivas e atrativas.',
      link: 'https://passagens-aereas.vercel.app/',
      image: 'assets/jornada.svg',
    },
    {
      label: 'Aluroni',
      content: 'Aluroni foi um projeto desenvolvido em React durante um dos cursos oferecidos pela Alura. Nele, explorei conceitos de listagem de produtos, filtragem dinâmica e consumo de informações através de um arquivo JSON. Hospedado na plataforma Vercel, o projeto garantiu disponibilidade e desempenho otimizado para os usuários. Esta experiência sólida não apenas fortaleceu minha base em React, mas também expandiu minha compreensão dos conceitos fundamentais da biblioteca, preparando-me para futuros empreendimentos com confiança e expertise.',
      link: 'https://aluroni-navy.vercel.app/',
      image: 'assets/aluroni.svg',
    },
    {
      label: 'Alura Studies',
      content: 'Este foi um projeto rápido criado com o objetivo de dominar o uso do TypeScript e do React. A ideia central era desenvolver um gerenciador de tarefas simples, com um cronômetro integrado. As funcionalidades incluíam a exibição do cronômetro, contagem regressiva, listagem de tarefas a serem realizadas e a capacidade de adicionar novas atividades. O projeto foi hospedado na plataforma Vercel e está acessível para utilização.',
      link: 'https://alura-studies-self.vercel.app/',
      image: 'assets/studies.svg',
    },
  ];

}
