import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './homepage/signin/signin.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SingupComponent } from './homepage/singup/singup.component';
const routes: Routes = [
{path:'homepage',component:HomepageComponent},
{path:'signin',component:SigninComponent},
{path:'signup',component:SingupComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
