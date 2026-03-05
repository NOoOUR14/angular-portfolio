import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from './data.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [

    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.testConnection().subscribe(
      {
        next: (data) =>
          console.log('Connection successful:', data),
              error : (err)=>
        console.error('Connection failed:', err)




      }
    );
}
}
