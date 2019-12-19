import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LenomdevotrecomponentComponent } from './lenomdevotrecomponent/lenomdevotrecomponent.component';


const routes: Routes = [
  {path: '**', component: LenomdevotrecomponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
