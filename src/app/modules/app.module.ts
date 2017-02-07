import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from '../components/app/app.component';
import { QuizComponent } from '../components/quiz/quiz.component';
import { QuizQuestionComponent } from '../components/quiz-question/quiz-question.component';
import { QuizAnswerComponent } from '../components/quiz-answer/quiz-answer.component';
import { QuizTemplateComponent } from '../components/quiz-template/quiz-template.component';
import { QuizTemplatesComponent } from '../components/quiz-templates/quiz-templates.component';
import { QuizTemplateDetailsComponent } from '../components/quiz-template-details/quiz-template-details.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { LoginComponent } from '../components/login/login.component';
import { QuizNavigationComponent } from '../components/quiz-navigation/quiz-navigation.component';
import { SummaryComponent } from '../components/summary/summary.component';
import { SummaryQuestionComponent } from '../components/summary-question/summary-question.component';
import { SummaryAnswerComponent } from '../components/summary-answer/summary-answer.component';

import { QuestionService } from '../services/question.service';
import { QuizTemplateService } from '../services/quiz-template.service';
import { QuizService } from '../services/quiz.service';

import { ModalModule } from 'ng2-bootstrap/modal';
import { CollapseModule } from 'ng2-bootstrap/collapse';

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    QuizQuestionComponent,
    QuizAnswerComponent,
    QuizTemplateComponent,
    QuizTemplatesComponent,
    QuizTemplateDetailsComponent,
    NavbarComponent,
    LoginComponent,
    QuizNavigationComponent,
    SummaryComponent,
    SummaryQuestionComponent,
    SummaryAnswerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    CollapseModule.forRoot(),
  ],
  providers: [
    QuestionService,
    QuizTemplateService,
    QuizService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
