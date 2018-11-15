import SpellService from "./SpellService.js";


let _spellService = new SpellService()
function _drawAllSpells() {
  let spells = _spellService.spells
  console.log(spells)
}
function _drawSpellDetails() {

}
function _drawSpellbook() {

}

export default class SpellController {
  constructor() {
    _spellService.getAllSpells(_drawAllSpells)
  }
  addSpell() {

  }
  removeSpell() {

  }
  getSpellDetails() {

  }
}