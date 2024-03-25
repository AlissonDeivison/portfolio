import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { AsyncPipe, CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';



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
  
  redirectTo(link: string): void {
    window.open(link, "_blank");
  }

  tabs: ExampleTab[] = [
    {
      label: 'Organo',
      content:
        'Organo is a task management application built with React, representing one of my first ventures with this library. It originated during the React course offered by Alura, where I took the opportunity to explore various complementary technologies, including React Router, Context API, Styled Components, and Axios, among others. To provide access to the project, I chose to host it on the Vercel platform, thus ensuring its availability and optimized performance..',
      link: 'https://organo-six-topaz.vercel.app/',
      image: 'assets/organo.svg',
    },
    {
      label: 'Memoteca',
      content: "Memoteca is a memory management application, marking my first project developed with Angular. During its creation, I delved deep into the library's fundamental features and concepts, exploring components, services, routes, reactive forms, and observables, among other essential aspects. I chose to host the project on the Vercel platform, ensuring its availability and optimized performance for users. This project not only expanded my understanding of Angular but also provided me with a solid foundation for future endeavors in this exciting technology.",
      link: 'https://thoughts-ochre.vercel.app/',
      image: 'assets/memoteca.svg',
    },
    {
      label: 'Jornada',
      content: 'Jornada was my second project with Angular, developed during a course at Alura. It represents an airline ticket booking system, where I extensively explored the features of the Angular Material library, from cards and buttons to datepickers, chips, and icons. By hosting the project on the Vercel platform, I ensured continuous availability and optimized performance, consolidating not only my mastery of Angular but also my ability to create intuitive and attractive user experiences.',
      link: 'https://passagens-aereas.vercel.app/',
      image: 'assets/jornada.svg',
    },
    {
      label: 'Aluroni',
      content: "Aluroni was a project developed in React during one of the courses offered by Alura. In it, I explored concepts such as product listing, dynamic filtering, and data consumption through a JSON file. Hosted on the Vercel platform, the project ensured availability and optimized performance for users. This solid experience not only strengthened my foundation in React but also expanded my understanding of the library's fundamental concepts, preparing me for future endeavors with confidence and expertise.",
      link: 'https://aluroni-navy.vercel.app/',
      image: 'assets/aluroni.svg',
    },
    {
      label: 'Alura Studies',
      content: 'This was a quick project created with the aim of mastering the use of TypeScript and React. The central idea was to develop a simple task manager with an integrated timer. Features included displaying the timer, countdown, listing tasks to be completed, and the ability to add new activities. The project was hosted on the Vercel platform and is accessible for use.',
      link: 'https://alura-studies-self.vercel.app/',
      image: 'assets/studies.svg',
    },
  ];

}
