import { AppState } from "../AppState.js";
import { playersService } from "../services/PlayersService.js";

export class playersController {
    constructor() {
        console.log(AppState.players)
        this.drawPlayers()
    }

    drawPlayers() {
        const PlayersElem = document.getElementById('PlayerAdd')
        PlayersElem.innerHTML = ''
        for (let i = 0; i < AppState.players.length; i++) {
            const player = AppState.players[i];
            PlayersElem.innerHTML += `
            <div class='row p-3 justify-content-center'>
                <div class='fs-4 col-6 text-dark text-center border-dark rounded'>
                    <p>Name: ${player.name}, Score: ${player.score}</p>
                    <button onclick="app.PlayersController.increaseScore('${player.name}')" class="btn btn-success">ADD POINTS</button>
                    <button onclick="app.PlayersController.decreaseScore('${player.name}')" class="btn btn-danger">DECREASE POINTS</button>
                </div>
            </div>`
        }
    }

    increaseScore(playersName) {
        console.log('changing score', playersName)
        playersService.increaseScore(playersName)
        this.drawPlayers()
    }

    decreaseScore(playersName) {
        console.log('decreasing score', playersName)
        playersService.decreaseScore(playersName)
        this.drawPlayers()
    }

    addPlayer() {
        event.preventDefault()
        const playerFormElem = event.target
        // @ts-ignore
        const playerName = playerFormElem.name.value
        playersService.addPlayer(playerName)
        // @ts-ignore
        playerFormElem.reset()
        this.drawPlayers()
    }
}