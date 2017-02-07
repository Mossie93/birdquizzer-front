import { Component, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { QuestionService } from '../../services/question.service';
import { Question } from '../../models/question';
import { Answer } from '../../models/answer';

@Component({
  moduleId: module.id,
  selector: 'quiz-question',
  templateUrl: './quiz-question.component.html',
  styleUrls: ['./quiz-question.component.scss']
})
export class QuizQuestionComponent {
  constructor(
    private questionService: QuestionService,
    private route: ActivatedRoute,
    private location: Location,
  ) {}

  @Input() question: Question;
  @Input() questionsLength: number;

  isAnswerMarked(answer: Answer): boolean {
    return answer === this.question.submittedAnswer;
  }

  answersList(): Answer[] {
    return this.question.answers;
  }

  markAnswer(answer: Answer): void {
    this.question.submittedAnswer = answer;
  }
}
