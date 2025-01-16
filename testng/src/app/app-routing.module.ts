import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { AddheroComponent } from './addhero/addhero.component';
import { ShowlistComponent } from './showlist/showlist.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [

  { path: 'first', component: FirstComponent },
  { path: 'add' , component: AddheroComponent},
  { path: 'show', component: ShowlistComponent},
  { path: 'table', component: TableComponent},
  { path: "**", component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
