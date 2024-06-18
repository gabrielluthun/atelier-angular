import { Component, Output, EventEmitter } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { CounterService } from "./counter.service";
import { DecrementButtonComponent } from "./decrement-button/decrement-button.component";
import { IncrementButtonComponent } from "./increment-button/increment-button.component";


@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, DecrementButtonComponent, IncrementButtonComponent],
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})


export class AppComponent {
  constructor(public CounterService: CounterService) {}
  title = "atelier-angular";  
}