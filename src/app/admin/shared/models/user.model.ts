import { ProfileImage } from '.';
import { Thumbnail } from '../dto/util.dto';
import { ICourse } from './course.model';
import { FileData } from './file-data.model';
import { SocialMediaHandle } from './social-media.model';
export interface IUser {

  user_id?: string;
  email: string;
  firstname: string;
  lastname: string;
  phone_number: string;
  roles?: string[];


  gender?: string;
  password_hash?: any[];
  profile_pic?: ProfileImage;
  profile_pic_data?: FileData; // remove redundant
  courses?: ICourse[];
  date_created?: Date;
  date_updated?: Date;

  speciality?: string;
  skills?: string[];
  bio?: string;
  social_media_handles?: SocialMediaHandle[];
  is_active?: boolean;

  password?: string;

  old_password?: string;
  new_password?: string;
  password_confirm?: string;
}


export class IUpdateUser {
  user_id?: string;
  email: string;
  firstname: string;
  lastname: string;
  phone_number: string;
  profile_pic_data?: FileData;
  old_password?: string;
  new_password?: string;
  password_confirm?: string;
}

export class CreateUser implements IUser {
  constructor(

  ) {

  }
  public email: string;
  public firstname: string;
  public lastname: string;
  public phone_number: string;
  public password: string;
  public password_confirm: string;

  public user_id?: string;
  public gender?: string;
  public courses?: ICourse[];
  public creator_id?: string;
  public profile_pic_data: FileData;
  social_media_handles?: SocialMediaHandle[];
}


