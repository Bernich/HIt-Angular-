export interface IPodcast {
  url?: string;
  data?: string;
}

export class Podcast implements IPodcast {
  constructor(public url?: string, public data?: string) {}
}
