'use strict';

exports.BattleAbilities = {
	// Asty
	astyabsorb: {
		onTryHit: function (target, source, move) {
			if (target !== source && move.type === 'Water') {
				if (!this.heal(target.maxhp / 4)) {
					this.add('-immune', target, '[msg]', '[from] ability: Asty Absorb');
				}
				return null;
			}
			if (target !== source && move.type === 'Grass') {
				if (!this.boost({atk:1})) {
					this.add('-immune', target, '[msg]', '[from] ability: Asty Absorb');
				}
				return null;
			}
		},
		onAllyTryHitSide: function (target, source, move) {
			if (target === this.effectData.target || target.side !== source.side) return;
			if (move.type === 'Grass') {
				this.boost({atk:1}, this.effectData.target);
			}
		},
	},
	// GeoffBruedley
	baitkai: {
		onAfterDamage: function (damage, target, source, move) {
			if (move && move.flags['contact']) {
				source.addVolatile('attract', target);
				source.addVolatile('confusion', target);
			}
		},
		id: "baitkai",
		name: "Baitkai",
		rating: 2,
	},
	// Frysinger
	funhouse: {
		onStart: function (source) {
			this.useMove('Topsy-Turvy', source);
		},
		id: "funhouse",
		name: "Funhouse",
		rating: 3.5,
	},
	// MattL
	gravitationalfield: {
		shortDesc: "On switch-in, this Pokemon causes the effects of Gravity to occur.",
		onStart: function (source) {
			this.addPseudoWeather('gravity', source);
		},
		id: "gravitationalfield",
		name: "Gravitational Field",
		rating: 4,
	},
	// TEG
	hiddentype: {
		onSwitchInPriority: 101,
		onSwitchIn: function (pokemon) {
			let type = 'Normal';
			type = pokemon.getItem().onPlate;
			if (!type || type === true) {
				type = 'Normal';
			}
			pokemon.addType(type);
			this.add('-start', pokemon, 'typeadd', type, '[from] ability: Hidden Type');
		},
		id: "hiddentype",
		name: "Hidden Type",
		rating: 5,
	},
	// Snowy
	holyhail: {
		onStart: function () {
			this.setWeather('hail');
		},
		onAnySetWeather: function (target, source, weather) {
			if (weather.id !== 'hail') {
				this.add('message', 'The Holy Hail resisted the attempt to change the weather!');
				return false;
			}
		},
		onImmunity: function (type) {
			if (type === 'hail') return false;
		},
		onModifySpe: function () {
			if (this.isWeather(['hail'])) {
				return this.chainModify(2);
			}
		},
		onWeather: function (target, source, effect) {
			if (effect.id === 'hail') {
				this.heal(target.maxhp / 16);
			}
		},
		id: "holyhail",
		name: "Holy Hail",
		rating: 5,
	},
	// Sunfished
	killjoy: {
		onStart: function (pokemon) {
			this.add('-ability', pokemon, 'Killjoy');
			this.addPseudoWeather('killjoy', pokemon, "Killjoy");
		},
		onEnd: function (pokemon) {
			const foes = pokemon.side.foe.active;
			if (this.pseudoWeather['killjoy'] && !(foes.length && foes[0].hasAbility('killjoy'))) {
				this.removePseudoWeather('killjoy', pokemon);
			}
		},
		effect: {
			onStart: function () {
				this.add('message', 'All status moves will gain priority and cause recharge in the user!');
			},
			onModifyPriority: function (priority, pokemon, target, move) {
				if (move && move.category === 'Status') return priority + 1;
			},
			onModifyMove: function (move) {
				if (move.category === 'Status') {
					move.flags.recharge = 1;
					move.onAfterMove = function (source) {
						source.addVolatile('mustrecharge', source);
					};
				}
			},
			onEnd: function () {
				this.add('message', 'The priority of status moves have returned to normal.');
			},
		},
		id: "killjoy",
		name: "Killjoy",
		rating: 2,
	},
	// Halite
	lightlysalted: {
		onModifyPriority: function (priority, pokemon, target, move) {
			if (move && move.category === 'Status') {
				return priority + 1;
			}
		},
		onModifyMovePriority: 90,
		onModifyMove: function (move) {
			if (move.category === "Physical") {
				move.category = "Special";
			}
			if (!move.flags['contact']) return;
			if (!move.secondaries) {
				move.secondaries = [];
			}
			move.secondaries.push({
				chance: 18,
				status: 'frz',
			});
		},
		id: "lightlysalted",
		name: "Lightly Salted",
		rating: 3.5,
	},
	// Golui
	specialsnowflake: {
		onStart: function (source) {
			this.add('-ability', source, 'Special Snowflake');
			this.add('message', 'All moves that target a Special Snowflake will become Special!');
		},
		onTryHit: function (target, source, move) {
			if (move.category !== 'Status') {
				move.category = 'Special';
			}
		},
		id: "specialsnowflake",
		name: "Special Snowflake",
		rating: 3,
	},
	assassin: {
		onModifyMovePriority: 1,
		onModifyMove: function (move, source, target) {
			if (target.stats['spd']<target.stats['def']){	//if spd<def,special
				
				move.defensiveCategory='Special';
			}
		},
		id: "assassin",
		name: "Assassin",
		rating: 3,
	},
    // ceca3
    restart: {
        onStart: function (source) {
			this.boost({def:1,spa:1,spd:1,spe:1});
		},
        id: "restart",
		name: "Re:Start",
		rating: 4,
        onResidualOrder: 26,
		onResidualSubOrder: 2,
		onResidual: function (pokemon) {
			if(pokemon.hp<pokemon.maxhp){
				this.add("raw|<div class=\"broadcast-red\"><b>The server is restarted!</div>");
				this.heal(pokemon.maxhp);
			}
			let viablestats = {def:1,spa:1,spd:1,spe:1};
			let newboost = {};
			for (let stat in viablestats) {
				if (pokemon.boosts[stat] < 1) {
					newboost[stat]=1;
				}
			}
			
			this.boost(newboost);
		},
		onBeforeMove: function (pokemon) {
			let viablestats = {def:1,spa:1,spd:1,spe:1};
			let newboost = {};
			for (let stat in viablestats) {
				if (pokemon.boosts[stat] < 1) {
					newboost[stat]=1;
				}
			}
			this.boost(newboost);
		},
    },
    // FSK
    standalonecomplex: {
		onPrepareHit: function (source, target, move) {
			if (move.id in {iceball: 1, rollout: 1}) return;
			if (move.category !== 'Status' && !move.selfdestruct && !move.multihit && !move.flags['charge'] && !move.spreadHit) {
				move.multihit = 2;
				move.hasParentalBond = true;
				move.hit = 0;
			}
		},
		onBasePowerPriority: 8,
		onBasePower: function (basePower, pokemon, target, move) {
			if (move.hasParentalBond && ++move.hit > 1) return this.chainModify(1);
		},
		onSourceModifySecondaries: function (secondaries, target, source, move) {
			if (move.hasParentalBond && move.id === 'secretpower' && move.hit < 2) {
				// hack to prevent accidentally suppressing King's Rock/Razor Fang
				return secondaries.filter(effect => effect.volatileStatus === 'flinch');
			}
		},
		id: "standalonecomplex",
		name: "Stand Alone Complex",
		rating: 5,
    },
    //I do stall
    smilence: {
        onDamage: function (damage, target, source, effect) {
			if (effect.id === 'psn' || effect.id === 'tox') {
				this.heal(target.maxhp / 8);
				return false;
			}
		},
        onCheckShow: function (pokemon) {
			// This is complicated
			// For the most part, in-game, it's obvious whether or not Natural Cure activated,
			// since you can see how many of your opponent's pokemon are statused.
			// The only ambiguous situation happens in Doubles/Triples, where multiple pokemon
			// that could have Natural Cure switch out, but only some of them get cured.
			if (pokemon.side.active.length === 1) return;
			if (pokemon.showCure === true || pokemon.showCure === false) return;

			let active = pokemon.side.active;
			let cureList = [];
			let noCureCount = 0;
			for (let i = 0; i < active.length; i++) {
				let curPoke = active[i];
				// pokemon not statused
				if (!curPoke || !curPoke.status) {
					// this.add('-message', "" + curPoke + " skipped: not statused or doesn't exist");
					continue;
				}
				if (curPoke.showCure) {
					// this.add('-message', "" + curPoke + " skipped: Natural Cure already known");
					continue;
				}
				let template = Dex.getTemplate(curPoke.species);
				// pokemon can't get Natural Cure
				if (Object.values(template.abilities).indexOf('Natural Cure') < 0) {
					// this.add('-message', "" + curPoke + " skipped: no Natural Cure");
					continue;
				}
				// pokemon's ability is known to be Natural Cure
				if (!template.abilities['1'] && !template.abilities['H']) {
					// this.add('-message', "" + curPoke + " skipped: only one ability");
					continue;
				}
				// pokemon isn't switching this turn
				if (curPoke !== pokemon && !this.willSwitch(curPoke)) {
					// this.add('-message', "" + curPoke + " skipped: not switching");
					continue;
				}

				if (curPoke.hasAbility('naturalcure')) {
					// this.add('-message', "" + curPoke + " confirmed: could be Natural Cure (and is)");
					cureList.push(curPoke);
				} else {
					// this.add('-message', "" + curPoke + " confirmed: could be Natural Cure (but isn't)");
					noCureCount++;
				}
			}

			if (!cureList.length || !noCureCount) {
				// It's possible to know what pokemon were cured
				for (let i = 0; i < cureList.length; i++) {
					cureList[i].showCure = true;
				}
			} else {
				// It's not possible to know what pokemon were cured

				// Unlike a -hint, this is real information that battlers need, so we use a -message
				this.add('-message', "(" + cureList.length + " of " + pokemon.side.name + "'s pokemon " + (cureList.length === 1 ? "was" : "were") + " cured by Natural Cure.)");

				for (let i = 0; i < cureList.length; i++) {
					cureList[i].showCure = false;
				}
			}
		},
		onSwitchOut: function (pokemon) {
            pokemon.heal(pokemon.maxhp / 3);
			if (!pokemon.status) return;

			// if pokemon.showCure is undefined, it was skipped because its ability
			// is known
			if (pokemon.showCure === undefined) pokemon.showCure = true;

			if (pokemon.showCure) this.add('-curestatus', pokemon, pokemon.status, '[from] ability: Natural Cure');
			pokemon.setStatus('');

			// only reset .showCure if it's false
			// (once you know a Pokemon has Natural Cure, its cures are always known)
			if (!pokemon.showCure) delete pokemon.showCure;
		},
        
		id: "smilence",
		name: "Smilence",
		rating: 4,
		num: 90,
	},
	//Yui Togekiss
	fasthax: {
		onModifyPriority: function (priority, pokemon, target, move) {
			if (move && move.type === 'Flying') return priority + 1;
		},
		onModifyMove: function (move) {
			if (move.secondaries) {
				this.debug('doubling secondary chance');
				for (let i = 0; i < move.secondaries.length; i++) {
					move.secondaries[i].chance *= 2;
				}
			}
		},
		id: "fasthax",
		name: "Fast Hax",
		rating: 4,
	},
	// lxz
	ihaveferro: {
		onStart: function (source) {
			this.useMove('Haze', source);
		},
		onAfterDamageOrder: 1,
		onAfterDamage: function (damage, target, source, move) {
			if (source && source !== target && move && move.flags['contact']) {
				this.damage(source.maxhp / 8, source, target);
			}
		},
		id: "ihaveferro",
		name: "I Have Ferro",
		rating: 4,
	},
    // 袁绍
	clannism: {
		id: "clannism",
		name: "Clannism",
		rating: 4,
		onTryAddVolatile: function (status, pokemon) {
			if (status.id === 'confusion') return null;
		},
		onStart: function (pokemon) {
			let boost = {};
			let viablestats = {atk:1,def:1,spa:1,spd:1,spe:1};
			let stats = [];
			for (let statPlus in viablestats) {
				if (pokemon.boosts[statPlus] < 6) {
					stats.push(statPlus);
				}
			}
			let randomStat = stats.length ? stats[this.random(stats.length)] : "";
			if (randomStat) boost[randomStat] = 2;
			let randomStat2 = randomStat;
			while(randomStat2 === randomStat){
				randomStat2 = stats[this.random(stats.length)];
			}
			boost[randomStat2] = 2;
			this.boost(boost);
		},
	},
    //HerraMega
	nerfedtriage: {
		id: "nerfedtriage",
		name: "Nerfed Triage",
		rating: 4,
		onModifyPriority: function (priority, pokemon, target, move) {
			if (move && move.flags['heal']) return priority + 0.5;
		},
	},
    //Gengi 源氏
	steelate: {
		id: "steelate",
		name: "steelate",
		rating: 4,
		onModifyMovePriority: -1,
		onModifyMove: function (move, pokemon) {
			if (move.type === 'Normal' && !(move.id in {naturalgift:1, revelationdance:1}) && !(move.isZ && move.category !== 'Status')) {
				move.type = 'Steel';
			}
		},
		onPrepareHit: function (target, source, move){
			//if(move.id === 'uturn')
			//	this.useMove('Spikes',target);
			if(move.id !== 'genjibounce')
				source.removeVolatile('cooldown');
		}
	},
    // loving1096
	waterspin: {
		id: "waterspin",
		name: "Water Spin",
		rating: 1,
		onPrepareHit: function (target,source,move){
			if(move.id === 'waterspout'){
                let sideConditions = {spikes:1, toxicspikes:1, burnspikes:1, stealthrock:1, stickyweb:1};
				for (let i in sideConditions) {
					if (target.hp && target.side.removeSideCondition(i)) {
						this.add('-sideend', target.side, this.getEffect(i).name, '[from] move: Rapid Spin', '[of] ' + target);
					}
				}
			}
		}
	},
    // 暗星
	defensiveboost: {
		onResidual: function (pokemon) {
			this.boost([{def :1},{spd :1}][this.random(2)]);
		},
		id: "defensiveboost",
		name: "Defensive Boost",
		rating: 4,
	},
    //非洲人bulu
	africanrampage: {
		id: "africanrampage",
		name: "African Rampage",
		onStart: function (pokemon) {
			this.addPseudoWeather('Welcome to Africa', pokemon);
		},
		onModifyMovePriority: 7,
		onModifyMove: function (move) {
			move.onMoveFail=function (target, source, move) {
				if (move.id === 'jumpkick')
					this.damage(source.maxhp / 4, source, source, 'jumpkick');
				if(!move.tryAgain &&!target.volatiles['stall'] &&this.getImmunity(move,target) && !target.volatiles['genjibounce'])
					move.tryAgain=1;
				else return;
				this.add('message','Tapu bulu is angry because its move missed!');
				this.useMove(move,source);
				this.useMove(move,source);
				this.useMove(move,source);
			};
		},
		rating: 4,
	},
    //ahhh
	cursedsoul: {
		onStart: function (source) {
			this.useMove(['Thunder Wave','Toxic','Will-O-Wisp'][this.random(3)], source);
			this.useMove('Initial Curse',source);
		},
		id: "cursedsoul",
		name: "Cursed Soul",
		rating: 4,
	},
    // 咩咩
    iquit: {
        onResidual: function (pokemon) {
            this.useMove('Parting Shot',pokemon);
        },
        onSwitchOut: function (pokemon) {
            pokemon.heal(pokemon.maxhp / 4);
        },
        
        id: "iquit",
        name: "I Quit",
        rating: 3.5,
    },
    // pikachu
    socute: {
        onStart: function (source) {
            this.boost({def:2,spd:2});
        },
        id: "socute",
        name: "So cute",
        rating: 3.5,
    },
    //钱神花
    trolling: {
        onAnyModifyBoost: function (boosts, target) {
            let source = this.effectData.target;
            if (source === target) return;
            if (source === this.activePokemon && target === this.activeTarget) {
                boosts['def'] = 0;
                boosts['spd'] = 0;
                boosts['evasion'] = 0;
            }
            if (target === this.activePokemon && source === this.activeTarget) {
                boosts['atk'] = 0;
                boosts['spa'] = 0;
                boosts['accuracy'] = 0;
            }
        },
        onSourceModifyDamage: function (damage, source, target, move) {
            if (move.typeMod > 0) {
                this.debug('Filter neutralize');
                return this.chainModify(0.75);
            }
        },
        id: "trolling",
        name: "Trolling",
        rating: 3,
	},
	supereffect: {
		id: "supereffect",
		name: "Super Effect",
		onStart: function (pokemon) {
			let target = pokemon.side.foe.active[0];
			if(!target || target.fainted)
				return;
			let types = ['Fairy','Psychic','Dark','Flying','Steel','Dragon','Rock','Ghost','Bug','Poison','Water','Ground','Grass','Fighting','Fire','Ice','Electric'];
			let effective_types = [];
			for (let i = 0; i < types.length; i++) {
				if (this.getEffectiveness(types[i], target) > 0 && 
					this.getImmunity(types[i],target)){
					if(target.types[0] && this.getEffectiveness(target.types[0], types[i]) >0)
						continue;
					if(target.types[1] && this.getEffectiveness(target.types[1], types[i]) >0)
						continue;
					effective_types.push(types[i]);
				}
					
				
			}
			let select_type=effective_types[this.random(effective_types.length)];
			console.log("select_type:",select_type);
			pokemon.setType(select_type);
			this.add('-start', pokemon, 'typechange', "???", '[from] Super Effect');
		},
        rating: 3,
	},
    // charizard-x
    rockheadv2: {
        onDamage: function (damage, target, source, effect) {
			if (effect.id === 'recoil' && this.activeMove.id !== 'struggle') {
                this.heal(damage);
                return null;
            }
		},
        id: "rockheadv2",
        name: "Rock Head v2",
        rating: 3.5,
    },
    //tapu lele
    blackening: {
        onDamagePriority: 1,
        onDamage: function (damage, target, source, effect) {
			if (effect && effect.effectType === 'Move' && !target.set.shiny) {
				this.add('-activate', target, 'ability: Blackening');
				this.effectData.busted = true;
				return 0;
			}
		},
        onUpdate: function (pokemon) {
			if (this.effectData.busted && !pokemon.set.shiny) {
				let template = pokemon.baseTemplate;
                pokemon.set.shiny=true;
				pokemon.details = template.species + (pokemon.level === 100 ? '' : ', L' + pokemon.level) + (pokemon.gender === '' ? '' : ', ' + pokemon.gender) + (pokemon.set.shiny ? ', shiny' : '');
				this.add('detailschange', pokemon, pokemon.details);
                let types=['Ghost','Fighting']
                pokemon.setType(types);
                this.add('-start', pokemon, 'typechange', 'Ghost', '[from] Blackening');
                this.add('-start', pokemon, 'typeadd', 'Fighting', '[from] Blackening');
			}
		},
        id: "blackening",
        name: "Blackening",
        rating: 3.5,
    }
};
