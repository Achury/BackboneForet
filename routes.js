app.Router = Backbone.Router.extend({

	routes: {

		''                 : 'home',
		'lotion/:id'        : 'lotionDetail'

	},

	home: function() {
		console.log("rendering home...");
		app.lotionsView.render();
		$('#lotions_list').show();

	},

	lotionDetail: function() {
		console.log("Routes im here");
		//app.lotionDetail.render();
		$('#lotions_list').hide();
		$('#lotion_detail').show();
	}

});

app.router = new app.Router();
Backbone.history.start();