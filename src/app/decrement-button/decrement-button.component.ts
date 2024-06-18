import { Component } from '@angular/core';
import { CounterService } from '../counter.service'; 

@Component({
  selector: 'app-decrement-button',
  standalone: true,
  imports: [],
  templateUrl: './decrement-button.component.html',
  styleUrl: './decrement-button.component.css'
})
export class DecrementButtonComponent {
  constructor(private CounterService: CounterService) {}

  decrementCounter() {
    this.CounterService.decrement();
  }

}
