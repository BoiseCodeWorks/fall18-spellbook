export default class Spell {
  constructor(data) {
    this.name = data.name;
    this.desc = data.desc;
    this.range = data.range;
    this.level = data.level;
    this.duration = data.duration;
    this.index = data.index;
  }
}