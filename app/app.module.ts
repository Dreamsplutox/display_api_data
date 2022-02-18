import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ApiDisplayComponent } from './api-display/api-display.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'api-display', component: ApiDisplayComponent },
  { path: '', component: HomeComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ApiDisplayComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
