import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import '@fontsource-variable/inter/slnt.css';// Inter font Supports weights 100-900

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
