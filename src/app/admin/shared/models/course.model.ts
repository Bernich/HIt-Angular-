import { FileData, ProfileImage } from "src/app/admin/shared/models";
import { v4 as uuidv4 } from 'uuid';

export interface ICourse {
  post_id?: string;
  content?: any;
  title?: string;
  thumb?: any;
  thumb_content_type?: string
  post_category?: string;
  publicity_status?: boolean;
  authors?: string[];
  date_created?: string;
  show?: boolean;
  header_image_url?: string;

  header_image?: FileData;

  banner?: ProfileImage
}

export class CreateCourse implements ICourse {
  constructor(
    public title?: string,
    public post_id?: string,
    public publicity_status?: boolean,
    public instructor?: string[],
    public date_created?: string,
  ) {
    this.publicity_status = this.publicity_status || false;
  }


  public banner: ProfileImage
}



export interface ILesson {

  id: string;
  content: string;
}
export class CreateLesson implements ILesson {
  constructor(
  ) {
    this.id = uuidv4();
  }

  public id;
  public content = "this";
}

export class CreateSection {
  constructor(
  ) {
    this.id = uuidv4();
  }

  public id?: string;
  public title: string = "";
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

