import { Component, Inject, AfterViewInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog'; // ضيفي MatDialogModule
import { register } from 'swiper/element/bundle';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { Card } from '../components/_models/card';
import { CommonModule } from '@angular/common';

register();

@Component({
  selector: 'app-modal',
  standalone: true,
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  imports: [
    CommonModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    MatChipsModule,
    MatDividerModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ModalComponent implements AfterViewInit {
  card: Card;

  swiperConfig: any = {
    pagination: { clickable: true },
    navigation: true,
    loop: true,
    spaceBetween: 30,
    slidesPerView: 1,
  };

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.card = data.card;
  }

  ngAfterViewInit() {
    setTimeout(() => {
      const swiperEl = document.querySelector('swiper-container');
      if (swiperEl) {
        Object.assign(swiperEl, this.swiperConfig);
        (swiperEl as any).initialize();
      }
    }, 100);
  }

  closeModal() {
    this.dialogRef.close();
  }
}
