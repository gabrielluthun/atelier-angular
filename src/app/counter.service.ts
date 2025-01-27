import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  counter: number = 0;
  constructor() { }

  increment() {
    this.counter++;
  }
  
  decrement() {
    this.counter--;
  }
}
