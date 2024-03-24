import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ContainerComponent } from '../container/container.component';


interface Technologies {
  id?: number;
  name: string;
  description: string;
  logo: string;
}

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule, CommonModule, ContainerComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  technologies: Technologies[] = [
    {
      id: 1,
      name: 'Angular',
      description: 'Angular is a platform and framework for building single-page client applications using HTML and TypeScript.',
      logo: 'https://angular.io/assets/images/logos/angular/angular.svg'
    },
    {
      id: 2,
      name: 'React',
      description: 'React is a JavaScript library for building user interfaces.',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'
    },
  ];
}
