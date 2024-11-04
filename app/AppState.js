
import { Player } from './models/players.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {


  players = [
    new Player("Jeff"),
    new Player("Tristan"),
    new Player("Arnold"),
    new Player("Damian")

  ]
  /**@type {import('./models/Example.js').Example[]} */
  examples = []
}

export const AppState = createObservableProxy(new ObservableAppState())