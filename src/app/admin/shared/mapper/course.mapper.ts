import { CreateCourseDTO, CreateSectionDTO, ISectionDTO } from "../dto/create-course.dto";
import { Course, CreateCourse, ISection, Resource } from "../models";

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

    new_course.career_paths = course.career_paths.map((data: Resource) => data.value)
    new_course.what_you_will_learn = course.what_you_will_learn;
    new_course.prerequisites = course.prerequisites;
    // new_course.publicity_status = course.publicity_status;
    new_course.with_certification = course.with_certification;
    new_course.instructors = course.instructors;

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

    return new CreateCourse();
  }
}
