'use strict';

const RandomTeams = require('../../data/random-teams');
class RandomSeasonalMeleeTeams extends RandomTeams{
    randomSeasonalMeleeTeam() {
		let team = [];
		let variant = (this.random(2) === 1);
		let sets = {
			'Acast': {
				species: 'Gourgeist-Super', ability: 'Prankster', item: 'Mental Herb', gender: 'M',
				moves: ['willowisp', 'recover', ['seedbomb', 'shadowstrike'][this.random(2)]],
				signatureMove: 'Needs More Screens',
				evs: {hp:248, def:8, spd:252}, nature: 'Careful',
			},
			'Aelita': {
				species: 'Porygon-Z', ability: 'Protean', item: 'Life Orb', gender: 'N',
				moves: [['boomburst', 'moonblast'][this.random(2)], 'quiverdance', 'chatter'],
				signatureMove: "Energy Field",
				evs: {hp:4, spa:252, spe:252}, nature: 'Modest',
			},
			'ajhockeystar': {
				species: 'Mienshao', ability: 'Magic Guard', item: 'Life Orb', gender: 'M',
				moves: ['knockoff', 'boltstrike', 'highjumpkick'],
				signatureMove: 'OH CANADA',
				evs: {hp:4, atk:252, spe:252}, nature: 'Jolly',
			},
			'Albacore': {
				species: 'Hoopa-Unbound', ability: 'Regenerator', item: 'Choice Scarf', gender: 'N',
				moves: ['hyperspacefury', 'closecombat', 'gunkshot'],
				signatureMove: 'Hit-And-Run',
				evs: {atk:252, spd:4, spe:252}, nature: 'Jolly',
			},
			'Albert': {
				species: 'Goodra', ability: 'Protean', item: 'Assault Vest', gender: 'M',
				moves: ['aurasphere', 'icebeam', 'thunderbolt'],
				signatureMove: 'Aesthetically Pleasing',
				evs: {spa:252, def:4, spe:252}, nature: 'Modest',
			},
			'Always': {
				species: 'Sceptile', ability: 'Overgrow', item: 'Sceptilite', gender: 'M',
				moves: ['leafstorm', 'dracometeor', 'secretsword'],
				signatureMove: 'Back to the bench again?',
				evs: {spa:252, spd:4, spe:252}, nature: 'Timid',
			},
			'Andy': {
				species: 'Absol', ability: 'Justified', item: 'Absolite', gender: 'M',
				moves: ['suckerpunch', 'swordsdance', 'uturn'],
				signatureMove: 'Pilfer',
				evs: {hp:252, atk:252, spe:4}, nature: 'Adamant',
			},
			'Antemortem': {
				species: 'Clefable', ability: (variant === 1 ? 'Sheer Force' : 'Multiscale'), item: (variant === 1 ? 'Life Orb' : 'Leftovers'), gender: 'M',
				moves: ['earthpower', 'cosmicpower', 'recover', 'gigadrain'],
				signatureMove: "Postmortem",
				evs: {hp:252, spa:252, def:4}, nature: 'Modest',
			},
			'Anttya': {
				species: 'Altaria', ability: 'Aerilate', item: 'Altarianite', gender: 'F',
				moves: ['roost', 'triattack', 'searingshot'],
				signatureMove: "Hax",
				evs: {spa:252, spd:4, spe:252}, nature: 'Modest',
			},
			'Anty': {
				species: 'Durant', ability: 'Hustle', item: (variant ? 'Life Orb' : 'Choice Band'), gender: ['M', 'F', 'N'][this.random(3)],
				moves: ['attackorder', 'superpower', (variant ? 'coil' : 'diamondstorm')],
				signatureMove: 'Double-Edgy',
				evs: {hp:4, atk:252, spe:252}, nature: 'Adamant',
			},
			'Articuno': {
				species: 'Articuno', ability: 'Magic Guard', item: 'Red Card', gender: 'F',
				moves: ['softboiled', 'calmmind', 'frostbreath'],
				signatureMove: "True Support",
				evs: {hp:252, def:252, spa:4}, nature: 'Bold',
			},
			'Ascriptmaster': {
				species: 'Rotom', ability: 'Teravolt', item: 'Expert Belt', gender: 'M',
				moves: ['thunderbolt', 'mysticalfire', ['psyshock', 'aurorabeam'][this.random(2)]],
				signatureMove: 'Spectrum Triplet Beam',
				evs: {hp:4, spa:252, spe:252}, ivs: {atk:0}, nature: 'Timid',
			},
			'Astara': {
				species: 'Jirachi', ability: 'Cursed Body', item: ['Leftovers', 'Sitrus Berry'][this.random(2)], gender: 'F', shiny: true,
				moves: ['psystrike', 'moonblast', 'nastyplot', 'scald', 'recover'],
				signatureMove: 'Star Bolt Desperation',
				evs: {hp:4, spa:252, spe:252}, nature: 'Modest',
			},
			'Asty': {
				species: 'Seismitoad', ability: 'Asty Absorb', item: 'Red Card', gender: 'M', shiny: true,
				moves: ['recover', 'drainpunch', 'earthquake'],
				signatureMove: 'Amphibian Toxic',
				evs: {hp:252, atk:156, def:50, spd:50}, nature: 'Adamant',
			},
			'atomicllamas': {
				species: 'Jynx', ability: 'Snow Warning', item: 'Focus Sash', gender: 'M',
				moves: ['lovelykiss', 'blizzard', 'aurasphere'],
				signatureMove: 'Bitchy Comment',
				evs: {spa:252, spd:4, spe:252}, nature: 'Timid',
			},
			'Aurora': {
				species: 'Landorus', ability: 'Sand Force', item: 'Life Orb', gender: 'F',
				moves: ['earthquake', 'rockslide', 'rockpolish'],
				signatureMove: "Aerial Fury",
				evs: {atk:252, def:4, spe:252}, nature: 'Jolly',
			},
			'Reisen': {
				species: 'Mawile', ability: 'Adaptability', item: 'Mawilite', gender: 'F',
				moves: ['meteormash', 'bulletpunch', 'uturn'],
				signatureMove: "Ancestor's Rage",
				evs: {hp:252, atk:252, def:4}, nature: 'Adamant',
			},
			'biggie': {
				species: 'Snorlax', ability: 'Fur Coat', item: 'Leftovers', gender: 'M',
				moves: ['drainpunch', 'diamondstorm', 'kingsshield', 'knockoff', 'precipiceblades'],
				signatureMove: "Food Rush",
				evs: {hp:4, atk:252, spd:252}, nature: 'Adamant',
			},
			'Blast Chance': {
				species: 'Malamar', ability: 'Contrary', item: 'Leftovers', gender: ['M', 'F', 'N'][this.random(3)],
				moves: ['knockoff', 'rest', 'superpower'],
				signatureMove: "Doesn\'t this just win?",
				evs: {hp:252, def:4, spd:252}, nature: 'Careful',
			},
			'Blitzamirin': {
				species: 'Chandelure', ability: 'Prankster', item: 'Red Card', gender: 'M',
				moves: [['spore', 'substitute'][this.random(2)], 'shadowball', 'blueflare'],
				signatureMove: "Pneuma Relinquish",
				evs: {def:4, spa:252, spe:252}, ivs: {atk:0}, nature: 'Timid',
			},
			'bludz': {
				species: 'Kakuna', ability: 'Wonder Guard', item: 'Focus Sash', gender: 'M', shiny: true,
				moves: [['toxic', 'spikyshield'][this.random(2)], ['infestation', 'whirlpool', 'sandtomb', 'magmastorm'][this.random(4)], ['conversion2', 'uturn'][this.random(2)]],
				signatureMove: "Splatter",
				evs: {atk:4, spa:252, spe:252}, nature: 'Naive',
			},
			'Bondie': {
				species: 'Krabby', ability: 'Shell Armor', item: 'Eviolite', gender: 'M',
				moves: ['crabhammer', 'icepunch', 'autotomize'],
				signatureMove: "Claw Guard",
				evs: {hp:4, atk:252, spe:252}, nature: 'Jolly',
			},
			'boTTT': {
				species: 'Regigigas', ability: ['Scrappy', 'Magic Guard'][this.random(2)], item: (variant ? 'Leftovers' : 'Chesto Berry'), gender: 'N', shiny: variant,
				moves: ['bodyslam', 'drainpunch', (variant ? 'aromatherapy' : 'rest')],
				signatureMove: "Auto-Moderation",
				evs: {hp:60, atk:252, spe:196}, nature: 'Adamant',
			},
			'Brandon': {
				species: 'Meowstic-M', ability: 'Prankster', item: 'Leftovers', gender: 'M',
				moves: [['assist', 'barrier'][this.random(2)], 'calmmind', 'rest'],
				signatureMove: 'Wave of Indifference',
				evs: {hp:252, def:252, spd:4}, nature: 'Bold',
			},
			'bumbadadabum': {
				species: 'Samurott', ability: 'Analytic', item: 'Leftovers', gender: 'M',
				moves: ['calmmind', 'originpulse', 'icebeam'],
				signatureMove: "Free Software",
				evs: {hp:252, spa:252, spd:4}, nature: 'Modest',
			},
			'Bummer': {
				species: 'Quagsire', ability: 'Trace', item: 'Leftovers', gender: 'M',
				moves: ['earthquake', 'icebeam', 'recover'],
				signatureMove: "Speedpaint",
				evs: {hp:252, atk:252, spa:4}, nature: 'Docile',
			},
			'chaos': {
				species: 'Bouffalant', ability: 'Fur Coat', item: 'Red Card', gender: 'M',
				moves: ['precipiceblades', ['recover', 'stockpile', 'swordsdance'][this.random(3)], 'extremespeed', 'explosion'],
				signatureMove: "Forcewin",
				evs: {hp:4, atk:252, spe:252}, nature: 'Adamant',
			},
			'Ciran': {
				species: 'Rapidash', ability: 'Defiant', item: 'Life Orb', gender: 'N',
				moves: ['vcreate', 'zenheadbutt', 'knockoff'],
				signatureMove: "HMU",
				evs: {atk:252, spd:4, spe:252}, ivs: {spa:0}, nature: 'Jolly', shiny: true,
			},
			'Clefairy': {
				species: 'Exploud', ability: 'Suction Cups', item: 'Life Orb', gender: 'M',
				moves: ['boomburst', 'focusblast', ['surf', 'fireblast', 'extrasensory', 'icebeam', 'shadowball', 'futuresight', 'mudslap'][this.random(7)]],
				signatureMove: "Hyperspace Earrape",
				evs: {def:4, spa:252, spe:252}, nature: 'Timid',
			},
			'CoolStoryBrobat': {
				species: 'Crobat', ability: 'Gale Wings', item: 'Black Glasses', gender: 'M',
				moves: [['roost', 'bulkup', 'closecombat'][this.random(3)], 'knockoff', 'defog'],
				baseSignatureMove: 'bravebird', signatureMove: "Brave Bat",
				evs: {hp:4, atk:252, spe:252}, nature: 'Jolly',
			},
			'Crestfall': {
				species: 'Diancie', ability: 'Shield Dust', item: 'Diancite',
				moves: ['shellsmash', 'diamondstorm', 'earthpower'],
				signatureMove: "Light of Unruin",
				evs: {hp:252, spd:68, spe:188}, nature: 'Timid',
			},
			'Death on Wings': {
				species: 'Tornadus-Therian', ability: 'Regenerator', item: 'Life Orb', gender: 'M',
				moves: ['dragonascent', 'wildcharge', 'uturn'],
				signatureMove: "Mono Flying",
				evs: {hp:4, atk:252, spe:252}, nature: 'Adamant',
			},
			'Dirpz': {
				species: 'Azumarill', ability: 'Pure Power', item: 'Sitrus Berry', gender: 'M',
				moves: ['aquajet', 'knockoff', 'bellydrum'],
				signatureMove: "Fairy Type Song",
				evs: {hp:68, atk:252, spe:188}, nature: 'Adamant',
			},
			'DMT': {
				species: 'Shedinja', ability: 'Wonder Guard', item: 'Focus Sash',
				moves: ['rapidspin', 'shadowsneak', 'xscissor'],
				signatureMove: "Really Big Swords Dance",
				evs: {atk:252, spa:4, spe:252}, nature: 'Adamant',
			},
			'Duck': {
				species: 'Farfetch\'d', ability: 'Prankster', item: 'Stick', gender: 'M',
				moves: ['destinybond', 'swordsdance', 'softboiled', 'bravebird', 'drillrun'],
				signatureMove: 'QUAttaCK',
				evs: {atk:252, def:4, spe:252}, nature: 'Adamant',
			},
			'E4 Flint': {
				species: 'Dialga', ability: 'Tinted Lens', item: 'Adamant Orb',
				moves: ['kingsshield', 'tailglow', 'doomdesire'],
				signatureMove: 'Holographic Dragon Storm',
				evs: {hp:252, spa:252, spd:4}, nature: 'Modest',
			},
			'Eevee General': {
				species: 'Eevee', ability: 'Prankster', item: 'Eviolite', gender: 'M',
				moves: ['extremespeed', 'swordsdance', ['milkdrink', 'knockoff', 'encore'][this.random(3)]],
				signatureMove: "Admin Things",
				evs: {hp:252, def:4, spe: 252}, nature: 'Jolly',
			},
			'Eyan': {
				species: 'Keldeo', ability: 'Serene Grace', item: 'Life Orb', gender: 'M',
				moves: ['steameruption', ['icebeam', 'moonblast'][this.random(2)], ['seedflare', 'discharge'][this.random(2)]],
				signatureMove: 'Attack of the TOUCAN',
				evs: {spa:252, spd:4, spe:252}, nature: 'Timid',
			},
			'Feliburn': {
				species: 'Infernape', ability: 'Adaptability', item: 'Expert Belt', gender: 'M',
				moves: ['highjumpkick', 'taunt', 'machpunch'],
				signatureMove: "Falcon Punch",
				evs: {atk:252, def:4, spe:252}, nature: 'Jolly',
			},
			'Fireburn': {
				species: 'Ho-oh', ability: 'Regenerator', item: 'Flame Plate', gender: 'M', shiny: true,
				moves: ['sacredfire', 'bravebird', 'recover'],
				signatureMove: "BARN ALL",
				evs: {atk: 252, spd: 4, spe: 252}, nature: 'Adamant',
			},
			'Flying Kebab': {
				species: 'Cloyster', ability: 'Skill Link', item: 'King\'s Rock', gender: 'M',
				moves: ['watershuriken', ['bulletseed', 'pinmissile'][this.random(2)], 'iciclespear'],
				signatureMove: "Frozen Kebab Skewers",
				evs: {atk:252, spd:4, spe:252}, nature: 'Jolly',
			},
			'Former Hope': {
				species: 'Froslass', ability: 'Prankster', item: 'Focus Sash', gender: 'M',
				moves: ['Shadow Ball', 'Ice Beam', 'Taunt', 'Spikes'],
				signatureMove: 'Formerly Former',
				evs: {atk:4, spa:252, spe:252}, ivs: {hp:1, def:0, spd:0}, nature: 'Rash',
			},
			'Freeroamer': {
				species: 'Lucario', ability: 'Justified', item: 'Lucarionite', gender: 'M',
				moves: ['crunch', 'skyuppercut', 'extremespeed'],
				signatureMove: 'Screw This Matchup',
				evs: {atk:252, spd:4, spe:252}, nature: 'Jolly',
			},
			'Frysinger': {
				species: 'Raikou', ability: 'Funhouse', item: 'Zap Plate', gender: 'N',
				moves: ['voltswitch', 'frostbreath', 'aurasphere'],
				signatureMove: "ZAP Confirmed",
				evs: {spa:252, spd:4, spe:252}, nature: 'Timid',
			},
			'f(x)': {
				species: 'Rotom-Heat', ability: 'Levitate', item: 'Leftovers', shiny: true, gender: 'F',
				moves: ['voltswitch', 'fusionflare', 'thunderbolt'],
				signatureMove: "shake that brass",
				evs: {hp:252, spa:252, spe:4}, nature: 'Modest',
			},
			'galbia': {
				species: 'Stoutland', ability: 'Sand Rush', item: 'Life Orb', gender: 'M',
				moves: [['closecombat', 'earthquake'][this.random(2)], 'firefang', 'extremespeed'],
				signatureMove: "(dog)",
				evs: {atk:252, spe:252}, nature: 'Adamant',
			},
			'Galom': {
				species: 'Bisharp', ability: 'Defiant', item: 'Life Orb', gender: 'M',
				moves: ['swordsdance', 'suckerpunch', 'knockoff'],
				signatureMove: "Dragon Slayer",
				evs: {atk:252, def:4, spe:252}, nature: 'Adamant',
			},
			'RODAN': {
				species: 'Munchlax', ability: 'Guts', item: 'Eviolite', gender: 'M',
				moves: ['swordsdance', 'drainpunch', 'bodyslam'],
				signatureMove: "Mother, Father, Gentleman",
				evs: {hp:252, atk:252, spd:4}, nature: 'Adamant',
			},
			'GeoffBruedly': {
				species: 'Whiscash', ability: 'Baitkai', item: 'Leftovers', gender: 'F', shiny: true,
				moves: ['recover', 'thousandwaves', 'razorshell'],
				signatureMove: 'Shitpost Paradise',
				evs: {hp:252, def:252, spd:4}, nature: 'Relaxed',
			},
			'Giagantic': {
				species: 'Moltres', ability: 'Pressure', item: 'Leftovers', shiny: true,
				moves: ['fierydance', 'aeroblast', 'roost'],
				signatureMove: "Eternal Ashes",
				evs: {hp:248, spd:244, spe:16}, nature: 'Bold',
			},
			'Golui': {
				species: 'Cryogonal', ability: 'Special Snowflake', item: 'Life Orb',
				moves: ['quiverdance', 'recover', 'secretsword'],
				signatureMove: "Not Frieza Enough",
				evs: {spa:252, spd:4, spe:252}, nature: 'Modest',
			},
			'GoodMorningEspeon': {
				species: 'Espeon', ability: 'Drought', item: 'Red Card', gender: 'M',
				moves: ['morningsun', 'growth', 'storedpower'],
				signatureMove: 'FRIDGE OFF',
				evs: {hp:4, spa:252, spe:252}, nature: 'Timid',
			},
			'grimAuxiliatrix': {
				species: 'Krookodile', ability: 'Intimidate', item: 'Choice Band', gender: ['M', 'F', 'N'][this.random(3)],
				moves: ['superpower', 'stoneedge', 'earthquake'],
				signatureMove: 'Buzz Axe Rampage',
				evs: {atk:252, def:4, spe:252}, nature: 'Jolly',
			},
			'Halite': {
				species: 'Glaceon', ability: 'Lightly Salted', item: 'Leftovers', gender: 'M',
				moves: [['encore', 'taunt'][this.random(2)], 'tailslap', 'recover'],
				signatureMove: "Saltstorm",
				evs: {hp:252, def:216, spa:200}, nature: 'Bold',
			},
			'Hannah': {
				species: 'Sylveon', ability: 'Pixilate', item: 'Leftovers', gender: 'F',
				moves: ['wish', 'protect', 'judgment'],
				signatureMove: "Sparkle Rain",
				evs: {hp:240, spa:252, spe:16}, nature: 'Modest',
			},
			'Hashtag': {
				species: 'Ursaring', ability: 'Scrappy', item: 'Choice Band', gender: 'M',
				moves: ['thousandarrows', 'explosion', 'u-turn'],
				signatureMove: "GOTTA GO STRATS",
				evs: {hp:4, atk:252, spe:252}, nature: 'Jolly',
			},
			'Haund': {
				species: 'Swellow', ability: 'Guts', item: 'Toxic Orb', gender: 'M',
				moves: ['boomburst', 'heatwave', 'defog'],
				signatureMove: "Psychokinesis",
				evs: {hp:180, atk:76, spe:252}, nature: 'Jolly',
			},
			'HeaLnDeaL': {
				species: 'Magmar', ability: 'Fur Coat', item: 'Mental Herb', gender: 'M',
				moves: ['calmmind', 'healbell', 'seedflare'],
				signatureMove: "Boober's Oblivion",
				evs: {hp:252, def:4, spa:252}, ivs: {atk:0}, nature: 'Modest',
			},
			'HiMyNamesL': {
				species: 'Darmanitan-Zen', ability: 'Chlorophyll', item: 'Lum Berry', gender: 'M',
				moves: ['voltswitch', 'solarbeam', 'psychic'],
				signatureMove: 'Solar Storm',
				evs: {spa:252, spd:4, spe:252}, ivs: {atk:0}, nature: 'Timid',
			},
			'Hippopotas': {
				species: 'Hippopotas', ability: 'Regenerator', item: 'Eviolite', gender: 'M',
				moves: ['protect', 'stealthrock', 'spikes', 'toxicspikes', 'stickyweb'],
				signatureMove: "Hazard Pass",
				evs: {hp:252, def:252, spd:4}, ivs: {atk:0, spa:0}, nature: 'Bold',
			},
			'hollywood': {
				species: 'Mr. Mime', ability: 'Prankster', item: 'Leftovers', gender: 'M',
				moves: ['batonpass', ['substitute', 'milkdrink'][this.random(2)], 'encore'],
				signatureMove: "Meme Mime",
				evs: {hp:252, def:4, spe:252}, ivs: {atk:0, spa:0}, nature: 'Timid',
			},
			'imanalt': {
				species: 'Rhydon', ability: 'Prankster', item: 'Eviolite', gender: 'M',
				moves: ['heartswap', 'rockblast', 'stealthrock', 'substitute', 'batonpass'],
				signatureMove: "FREE GENV BH",
				evs: {hp:252, atk:252, spd:4}, nature: 'Adamant',
			},
			'imas234': {
				species: 'Kyurem', ability: 'Sheer Force', item: 'Life Orb', gender: 'M',
				moves: ['icebeam', 'earthpower', ['agility', 'substitute'][this.random(2)]],
				signatureMove: 'Sweg',
				evs: {def:4, spa:252, spe:252}, nature: 'Timid',
			},
			'iplaytennislol': {
				species: 'Honchkrow', ability: 'Volt Absorb', item: 'Life Orb', gender: 'M',
				moves: ['bravebird', 'suckerpunch', 'knockoff'],
				signatureMove: 'Cathy',
				evs: {atk:252, def:4, spe:252}, nature: 'Adamant',
			},
			'Iyarito': {
				species: 'Gastly', ability: 'Magic Guard', item: 'Life Orb', gender: 'M', shiny: true,
				moves: ['sludgebomb', 'shadowball', 'dazzlinggleam'],
				signatureMove: 'Tomala wey',
				evs: {spa:200, spd:80, spe:228}, nature: 'Timid',
			},
			'Jack Higgins': {
				species: 'Maractus', ability: 'Chlorophyll', item: 'Focus Sash', gender: 'M',
				moves: [['eruption', 'blueflare'][this.random(2)], 'leafstorm', ['voltswitch', 'synthesis', 'destinybond', 'healingwish', 'growth'][this.random(5)]],
				signatureMove: "Splinters",
				evs: {hp:4, spa:252, spe:252}, nature: 'Modest',
			},
			'Jasmine': {
				species: 'Mew', ability: 'Speed Boost', item: 'Focus Sash', gender: 'F',
				moves: ['taunt', 'explosion', 'protect'],
				signatureMove: "Reverse Transform",
				evs: {hp:84, atk:84, def:84, spa:84, spd:84, spe:84}, nature: 'Quirky',
			},
			'jdarden': {
				species: 'Dragonair', ability: 'Fur Coat', item: 'Eviolite', gender: 'M',
				moves: ['rest', 'sleeptalk', 'quiverdance'], name: 'jdarden',
				signatureMove: "Wyvern's Wind",
				evs: {hp:252, def:4, spd:252}, nature: 'Calm',
			},
			'Joim': {
				species: 'Zapdos', ability: 'Tinted Lens', item: 'Life Orb', gender: 'M', shiny: true,
				moves: ['thunderbolt', 'hurricane', 'quiverdance'],
				signatureMove: "Gaster Blaster",
				evs: {hp:4, spa:252, spe:252}, ivs: {atk:0}, nature: 'Modest',
			},
			'Juanma': {
				species: 'Heatran', ability: 'Levitate', item: 'Charcoal', gender: 'M', shiny: true,
				moves: ['eruption', 'steameruption', 'quiverdance'],
				signatureMove: "\\Exception",
				evs: {hp:252, spa:252, def:4}, ivs: {atk:0}, nature: 'Modest',
			},
			'Kalalokki': {
				species: 'Wingull', ability: 'Swift Swim', item: 'Life Orb', gender: 'M',
				moves: ['hurricane', 'thunder', 'waterspout'],
				signatureMove: "Maelström",
				evs: {spa:252, spd:4, spe:252}, nature: 'Modest',
			},
			'Kid Wizard': {
				species: 'Hoopa', ability: 'Speed Boost', item: 'Life Orb', gender: 'N',
				moves: ['protect', 'storedpower', ['energyball', 'flamethrower', 'scald'][this.random(3)]],
				signatureMove: "Broken Wand",
				evs: {spa:252, spd:4, spe:252}, nature: 'Timid',
			},
			'Layell': {
				species: 'Sneasel', ability: 'Technician', item: "King's Rock", gender: 'M',
				moves: ['iceshard', 'iciclespear', ['machpunch', 'pursuit', 'knockoff'][this.random(3)]],
				signatureMove: "Pixel Protection",
				evs: {def:4, atk:252, spe:252}, nature: 'Adamant',
			},
			'LegitimateUsername': {
				species: 'Shuckle', ability: 'Unaware', item: 'Leftovers', gender: 'M',
				moves: ['leechseed', 'rest', 'foulplay'],
				signatureMove: "Shell Fortress",
				evs: {hp:252, def:228, spd:28}, nature: 'Calm',
			},
            'LJ': {
				species: 'Giratina-Origin', ability: 'Levitate', item: 'Griseous Orb', gender: 'M',
				moves: ['dragondance', 'substitute', 'playrough'],
				signatureMove: "Chaos Wheel",
				evs: {atk:252, def:4, spe:252}, nature: 'Jolly',
			},
			'Lyto': {
				species: 'Lanturn', ability: 'Magic Bounce', item: 'Leftovers', gender: 'M',
				moves: ['originpulse', 'lightofruin', 'blueflare', 'recover', 'tailglow'],
				signatureMove: "Gravity Storm",
				evs: {hp:188, spa:252, spe:68}, nature: 'Modest',
			},
			'macle': {
				species: 'Greninja', ability: 'Protean', item: 'Life Orb', gender: 'M',
				moves: ['closecombat', 'vcreate', 'steameruption'],
				signatureMove: "Ribbit",
				evs: {atk:252, spa:252, spe:252}, nature: 'Lonely',
			},
			'manu 11': {
				species: 'Surskit', ability: 'Swift Swim', item: 'Life Orb', gender: 'M',
				moves: ['quiverdance', 'icebeam', 'spore'],
				signatureMove: 'Surskit Energy',
				evs: {def:4, spa:252, spe:252}, nature: 'Timid',
			},
			'Marshmallon': {
				species: 'Marshtomp', ability: 'Arena Trap', item: 'Eviolite', gender: 'M',
				moves: ['thousandarrows', 'morningsun', 'kingsshield'],
				signatureMove: 'Excuse',
				evs: {hp:252, def:24, spd:232}, nature: 'Impish',
			},
			'McMeghan': {
				species: 'Scrafty', ability: ['Moxie', 'Clear Body', 'Stench'][this.random(3)], item: 'Leftovers', gender: 'M',
				moves: [['dragondance', 'agility'][this.random(2)], ['knockoff', 'rockslide'][this.random(2)], ['highjumpkick', 'drainpunch', 'substitute'][this.random(3)]],
				signatureMove: 'Odd Punch',
				evs: {hp:192, atk:80, spe:236}, nature: 'Jolly',
			},
			'Megazard': {
				species: 'Furfrou', ability: 'Serene Grace', item: 'Leftovers', gender: 'M',
				moves: ['chargebeam', 'batonpass', 'ancientpower'],
				signatureMove: 'Play Dead',
				evs: {hp:252, spa:4, spe:252}, nature: 'Timid',
			},
			'Mizuhime': {
				species: 'Kingdra', ability: 'Torrent', item: 'Mystic Water', gender: 'F', shiny: true,
				moves: ['spacialrend', 'thunder', 'sheercold'],
				signatureMove: 'Double Laser',
				evs: {hp:4, spa:252, spe:252}, nature: 'Timid',
			},
			'nv': {
				species: 'Larvitar', ability: 'Solid Rock', item: 'Eviolite', gender: 'M',
				moves: ['precipiceblades', 'diamondstorm', 'megahorn'],
				signatureMove: 'Hamster Dance',
				evs: {hp:252, atk:252, spe:4}, nature: 'Adamant',
			},
			'Omega-Xis': {
				species: 'Genesect', ability: 'Magic Bounce', item: 'Expert Belt', gender: 'N',
				moves: ['shiftgear', 'sacredfire', 'uturn'],
				signatureMove: 'Meme Cannon',
				evs: {atk:252, def:4, spe:252}, nature: 'Jolly',
			},
			'Orda-Y': {
				species: 'Regice', ability: 'Magic Guard', item: 'Life Orb', gender: 'N',
				moves: ['stealthrock', 'thunderbolt', 'recover'],
				signatureMove: 'Shock Switch',
				evs: {hp:252, spa:252, spe:4}, ivs: {atk: 0}, nature: 'Calm',
			},
			'Overneat': {
				species: 'Blaziken', ability: 'Speed Boost', item: 'Blazikenite', gender: 'M',
				moves: ['protect', 'stoneedge', 'flareblitz'],
				signatureMove: "Neatto Kick",
				evs: {atk:252, def:4, spe:252}, nature: 'Adamant',
			},
			'Phable': {
				species: 'Forretress', ability: 'Prankster', item: 'Focus Sash', gender: 'M',
				moves: ['stealthrock', 'rapidspin', 'spikes'],
				signatureMove: 'Burn Spikes',
				evs: {hp:252, def:252, spe:4}, nature: 'Relaxed',
			},
			//'Pikachuun': {
			//	species: 'Pikachu', ability: 'Magic Guard', item: 'Light Ball',
			//	moves: ['thunderbolt', 'lightofruin', 'icebeam'],
			//	signatureMove: "Pure Skill",
			//	evs: {def:4, spa:252, spe:252}, nature: 'Modest',
			//},
			'pluviometer': {
				species: 'Mismagius', ability: 'Levitate', item: 'Life Orb',
				moves: ['painsplit', 'earthpower', 'shadowball'],
				signatureMove: "Grammar Hammer",
				evs: {hp:4, spa:252, spe:252}, ivs: {atk:0}, nature: 'Timid',
			},
			'qtrx': {
				species: 'Unown', ability: 'Sturdy', item: 'Keyboard', gender: 'M',
				moves: [],
				signatureMove: "Hidden Power Normal",
				evs: {hp:252, atk:4, spa:252}, ivs: {spe:0}, nature: 'Quiet',
			},
			'Quite Quiet': {
				species: 'Heliolisk', ability: 'Regenerator', item: 'Life Orb', gender: 'F',
				moves: ['stealthrock', 'perishsong', 'nuzzle'],
				signatureMove: "Retreat",
				evs: {def:4, spa:252, spe:252}, nature: 'Timid',
			},
			'Raseri': {
				species: 'Musharna', ability: 'Synchronize', item: 'Leftovers', gender: ['M', 'F', 'N'][this.random(3)],
				moves: ['barrier', 'storedpower', 'moonblast'],
				signatureMove: "Purify Soul",
				evs: {hp:248, def:252, spd:8}, nature: 'Bold',
			},
			'Rekeri': {
				species: 'Tyrantrum', ability: 'Speed Boost', item: 'Life Orb', gender: 'M',
				moves: ['outrage', 'extremespeed', 'closecombat'],
				signatureMove: "Land Before Time",
				evs: {hp:252, atk:252, def:4}, nature: 'Adamant',
			},
			'RosieTheVenusaur': {
				species: 'Venusaur', ability: 'Moxie', item: 'Leftovers', gender: 'F',
				moves: [['fusionflare', 'sacredfire'][this.random(2)], 'extremespeed', 'knockoff', 'closecombat'],
				signatureMove: "Swag Plant",
				evs: {hp:252, atk:252, def:4}, nature: 'Adamant',
			},
			'rssp1': {
				species: 'Rufflet', ability: 'Hustle', item: 'Life Orb', gender: 'M',
				moves: ['return', 'bravebird', 'superpower'],
				signatureMove: "Praise Rufflets",
				evs: {atk:252, def:128, spe:128}, nature: 'Adamant',
			},
			'Sailor Cosmos': {
				species: 'Milotic', ability: 'Competitive', item: 'Assault Vest', gender: 'F', shiny: true,
				moves: ['steameruption', 'icebeam', 'dragontail'],
				signatureMove: "Cosmos Ray",
				evs: {hp:252, def:248, spd:8}, nature: 'Bold',
			},
			'Scotteh': {
				species: 'Suicune', ability: 'Fur Coat', item: 'Leftovers', gender: 'M',
				moves: ['icebeam', 'scald', 'recover', 'nastyplot'],
				signatureMove: "Geomagnetic Storm",
				evs: {def:252, spa:4, spe:252}, nature: 'Bold',
			},
			'scpinion': {
				species: 'Slowbro', ability: 'Unaware', item: 'Slowbronite',
				moves: ['slackoff', 'amnesia', 'steameruption'],
				signatureMove: "LOL! Room",
				evs: {hp:248, def:136, spd:124}, ivs: {spe:0}, nature: 'Relaxed',
			},
			'Scyther NO Swiping': {
				species: 'Scyther', ability: 'Technician', item: 'Razor Claw', gender: 'M',
				moves: ['leafblade', 'honeclaws', 'nightslash'],
				signatureMove: "Sniper Swipes",
				evs: {atk:252, def:4, spe:252}, nature: 'Jolly',
			},
			'shrang': {
				species: 'Gyarados', ability: 'Aerilate', item: 'Leftovers', gender: 'F',
				moves: ['dragondance', 'earthquake', 'stoneedge'],
				signatureMove: '.banword',
				evs: {atk:252, def:4, spe:252}, nature: 'Jolly',
			},
			'Sigilyph': {
				species: 'Sigilyph', ability: 'Magic Guard', item: 'Life Orb', gender: 'M', shiny: true,
				moves: ['aeroblast', 'blueflare', 'nightdaze'],
				signatureMove: 'Gamma Ray Burst',
				evs: {spa:252, spd:4, spe:252}, ivs: {atk:0}, nature: 'Timid',
			},
			'sirDonovan': {
				species: 'Togetic', ability: 'Gale Wings', item: 'Eviolite', gender: 'M',
				moves: ['roost', 'hurricane', ['charm', 'defog'][this.random(2)]],
				signatureMove: "Ladies First",
				evs: {hp:252, spa:252, spe:4}, nature: 'Modest',
			},
			'Skitty': {
				species: 'Audino', ability: 'Intimidate', item: 'Audinite', gender: 'M',
				moves: ['acupressure', 'recover', ['taunt', 'cosmicpower', 'magiccoat'][this.random(3)]],
				signatureMove: "Ultimate Dismissal",
				evs: {hp:252, def:252, spd:4}, nature: 'Bold',
			},
			'Snobalt': {
				species: 'Voodoom', ability: 'Mountaineer', item: 'Life Orb', gender: 'M',
				moves: ['paleowave', 'darkpulse', 'quiverdance'],
				signatureMove: 'Cap Bust',
				evs: {def:4, spa:252, spe:252}, nature: 'Timid',
			},
			'Snowy': {
				species: 'Snover', ability: 'Holy Hail', item: 'Focus Sash', gender: 'F',
				moves: ['blizzard', 'gigadrain', 'leechseed'],
				signatureMove: 'Hail Whitequeen',
				evs: {spa:252, spd:4, spe:252}, nature: 'Modest',
			},
			//'SolarisFox': {
			//	species: 'Delphox', ability: 'Klutz', item: ['Choice Scarf', 'Choice Band', 'Choice Specs', 'Assault Vest', 'Lagging Tail', 'Flame Orb', 'Toxic Orb'][this.random(7)], gender: 'M',
			//	moves: ['trick', 'lavaplume', 'psyshock'],
			//	signatureMove: "Wonder Bark",
			//	evs: {hp:40, spa:216, spe:252}, ivs: {atk:0}, nature: 'Timid',
			//},
			'Sonired': {
				species: 'Anorith', ability: 'Sniper', item: 'Choice Band', gender: ['M', 'F', 'N'][this.random(3)],
				moves: ['rockslide', 'megahorn', 'knockoff'],
				signatureMove: "God Turn",
				evs: {def:4, atk:252, spe:252}, nature: 'Jolly',
			},
			'SpaceBass': {
				species: 'Foongus', ability: 'Prankster', item: 'Eviolite', gender: 'M',
				moves: ['batonpass', 'ingrain', 'substitute'],
				signatureMove: "Army of Mushrooms",
				evs: {hp:252, def:128, spd:128}, nature: 'Sassy',
			},
			'sparktrain': {
				species: 'Seel', ability: 'Regenerator', item: 'Life Orb', gender: 'M',
				moves: ['fakeout', 'extremespeed', 'precipiceblades'],
				signatureMove: 'Pill Frenzy',
				evs: {hp:232, atk:252, spd:24}, nature: 'Adamant',
			},
			'SpecsMegaBeedrill': {
				species: 'Weedle', ability: 'Shield Dust', item: 'Focus Sash', gender: 'M',
				moves: ['blueflare', 'earthpower', 'sludgewave'],
				signatureMove: "High Five",
				evs: {def:4, spa:252, spe:252}, nature: 'Timid',
			},
			'Spy': {
				species: 'Hydreigon', ability: 'Mega Launcher', item: 'Life Orb', gender: 'M',
				moves: ['dragonpulse', 'darkpulse', 'aurasphere', 'originpulse', 'autotomize'],
				signatureMove: "Mineral Pulse",
				evs: {hp:4, spa:252, spe:252}, nature: 'Timid',
			},
			'Starmei': {
				species: 'Staryu', ability: 'Parental Bond', item: 'Leftovers', shiny: true,
				moves: ['cosmicpower', 'recover', 'nuzzle'],
				signatureMove: "RKO Outta Nowhere",
				evs: {hp:248, def:4, spe:252}, nature: 'Timid',
			},
			'starry': {
				species: 'Wobbuffet', ability: 'Shadow Tag', item: 'Leftovers', gender: 'F',
				moves: ['counter', 'mirrorcoat', 'encore'],
				signatureMove: "oh",
				evs: {hp:52, def:232, spd:224}, ivs: {atk:0}, nature: 'Bold',
			},
			'Steamroll': {
				species: 'Growlithe', ability: 'Sheer Force', item: 'Life Orb', gender: 'M',
				moves: ['flareblitz', 'volttackle', 'playrough'],
				signatureMove: "Conflagration",
				evs: {atk:252, def:4, spe:252}, nature: 'Adamant',
			},
			'Sunfished': {
				species: 'Stunfisk', ability: 'Killjoy', item: 'Leftovers', gender: 'M',
				moves: ['simplebeam', 'discharge', 'earthpower'],
				signatureMove: "Flat Joke",
				evs: {hp:4, def:252, spd:252}, nature: 'Modest',
			},
			'Sweep': {
				species: 'Omastar', ability: 'Soundproof', item: 'Mystic Water', gender: 'M',
				moves: ['earthpower', 'shellsmash', 'icebeam'],
				signatureMove: '(wave(',
				evs: {spa:252, spd:4, spe:252}, nature: 'Modest',
			},
			'talkingtree': {
				species: 'Trevenant', ability: 'Harvest', item: ['sitrusberry', 'custapberry'][this.random(2)], gender: 'M',
				moves: ['woodhammer', 'shadowforce', ['shadowsneak', 'leechseed', 'refresh', 'poweruppunch'][this.random(3)]],
				signatureMove: 'I Want You Back',
				evs: {hp:252, atk:156, def:32, spd:72}, ivs: {spa:1, spe:9}, nature: 'Brave',
			},
			'TEG': {
				species: 'Thundurus', ability: 'Hidden Type', gender: 'M',
				item: [
					'Draco', 'Dread', 'Earth', 'Fist', 'Flame', 'Icicle', 'Insect', 'Iron',
					'Meadow', 'Mind', 'Pixie', 'Splash', 'Spooky', 'Stone', 'Toxic',
				][this.random(15)] + ' Plate',
				moves: ['judgment', 'oblivionwing', 'voltswitch'],
				signatureMove: 'Bad Code',
				evs: {spa:252, spd:4, spe:252}, nature: 'Timid',
			},
			'Temporaryanonymous': {
				species: 'Doublade', ability: 'Tough Claws', item: 'Eviolite', gender: 'M',
				moves: ['swordsdance', ['xscissor', 'sacredsword', 'knockoff'][this.random(3)], 'geargrind'],
				signatureMove: "SPOOPY EDGE CUT",
				evs: {hp:252, atk:252, def:4}, nature: 'Adamant',
			},
			'Teremiare': {
				species: 'Zorua', ability: 'Multiscale', item: 'Red Card', gender: ['M', 'F', 'N'][this.random(3)], shiny: true,
				moves: ['encore', 'foulplay', 'batonpass'],
				signatureMove: "Broken Mirror",
				evs: {hp:252, spa:4, spe:252}, ivs: {atk:0}, nature: 'Timid',
			},
			'The Immortal': {
				species: 'Blastoise', ability: 'Magic Bounce', item: 'Blastoisinite', gender: 'M',
				moves: ['shellsmash', 'steameruption', 'dragontail'],
				signatureMove: "Sleep Walk",
				evs: {hp:252, def:4, spd:252}, nature: 'Sassy',
			},
			'TONE114': {
				species: 'Clawitzer', ability: 'Mega Launcher', item: 'Life Orb', gender: 'M',
				moves: ['icebeam', 'darkpulse', 'aurasphere'],
				signatureMove: "Desolation Pulse",
				evs: {spa:252, spd:4, spe:252}, nature: 'Modest',
			},
			//'Trickster': {
			//	species: 'Whimsicott', ability: 'Illuminate', item: 'Quick Claw', gender: 'M',
			//	moves: [['substitute', 'defog'][this.random(2)], 'sing', 'gigadrain'],
			//	signatureMove: "Sacred Spear Explosion",
			//	evs: {hp:252, def:4, spe:252}, nature: 'Timid',
			//},
			'unfixable': {
				species: 'Cacnea', ability: 'Water Absorb', item: 'Eviolite', gender: 'F',
				moves: ['spikes', 'spikyshield', variant ? 'powerwhip' : 'seedflare'],
				signatureMove: 'SPIKEY RAIN',
				evs: variant ? {hp:252, atk:252, spd:4} : {hp:252, spa:252, spd:4}, nature: variant ? 'Adamant' : 'Modest',
			},
			'urkerab': {
				species: 'Skuntank', ability: 'Sniper', item: 'Razor Claw', gender: 'M',
				moves: ['nightslash', 'drillrun', 'crosspoison'],
				signatureMove: 'Holy Orders',
				evs: {hp:248, atk:228, def:24, spd:8}, nature: 'Careful',
			},
			'useless trainer': {
				species: 'Scatterbug', ability: 'Sturdy', item: 'Altarianite', gender: 'M',
				moves: ['stickyweb', 'stringshot', 'tackle'],
				signatureMove: 'Of Curse',
				evs: {atk:252, spa:252, spe:4}, nature: 'Serious',
			},
			'Vapo': {
				species: 'Vaporeon', ability: 'Primordial Sea', item: 'Splash Plate', gender: 'M',
				moves: ['scald', 'waterspout', 'icebeam'],
				signatureMove: "Wetwork",
				evs: {hp:252, def:4, spa:252}, ivs: {spe:0}, nature: 'Quiet',
			},
			'Vexen IV': {
				species: 'Politoed', ability: 'Sap Sipper', item: 'Life Orb', gender: 'M',
				moves: ['scald', 'gigadrain', 'thunderbolt'],
				signatureMove: "Debilitate",
				evs: {hp:248, def:8, spa:252}, nature: 'Modest',
			},
			'Winry': {
				species: 'Buizel', ability: 'Water Veil', item: 'Life Orb', gender: 'F', shiny: true,
				moves: ['watershuriken', ['jumpkick', 'iciclecrash'][this.random(2)], 'waterfall'],
				signatureMove: 'Fight to the Death',
				evs: {atk:252, def:4, spe:252}, nature: 'Jolly',
			},
			'xfix': {
				species: 'Xatu', ability: 'Magic Bounce', item: 'Focus Sash', gender: 'M',
				moves: ['substitute', 'thunderwave', 'roost'],
				signatureMove: '(Glitch Dimension)',
				evs: {hp:252, spd:252, def:4}, nature: 'Calm',
			},
			'xJoelituh': {
				species: 'Marowak', ability: 'Skill Link', item: 'Thick Club', gender: 'M',
				moves: ['bonerush', 'armthrust', 'rockblast'],
				signatureMove: "xHaxlituh",
				evs: {atk:252, spd:4, spe:252}, nature: 'Adamant',
			},
			'xShiba': {
				species: 'Fletchinder', ability: 'Gale Wings', item: 'Eviolite', gender: 'F',
				moves: ['dragonascent', 'sacredfire', 'roost'],
				signatureMove: "Go Inda Like Linda",
				evs: {hp:248, atk:252, spe:8}, nature: 'Adamant',
			},
			'Zarel': {
				species: 'Meloetta', ability: 'Serene Grace', item: '', gender: 'F',
				moves: ['lunardance', 'fierydance', 'perishsong', 'petaldance', 'quiverdance'],
				signatureMove: "Relic Song Dance",
				evs: {hp:4, atk:252, spa:252}, nature: 'Quiet',
			},
			'Zebraiken': {
				species: 'zebstrika', ability: 'Compound Eyes', item: 'Life Orb', gender: 'M',
				moves: ['thunder', ['fire blast', 'focusblast', 'highjumpkick', 'headsmash'][this.random(3)], ['blizzard', 'iciclecrash', 'sleeppowder'][this.random(3)]],
				signatureMove: "bzzt",
				evs: {atk:4, spa:252, spe:252}, nature: 'Hasty',
			},
			'Zero Lux Given': {
				species: 'Luxray', ability: 'Guts', item: 'Flame Orb', gender: 'M',
				moves: ['fusionbolt', 'facade', ['iceshard', 'petalblizzard'][this.random(2)]],
				signatureMove: "Pun Ray",
				evs: {atk:252, def:4, spe:252}, ivs: {spa:0}, nature: 'Adamant',
			},
			'Zodiax': {
				species: 'Gallade', ability: 'Defiant', item: 'Fighting Gem', gender: 'M',
				moves: ['thunderwave', 'agility', 'zenheadbutt'],
				signatureMove: "Standing Full",
				evs: {atk:252, def:4, spe:252}, nature: 'Jolly',
			},
            'ceca3': {
                species: 'Kirlia', ability: 'Re:Start', item: 'Power Herb', gender: 'F',
				moves: ['geomancy', 'secretsword', 'storedpower'],
				signatureMove: "Initial Song",
				evs: {spa:252, def:4, spe:252}, nature: 'Timid',
            },
            'SCEAM': {
                species: 'Yveltal', ability: 'Delta Stream', item: 'Sky Plate', 
				moves: ['lavaplume', 'darkpulse', 'oblivionwing'],
				signatureMove: "Dark Wind",
				evs: {hp:168, spa:152, spe:188}, nature: 'Modest',
            },
            'EroyalBoy': {
                species: 'Salamence', ability: 'Multiscale', item: 'Salamencite', 
				moves: ['calmmind', 'extremespeed', 'fakeout'],
				signatureMove: "Jolin Boomburst",
				evs: {hp:44, atk:252, spe:212}, nature: 'Adamant',
            },
            'FSK':{
                species: 'Arceus-Steel', ability: 'Stand Alone Complex', item: 'Fairium Z', 
				moves: ['naturesmadness', 'healorder', 'taunt'],
				signatureMove: "Ultimate Judgment", 
				evs: {hp:252, spd:40, spe:216}, nature: 'Timid',
            },
            'Vincent':{
                species: 'Archen', ability: 'Adaptability', item: 'Life Orb', 
				moves: ['dragonascent', 'thousandarrows', 'shellsmash'],
				signatureMove: "Vincent Shield", 
				evs: {spd:4, atk:252, spe:252}, nature: 'Jolly',
            },
            '暗黑员':{
                species: 'Giratina', ability: 'Shadow Tag', item: 'Choice Scarf', 
				moves: ['trick', 'kingsshield', 'healorder'],
                signatureMove: "Dark Spite", 
				evs: {spd:4, spa:252, spe:252}, nature: 'Timid',
            },
            'MS':{
                species: 'Beedrill-Mega', ability: 'Adapability', item: 'Assault Vest', 
				moves: ['gunkshot', 'megahorn', 'drillrun'],
                signatureMove: "Innovative Turn", 
				evs: {spd:4, atk:252, spe:252}, nature: 'Jolly',
            },
            'I do stall':{
                species: 'Blissey', ability: 'Smilence', item: 'Toxic Orb', 
				moves: ['strengthsap', 'spikyshield', 'toxic'],
                signatureMove: "Ultimate Judgment", 
				evs: {spd:252, def:252}, nature: 'Bold',
            },
            '晋文公':{
                species: 'Pidgeot-Mega', ability: 'Mold Breaker', item: ['Dread Plate','Silk Scarf'][this.random(2)],
                moves: ['boomburst', 'quiverdance', 'slackoff'],
                signatureMove: "The Crow Sea",
                evs: {spa:252, spe:252,spd:4}, nature: 'Timid',
            },
            'Nightmare':{
                species: 'Swampert', ability: 'Drizzle', item: 'Swampertite',
                moves: ['thousandarrows', 'liquidation', 'swords dance'],
                signatureMove: "Sniping Nightmare",
                evs: {atk:252, spe:252, spd:4}, nature: 'Adamant',
            },
            '非常容易做出的肮脏的小事':{
                species: 'Whimsicott', ability: 'Prankster', item: 'Lum Berry',
                moves: ['leechseed', 'glare', 'moonblast'],
                signatureMove: "Prankster Shield",
                evs: {hp:248, spe:8, def:252}, nature: 'Bold',
            },
            '我充钱了':{
                species: 'Togekiss', ability: 'Fast Hax', item: 'Leftovers',
                moves: ['airslash', 'calmmind', 'moonlight'],
                signatureMove: "Moonblast",
                evs: {hp:72, spa:252, spe:184}, nature: 'Modest',
            },
            '弱鸡sin':{
                species: 'Deoxys-Speed', ability: 'No Guard', item: 'Focus Sash', gender: 'N',
                moves: ['zapcannon', 'stealthrock', ['taunt', 'magiccoat'][this.random(2)]],
                signatureMove: "Imprisonform",
                evs: {spa:252, spd:4, spe:252}, nature: 'Timid',
            },
            '总受lxz':{
                species: 'Ferrothorn', ability: 'I Have Ferro', item: 'Leftovers', gender: 'M',
                moves: ['leechseed', 'spikes', ['powerwhip', 'gyroball'][this.random(2)]],
                signatureMove: "Haze Shield",
                evs: {hp:252, def:88, spd:168}, nature: 'Impish',
            },
            '吓得lxz都Mega了': {
                species: 'Tyranitar-Mega', ability: 'Sand Stream', item: (variant ? 'Smooth Rock' : 'Choice Scarf'), gender: 'M',
                moves: (variant ? ['diamondstorm', 'shoreup', 'knockoff'] : ['knockoff', 'diamondstorm', 'spectralthief']),
                signatureMove: "Sennen Goroshi",
                evs: {atk:252, def:4, spe:252}, nature: 'Jolly',
            },
            'Raticate-Alola': {
                species: 'Raticate-Alola', ability: 'Simple', item:'Normalium Z', gender: 'M',
                moves: ['powertrip', 'extremespeed', 'substitute'],
                signatureMove: "Celebration",
                evs: {hp:32, atk:180, def:44, spe:252}, nature: 'Jolly',
            },
            '袁绍': {
                species: 'Prinplup', ability: 'Clannism', item:'Berserk Gene',
                moves: ['iciclecrash', 'thousandarrows', 'aquajet'],
                signatureMove: "Triumphantly Command",
                evs: {atk:252, def:4, spe:252}, nature: 'Jolly',
            },
            '洛渊':{
                species: 'Alakazam-Mega', ability: 'Illusion', item: 'Expert Belt',
                moves: ['secretsword', 'mysticalfire', 'dazzlinggleam'],
                signatureMove: "Spewing Psychic",
                evs: {spa:252, spd:4, spe:252}, nature: 'Timid',
            },
            'Heracross-Mega':{
                species: 'Heracross-Mega', ability: 'Nerfed Triage', item: 'Big Root',
                moves: ['swordsdance', 'drainpunch', 'icepunch'],
                signatureMove: "Leech Life",
                evs: {hp:252, spd:4, atk:252}, nature: 'Adamant',
            },
            'Marowak-Alola':{
                species: 'Marowak-Alola', ability: ['Adaptability','Sheer Force'][this.random(2)], item: 'Thick Club',
                moves: ['flareblitz', 'shadowbone', 'shadowsneak'],
                signatureMove: "Stealth Rock",
                evs: {hp:248, spd:8, atk:252}, nature: 'Adamant',
            },
            'loving1096':{
                species: 'Kyogre', ability: 'Water Spin', item: 'Choice Scarf',
                moves: ['waterspout', 'voltswitch', 'icebeam'],
                signatureMove: "Excited Surf",
                evs: {spa:252, spd:4, spe:252}, nature: 'Timid',
            },
            '源氏':{
                species: 'Scizor-Mega', ability: 'Steelate', item: 'Insect Plate',
                moves: ['extremespeed', 'swordsdance', 'uturn'],
                signatureMove: "Genji Bounce",
                evs: {hp:252, atk:252, spd:4}, nature: 'Adamant',
			},
			'暗星': {
                species: 'Metagross', ability: 'Defensive Boost', item: 'Metagrossite',
                moves: ['meteormash', 'wildcharge', 'flamecharge'],
                signatureMove: "Ultimate Charge",
                evs: {atk:252, spd:4, spe:252}, nature: 'Jolly',
			},
			'Rotom-Frost': {
				species: 'Rotom-Frost', ability: 'Dazzling', item: 'Expert Belt',
                moves: ['icebeam', 'earthpower', 'thunderwave'],
                signatureMove: "Dance of control",
                evs: {spa:252, spd:4, spe:252}, nature: 'Timid',
			},
			'Weavile': {
				species: 'Weavile', ability: 'Assassin', item: 'Focus Sash',
                moves: ['knockoff', 'iciclecrash', ['iceshard', 'suckerpunch'][this.random(2)]],
                signatureMove: "Backstab",
                evs: {atk:252, spd:4, spe:252}, nature: 'Jolly',
			},
			'绝望的非洲人': {
				species: 'Tapu Bulu', ability: 'African Rampage', item: 'Iapapa Berry',shiny: true,
                moves: ['powerwhip', 'jumpkick','playrough'],
                signatureMove: "Substitute",
                evs: {hp:248, atk:252, spe:8}, nature: 'Adamant',
			},
			'ahhh': {
				species: 'Gengar', ability: 'Cursed Soul', item: 'Black Sludge',shiny: true,
                moves: ['painsplit', 'hex','substitute'],
                signatureMove: "lmfao",
                evs: {hp:4, spa:252, spe:252}, nature: 'Timid',
			},
			'Zygarde': {
				species: 'Zygarde', ability: 'Super Effect', item: 'Leftovers',shiny: true,
                moves: ['slack off', 'coil','substitute'],
                signatureMove: "Aura Judge",
                evs: {hp:144, atk:216, spe:148}, nature: 'Adamant',
			},
            '天天退坑的咩咩': {
            species: 'Ampharos-Mega', ability: 'I Quit', item: 'Leftovers',
        	moves: ['spacialrend', 'thunderbolt',['spectralthief', 'grassknot'][this.random(2)]],
            signatureMove: "Daily Quit",
            evs: {hp:248, def:116, spd:144}, nature: 'Bold',
            },
            '皮神': {
            species: 'pikachu', ability: 'So Cute', item: 'Light Ball',
            moves: ['transform','extremespeed', 'hiddenpowerice'],
            signatureMove: "10,000,000 Volt Thunderbolt",
            evs: {hp:248, def:4, spe:252}, nature: 'Naive',
            },
            '钱神花': {
            species: 'cradily', ability: 'Filter', item: 'Leftovers',
            moves: ['Stockpile','Recover', ['stealthrock', 'rapidspin'][this.random(2)]],
            signatureMove: "God Leech",
            evs: {hp:248, def:100, spd:156}, nature: 'Careful',
            },
            'Charizard': {
                species: 'Charizard-Mega-X', ability: 'Rock Head v2', item: 'Choice Band',
                moves: ['flareblitz', 'headsmash','extremespeed'],
                signatureMove: "Great Fire",
                evs: { atk:252, spe:252}, nature: 'Jolly',
            },
            '黑化魔法少女':{
                species: 'Tapu Lele', ability: 'Blackening', item: 'Coba Berry',
                moves: ['lovelykiss', 'moongeistbeam','aurasphere','icebeam','stealthrock'],
                signatureMove: "Bloody Ending",
                evs: { spa:252, spe:252}, nature: 'Timid',
            },
        };
        
        // Generate the team randomly.
        let pool = Object.keys(sets);
		let our_pokes = ['ceca3','SCEAM','EroyalBoy','FSK','Vincent','暗黑员','MS','I do stall','晋文公','Nightmare','非常容易做出的肮脏的小事', '我充钱了', '弱鸡sin', '总受lxz', '吓得lxz都Mega了','Raticate-Alola','袁绍','洛渊','Heracross-Mega','Marowak-Alola','loving1096','源氏','暗星','绝望的非洲人','Weavile','Rotom-Frost','ahhh','天天退坑的咩咩','皮神','钱神花','qtrx','Marshmallon','Zygarde','Charizard','黑化魔法少女'];
		let selected_pokes=[];
        //our_pokes= ['Charizard','Zygarde','钱神花','黑化魔法少女'];
        for (let i = 0; i < 6; i++) {
            let name = this.sampleNoReplace(pool);
            if(i<4)		//前4只为新pm
				name = this.sampleNoReplace(our_pokes);
			else{
				while(selected_pokes.indexOf(name)!=-1)		//防止重复pm
					name = this.sampleNoReplace(pool);
			}
			selected_pokes.push(name);
			
            let set = sets[name];
            set.level = 100;
            set.name = name;
            if (!set.ivs) {
                set.ivs = {hp:31, atk:31, def:31, spa:31, spd:31, spe:31};
            } else {
                for (let iv in {hp:31, atk:31, def:31, spa:31, spd:31, spe:31}) {
                    set.ivs[iv] = iv in set.ivs ? set.ivs[iv] : 31;
                }
            }
            // Assuming the hardcoded set evs are all legal.
            if (!set.evs) set.evs = {hp:84, atk:84, def:84, spa:84, spd:84, spe:84};
            set.moves = [this.sampleNoReplace(set.moves), this.sampleNoReplace(set.moves), this.sampleNoReplace(set.moves)].concat(set.signatureMove);
            team.push(set);
        }
        
        return team;
    }
}

module.exports = RandomSeasonalMeleeTeams;
