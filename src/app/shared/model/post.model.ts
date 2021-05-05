export interface IPost {
  id?: string;
  content?: any;
  title?: string;
  thumb?: any;
  thumb_content_type?: string
  post_category?: string;
  publicity_status?: string;
  authors?: string[];
  createdDate?: string;
  publicityStatus?: boolean;
  show?: boolean;
  header_image_url?: string;
}

export class Post implements IPost {
  constructor(
    public title?: string,
    public id?: string,
    public content?: any,
    public thumbContentType?: string,
    public thumb?: any,
    public category?: string,
    public publicityStatus?: boolean,
    public authors?: string[],
    public createdDate?: string,
    public show?: boolean,
    public headerImageUrl?: string
  ) {
    this.publicityStatus = this.publicityStatus || false;
  }
}
