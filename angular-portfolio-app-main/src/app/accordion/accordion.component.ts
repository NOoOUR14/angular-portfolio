import { Component } from '@angular/core';
import {

  MatExpansionModule

} from '@angular/material/expansion';

import { CommonModule } from '@angular/common';
import { C } from '@angular/cdk/keycodes';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [
   MatExpansionModule,CommonModule]
  ,
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent {}
