import { Component } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-increment-button',
  standalone: true,
  imports: [],
  templateUrl: './increment-button.component.html',
  styleUrl: './increment-button.component.css'
})
export class IncrementButtonComponent {
  constructor(private CounterService: CounterService) {}

  incrementCounter() {
    this.CounterService.increment();
  }

}
