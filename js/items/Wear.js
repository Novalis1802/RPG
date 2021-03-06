/**
 *
 * @param {Person.HEAD|Person.BODY|Person.LEGS} [type]
 * @param {Object} [stats]
 * @constructor
 */
function Wear(type, stats) {
	if(!type && !stats) return;

	// reset
	this._stats = {};

	this._type = type;

	if(stats) {
		for(var stat in stats) {
			if(stats.hasOwnProperty(stat)) {
				this[stat] = stats[stat];
			}
		}
	}
}

Wear.prototype = new Item();
Wear.constructor = Wear;

Wear.prototype._stats = {
	armor: 0
};

// GETTER / SETTER

Object.defineProperty(Wear.prototype, "armor", {
	get: function () {
		return this._stats.armor * this._condition;
	},

	set: function(val) {
		this._stats.armor = val;
	}
});