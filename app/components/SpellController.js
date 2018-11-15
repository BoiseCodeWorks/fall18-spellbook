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
  let spell = _spellService.activeSpell
  let template = `
  <h4>${spell.name}</h4>
  <p><em>${spell.range} - ${spell.duration} - Level:${spell.level}</em></p>
  <p>${spell.desc}</p>
  <button onclick="app.controllers.spellController.addSpell()">Add Spell</button>
  `
  document.getElementById('spell-details').innerHTML = template
}
function _drawSpellbook() {
  let spellbook = _spellService.spellbook
  let template = '<ul>'
  spellbook.forEach((spell, index) => {
    template += `
    <li> ${spell.name} </li>
    <button onclick="app.controllers.spellController.removeSpell(${index})">REMOVE</button> 
    `
  })
  document.getElementById("spellbook").innerHTML = template + '</ul>'
}

export default class SpellController {
  constructor() {
    _spellService.getAllSpells(_drawAllSpells)
  }
  addSpell() {
    _spellService.addSpell()
    _drawSpellbook()
  }
  removeSpell(index) {
    _spellService.removeSpell(index)
    _drawSpellbook()
  }
  getSpellDetails(spellIndex) {
    _spellService.getSpellDetails(spellIndex, _drawSpellDetails)
  }
}