import { IPlayer } from "@/model/player.model";
import axios from "axios";

const url = "http://localhost:5001/players";

export default class PlayersService {
  public editPlayer(player: IPlayer, id: number): Promise<IPlayer> {
    return new Promise<IPlayer>((resolve, reject) => {
      axios
        .put(`${url}/${id}`, player)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
  public addPlayer(player: IPlayer): Promise<IPlayer> {
    return new Promise<IPlayer>((resolve, reject) => {
      axios
        .post(`${url}`, player)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}
