import { router } from './router-config.js';
import { HomeController } from './controllers/HomeController.js';
import { playersController } from './controllers/PlayersController.js';
import { AppState } from './AppState.js';
const USE_ROUTER = false

class App {

  HomeController = new HomeController()
  PlayersController = new playersController()


  AppState = AppState
  constructor() {
    if (USE_ROUTER) {
      this.router = router
      this.router.init(this)
    }
  }

}

const app = new App()
// @ts-ignore
window.app = app
