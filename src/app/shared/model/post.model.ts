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
}
