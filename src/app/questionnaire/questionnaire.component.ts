import { Component, OnInit } from '@angular/core';
import { QUESTIONS, Question, Personality } from './questions';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})
export class QuestionnaireComponent implements OnInit {
  questions: Array<Question> = [];
  activeQuestion = 0;
  results = null;

  constructor() {}

  ngOnInit() {
    this.loadOrInitializeState();
  }

  prevQuestion() {
    if (this.activeQuestion > 0) {
      this.activeQuestion--;
    }
  }

  nextQuestion() {
    if (this.activeQuestion === this.questions.length - 1) {
      this.results = this.calculateResults(this.questions);
    }
    this.activeQuestion++;
    this.saveState();
  }

  restart() {
    this.activeQuestion = 0;
    this.resetState();
    this.loadOrInitializeState();
  }

  toPoint(sornNumber) {
    switch (sornNumber % 4) {
      case 0:
        return 2;
      case 1:
        return 1;
      case 2:
        return -1;
      case 3:
        return -2;
    }
  }

  calculateResults(questions: Array<Question>) {
    const result = [
      {
        title: 'C',
        key: Personality.C,
        value: 0
      },
      {
        title: 'D',
        key: Personality.D,
        value: 0
      },
      {
        title: 'S',
        key: Personality.S,
        value: 0
      },
      {
        title: 'I',
        key: Personality.I,
        value: 0
      }
    ];

    for (let i = 0; i < questions.length; i++) {
      for (let j = 0; j < questions[i].answers.length; j++) {
        result.find(r => r.key === questions[i].answers[j].personality).value += this.toPoint(j % 4);
      }
    }

    return result;
  }

  saveState() {
    localStorage.setItem('questions', JSON.stringify(this.questions));
    localStorage.setItem('activeQuestion', this.activeQuestion.toString());
  }

  resetState() {
    localStorage.removeItem('questions');
    localStorage.removeItem('activeQuestion');
    window.location.reload();
  }

  loadOrInitializeState() {
    this.questions = JSON.parse(localStorage.getItem('questions'));
    this.activeQuestion = JSON.parse(localStorage.getItem('activeQuestion'));

    if (this.questions === null) {
      this.questions = [ ...QUESTIONS ];
      this.activeQuestion = 0;
    }

    if (this.activeQuestion === this.questions.length) {
      this.results = this.calculateResults(this.questions);
    }
  }
}
