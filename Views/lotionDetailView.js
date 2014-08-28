var app = app || {};

app.LotionDetail = Backbone.View.extend({
	el: '#lotion_detail',
	template : _.template($("#lotionDetailtemplate").html()),	
	events: {
        "click a": "back"
    },


	initialize: function() {
		//var self = this;
	},

	back: function() {
		$('#lotion_detail').hide();
		console.log('i was clicked');
	},


	render: function() {
		this.$el.html( this.template(this.model));
		console.log("New view  " + this.model);
		//return this;
	}
});

app.lotionDetail = new app.LotionDetail();

