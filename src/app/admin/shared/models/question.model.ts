import { v4 as uuidv4 } from 'uuid';


export type LINEAR_SCALE = "LINEAR_SCALE";
export type MULTIPLE_CHOICE = "MULTIPLE_CHOICE";
export type SHORT_ANSWER = "SHORT_ANSWER";
export type CHECKBOXES = "CHECKBOXES";

export type QuestionType = LINEAR_SCALE | MULTIPLE_CHOICE | SHORT_ANSWER | CHECKBOXES;


export const QuestionInputTypes = [
  { name: "Short Answer", value: "SHORT_ANSWER" },
  { name: "Linear Scale", value: "LINEAR_SCALE" },
  { name: "Multiple Choice", value: "MULTIPLE_CHOICE" },
  { name: "Checkboxes", value: "CHECKBOXES" },
];


export interface IQuiz {


  id: string;
  description: string;
  questions: IQuestion[];
}

export class Quiz implements IQuiz {
  constructor() {
    this.id = uuidv4();
    this.questions = [];
    this.description = "this is a quiz description";
  }

  id: string;
  description: string;
  questions: IQuestion[] = [];

}


export interface IQuestionAnswer {
  id: string;
  answer: string;
  ticked?: boolean
}

export class Options implements IQuestionAnswer {
  id: string;
  answer: string;
  ticked: boolean;


  constructor() {
    this.id = uuidv4();
    this.ticked = false;
  }

}

export class QuestionAnswer implements IQuestionAnswer {

  constructor(
    public id: string,
    public answer: string
  ) {
  }

}



export interface IQuestion {
  id: string;
  question: string;
  question_type: QuestionType;
  cateogry: string;
  user_answers?: QuestionAnswer[];
  answers?: Options[] | QuestionAnswer[];
  correct_answers?: QuestionAnswer[];
  linear_scale?: ILinearScaleInputType
}




export interface ILinearScaleInputType {

  min: number;
  max: number;

  min_label?: string;
  max_label?: string;
}

export class LinearScaleInputType implements ILinearScaleInputType {

  constructor() {
    this.min = 1;
    this.max = 4;
  }

  min: number;
  max: number;
  min_label?: string;
  max_label?: string;

}
export class CreateQuestion implements IQuestion {
  constructor() {
    this.id = uuidv4();
    this.question_type = "SHORT_ANSWER";
    this.linear_scale = new LinearScaleInputType();

  }
  id: string;
  question: string;
  question_type: QuestionType;
  cateogry: string;
  answers?: Options[] | QuestionAnswer[];
  correct_answers?: QuestionAnswer[];

  linear_scale?: LinearScaleInputType
}


