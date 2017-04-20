/* tslint:disable:no-unused-variable */

import {} from 'jasmine';
import { TestBed, async } from '@angular/core/testing';
import { QuizTemplateDetailsComponent } from './quiz-template-details.component';
import { QuizService } from '../../services/quiz.service';
import { QuizTemplate } from '../../models/quiz-template';
import { Router } from '@angular/router';

describe('QuizTemplateDetailsComponent', () => {
  let compiled;

  let quizServiceStub = {
    createQuiz(_id){},
  };
  let routerStub = {
    navigate(_url){},
  };

  beforeEach( async(() => {
    TestBed.configureTestingModule({
      declarations: [QuizTemplateDetailsComponent],
      providers: [
        { provide: QuizService, useValue: quizServiceStub },
        { provide: Router, useValue: routerStub },
      ],
    });
    TestBed.compileComponents();
  }));

  describe('When quiz is present', () => {
    beforeEach(() => {
      const fixture = TestBed.createComponent(QuizTemplateDetailsComponent);
      let quizTemplate = new QuizTemplate(1, 'Template', 'Template2', 'Author', 'Name');
      fixture.componentInstance.quizTemplate = quizTemplate;
      fixture.detectChanges();
      compiled = fixture.debugElement.nativeElement;
    });

    it('Should display quiz name', () => {
      expect(compiled.querySelector('.quiz-template-details__title').textContent).toContain('Name');
    });

    it('Should display quiz description', () => {
      expect(compiled.querySelector('.quiz-template-details__paragraph').textContent).toContain('Template2');
    });

    it('Should enable "Take quiz" button', () => {
      expect(compiled.querySelector('.quiz-template-details__start-button')).not.toBeNull();
      expect(compiled.querySelector('.quiz-template-details__start-button.disabled')).toBeNull();
    });
  });

  describe('When quiz is present', () => {
    beforeEach(() => {
      const fixture = TestBed.createComponent(QuizTemplateDetailsComponent);
      fixture.detectChanges();
      compiled = fixture.debugElement.nativeElement;
    });

    it('Should display "Take quiz"', () => {
      expect(compiled.querySelector('.quiz-template-details__title').textContent).toContain(
        'Take Quiz'
      );
    });

    it('Should display instructions for taking a quiz', () => {
      expect(compiled.querySelector('.quiz-template-details__paragraph').textContent).toContain(
        'Select quiz on the left side and press "Start Quiz" to begin your birding adventure!'
      );
    });

    it('Should disable "Take quiz" button', () => {
      expect(compiled.querySelector('.quiz-template-details__start-button.disabled')).not.toBeNull();
    });
  });
});
