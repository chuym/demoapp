define([
    'backbone',
    'hbs!templates/Header'
], function (Backbone, template) {
    return Backbone.View.extend({

        navigatorBehaviors: [""],
        tagName: "header",

        injector: 'inject',

        initialize: function () {
            this.render();
        },

        render: function () {
            var localisation = this.injector.getInstance("Localisation").getLocalisation();
            this.$el.html(template(localisation.header));

            return this;
        }
    });
});
