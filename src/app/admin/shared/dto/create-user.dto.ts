import { FileData, SocialMediaHandle } from '../models';

export interface ICreateInstructor {
  id: string;
  email: string;
  firstname: string;
  lastname: string;
  profile_image: FileData;
  bio: string;
  handlers?: SocialMediaHandle[];
  creator_id?: string;

  // profile_pic?: Thumbnail
}


export interface IUpdateUser {
  user_id: string;
  email: string;
  firstname: string;
  lastname: string;
  profile_pic_data?: FileData;
  bio: string;
  handlers?: SocialMediaHandle[];
  creator_id?: string;

}


export class UpdateUser implements IUpdateUser {

  constructor() { }
  public user_id: string;
  public email: string;
  public firstname: string;
  public lastname: string;
  public phone_number: string;
  public bio: string;
  public creator_id?: string;

}


