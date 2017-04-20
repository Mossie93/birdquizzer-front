"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var quiz_template_details_component_1 = require("./quiz-template-details.component");
var quiz_service_1 = require("../../services/quiz.service");
var quiz_template_1 = require("../../models/quiz-template");
var router_1 = require("@angular/router");
describe('QuizTemplateDetailsComponent', function () {
    var compiled;
    var quizServiceStub = {
        createQuiz: function (_id) { },
    };
    var routerStub = {
        navigate: function (_url) { },
    };
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [quiz_template_details_component_1.QuizTemplateDetailsComponent],
            providers: [
                { provide: quiz_service_1.QuizService, useValue: quizServiceStub },
                { provide: router_1.Router, useValue: routerStub },
            ],
        });
        testing_1.TestBed.compileComponents();
    }));
    describe('When quiz is present', function () {
        beforeEach(function () {
            var fixture = testing_1.TestBed.createComponent(quiz_template_details_component_1.QuizTemplateDetailsComponent);
            var quizTemplate = new quiz_template_1.QuizTemplate(1, 'Template', 'Template2', 'Author', 'Name');
            fixture.componentInstance.quizTemplate = quizTemplate;
            fixture.detectChanges();
            compiled = fixture.debugElement.nativeElement;
        });
        it('Should display quiz name', function () {
            expect(compiled.querySelector('.quiz-template-details__title').textContent).toContain('Name');
        });
        it('Should display quiz description', function () {
            expect(compiled.querySelector('.quiz-template-details__paragraph').textContent).toContain('Template2');
        });
        it('Should enable "Take quiz" button', function () {
            expect(compiled.querySelector('.quiz-template-details__start-button').textContent).toContain('');
        });
    });
    describe('When quiz is present', function () {
        beforeEach(function () {
            var fixture = testing_1.TestBed.createComponent(quiz_template_details_component_1.QuizTemplateDetailsComponent);
            fixture.detectChanges();
            compiled = fixture.debugElement.nativeElement;
        });
        it('Should display "Take quiz"', function () {
            expect(compiled.querySelector('.quiz-template-details__title').textContent).toContain('Take Quiz');
        });
        it('Should display instructions for taking a quiz', function () {
            expect(compiled.querySelector('.quiz-template-details__paragraph').textContent).toContain('Select quiz on the left side and press "Start Quiz" to begin your birding adventure!');
        });
        it('Should disable "Take quiz" button', function () {
            expect(compiled.querySelector('.quiz-template-details__start-button')).toHaveClass('.disabled');
        });
    });
});
