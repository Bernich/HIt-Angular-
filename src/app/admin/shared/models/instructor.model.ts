import { FileData, ProfileImage } from '.';
import { Thumbnail } from '../dto';
import { SocialMediaHandle } from './social-media.model';


// Have any type for profilepic


export interface IInstructor {

  instructor_id: string;
  email: string;
  firstname: string;
  lastname: string;

  profile_pic_data: FileData | ProfileImage;

  bio: string;
  social_media_handles?: SocialMediaHandle[];

  date_created?: Date;
  date_updated?: Date;

}
export class Instructor implements IInstructor {

  public instructor_id: string;
  public email: string;
  public firstname: string;
  public lastname: string;
  public bio: string;
  public profile_pic_data: ProfileImage;

  public social_media_handles?: SocialMediaHandle[];
}



export class CreateInstructor implements IInstructor {

  constructor(
  ) {
  }

  public instructor_id: string;
  public email: string;
  public firstname: string;
  public lastname: string;
  public bio: string;
  public profile_pic_data: FileData;

  public social_media_handles?: SocialMediaHandle[];
}
