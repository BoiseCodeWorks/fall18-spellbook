
//get all route
//http://www.dnd5eapi.co/api/spells

//get details 
//http://www.dnd5eapi.co/api/spells/:id


let _spellAPI = axios.create({
  baseURL: '//bcw-getter.herokuapp.com/?url=' + encodeURIComponent("http://www.dnd5eapi.co/api/spells/")
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
  constructor() {
    console.log('service')
  }
  get spells() {
    return _spells;
  }
  getAllSpells(callback) {
    _spellAPI.get('')
      .then(res => {
        _spells = res.data.results
        callback()
      })
      .catch(handleError)
  }
  addSpell() {
    // push _activeSpell to spellbook
  }
  removeSpell(spell) {
    // remove spell from spellbook
  }
  getSpellDetails(spellIndex) {
    // all details of spell
    // set to _activeSpell
  }
}