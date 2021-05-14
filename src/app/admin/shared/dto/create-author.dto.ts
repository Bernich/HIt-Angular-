import { FileData, SocialMediaHandle } from '../models';

export interface ICreateAuthorDTO {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  profile_image: FileData;
  bio: string;
  handlers?: SocialMediaHandle[];
}




