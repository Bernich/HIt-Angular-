import { Thumbnail } from '../dto';
import { SocialMediaHandle } from './social-media.model';
import { IUser } from './user.model';


// Have any type for profile_pic


export interface IAuthor {

  id: string;
  email: string;
  firstname: string;
  lastname: string;
  // profile_pic?: Thumbnail;
  // profile_pic_data: FileData;
  bio: string;
  skills: string[];
  courses?: string[];
  social_media_handles?: SocialMediaHandle[];

  date_created?: Date;
  date_updated?: Date;

}


