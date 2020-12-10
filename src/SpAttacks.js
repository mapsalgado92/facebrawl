
export const spMario ={
    name: "Overexcitement",
    action: (attacker, defender) => {attacker.stats.spd += 2;  attacker.stats.cha += 3; attacker.stats.atk += 4; return 0},
    description: "He get's OVEREXCITED: Mario's SPD, CHA and ATK increased!"
}

export const spAilin = {
    name: "She Make Cry",
    action: (attacker, defender) => {defender.stats.def *= 0.88;  defender.stats.hp = 25 + 2*attacker.stats.atk; return ((5 + 1.5*attacker.stats.atk));},
    description: "She is caustic and MAKES CRY: Inflicts damage and reduces the opponent's defense"
}

export const spDavid = {
    name: "Tequila Shot",
    action: (attacker, defender) => {defender.stats.acc -= 2; defender.stats.spd -=2; defender.stats.vit -= 2; defender.stats.cha += 1; attacker.stats.cha += 1; if(Math.random()>(0.8) + defender.stats.vit/200 || defender.stats.vit < 6){defender.hp=1}; return 0;},
    description: "One more round of TEQUILA: Opponent's ACC and DEF decrease, while CHA is slightly increased. Opponent might PASS OUT."
}

export const spGoncalo = {
    name: "Is Peneado",
    action: (attacker, defender) => {attacker.stats.cha -= 1; return 10 * defender.stats.cha;},
    description: "He makes an embarassing remark in bad Spanish causing AWKARDNESS: Gonçalo's CHA is reduced. Next STRIKE will do massive damage scaling with opponent's CHA"
}

export const spAnaS = {
    name: "Shows Boob",
    action: (attacker, defender) => {defender.stats.cha -= 2; defender.stats.acc -= 2; attacker.stats.acc += 2; attacker.stats.cha += 2; return attacker.stats.cha*5},
    description: "Ana SHOWS HER BOOB: Gets opponent DISTRACTED and NERVOUS, reducing their CHA and ACC whilst increasing her own. Her next hit scales with her own CHA"
}

export const spBarbara = {
    name: "Rave",
    action: (attacker, defender) => {attacker.stats.atk += 5; if(attacker.stats.vit > 5){attacker.stats.vit -= 5}else{attacker.stats.vit = 0; attacker.stats.hp = 1}; return 0},
    description: "Barbi RAVES HARD: She becomes more dangerous as her ATK sharply raises, at the cost of her VIT. If her VIT gets too low she will COME DOWN and PASS OUT"
}

export const spVieira = {
    name: "Hardcore Techno",
    action: (attacker, defender) => {defender.stats.def -= 1; defender.stats.atk -= 1; defender.stats.cha -= 1; defender.stats.spd -= 1; attacker.stats.acc -= 1; attacker.stats.def += 1; attacker.stats.atk += 1; attacker.stats.cha += 4; attacker.stats.spd += 1; attacker.stats.acc += 1; return 0},
    description: "Miguel plays a set of HARDCORE TECHNO: Makes everyone else uneasy but he seems to enjoy it. Opponent's STATS are reduced whilst his own are increased, specially his CHA"
}