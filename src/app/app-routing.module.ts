import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ResultOfCountryComponent } from './pages/result-of-country/result-of-country.component';

const routes: Routes = [
  {
    path: 'country/:id', // stat country
    component: ResultOfCountryComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: '**', // wildcard
    component: NotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
