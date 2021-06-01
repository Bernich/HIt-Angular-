import { FileData, ProfileImage } from "src/app/admin/shared/models";

/**
 * {post_id: "29fa6f58-1744-4877-9913-72465e2bcfd7",…}
authors: [{first_name: "Freda ", last_name: "G. ",…}, {first_name: "Simon ", last_name: "Sinek ",…}]
banner: {id: "29fa6f58-1744-4877-9913-72465e2bcfd7",…}
content: "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem IpsumLorem Ipsum is simply dummy text of the printing and typesetting industry.</p>"
created_by: "bf9b0338-7387-4c6e-b66b-e7413daaaa87"
date_created: "2021-05-31T15:31:17.820326Z"
date_updated: "2021-05-31T15:31:17.820326Z"
last_modified_by: "bf9b0338-7387-4c6e-b66b-e7413daaaa87"
post_category: "Funding Oppurtunities"
post_id: "29fa6f58-1744-4877-9913-72465e2bcfd7"
publicity_status: true
slug: "sample-post"
thumbnail: {id: "29fa6f58-1744-4877-9913-72465e2bcfd7",…}
title: "sample post"
 */
export interface IPost {
  post_id?: string;
  content?: string;
  title?: string;
  post_category?: string;
  publicity_status?: boolean;
  authors?: any;
  date_created?: string;
  show?: boolean;


  header_image_data?: FileData;
  thumbnail_image_data?: FileData;
  thumbnail?: ProfileImage;

  banner?: ProfileImage
}

export class Post implements IPost {
  constructor(
    public title?: string,
    public post_id?: string,
    public content?: any,
    public post_category?: string,
    public publicity_status?: boolean,
    public authors?: string[],
    public date_created?: string,
    public show?: boolean,
  ) {
    this.publicity_status = this.publicity_status || false;
  }


  public banner: ProfileImage
}


export class CreatePost implements IPost {
  constructor(
    public title?: string,
    public content?: string,
    public post_category?: string,
    public publicity_status?: boolean,
    public post_authors?: string[],
  ) {
    this.publicity_status = this.publicity_status || false;
  }

  public thumbnail_image_data: FileData
  public header_image_data?: FileData;

}

