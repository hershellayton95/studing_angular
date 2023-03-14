import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContattiComponent } from './componenti/contatti/contatti.component';
import { ContattoComponent } from './componenti/contatto/contatto.component';
import { HomeComponent } from './componenti/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'contatti',
    component: ContattiComponent,
    children: [
      {
        path: ':id',
        component: ContattoComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
