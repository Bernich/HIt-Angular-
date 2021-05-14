import { SocialMediaHandle } from '../models';

export interface ICreateAuthor {
  id: string;
  email: string;
  firstname: string;
  lastname: string;
  // profile_pic_data: FileData;
  bio: string;
  social_media_handles?: SocialMediaHandle[];
  creator_id?: string;

  // profile_pic?: Thumbnail
}




export class CreateAuthor implements ICreateAuthor {

  constructor(

  ) {

  }

  public id: string;
  public email: string;
  public firstname: string;
  public lastname: string;
  public bio: string;
  public social_media_handles?: SocialMediaHandle[];
  public creator_id?: string;
}
