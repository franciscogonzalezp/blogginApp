import { Component, input } from '@angular/core';
import { INew } from '../../interfaces/inew.interface';
import { formatDate } from '@angular/common'

@Component({
  selector: 'app-list-new',
  imports: [],
  templateUrl: './list-new.component.html',
  styleUrl: './list-new.component.css'
})
export class ListNewComponent {
  listNews = input<INew[]> ()

  constructor() {}

  // Método para usar formatDate directamente en el componente
  formatDateFromString(dateIn: string): string {
    const date = new Date(dateIn)
    return formatDate(date, 'dd/MM/yyyy HH:mm', 'en-US');
  }

  ngOnInit(){}

}
