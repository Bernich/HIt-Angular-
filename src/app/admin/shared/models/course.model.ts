import { FileData, IInstructor, ProfileImage, Resource } from "src/app/admin/shared/models";
import { v4 as uuidv4 } from 'uuid';

export interface ISection {


  id?: string;
  course_id?: string;
  name: string;
  lessons?: ILesson[];
  duration?: number;
  compeleted?: boolean;
  order?: number
}

export interface ICourse {
  course_id?: string;

  name?: string;
  overview?: string;
  duration?: string;
  base_fee?: number;


  career_path?: string[] | Resource[];
  what_you_will_learn?: Resource[];
  prerequisites?: Resource[];
  publicity_status?: boolean;
  with_certification?: boolean;
  instructors?: string[] | IInstructor[];

  date_created?: string;
  show?: boolean;

  banner?: ProfileImage
  thumbnail?: ProfileImage

  thumbnail_data?: FileData;
  banner_data?: FileData;

  curriculum?: ISection[]
}




export class CreateCourse implements ICourse {
  constructor(

  ) {
    this.publicity_status = this.publicity_status || false;
    this.course_id = uuidv4();
  }

  public name: string = "";
  public course_id: string;
  public overview: string = "";
  public duration: string = "2"
  public publicity_status?: boolean;
  public with_certification?: boolean;

  public instructor?: string[];
  public banner_data: FileData;
  public thumbnail_data: FileData;
  public base_fee: number = 0;
  public curriculum: ISection[] = [];
  public what_you_will_learn: Resource[] = [];
  public prerequisites: Resource[] = [];
  public career_path: Resource[] = [];

}



export interface ILesson {

  id: string;
  content: string;
  course_id?: string;
}


export class CreateLesson implements ILesson {
  constructor(
    courseId: string,
  ) {
    this.id = uuidv4();
    this.course_id = courseId
  }

  public id;
  public content = "this";
  public course_id: string;
}


export class CreateSection implements ISection {
  constructor(
    courseId: string
  ) {
    this.id = uuidv4();
    this.course_id = courseId;
  }

  public id?: string;
  public course_id: string;
  public name: string = "";
  public lessons: ILesson[] = [];
  public duration: number = 0;
}

export class CreatePost implements ICourse {
  constructor(
    public title?: string,
    public content?: string,
    public post_id?: string,
    public category?: string,
    public publicity_status?: boolean,
    public post_authors?: string[],
  ) {
    this.publicity_status = this.publicity_status || false;
  }

  public header_image?: FileData;

}

