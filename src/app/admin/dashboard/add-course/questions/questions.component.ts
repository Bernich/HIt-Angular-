import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IQuestion } from 'src/app/admin/shared/models/question.model';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionComponent implements OnInit {

  @Output() removeLesson = new EventEmitter();
  @Input() question: IQuestion;
  @Input() position: number;

  difficultyLevel = ['Begginer', 'Intermediate', 'Proffesional'];

  lessonTypes = ['Document', 'Video', 'Audio', 'Quiz'];

  // elements: Question[] = QUIZZES_FAKE_DATA.questions;


  panelOpenState = false;
  constructor(
  ) { }

  ngOnInit(): void {

  }


  /**
   *  When a question is dropped, rearrange the order of the questions
   * @param event
   */
  drop(event: CdkDragDrop<string[]>) {
    // moveItemInArray(this.createCourse.course.curriculum[this.section_position].lessons[this.lesson_position].quiz.questions, event.previousIndex, event.currentIndex);
  }


  /**
   * Adds a single question
   */
  addQuestion() {
    // const new_question: Question = new NewQuestion();
    // this.createCourse.course.curriculum[this.section_position].lessons[this.lesson_position].quiz.questions.push(new_question);
  }

  /**
   *  Adds an option to the list of options for a particular question
   * @param position
   */
  addOption(position: number) {
    // const new_answer: Option = new Option();

    // this.createCourse.course.curriculum[this.section_position].lessons[this.lesson_position].quiz.questions[position].answers.push(new_answer);
  }

  /**
   * Removes a question from a set of questions
   * @param position
   */
  removeQuestion(position: number) {
    // this.createCourse.course.curriculum[this.section_position].lessons[this.lesson_position].quiz.questions = this.createCourse.course.curriculum[this.section_position].lessons[this.lesson_position].quiz.questions.filter((elem, index) => index !== position);
  }

  /**
   * Remove an option from a question
   * @param question_position
   * @param option_position
   */
  removeOption(question_position: number, option_position: number) {
    // this.createCourse.course.curriculum[this.section_position].lessons[this.lesson_position].quiz.questions[question_position].answers = this.createCourse.course.curriculum[this.section_position].lessons[this.lesson_position].quiz.questions[question_position].answers.filter((elem, index) => index !== option_position);
  }


  /**
   * Update Question as either multiple choice or not
   * @param question_position
   * @param event
   */
  updateMultipleChoice(question_position: number, event) {
    // this.createCourse.course.curriculum[this.section_position].lessons[this.lesson_position].quiz.questions[question_position].multiple_correct_answers = event;

    this.resetSelectedOptions(question_position);
  }


  /**
   * Tick set of options or answers as the correct answers
   * @param question_position
   * @param option_position
   * @param ticked
   */
  tickSelectedOption(question_position: number, option_position: number, ticked: boolean) {

    // if is multiple choice
    // if (!this.createCourse.course.curriculum[this.section_position].lessons[this.lesson_position].quiz.questions[question_position].multiple_correct_answers) {
    //   // reset selected options
    //   this.resetSelectedOptions(question_position);
    // }

    // // tick
    // this.createCourse.course.curriculum[this.section_position].lessons[this.lesson_position].quiz.questions[question_position].answers[option_position].ticked = ticked;

    // add to correct addToAnswersList
    this.addToAnswersList(question_position);
  }

  /**
   * Reset Options / answers for a particular question
   * @param question_position
   */
  resetSelectedOptions(question_position: number,) {
    // this.createCourse.course.curriculum[this.section_position].lessons[this.lesson_position].quiz.questions[question_position].answers.forEach((option: Option) => {
    //   option.ticked = false;
    // });
  }

  /**
   * Adds a specified answer to the correct answer list
   * @param question_position
   */
  addToAnswersList(question_position: number) {
    // reset answers
    // this.resetCorrectAnswersList(question_position);
    // this.createCourse.course.curriculum[this.section_position].lessons[this.lesson_position].quiz.questions[question_position].answers.forEach((option: OptionAnswer) => {

    //   // Push ticked answers to the correct answer arraylist
    //   if (option.ticked) {
    //     const ans = new Answers(option.id, option.answer);
    //     this.createCourse.course.curriculum[this.section_position].lessons[this.lesson_position].quiz.questions[question_position].correct_answers.push(ans)
    //   }
    // });

  }

  /**
   * Reset all the Correct Answers array
   * @param question_position
   */
  resetCorrectAnswersList(question_position: number) {
    // this.createCourse.course.curriculum[this.section_position].lessons[this.lesson_position].quiz.questions[question_position].correct_answers = [];
  }



}
