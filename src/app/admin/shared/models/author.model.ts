import { FileData, ProfileImage } from '.';
import { Thumbnail } from '../dto';
import { SocialMediaHandle } from './social-media.model';
import { IUser } from './user.model';


// Have any type for profile_pic


export interface IAuthor {

  id: string;
  email: string;
  first_name: string;
  last_name: string;

  profile_image: FileData | ProfileImage;

  bio: string;
  handlers?: SocialMediaHandle[];

  date_created?: Date;
  date_updated?: Date;

}
export class Author implements IAuthor {

  public id: string;
  public email: string;
  public first_name: string;
  public last_name: string;
  public bio: string;
  public profile_image: ProfileImage;

  public handlers?: SocialMediaHandle[];
}



export class CreateAuthor implements IAuthor {

  constructor(
  ) {
  }

  public id: string;
  public email: string;
  public first_name: string;
  public last_name: string;
  public bio: string;
  public profile_image: FileData;

  public handlers?: SocialMediaHandle[];
}
