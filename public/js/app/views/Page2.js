define([
    'backbone',
    'hbs!templates/Page2'
], function (Backbone, template) {
    return Backbone.View.extend({
        navigatorBehaviors: ["IHasStateTransition"],

        localisation: 'inject',

        initialize: function () {
			this.listenTo(this.localisation, "change:lang", this.render);
            this.render();
        },

        render: function () {
            this.$el.html(template(_.extend(this.localisation.getLocalisation().content, { page: this.localisation.getLocalisation().nav.page2 })));

            return this;
        },

        transitionIn: function (done) {
            this.$el.show(0, done);
        },

        transitionOut: function (done) {
            this.$el.hide(0, done);
        }

    });

});
