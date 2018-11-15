import Spell from "../models/Spell.js";

function formatUrl(url) {
  return '//bcw-getter.herokuapp.com/?url=' + encodeURIComponent(url)
}

let _spellAPI = axios.create({
  baseURL: ''
})

// all the spells in API
let _spells = [];
// all spells in my Spellbook
let _spellBook = [];
let _activeSpell = {};

function handleError(error) {
  throw new Error(error);
}
export default class SpellService {
  get spells() {
    return _spells;
  }
  get activeSpell() {
    return _activeSpell;
  }
  get spellbook() {
    return _spellBook
  }
  getAllSpells(callback) {
    _spellAPI.get(formatUrl('http://www.dnd5eapi.co/api/spells/'))
      .then(res => {
        _spells = res.data.results
        callback()
      })
      .catch(handleError)
  }
  addSpell() {
    if (!_spellBook.includes(_activeSpell)) {
      _spellBook.push(_activeSpell)
    }
  }
  removeSpell(index) {
    _spellBook.splice(index, 1)
  }
  getSpellDetails(spellIndex, draw) {
    _spellAPI.get(formatUrl('http://www.dnd5eapi.co/api/spells/' + spellIndex))
      .then(res => {
        _activeSpell = new Spell(res.data)
        draw()
      })
      .catch(handleError)
  }
}