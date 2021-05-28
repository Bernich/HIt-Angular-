import { CreateCourseDTO, CreateSectionDTO, ISectionDTO } from "../dto/create-course.dto";
import { Course, CreateCourse, CreateInstructor, CreateSection, IInstructor, ISection, Resource } from "../models";
import { v4 as uuidv4 } from 'uuid';
import { CreateUpdateInstructorDTO } from "../dto";

export class InstructorMapper {


  static convertFromDTO(instructor: IInstructor): CreateInstructor {
    const new_instructor = new CreateInstructor();
    new_instructor.firstname = instructor.firstname;
    new_instructor.lastname = instructor.lastname;
    new_instructor.email = instructor.email;
    new_instructor.social_media_handles = instructor.social_media_handles;
    new_instructor.bio = instructor.bio;
    new_instructor.phone_number = instructor.phone_number;
    new_instructor.skills = instructor.skills;
    new_instructor.instructor_id = instructor.instructor_id;


    return new_instructor;
  }



  static convertToUpdateDTO(instructor: IInstructor): CreateUpdateInstructorDTO {
    const new_instructor = new CreateUpdateInstructorDTO();
    new_instructor.firstname = instructor.firstname;
    new_instructor.lastname = instructor.lastname;
    new_instructor.email = instructor.email;
    new_instructor.social_media_handles = instructor.social_media_handles;
    new_instructor.bio = instructor.bio;
    new_instructor.phone_number = instructor.phone_number;
    new_instructor.skills = instructor.skills;
    new_instructor.id = instructor.instructor_id;
    return new_instructor;
  }

}

