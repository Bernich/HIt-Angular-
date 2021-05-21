import { FileData, IInstructor, ISection, ProfileImage, Resource } from "../models";

export interface ICreateCourse {
  course_id?: string;

  name?: string;
  overview?: string;
  description: string;
  skill_level: string;

  duration?: string;
  base_price?: number;


  career_paths?: string[]
  what_you_will_learn?: Resource[];
  prerequisites?: Resource[];
  with_certification?: boolean;
  instructors?: string[]

  thumbnail_data?: FileData;
  banner_data?: FileData;

  curriculum?: ISectionDTO[]
}


export interface ILessonDTO {
  id: string;
  name: string;
  course_id?: string;
}


export class CreateLessonDTO implements ILessonDTO {
  constructor(
  ) {
  }

  public id;
  public name;
  public course_id: string;
}


export interface ISectionDTO {

  id?: string;
  course_id: string;
  name: string;
  lessons: ILessonDTO[];
  duration: string;
}


export class CreateSectionDTO implements ISectionDTO {

  constructor(
    public id: string,
    public course_id: string,
    public name: string,
    public lessons: ILessonDTO[],
    public duration: string,
  ) { }


}


export class CreateCourseDTO implements ICreateCourse {
  constructor(

  ) {

  }
  public course_id: string;
  public name: string;
  public overview: string;
  public description: string;
  public skill_level: string;

  public duration: string;
  public base_price: number;

  public career_paths: string[]
  public what_you_will_learn: Resource[];
  public prerequisites: Resource[];
  public with_certification: boolean;
  public instructors: string[]

  public thumbnail_data: FileData;
  public banner_data: FileData;

  public curriculum: ISectionDTO[]
}
