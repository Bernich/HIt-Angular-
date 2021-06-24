import { IQuiz } from "src/app/admin/shared/models/question.model"

export class Enrollment {

  constructor() { }

  email: string
  firstname: string
  lastname: string
  phonenumber: string
  course_id: string
  course_name: string

  quiz: IQuiz
}

// enrollments
