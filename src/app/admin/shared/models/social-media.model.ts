export interface ISocialMediaHandle {
  platform: string;
  url: string;
}

export class SocialMediaHandle implements ISocialMediaHandle {

  constructor(
    public platform: string,
    public url: string,
  ) {

  }

}
