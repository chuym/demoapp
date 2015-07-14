define([
    'backbone',
    'hbs!templates/Footer'
], function (Backbone, template) {
    return Backbone.View.extend({

        navigatorBehaviors: ["IHasStateTransition"],

        localisation: 'inject',

        initialize: function () {
			this.listenTo(this.localisation, "change:lang", this.render);
            this.render();
        },

        render: function () {
            this.$el.html(template(this.localisation.getLocalisation().footer));

            return this;
        },

        transitionIn: function (done) {
            this.$el.show(0, done);
        },

        transitionIn: function (done) {
            this.$el.hide(0, done);
        }

    });
});
