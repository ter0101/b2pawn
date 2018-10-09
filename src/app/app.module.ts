import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { NavbarComponent } from './reuse-component/navbar/navbar.component';
import { FooterComponent } from './reuse-component/footer/footer.component';
import { PawnerComponent } from './pawner/pawner.component';
import { PawnshopComponent } from './pawnshop/pawnshop.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

import {RouterModule, Routes} from '@angular/router';
import { FormsModule } from "@angular/forms";
import { AngularFireAuthModule } from 'angularfire2/auth';

import { environment } from "../environments/environment";
import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { PostComponent } from './pawner/post/post.component';

import { PawnerRegisterService } from "./service/pawner/register.service";
import { PawnerPledgeComponent } from './pawner/pawner-pledge/pawner-pledge.component';

const routes: Routes = [
  {
    path:'', component: IndexComponent
  },
  { 
    path: 'login', component: LoginComponent 
  },
  { 
    path: 'register', component: RegisterComponent 
  },
  {
    path: 'pawner-pledge', component: PawnerPledgeComponent
  }  
];


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NavbarComponent,
    FooterComponent,
    PawnerComponent,
    PawnshopComponent,
    LoginComponent,
    RegisterComponent,
    PostComponent,
    PawnerPledgeComponent  
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'angularfs'),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [PawnerRegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
