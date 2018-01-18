import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';

import {
  MatToolbarModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatProgressBarModule,
  MatSelectModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './components/login/login.component';
import { CategoryListComponent } from './components/categorylist/categorylist.component';
import { CategoryService } from './services/category.service';
import { ScoreBarsComponent } from './components/scorebars/scorebars.component';
import { ScoreBarService } from './services/scorebar.service';
import { LogoComponent } from './logo/logo.component';
import { NotespaceService } from './services/notespace.service';
import { NotespaceComponent } from './components/notespace/notespace.component';
import { DialogComponent } from './components/dialog/dialog.component';

const routes = [
  { path: 'register', component: RegistrationComponent},
  { path: 'login', component: LoginComponent },
  { path: '', component: CategoryListComponent },
  { path: 'scorebars', component: ScoreBarsComponent },
  { path: 'personalnotes', component: NotespaceComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegistrationComponent,
    LoginComponent,
    // HomeComponent,
    CategoryListComponent,
    ScoreBarsComponent,
    CategoryListComponent,
    NotespaceComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule,
    MatSelectModule
  ],
  providers: [
    AuthService,
    CategoryService,
    ScoreBarService,
    NotespaceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
