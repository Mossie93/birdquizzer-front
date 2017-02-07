import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';

import { Quiz } from '../../models/quiz';
import { QuizService } from '../../services/quiz.service';

@Component({
  moduleId: module.id,
  selector: 'summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  constructor(
    private quizService: QuizService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {}

  quiz: Quiz;

  ngOnInit(): void {
    this.getQuiz();
  }

  getQuiz(): void {
    const quizNumber = this.route.snapshot.params['number'];
    this.quizService.getQuiz(quizNumber)
      .then(quiz => this.quiz = quiz);
  }
}
