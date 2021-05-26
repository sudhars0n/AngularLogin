import { AuthguardGuard } from './authguard.guard';
import { UserService } from './user.service';
import { InvalidComponent } from './invalid/invalid.component';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { DashbordComponent } from './dashbord/dashbord.component';

const appRoutes : Routes =[
  {
    path:'',
    component:LoginFormComponent
  },
  {
  path:'dashbord',
  canActivate:[AuthguardGuard],

  component:DashbordComponent
 },
 {
   path:'invalid',
   component:InvalidComponent
 }
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginFormComponent,
    FooterComponent,
    DashbordComponent,
    InvalidComponent
        
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule
    
  ],
  providers: [UserService,AuthguardGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
