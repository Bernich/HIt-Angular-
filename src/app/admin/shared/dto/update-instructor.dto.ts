import { FileData, SocialMediaHandle } from '../models';

export interface IUpdateInstructorDTO {
  id: string;
  email: string;
  firstname: string;
  lastname: string;
  phone_number: string;
  profile_pic_data: FileData;
  bio: string;
  skills: string[];
  social_media_handles?: SocialMediaHandle[];
}

export class CreateUpdateInstructorDTO implements IUpdateInstructorDTO {

  constructor() { }

  id: string;
  email: string;
  firstname: string;
  lastname: string;
  profile_pic_data: FileData;
  bio: string;
  skills: string[]
  social_media_handles?: SocialMediaHandle[];
  phone_number: string;

}




