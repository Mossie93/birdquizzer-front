import { Component, OnInit } from '@angular/core';
import { QuizTemplateService } from '../../services/quiz-template.service';
import { QuizTemplate } from '../../models/quiz-template';

@Component({
  moduleId: module.id,
  selector: 'quiz-templates',
  templateUrl: './quiz-templates.component.html',
  styleUrls: ['./quiz-templates.component.scss']
})
export class QuizTemplatesComponent implements OnInit {
  constructor(private quizTemplateService: QuizTemplateService) {}

  quizTemplates: QuizTemplate[];
  selectedQuiz: QuizTemplate;

  getQuizTemplates(): void {
    this.quizTemplateService.getQuizTemplates().then(quizTemplates => this.quizTemplates = quizTemplates);
  }

  ngOnInit(): void {
    this.getQuizTemplates();
  }

  changeSelectedQuiz(newSelectedQuiz): void {
    this.selectedQuiz = newSelectedQuiz;
  }
}
