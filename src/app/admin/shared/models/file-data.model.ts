export interface IFileData {
  id?: string
  name?: string
  content_type?: string
  data?: any
  size?: any

}

export class FileData implements IFileData {
  constructor(
    public content_type: string,
    public data: any,
    public name?: string,
    public id?: string,

  ) {

  }

}
