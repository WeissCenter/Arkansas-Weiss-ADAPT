import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { defineCustomElements, applyPolyfills } from '@visa/charts/dist/loader';
import '@angular/localize/init';

bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
applyPolyfills().then(() => defineCustomElements(window));
