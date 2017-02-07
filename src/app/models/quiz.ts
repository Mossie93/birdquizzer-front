import { Question } from './question';

export class Quiz {
  id: number;
  name: string;
  number: number;
  score: number;
  state: string;
  questions: Question[];
}
