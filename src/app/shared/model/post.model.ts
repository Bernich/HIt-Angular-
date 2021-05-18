import { FileData, ProfileImage } from "src/app/admin/shared/models";

export interface IPost {
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

export class Post implements IPost {
  constructor(
    public title?: string,
    public post_id?: string,
    public content?: any,
    public thumb_content_type?: string,
    public thumb?: any,
    public category?: string,
    public publicity_status?: boolean,
    public authors?: string[],
    public date_created?: string,
    public show?: boolean,
    public header_image_url?: string
  ) {
    this.publicity_status = this.publicity_status || false;
  }


  public banner: ProfileImage
}


export class CreatePost implements IPost {
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

