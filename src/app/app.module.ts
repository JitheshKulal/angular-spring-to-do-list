import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TokenService } from './token.service';
import { HeaderComponent } from  './header/header.component';
import { FooterComponent } from  './footer/footer.component';
import { LoginComponent } from  './login/login.component';
import { HomeComponent } from  './home/home.component';
import { AddtaskComponent } from  './addtask/addtask.component';
import { TasklistComponent } from  './tasklist/tasklist.component';
import { TodoService } from './todo.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    AddtaskComponent,
    TasklistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [TokenService, TodoService],
  bootstrap: [AppComponent],
  exports: [AppComponent]
})
export class AppModule { }
