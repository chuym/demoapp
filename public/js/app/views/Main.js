define([
    'backbone',
    'hbs!templates/Main'
], function (Backbone, template) {
    return Backbone.View.extend({
        navigatorBehaviors: ["IHasStateTransition"],

        className: 'mainView',

        initialize: function () {
            this.render();
        },

        render: function () {
            this.$el.html(template({}));

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
