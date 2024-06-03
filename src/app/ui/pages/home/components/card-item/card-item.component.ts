import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardTitle,
} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  standalone: true,
  selector: 'card-item',
  imports: [
    MatButtonModule,
    MatCard,
    MatCardActions,
    MatCardContent,
    MatIconModule,
    MatCardTitle,
  ],
  templateUrl: './card-item.component.html',
  styleUrl: './card-item.component.scss',
})
export class CardItemComponent<T> {
  @Input({ required: true }) title = '';
  @Input({ required: true }) description = '';
  @Input({ required: true }) done = false;
  @Input({ required: true }) data!: T;

  @Output() doneClick = new EventEmitter<T>();
  @Output() editClick = new EventEmitter<T>();
  @Output() deleteClick = new EventEmitter<T>();

  public onDoneClick(): void {
    this.doneClick.emit(this.data);
  }

  public onEditClick(): void {
    this.editClick.emit(this.data);
  }

  public onDeleteClick(): void {
    this.deleteClick.emit(this.data);
  }
}
