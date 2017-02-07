import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from '../components/login/login.component';
import { QuizTemplatesComponent } from '../components/quiz-templates/quiz-templates.component';
import { QuizComponent } from '../components/quiz/quiz.component';
import { SummaryComponent } from '../components/summary/summary.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'choose-quiz', component: QuizTemplatesComponent },
  { path: 'quiz/:number', component: QuizComponent },
  { path: 'summary/:number', component: SummaryComponent },
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule {}
