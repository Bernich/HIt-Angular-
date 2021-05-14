export interface ICreatePost {
  title?: string;
  content?: string;
}

export class CreatePostDTO implements ICreatePost {
  constructor(
    public title: string,
    public content: string
  ) {

  }


}
