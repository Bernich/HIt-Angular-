import { CreateCourseDTO, CreateSectionDTO, ISectionDTO } from "../dto/create-course.dto";
import { Course, CreateCourse, CreateSection, IInstructor, ISection, IUser, Resource } from "../models";
import { v4 as uuidv4 } from 'uuid';
import { IQuestion, Options, QuestionAnswer } from "../models/question.model";

export class CourseMapper {


  /**
   * Convert sourse to a create course model
   * @param course
   * @returns
   */
  static convertToDTO(course: CreateCourse): CreateCourseDTO {
    const new_course = new CreateCourseDTO();

    new_course.name = course.name;
    new_course.course_id = course.course_id;
    new_course.overview = course.overview;
    new_course.skill_level = course.skill_level;

    new_course.description = course.description;
    new_course.duration = course.duration;

    new_course.base_price = course.base_price;

    new_course.career_paths = course.career_paths ? course.career_paths.map((data: Resource) => data.value) : [];
    new_course.teaching_resources = course.teaching_resources ? course.teaching_resources : [];

    new_course.what_you_will_learn = course.what_you_will_learn;
    new_course.prerequisites = course.prerequisites;
    // new_course.publicity_status = course.publicity_status;
    new_course.with_certification = course.with_certification;
    new_course.instructors = course.instructors;
    new_course.developers = course.developers;

    new_course.thumbnail_data = course.thumbnail_data;
    new_course.banner_data = course.banner_data;

    new_course.curriculum = this.mapCurricullum(course.curriculum);

    // Map course out
    new_course.quiz = course.quiz;
    new_course.quiz.questions = (course.quiz.questions !== null || course.quiz.questions !== undefined) ? this.removeTickedFromOptions(course.quiz.questions) : [];

    return new_course;
  }

  /**
   * Removes all ticked from options model
   * @param questions
   * @returns
   */
  static removeTickedFromOptions(questions: IQuestion[]) {
    let CHECKBOXESTYPE = "CHECKBOXES";
    let MULTIPLE_CHOICETYPE = "MULTIPLE_CHOICE";
    let SIMPLE_ANSWER_CHOICETYPE = "SHORT_ANSWER";

    const new_questions: IQuestion[] = [];


    for (const question of questions) {
      // If it is checkbox or multiple choice then it definitely has a ticked in it
      if (question.question_type === MULTIPLE_CHOICETYPE || question.question_type === CHECKBOXESTYPE) {
        // go through all options and parse them

        question.linear_scale = null;
        const answers = [];
        const correct_answers = [];

        // Map through questions and fill correct answers against answers
        question.answers.forEach((answer: Options) => {
          const new_answer = new QuestionAnswer(answer.id, answer.answer);
          if (answer.ticked) correct_answers.push(new_answer);

          answers.push(new_answer);
        });

        // set new answers
        question.answers = answers;
        question.correct_answers = correct_answers;

        new_questions.push(question);
      }

      else if (question.question_type === SIMPLE_ANSWER_CHOICETYPE) {

        question.linear_scale = null;
        new_questions.push(question);
      }
      else {
        new_questions.push(question);
      }
    }


    return new_questions;
  }

  /**
   *  Map curriculum by removing all unwanted fields when creating course
   * @param sections
   * @returns  ISectionDTO[]
   */
  static mapCurricullum(sections: ISection[]) {
    const new_sections: ISectionDTO[] = [];

    for (const section of sections) {
      const createSection = new CreateSectionDTO(
        section.id,
        section.course_id,
        section.name,
        section.lessons,
        section.duration + ""
      );

      new_sections.push(createSection);
    }

    return new_sections;
  }

  /**
   * Converts a course object back into a Create course model
   * @param course
   * @returns
   */
  static convertToCreate(course: Course) {

    const new_course = new CreateCourse();

    new_course.name = course.name;
    new_course.course_id = course.course_id;
    new_course.overview = course.overview;
    new_course.skill_level = course.skill_level;

    new_course.description = course.description;
    new_course.duration = course.duration;

    new_course.base_price = course.base_price;

    new_course.career_paths = course.career_paths ? course.career_paths.map((data: string) => new Resource(uuidv4(), data)) : []
    new_course.teaching_resources = course.teaching_resources ? course.teaching_resources : []
    new_course.what_you_will_learn = course.what_you_will_learn ? course.what_you_will_learn : [];
    new_course.prerequisites = course.prerequisites ? course.prerequisites : [];
    new_course.with_certification = course.with_certification;
    new_course.instructors = course.instructors ? course.instructors.map((instructor: IInstructor) => instructor.instructor_id) : [];
    new_course.developers = course.developers ? course.developers.map((developer: IUser) => developer.user_id) : [];

    new_course.thumbnail_data = course.thumbnail_data;
    new_course.banner_data = course.banner_data;

    new_course.curriculum = this.convertCurricullum(course.curriculum);

    // Map course out
    new_course.quiz = course.quiz;
    new_course.quiz.questions = (course.quiz.questions !== null || course.quiz.questions !== undefined) ? course.quiz.questions : this.addTickedFromOptions(course.quiz.questions);

    return new_course;
  }

  /**
   * Tickes Correct options from the answers list
   * @param questions
   * @returns
   */
  static addTickedFromOptions(questions: IQuestion[]) {
    let CHECKBOXESTYPE = "CHECKBOXES";
    let MULTIPLE_CHOICETYPE = "MULTIPLE_CHOICE";
    let SIMPLE_ANSWER_CHOICETYPE = "SHORT_ANSWER";

    const new_questions: IQuestion[] = [];


    for (const question of questions) {
      // If it is checkbox or multiple choice then it definitely has a ticked in it
      if (question.question_type === MULTIPLE_CHOICETYPE || question.question_type === CHECKBOXESTYPE) {
        // go through all options and parse them

        question.linear_scale = null;
        const answers: Options[] = [];
        const correct_answers: QuestionAnswer[] = [];

        // Map through questions and fill correct answers against answers
        question.answers.forEach((answer: Options) => {
          const new_answer = new Options();
          new_answer.id = answer.id;
          new_answer.answer = answer.answer;


          // Verify if its part of the answers and tick
          question.correct_answers.forEach((c_answer: QuestionAnswer) => {
            if (c_answer.id === answer.id) new_answer.ticked = true;
          });

          // if it is ticked also push it back to the correct answers
          // TODO : Check if its not required
          if (answer.ticked) correct_answers.push(new_answer);

          answers.push(new_answer);
        });

        // set new answers
        question.answers = answers;
        question.correct_answers = correct_answers;

        new_questions.push(question);
      }

      else if (question.question_type === SIMPLE_ANSWER_CHOICETYPE) {

        question.linear_scale = null;
        new_questions.push(question);
      }
      else {
        new_questions.push(question);
      }
    }


    return new_questions;
  }

  static convertCurricullum(sections: ISection[]): CreateSection[] {
    const new_sections: CreateSection[] = [];

    for (const section of sections) {
      const createSection = new CreateSection(
        section.course_id
      );

      createSection.name = section.name;
      createSection.duration = section.duration;
      createSection.lessons = section.lessons;

      new_sections.push(createSection);
    }

    return new_sections;
  }
}
