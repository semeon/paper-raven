class Health {

  constructor(char) {
    this.maxHp = char.getSpecial().getStats("E") * 5;
    this.hp = this.maxHp;
  }

  getHP() {
    return this.hp;
  }

  getMaxHP() {
    return this.maxHp;
  }

  decHP(d) {
    if ( (this.hp - d) <= 0 ) {
      this.hp = 0;
    } else {
      this.hp -= d;
    }
  }  

  incHP(d) {
    if ( (this.hp + d) >= this.maxHP ) {
      this.hp = this.maxHP;
    } else {
      this.hp += d;
    }
  }  


}

export default Health;