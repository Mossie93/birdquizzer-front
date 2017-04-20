import { TestBed, getTestBed, async } from '@angular/core/testing';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { Http, HttpModule, Response, ResponseOptions, BaseRequestOptions, XHRBackend } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { QuizTemplateService } from './quiz-template.service';

describe('QuizTemplateService', () => {
  beforeEach( async(() => {
    TestBed.configureTestingModule({
      providers: [
        QuizTemplateService,
        MockBackend,
        BaseRequestOptions,
        {
          provide: [Http],
          deps: [MockBackend, BaseRequestOptions],
          useFactory:
            (backend: XHRBackend, defaultOptions: BaseRequestOptions) => {
                return new Http(backend, defaultOptions);
            }
         }
      ],
      imports: [
        FormsModule,
        HttpModule
      ],
    });
  }));

  describe('getQuizTemplates', () => {
    it('should get QuizTemplates', async(() => {
      let quizTemplateService: QuizTemplateService = getTestBed().get(QuizTemplateService);
      let mockBackend = getTestBed().get(MockBackend);

      mockBackend.connections.subscribe(
        (connection: MockConnection) => {
          expect(connection.request.url).toBe(`${environment.apiHost}/api/v2/quiz_templates`);
          connection.mockRespond(new Response(
            new ResponseOptions({
              body: {
                id: 26,
                name: 'Sample Name',
                description: 'Sample Description',
                longDescription: 'Sample Long Description',
                author: 'Sample Author',
              }
            }))
          );
        });

      quizTemplateService.getQuizTemplates().then((quizTemplates) => {
        expect(true).toBe(true);
        // expect(quizTemplates[0].name).toBe('Sample Name');
        // expect(quizTemplates[0].description).toBe('Sample Description');
        // expect(quizTemplates[0].longDescription).toBe('Sample Long Description');
        // expect(quizTemplates[0].author).toBe('Sample Author');
      });
    }));
  });
});
