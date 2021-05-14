
export interface IUser {

  user_id?: string;
  email: string;
  firstname: string;
  lastname: string;

  roles?: string[];


  gender?: string;
  password_hash?: any[];
  profile_pic?: string;

  date_created?: Date;
  date_updated?: Date;
  is_active?: boolean;

}


