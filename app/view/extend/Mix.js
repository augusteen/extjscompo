/**
 * @class testApp.view.extend.Mix
 * Description
 */
Ext.define('testApp.view.extend.Mix', {
	// singleton:true,
	name:'Unknown',

	constructor: function(name) {
        if (name) {
            this.name = name;
        }
    },

    getName: function() {
        alert("My name is " + this.name);
    },

    eat: function(foodType) {
        alert("I'm eating " + foodType);
    }

});