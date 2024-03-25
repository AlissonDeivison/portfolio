import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';


interface Certificate {
  id: number;
  title: string;
  description: string;
  date: string;
  hours?: number;
  pdf?: string;
}

@Component({
  selector: 'app-certificates',
  standalone: true,
  imports: [MatListModule, CommonModule, MatButtonModule],
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.scss'
})
export class CertificatesComponent {

  redirectTo(link: string): void {
    window.open(link, "_blank");
  }

  certificates: Certificate[] = [
    {
      id: 1,
      title: 'React: Developing with JavaScript',
      description: 'Describe the advantages of using React Implement reactive components Investigate and analyze error messages Modify and evolve components according to project needs Prototype an application from scratch to deployment',
      date: '16-07-2023',
      hours: 14,
      pdf: 'assets/pdfs/cert-01.pdf'
    },
    {
      id: 2,
      title: 'Agile management: Process management for agility',
      description: 'Explore concepts of agility, analyzing content and applications Utilize agility in your daily work routine Understand notations such as SIPOC, VSM, and user journey Analyze the difficulties and impact of soft skills in companies',
      date: '12-06-2023',
      hours: 8,
      pdf: 'assets/pdfs/cert-02.pdf'
    },
    {
      id: 3,
      title: 'Generative artificial intelligence: Midjourney and chatgpt',
      description: 'Get to know different generative artificial intelligence tools (Midjourney and ChatGPT) Understand how to generate images for various purposes using Midjourney Learn how to integrate the use of ChatGPT with Midjourney Explore the application of ChatGPT as support in projects across various domains',
      date: '16-06-2023',
      hours: 8,
      pdf: 'assets/pdfs/cert-03.pdf'
    },
    {
      id: 4,
      title: 'React: How components work',
      description: 'Learn how to clone an existing project on GitHub, install the necessary dependencies, and run the code Understand what dependencies are and how to install new dependencies Compare how React views a component, as well as its props and states Make changes to the code, such as creating new features and refactoring existing code Understand what one-way data binding is, and how it relates to Virtual DOM (and why React is designed this way)',
      date: '26-06-2023',
      hours: 8,
      pdf: 'assets/pdfs/cert-04.pdf'
    },
    {
      id: 5,
      title: 'Figma: Building the layout of your mobile website',
      description: 'Understand the basic concepts of creating a mobile website Get to know the Figma tool for website creation Learn how to build layouts within the Figma tool Learn to prototype websites with high fidelity',
      date: '15-08-2023',
      hours: 10,
      pdf: 'assets/pdfs/cert-05.pdf'
    },
    {
      id: 6,
      title: 'React with JavaScript handling static files',
      description: 'Understand how to organize folders and files in your project Implement User Interface components Learn how to handle static files in a React project Understand the advantages of using CSS modules and Sass Utilize JavaScript methods to add functionality to the page Deploy your application on Vercel',
      date: '16-09-2023',
      hours: 8,
      pdf: 'assets/pdfs/cert-06.pdf'
    },
    {
      id: 7,
      title: 'Git and github: Repository, commit and version',
      description: 'Understand the differences between Git and GitHub Learn the main commands used daily in this tool Understand how to control the versions of your projects Discover how to create branching strategies Learn how to navigate through time using restore',
      date: '23-08-2023',
      hours: 8,
      pdf: 'assets/pdfs/cert-07.pdf'
    },
    {
      id: 8,
      title: 'Javascript for the web: create dynamic pages',
      description: 'Identify the roles of each web technology in page construction Associate JavaScript with HTML through the DOM Implement functions with JavaScript Investigate possibilities for solving code problems Select appropriate logical operators for different situations Produce simple solutions for dynamic pages',
      date: '20-08-2023',
      hours: 10,
      pdf: 'assets/pdfs/cert-08.pdf'
    },
    {
      id: 9,
      title: 'Git and github: control and share your code',
      description: 'Git and GitHub Understand a version control system Save and retrieve your code in different versions Resolve merges and conflicts Work with different branches',
      date: '28-08-2023',
      hours: 6,
      pdf: 'assets/pdfs/cert-09.pdf'
    },
    {
      id: 10,
      title: 'HTTP: Undestanding the web under the hood',
      description: 'Understand the architecture and fundamental concepts of the HTTP protocol Implement HTTPS to secure data transmission in a web application Explore the key advancements brought by HTTP/2 and HTTP/3 to optimize performance Uncover the components of HTTP messages, such as requests, responses, and headers Understand what URLs and domains are on the web',
      date: '05-09-2023',
      hours: 10,
      pdf: 'assets/pdfs/cert-10.pdf'
    },
    {
      id: 11,
      title: 'React: Writing with TypeScript',
      description: "Create a React project with TypeScript from scratch using Create React App Understand React concepts such as Componentization, Props, and State Avoid CSS overlap with CSS Modules Learn about the useState and useEffect hooks and understand how they were used in class components Clean and document your code using the most up-to-date way to write React Develop your code with best practices such as DRY (Don't Repeat Yourself) and SRP (Single Responsibility Principle)",
      date: '05-09-2023',
      hours: 12,
      pdf: 'assets/pdfs/cert-11.pdf'
    },
    {
      id: 12,
      title: 'TypeScript part 1: evolving your JavaScript',
      description: "Learn how to set up your environment from scratch Gradually become familiar with the features of the TypeScript compiler Understand the advantages of static typing Model your classes using the best features of the language Learn to use types, modifiers, and other features",
      date: '01-11-2023',
      hours: 10,
      pdf: 'assets/pdfs/cert-12.pdf'
    },
    {
      id: 13,
      title: 'React: Dealing with static files',
      description: "Create a project from scratch with Create React App Learn to use normalize.css to reset default browser styles Configure absolute imports to no longer need to import files with multiple levels ('../../../') Learn CSS best practices such as creating variables, creating files for these variables, and for media-query breakpoints Use the classnames package to use CSS Modules without concatenating a lot of CSS styles and dealing with conditional styles Learn how to use SVGR, a package that comes with Create React App to import SVGs as React components Understand how React understands static imports both via .js files and in style files like .scss or .css. Learn how to import static files as variables via js or using the public folder for dynamic imports of static files.",
      date: '18-11-2023',
      hours: 10,
      pdf: 'assets/pdfs/cert-13.pdf'
    },
    {
      id: 14,
      title: 'Angular 14: Apply the concepts and develop your first crud',
      description: "Utilize the Angular CLI tool to create a project and various types of files Understand the structure of an Angular component Learn how to use property binding, interpolation, event binding, and two-way data binding Get to know some of the main directives of Angular Add dynamic navigation between components through routes Apply dependency injection in the application Perform HTTP requests using the HttpClient class and develop a CRUD",
      date: '08-03-2024',
      hours: 10,
      pdf: 'assets/pdfs/cert-14.pdf'
    },
    {
      id: 15,
      title: 'Angular: Componentization and design with angular material',
      description: "Enhance your skills in componentization in Angular by creating reusable components and organizing your application Learn how to use Angular Material to create a modern and attractive interface Discover how to add icons using Angular Material Explore the wide variety of components available in Angular Material, including buttons, toolbars, cards, and much more",
      date: '20-03-2024',
      hours: 8,
      pdf: 'assets/pdfs/cert-15.pdf'
    },
  ];

  constructor() { }
}
