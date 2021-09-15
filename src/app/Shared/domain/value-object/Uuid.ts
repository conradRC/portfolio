import { v4 } from 'uuid'

export class Uuid {
    readonly value: string;

    constructor(value: string) {
        this.value = value;
    }

    static generateUid(): Uuid {
        return new Uuid(v4());
    }

    toString(): string {
        return this.value;
    }
}