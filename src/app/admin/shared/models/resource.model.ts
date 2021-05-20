export interface IResource {
    id: string;
    value: string;
}

export class Resource implements IResource {
    constructor(
        public id: string,
        public value: string,
    ) {

    }

}
