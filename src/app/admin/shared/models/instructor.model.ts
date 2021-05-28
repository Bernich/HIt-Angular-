import { Thumbnail } from '../dto/util.dto';
import { ICourse } from './course.model';
import { FileData } from './file-data.model';
import { SocialMediaHandle } from './social-media.model';
import { IUser } from './user.model';


// Have any type for profile_pic


export interface IInstructor {

  instructor_id?: string;
  email?: string;
  firstname?: string;
  lastname?: string;
  phone_number?: string;
  profile_pic?: Thumbnail;
  profile_pic_data?: FileData;
  bio: string;
  skills?: string[];
  courses?: string[];
  social_media_handles?: any[];

  date_created?: Date;
  date_updated?: Date;

}


export class UpdateInstructor {

  constructor(
    public id: string,
    public email: string,
    public firstname: string,
    public lastname: string,
    public profile_pic_data: FileData,
    public bio: string,
    public skills: string[],
    public social_media_handles?: any[],
    public profile_pic?: Thumbnail
  ) {

  }
}


export class CreateInstructor implements IInstructor {

  constructor(

  ) {

  }

  public email: string;
  public firstname: string;
  public lastname: string;
  public phone_number: string;
  public instructor_id?: string;
  public gender?: string;
  public skills?: string[];

  public profile_pic_data?: FileData;
  public bio: string;
  public social_media_handles?: SocialMediaHandle[];
  public creator_id?: string;
}
