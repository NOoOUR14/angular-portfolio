import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ScrollRevealDirective } from '../components/scroll-reveal.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './contact.component.html',
  styleUrls: [
    './contact.component.css',
  ]
})
export class ContactComponent {
  constructor(private titleService: Title) {
    this.titleService.setTitle('Nour Jad - Contact')
  }
}
