import { CreateCourseDTO, CreateSectionDTO, ISectionDTO } from "../dto/create-course.dto";
import { Course, CreateCourse, CreateSection, IInstructor, ISection, IUser, Resource } from "../models";
import { v4 as uuidv4 } from 'uuid';

export class CourseMapper {


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
    new_course.what_you_will_learn = course.what_you_will_learn;
    new_course.prerequisites = course.prerequisites;
    // new_course.publicity_status = course.publicity_status;
    new_course.with_certification = course.with_certification;
    new_course.instructors = course.instructors;
    new_course.developers = course.developers;

    new_course.thumbnail_data = course.thumbnail_data;
    new_course.banner_data = course.banner_data;

    new_course.curriculum = this.mapCurricullum(course.curriculum);

    return new_course;
  }


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
    new_course.what_you_will_learn = course.what_you_will_learn ? course.what_you_will_learn : [];
    new_course.prerequisites = course.prerequisites ? course.prerequisites : [];
    new_course.with_certification = course.with_certification;
    new_course.instructors = course.instructors ? course.instructors.map((instructor: IInstructor) => instructor.instructor_id) : [];
    new_course.developers = course.developers ? course.developers.map((developer: IUser) => developer.user_id) : [];

    new_course.thumbnail_data = course.thumbnail_data;
    new_course.banner_data = course.banner_data;

    new_course.curriculum = this.convertCurricullum(course.curriculum);

    return new_course;

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
