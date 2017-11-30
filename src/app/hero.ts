export class Hero {
  private _id: number;
  private _name: string;

  constructor(id: number, name: string){
    this._id = id;
    this._name = name;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  set name(name: string) {
    this._name = name;
  }

  get name(): string {
    return this._name;
  }
}
