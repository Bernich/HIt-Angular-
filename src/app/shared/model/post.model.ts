export interface IPost {
  id?: string;
  content?: any;
  title?: string;
  thumbContentType?: string;
  thumb?: any;
  category?: string;
  authors?: string[];
  createdDate?: string;
  publicityStatus?: boolean;
  show?: boolean;
  headerImageUrl?: string;
}

export class Post implements IPost {
  constructor(
    public id?: string,
    public content?: any,
    public title?: string,
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
