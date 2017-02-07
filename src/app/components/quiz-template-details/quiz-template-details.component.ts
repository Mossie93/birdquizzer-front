import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { QuizTemplate } from '../../models/quiz-template';
import { QuizService } from '../../services/quiz.service';

@Component({
  moduleId: module.id,
  selector: 'quiz-template-details',
  templateUrl: './quiz-template-details.component.html',
  styleUrls: ['./quiz-template-details.component.scss']
})
export class QuizTemplateDetailsComponent {
  @Input() quizTemplate: QuizTemplate;

  constructor(
    private quizService: QuizService,
    private router: Router
  ) {}

  createQuiz() {
    this.quizService.createQuiz(this.quizTemplate.id)
      .then(quiz => {
        this.router.navigate(['/quiz', quiz.number])
      });
  }
}
