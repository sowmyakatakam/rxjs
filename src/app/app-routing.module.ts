import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './includes/header/header.component';
import { CardsComponent } from './keepnote/cards/cards.component';
import { ExpenseComponent } from './keepnote/expense/expense.component';
import { KeepnoteComponent } from './keepnote/keepnote.component';
import { ScrribleComponent } from './keepnote/scrrible/scrrible.component';
import { FromEventComponent } from './observable/from-event/from-event.component';
import { IntervalComponent } from './observable/interval/interval.component';
import { ListComponent } from './observable/list/list.component';

import { ObservableComponent } from './observable/observable.component';
import { OfFromComponent } from './observable/of-from/of-from.component';
import { PromiseComponent } from './promise/promise.component';

const routes: Routes = [
  {path: 'promise', component:PromiseComponent},
  {path: 'header', component:HeaderComponent},
  //{path: '**', component:PromiseComponent},
  {path: 'observable', component:ObservableComponent, children :[
    {path:'', component: ListComponent},
    {path:'from-event', component: FromEventComponent},
    {path:'interval', component: IntervalComponent},
    {path:'of-from', component: OfFromComponent}
  ]},
  {path:'keepnote', component:KeepnoteComponent, children :[
    {path:'', component:CardsComponent},
    {path:'expense', component:ExpenseComponent},
    {path:'scrrible', component:ScrribleComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
