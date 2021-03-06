class Health {

  constructor(char) {
		this.god = char._isGodMode;
    this.maxHp = char.getSpecial().getStats("E") * 5;
    this.hp = this.maxHp;
  }

  isAlive() {
    return this.hp>0;
  }

  getHP() {
    return this.hp;
  }

  getMaxHP() {
    return this.maxHp;
  }

  takeDamage(d) {
		if (!this.god) {
	    if ( (this.hp - d) <= 0 ) {
	      this.hp = 0;
	    } else {
	      this.hp -= d;
	    }
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