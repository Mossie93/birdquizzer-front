import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { environment } from '../../environments/environment';

import { Question } from '../models/question';

@Injectable()
export class QuestionService {
  private questionsUrl = `${environment.apiHost}/api/v2/questions`;
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {}

  updateQuestion(question: Question): Promise<Question> {
    const url = `${this.questionsUrl}/${question.id}`;
    const updatedQuestion = { question: { submitted_answer_id: question.submittedAnswer.id } };
    return this.http.put(url, JSON.stringify(updatedQuestion), { headers: this.headers })
      .toPromise()
      .then(response => response.json().question as Question)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occured', error);
    return Promise.reject(error.message || error);
  }
}
