import { FileData, SocialMediaHandle } from '../models';

export interface ICreateInstructorDTO {
  id: string;
  email: string;
  firstname: string;
  lastname: string;
  profile_pic_data: FileData;
  bio: string;
  social_media_handles?: SocialMediaHandle[];
}




