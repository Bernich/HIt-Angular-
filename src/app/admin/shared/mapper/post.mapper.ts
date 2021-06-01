import { CreateCourseDTO, CreateSectionDTO, ISectionDTO } from "../dto/create-course.dto";
import { Course, CreateCourse, CreateSection, IInstructor, ISection, Resource } from "../models";
import { v4 as uuidv4 } from 'uuid';
import { CreatePost, IPost } from "src/app/shared/model/post.model";

export class PostMapper {


  static convertToCreateCourse(post: IPost): CreatePost {
    const new_post = new CreatePost();

    new_post.title = post.title;
    new_post.content = post.content;
    new_post.post_category = post.post_category;
    new_post.publicity_status = post.publicity_status;

    return new_post;
  }


}
