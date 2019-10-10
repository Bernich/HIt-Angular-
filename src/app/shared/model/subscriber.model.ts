export interface ISubscriber {
    name?: string;
    email?: string;
}

export class Subscriber implements ISubscriber {
    constructor(public id?: string, public email?: string) {}
}
