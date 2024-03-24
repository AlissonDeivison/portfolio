import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Icon {
  name: string;
  path: string;
}

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.scss'
})
export class TechnologiesComponent {
  icons : Icon[] = [ 
    { name: 'Angular', path: 'assets/icons/angular.svg' },
    { name: 'Angular Material', path: 'assets/icons/material.svg' },
    { name: 'Router', path: 'assets/icons/router.svg' },
    { name: 'React', path: 'assets/icons/react.svg' },
    { name: 'HTTP', path: 'assets/icons/http.svg' },
    { name: 'JavaScript', path: 'assets/icons/js.svg' },
    { name: 'TypeScript', path: 'assets/icons/typescript.svg' },
    { name: 'Figma', path: 'assets/icons/figma.svg' },

  ];
  
}
