define([
    'backbone',
    'hbs!templates/Footer'
], function (Backbone, template) {
    return Backbone.View.extend({

        navigatorBehaviors: [""],
        injector: "inject",

        initialize: function () {
            this.render();
        },

        render: function () {
            var localisation = this.injector.getInstance("Localisation").getLocalisation();
            this.$el.html(template(localisation.footer));

            return this;
        }
    });
});
