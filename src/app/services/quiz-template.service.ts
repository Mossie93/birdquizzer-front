import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../environments/environment';

import { QuizTemplate } from '../models/quiz-template';

@Injectable()
export class QuizTemplateService {
  private quizTemplatesUrl = `${environment.apiHost}/api/v2/quiz_templates`;
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {}

  getQuizTemplates(): Promise<QuizTemplate[]> {
    return this.http.get(this.quizTemplatesUrl)
      .toPromise()
      .then(response => response.json().quizTemplates as QuizTemplate[])
      .catch(this.handleError);
  }

  getQuizTemplate(id: number): Promise<QuizTemplate> {
    const url = `${this.quizTemplatesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().quizTemplate as QuizTemplate)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occured', error);
    return Promise.reject(error.message || error);
  }
}
