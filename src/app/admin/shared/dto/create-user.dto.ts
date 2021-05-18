import { FileData, SocialMediaHandle } from '../models';

export interface ICreateAuthor {
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


