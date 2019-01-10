import { QuestionsComponent } from './questions/questions.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarcoComponent } from './marco/marco.component';
import { ParseComponent } from './parse/parse.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {
    path: '', component: MarcoComponent
  },
  {
    path: 'marcopolo', component: MarcoComponent
  },
  {
    path: 'questions', component: QuestionsComponent
  },
  {
    path: 'parse', component: ParseComponent
  },
  {
    path: '**', component: NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
