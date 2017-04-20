import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http, RequestOptions } from '@angular/http';
import { provideAuth, AuthHttp, AuthConfig } from 'angular2-jwt';

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
import { Auth } from '../services/auth.service';

import { ModalModule } from 'ng2-bootstrap/modal';
import { CollapseModule } from 'ng2-bootstrap/collapse';

import { AUTH_PROVIDERS } from 'angular2-jwt';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp( new AuthConfig({}), http, options);
}

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
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
