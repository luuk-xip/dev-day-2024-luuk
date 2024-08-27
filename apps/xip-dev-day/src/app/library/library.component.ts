import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { exampleData } from './exampleData';

@Component({
  selector: 'app-library',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './library.component.html',
  styleUrl: './library.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LibraryComponent {
  data = exampleData;

  constructor () {
    console.log(this.data);
  }
}
