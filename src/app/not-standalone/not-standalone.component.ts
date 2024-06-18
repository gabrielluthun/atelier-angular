import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-not-standalone',
  templateUrl: './not-standalone.component.html',
  styleUrl: './not-standalone.component.css'
})
export class NotStandaloneComponent {
messageStandalone: string = 'I am not standalone component';

}
