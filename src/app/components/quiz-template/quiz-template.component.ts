import { Component, Input, Output, EventEmitter } from '@angular/core';
import { QuizTemplate } from '../../models/quiz-template';

@Component({
  moduleId: module.id,
  selector: 'quiz-template',
  templateUrl: './quiz-template.component.html',
  styleUrls: ['./quiz-template.component.scss']
})
export class QuizTemplateComponent {
  @Input() quizTemplate: QuizTemplate;
  @Output() selectedQuiz = new EventEmitter();

  quizTemplateSelected(): void {
    this.selectedQuiz.emit(this.quizTemplate);
  }

  range(count: number): number[] {
    let numbersArray = [];
    for(let i = 0; i < count; ++i) {
      numbersArray.push(i+1)
    }
    return numbersArray;
  }
}
