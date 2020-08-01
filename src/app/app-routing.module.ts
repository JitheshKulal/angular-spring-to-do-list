import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './notfound/notfound.component';
import { ButtonComponent } from './button/button.component';

const routes: Routes = [{path:"", redirectTo:"button",pathMatch:"full"},
                        {path: "button",component: ButtonComponent},
                        {path: "**",component: NotFoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
