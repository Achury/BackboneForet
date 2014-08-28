var app = app || {};

app.Lotions = Backbone.Collection.extend({
	model: app.Lotion,
	url: 'Data/lotions.json',

	initialize: function(){
		this.sort_key = 'brand';
	},

	byName: function(name) {
		result = this.filter(function (lotion) {
			var pattern = new RegExp(name, 'gi');
			return pattern.test(lotion.get('name'));
		});
		return new app.Lotions(result);
	},

});

