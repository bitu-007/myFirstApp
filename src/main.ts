import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { About } from './app/about/about';
import { Contact } from './app/contact/contact';
import { Layout } from './app/layout/layout';

bootstrapApplication(Layout, appConfig).catch((err) => console.error(err));
