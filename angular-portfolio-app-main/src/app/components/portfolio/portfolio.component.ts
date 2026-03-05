import { Component , OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectService } from '../../services/projects.service';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../card/card.component';
import { Card } from '../_models/card';
import { Tag } from '../_models/tags';
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit {

  projects: Card[] = [];

  constructor(private titleService: Title, private projectService: ProjectService) {
    this.titleService.setTitle('Nour Gad - Portfolio');
  }

  ngOnInit(): void {
    this.projectService.getProjects().subscribe({
      next: (data: Card[]) => {
        this.projects = data;
      },
      error: (err:any) => console.error('Error fetching projects:', err)
    });
  }
}
