import { CreateCourseDTO, CreateSectionDTO, ISectionDTO } from "../dto/create-course.dto";
import { Course, CreateAuthor, CreateCourse, CreateInstructor, CreateSection, IAuthor, IInstructor, ISection, Resource } from "../models";
import { v4 as uuidv4 } from 'uuid';
import { CreateUpdateInstructorDTO } from "../dto";

export class AuthorMapper {


  static convertFromDTO(author: IAuthor): CreateAuthor {
    const new_author = new CreateAuthor();
    new_author.first_name = author.first_name;
    new_author.last_name = author.last_name;
    new_author.email = author.email;
    new_author.bio = author.bio;
    new_author.handlers = author.handlers;
    new_author.author_id = author.author_id;


    return new_author;
  }




}

