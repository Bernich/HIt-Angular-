import { FileData } from "../models";

export interface ICreatePost {
  post_id?: string;
  title: string;
  content?: string;
  post_category?: string;
  publicity_status?: boolean;
  authors?: string[];
  header_image_data?: FileData;
  thumbnail_image_data?: FileData;

}

export class CreatePostDTO implements ICreatePost {
  constructor(
    public title: string,
    public content: string,
    public post_category: string,
    public publicity_status: boolean,
    public authors_id: string[],
    public header_image_data: FileData,
    public thumbnail_image_data: FileData

  ) {

  }


}
