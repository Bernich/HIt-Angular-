import { FileData } from "../models";

export interface ICreateCourse {
  post_id?: string;
  title: string;
  content?: string;
  post_category?: string;
  publicity_status?: boolean;
  authors?: string[];
  header_image?: FileData;
}

export class CreateCourseDTO implements ICreateCourse {
  constructor(
    public title: string,
    public content: string,
    public course_category: string,
    public publicity_status: boolean,
    public authors_id: string[],
    public header_image: FileData
  ) {

  }


}
