export interface ISearchParams {
  category?: string;
  level?: string;
  type?: string;
}

export class SearchParams implements ISearchParams {
  constructor(
    public level: string,
    public category: string
  ) {

  }

  public type: string;

}
