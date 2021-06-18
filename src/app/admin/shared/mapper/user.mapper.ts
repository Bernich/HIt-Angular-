import { } from "../dto/create-course.dto";
import { CreateUser, IInstructor, ISection, IUser, Resource } from "../models";
import { v4 as uuidv4 } from 'uuid';
import { UpdateUser } from "../dto";

export class UserMapper {


  static convertFromDTO(data: CreateUser): CreateUser {
    const new_user = new CreateUser();
    new_user.firstname = data.firstname;
    new_user.lastname = data.lastname;
    new_user.email = data.email;
    new_user.social_media_handles = data.social_media_handles;
    new_user.phone_number = data.phone_number;

    return new_user;
  }

  /**
   *
   * @param date
date_created: "2021-06-01T12:28:29.367866Z"
email: "noelnuel44@gmail.com"
firstname: "Emmanuel"
is_active: true
lastname: "Botwe"
phone_number: "1111111111111111111111"
profile_pic: {id: "", url: ""}
roles: ["USER", "AUTHOR"]
user_id: "ca95c542-25dc-4547-bdae-4098294adcef"
   * @returns
   */


  static convertToUpdateDTO(data: IUser): UpdateUser {
    const new_user = new UpdateUser();
    new_user.user_id = data.user_id;
    new_user.firstname = data.firstname;
    new_user.lastname = data.lastname;
    new_user.email = data.email;
    new_user.phone_number = data.phone_number;

    return new_user;
  }

}

