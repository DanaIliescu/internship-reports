import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { InternshipFormComponent } from './internship-form/internship-form.component';
import { HomeComponent } from './home/home.component';
import { InternshipsComponent } from './internships/internships.component';
import { AboutComponent } from './about/about.component';
import { MyDreamsComponent } from './my-dreams/my-dreams.component';
import { InternshipsListComponent } from './internships-list/internships-list.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'internships', component: InternshipsComponent,
    children: [
      {path: 'internships-list', component: InternshipsListComponent},
      {path: 'new-report', component: InternshipFormComponent},      
    ]  
  },
  { path: 'about', component: AboutComponent },
  { path: 'myDreams', component: MyDreamsComponent },  

  { path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    InternshipFormComponent,
    HomeComponent,
    InternshipsComponent,
    AboutComponent,
    MyDreamsComponent,
    InternshipsListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
