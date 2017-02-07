import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Quiz } from '../../models/quiz';
import { Question } from '../../models/question';
import { QuestionService } from '../../services/question.service';

@Component({
  moduleId: module.id,
  selector: 'quiz-navigation',
  templateUrl: './quiz-navigation.component.html',
  styleUrls: ['./quiz-navigation.component.scss']
})
export class QuizNavigationComponent {
  @Input() question: Question;
  @Input() quiz: Quiz;
  @Output() questionAnswerTrigger = new EventEmitter();

  constructor(
    private questionService: QuestionService,
    private router: Router
  ) {}

  answerQuestion(): void {
    this.questionService.updateQuestion(this.question)
      .then(question => {
        this.questionAnswerTrigger.emit(question);
      });
  }

  shouldBeMarked(question: Question): boolean {
    return question === this.question || !!question.submittedAnswer;
  }
}
