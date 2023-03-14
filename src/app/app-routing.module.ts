import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { ContattiComponent } from './componenti/contatti/contatti.component';
import { ContattoComponent } from './componenti/contatto/contatto.component';
import { HomeComponent } from './componenti/home/home.component';
import { NotfoundComponent } from './componenti/notfound/notfound.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'contatti',
    component: ContattiComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        path: ':id',
        component: ContattoComponent,
      },
    ],
  },
  { path: '404', component: NotfoundComponent },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
