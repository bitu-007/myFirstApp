import { Routes } from '@angular/router';
import { App } from './app';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Appguard } from './appguard';
import { AppDeactivateGuardService } from './app-deactivate-guard-service';
import { Simpletemplateform } from './simpletemplateform/simpletemplateform';
import { ReactiveFormEx } from './reactive-form-ex/reactive-form-ex';
import { Dynamicform } from './dynamicform/dynamicform';

export const routes: Routes = [
  { path: '', component: App },
  { path: "about/:id/:name", component: About },
  {
    path: "contact",
    component: Contact,
    // canDeactivate: [AppDeactivateGuardService],
    // canActivate: [Appguard],

    children: [
      {
        path: ':id/:name',
        component: About,
        canDeactivate: [AppDeactivateGuardService],
      },
    ],
  },
  { path: "simpletemplateform", component: Simpletemplateform },
  { path: "reactiveform", component: ReactiveFormEx },
  { path:"dynamicform", component:Dynamicform }
  
  
];
