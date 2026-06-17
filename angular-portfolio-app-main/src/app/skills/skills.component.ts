import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AccordionComponent } from '../accordion/accordion.component';
import { ScrollRevealDirective } from '../components/scroll-reveal.directive';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [AccordionComponent, ScrollRevealDirective],
  templateUrl: './skills.component.html',
  styleUrls: [
    './skills.component.css',
  ]
})
export class SkillsComponent {
  constructor(private titleService: Title) {
    this.titleService.setTitle('Nour Jad - Skills')
  }
}
