import { Component, Output, EventEmitter, NgModule } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { NotStandaloneComponent } from "./not-standalone/not-standalone.component";

@NgModule({
  declarations: [NotStandaloneComponent],
  exports: [NotStandaloneComponent]
})
export class SharedModule {}

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, SharedModule],
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "atelier-angular";  
}