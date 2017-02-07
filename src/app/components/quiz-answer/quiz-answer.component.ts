import { Component, Input } from '@angular/core';
import { Answer } from '../../models/answer';

@Component({
  moduleId: module.id,
  selector: 'quiz-answer',
  templateUrl: './quiz-answer.component.html',
  styleUrls: ['./quiz-answer.component.scss']
})
export class QuizAnswerComponent {
  @Input() answer: Answer;
  @Input() marked: boolean;
}
