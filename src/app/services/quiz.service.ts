import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../environments/environment';

import { Quiz } from '../models/quiz';

@Injectable()
export class QuizService {
  private quizzesUrl = `${environment.apiHost}/api/v2/quizzes`;
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {}

  getQuiz(id: number): Promise<Quiz> {
    const url = `${this.quizzesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().quiz as Quiz)
      .catch(this.handleError);
  }

  createQuiz(quizTemplateId): Promise<Quiz> {
    const quiz = { quiz: { quiz_template_id: quizTemplateId }};
    return this.http.post(this.quizzesUrl, JSON.stringify(quiz), { headers: this.headers })
      .toPromise()
      .then(response => response.json().quiz as Quiz)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occured', error);
    return Promise.reject(error.message || error);
  }
}
