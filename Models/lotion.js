var app = app || {};

app.Lotion = Backbone.Model.extend({
	
	defaults: {
		brand: '',
		id: '',
		imageUrl: '',
		name: '',
		snippet: '',
		stock: 50
	}

});

