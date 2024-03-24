import {Component} from '@angular/core';
import {Observable, Observer} from 'rxjs';
import {MatTabsModule} from '@angular/material/tabs';
import {AsyncPipe} from '@angular/common';

export interface ExampleTab {
  label: string;
  content: string;
  link?: string;
}

/**
 * @title Tab group with asynchronously loading tab contents
 */
@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.component.html',
  standalone: true,
  imports: [MatTabsModule, AsyncPipe],
})
export class TabGroupAsyncExample {
  asyncTabs: Observable<ExampleTab[]>;

  constructor() {
    this.asyncTabs = new Observable((observer: Observer<ExampleTab[]>) => {
      setTimeout(() => {
        observer.next([
          {label: 'Organo', content: 'Aplicação de gerenciamento de equipes e projetos utilizando React', link: 'https://organo-six-topaz.vercel.app/' }, 
          {label: 'Pensamentos', content: 'Aplicação de gerenciamento de pensamentos utilizando Angular', link: 'https://thoughts-ochre.vercel.app/' },
          {label: 'Jornada', content: 'Aplicação de venda de passagens aéreas utilizando Angular', link: 'https://passagens-aereas.vercel.app/' },
          {label: 'Aluroni', content: 'Aplicação de cardárpio de restaurante utilizando React', link: 'https://aluroni-navy.vercel.app/' },
          {label: 'Alura Studies', content: 'Aplicações de estudos utilizando React', link: 'https://alura-studies-self.vercel.app/' },
        ]);
      });
    });
  }
}
