define([
    'backbone',
    'hbs!templates/Page1',
    'underscore'
], function (Backbone, template, _) {
    return Backbone.View.extend({
        navigatorBehaviors: ["IHasStateTransition"],

        localisation: 'inject',

        initialize: function () {
			this.listenTo(this.localisation, "change:lang", this.render);
            this.render();
        },

        render: function () {
            this.$el.html(template(_.extend(this.localisation.getLocalisation().content, { page: this.localisation.getLocalisation().nav.page1 })));

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
