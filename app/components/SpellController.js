import SpellService from "./SpellService.js";


let _spellService = new SpellService()
function _drawAllSpells() {
  let spells = _spellService.spells
  let template = "<ul>"
  spells.forEach((spell, index) => {
    // let spellIndex = spell.substring(spell.lastIndexOf("/")+1)
    template += `
    <li onclick="app.controllers.spellController.getSpellDetails(${index + 1})"> ${spell.name} </li> 
    `
  });
  document.getElementById("all-spells").innerHTML = template + "</ul>"
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
  getSpellDetails(spellIndex) {
    console.log(spellIndex)
  }
}