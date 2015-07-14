define([
    'backbone',
    'hbs!templates/Main'
], function (Backbone, template) {
    return Backbone.View.extend({
        navigatorBehaviors: [""],

        className: 'mainView',

        injector: "inject",

        initialize: function () {
            this.render();
        },

        render: function () {
            this.$el.html(template({}));

            return this;
        }
    });

});
