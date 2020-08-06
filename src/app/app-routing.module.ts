import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from  './header/header.component';
import { FooterComponent } from  './footer/footer.component';
import { LoginComponent } from  './login/login.component';
import { HomeComponent } from  './home/home.component';
import { AddtaskComponent } from  './addtask/addtask.component';
import { TasklistComponent } from  './tasklist/tasklist.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '**', component: HomeComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
