import { Component, Input } from '@angular/core';
import { Answer } from '../../models/answer';

@Component({
  moduleId: module.id,
  selector: 'summary-answer',
  templateUrl: './summary-answer.component.html',
  styleUrls: ['./summary-answer.component.scss']
})
export class SummaryAnswerComponent {
  @Input() answer: Answer;

  correctnessClass(): string {
    if(this.answer.correct) {
      return 'correct';
    } else if(this.answer.marked) {
      return 'incorrect';
    } else {
      return 'neutral';
    }
  }

  correctnessMarker(): string {
    if(this.answer.correct) {
      return 'lens';
    } else if(this.answer.marked) {
      return 'radio_button_checked';
    } else {
      return 'radio_button_unchecked';
    }
  }
}
