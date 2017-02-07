import { Component, Input } from '@angular/core';
import { Question } from '../../models/question';
import { Answer } from '../../models/answer';

@Component({
  moduleId: module.id,
  selector: 'summary-question',
  templateUrl: './summary-question.component.html',
  styleUrls: ['./summary-question.component.scss']
})
export class SummaryQuestionComponent {
  @Input() question: Question;
  @Input() questionsCount: number;
  isCollapsed: boolean = true;

  toggleAnswers(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  isMarked(answer: Answer): boolean {
    return answer === this.question.submittedAnswer;
  }
}
