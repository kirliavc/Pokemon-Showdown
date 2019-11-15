'use strict';

/**@type {{[k: string]: ModdedPureEffectData}} */
let BattleStatuses = {
	arceus: {
		onSwitchInPriority: 101,
		onSwitchIn(pokemon) {
			let type = pokemon.types[0];
			if (pokemon.ability === 'multitype') {
				type = this.runEvent('Plate', pokemon);
				if (!type) {
					type = 'Normal'; //FOR THE MINDGAMES
				}
			}
			pokemon.setType(type, true);
		},
	},
};

exports.BattleStatuses = BattleStatuses;
