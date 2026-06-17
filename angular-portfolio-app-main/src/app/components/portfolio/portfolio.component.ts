import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../card/card.component';
import { Card } from '../_models/card';
import { Tag } from '../_models/tags';
import { ScrollRevealDirective } from '../scroll-reveal.directive';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, CardComponent, ScrollRevealDirective],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

  projects: Card[] = [
  {
    id: 1,
    name: 'Sentinel AI Reviewer',
    summary: 'Automated GitHub code reviews using Gemini AI.',
    description: "A SaaS project that integrates with GitHub Webhooks to provide automated code analysis and reviews using the Gemini API.Problem: Manual code reviews are time-consuming and often prone to human oversight, slowing down the development cycle.Solution: Sentinel automates the process by integrating Gemini AI with GitHub Webhooks, providing instant, high-quality feedback on PRs to catch bugs and improve code quality before they reach production.",
    projectLink: 'https://github.com/NOoOUR14',
    pictures: ['assets/aii.jpeg'],
    tags: [Tag.NODEJS, Tag.GEMINI, Tag.GITHUB_WEBHOOKS, Tag.JAVASCRIPT, Tag.HTML5, Tag.POSTMAN]
  },
  {
    id: 2,
    name: 'Vibe-Stitch E-Commerce',
    summary: 'Full stack E-commerce store for Gen Z clothing brand.',
    description: " A comprehensive full-stack solution featuring a modern UI for a clothing brand, including product management and secure checkout.Problem: Most E-commerce platforms feel outdated and clunky for the fast-paced, mobile-first Gen Z demographic.Solution: Developed a vibrant, highly responsive Angular platform specifically tailored for Vibe & Stitch,focusing on high-speed performance and an intuitive UI that mirrors the energy of modern fashion",
    projectLink: 'https://github.com/NOoOUR14',
    pictures: ['assets/ecomm.png'],
    tags: [Tag.ANGULAR, Tag.NODEJS, Tag.MONGODB, Tag.EXPRESS  , Tag.HTML5, Tag.CSS3, Tag.TYPESCRIPT, Tag.BOOTSTRAP]
  },
  {
    id: 3,
    name: 'Real Estate Backend',
    summary: 'Scalable backend for a real estate listing platform.',
    description: "A comprehensive full-stack solution featuring a modern UI for a clothing brand, including product management and secure checkout Problem: Real estate platforms deal with massive, fragmented data (locations, price fluctuations, and user roles) that is hard to manage efficiently.Solution: Architected a robust Node.js/MongoDB backend with a specialized schema design that handles complex queries and data relationships, ensuring 100% data integrity and fast retrieval  ",
    projectLink: 'https://github.com/NOoOUR14',
    pictures: ['assets/real.jpeg'],
    tags: [Tag.ANGULAR, Tag.NODEJS, Tag.MONGODB, Tag.EXPRESS, Tag.TYPESCRIPT, Tag.POSTMAN]
  },

];

  constructor(private titleService: Title) {
    this.titleService.setTitle('Nour Jad - Portfolio')
  }

  trackById(index: number, project: Card): number {
    return project.id;
  }

}
