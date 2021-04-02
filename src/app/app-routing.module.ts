import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { HomeComponent } from './home/home.component';
import { PlayComponent } from './play/play.component';
import { StartComponent } from './start/start.component';

const routes: Routes = [
  {
    path: 'start',
    component: StartComponent
  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path: 'play',
    component: PlayComponent
  },
  {
    path: 'create',
    component: CreateComponent
  },
  {
    path: '',
    redirectTo: '/start',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/start',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
