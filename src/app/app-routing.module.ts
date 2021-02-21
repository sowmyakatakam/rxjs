import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './includes/header/header.component';
import { PromiseComponent } from './promise/promise.component';

const routes: Routes = [
  {path: 'promise', component:PromiseComponent},
  {path: 'header', component:HeaderComponent},
  //{path: '**', component:PromiseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
