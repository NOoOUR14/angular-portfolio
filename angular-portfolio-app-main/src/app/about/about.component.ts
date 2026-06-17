import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { ScrollRevealDirective } from '../components/scroll-reveal.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink, ScrollRevealDirective],
  templateUrl: './about.component.html',
  styleUrls: [
    './about.component.css',
  ]
})
export class AboutComponent {
  constructor(private titleService: Title) {
    this.titleService.setTitle('Nour Jad - About')
  }
}
