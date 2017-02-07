import { Answer } from './answer';

export class Question {
  id: number;
  answers: Answer[];
  correct: boolean;
  largeImage: string;
  number: number;
  questionText: string;
  smallImage: string;
  state: string;
  submittedAnswer: Answer;
}
