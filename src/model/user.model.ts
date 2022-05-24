export interface IPlayer {
  id: number;
  name: string;
  sex: boolean;
  items: number;
  level: number;
}
export class Player implements IPlayer {
  constructor(
    public id: number,
    public name: string,
    public sex: boolean,
    public items: number,
    public level: number
  ) {}
}
