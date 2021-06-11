import { IAuthor } from "src/app/admin/shared/models";


export const getAllAuthorsString = (authors: IAuthor[]) => {
  let authorString = authors[0].first_name;


  if (authors.length >= 2) {

    for (let i = 1; i < authors.length; i++) {
      authorString = authors[i].first_name + ' & ' + authorString
    }
  }
  return authorString;
}
