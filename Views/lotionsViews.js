var app = app || {};

app.LotionsView = Backbone.View.extend({
	el: '#lotions_list',
	template : _.template($("#lotionsListTemplate").html()),	
	collection: new app.Lotions(),

	events: {
        "click a": "clicked"
    },

    initialize: function () {
		var self = this;
		this.collection.fetch({ success: function(){ self.render() ; }} );
	},

    clicked: function (e) {
    	var id = $(e.currentTarget).data("id");
        var lotion = this.collection.get(id);
        console.log(lotion.toJSON());
        var new_view ;
        new_view = new app.LotionDetail({model: lotion});
        new_view.render();
        console.log("render new view finished");
    },

	render: function() {
		this.$el.html(this.template({lotions: this.collection.toJSON()}));
		return this;
	}
});

app.lotionsView = new app.LotionsView();
