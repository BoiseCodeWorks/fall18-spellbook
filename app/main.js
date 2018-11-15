import SpellController from "./components/SpellController.js";



class App {
  constructor() {
    console.log('main')
    controllers: {
      spellController: new SpellController()
    }
  }
}


window.app = new App()