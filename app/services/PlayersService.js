import { AppState } from "../AppState.js";
import { Player } from "../models/Players.js";

class PlayersService {
    increaseScore(playersName) {
        const clickedPlayer = AppState.players.find(player => player.name == playersName)
        clickedPlayer.score++
    }

    decreaseScore(playersName) {
        const clickedPlayer = AppState.players.find(player => player.name == playersName)
        clickedPlayer.score--
    }

    addPlayer(playerName) {
        const newPlayer = new Player(playerName)
        AppState.players.push(newPlayer)
    }
}

export const playersService = new PlayersService()