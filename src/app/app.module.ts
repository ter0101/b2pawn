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

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NavbarComponent,
    FooterComponent,
    PawnerComponent,
    PawnshopComponent,
    LoginComponent,
    RegisterComponent  
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
