import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { ResultOfCountryComponent } from './pages/result-of-country/result-of-country.component';




@NgModule({
  declarations: [AppComponent, HomeComponent, NotFoundComponent, DashboardComponent, ResultOfCountryComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, HighchartsChartModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
