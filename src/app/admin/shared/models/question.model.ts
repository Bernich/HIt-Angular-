import { v4 as uuidv4 } from 'uuid';

export type QuestionType = "INPUT" | "OPTIONS";

export interface IQuestionAnswer {
  id: string;
  answer: string;
}


export class QuestionAnswer implements IQuestionAnswer {
  id: string;
  answer: string;

  constructor() {
    this.id = uuidv4();
  }
}


export interface IQuestion {
  id: string;
  question: string;
  questionType: QuestionType;
  cateogry: string;
  user_answers?: QuestionAnswer[];
  answers: QuestionAnswer[];
  correct_answers: QuestionAnswer[];
}


export class CreateQuestion implements IQuestion {
  constructor() {
    this.id = uuidv4();
  }
  id: string;
  question: string;
  questionType: QuestionType;
  cateogry: string;
  answers: QuestionAnswer[];
  correct_answers: QuestionAnswer[];
}


