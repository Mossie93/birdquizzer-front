import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { Quiz } from '../../models/quiz';
import { Question } from '../../models/question';
import { QuizService } from '../../services/quiz.service';

@Component({
  moduleId: module.id,
  selector: 'quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  constructor(
    private quizService: QuizService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) {}

  activeQuestion: Question;
  quiz: Quiz;

  ngOnInit(): void {
    this.getQuiz();
  }

  getQuiz(): void {
    const quizNumber = this.route.snapshot.params['number'];
    this.quizService.getQuiz(quizNumber)
      .then(quiz => {
        this.quiz = quiz;
        this.setActiveQuestion();
      });
  }

  setActiveQuestion(): void {
    const pendingQuestion = this.quiz.questions.find(question => question.state === 'pending');
    if(pendingQuestion) {
      this.activeQuestion = pendingQuestion;
    } else {
      this.router.navigate(['/summary', this.quiz.number]);
    }
  }

  changeQuestion(oldQuestion): void {
    this.quiz.questions[this.activeQuestion.number - 1] = oldQuestion;
    this.setActiveQuestion();
  }
}
