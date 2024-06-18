import { ApplicationConfig } from "@angular/core";
import { provideRouter } from "@angular/router";
import { importProvidersFrom } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NotStandaloneComponent } from "./not-standalone/not-standalone.component";
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([]),
    importProvidersFrom(BrowserModule),
    NotStandaloneComponent,
  ],
};