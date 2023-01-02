import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizeGuard } from 'src/api-authorization/authorize.guard';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { PlayFinderComponent } from './game/play/play-finder/play-finder.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { PlayComponent } from './game/play/play/play.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'counter', component: CounterComponent },
  {
    path: 'play',
    component: PlayFinderComponent,
    canActivate: [AuthorizeGuard],
    children: [
      {
        path: ':id',
        component: PlayComponent,
        canActivate: [AuthorizeGuard],
      }  
    ]
  },
  { path: 'fetch-data', component: FetchDataComponent, canActivate: [AuthorizeGuard] },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ]
})
export class AppRoutingModule { }
