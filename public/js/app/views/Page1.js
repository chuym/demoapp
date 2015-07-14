define([
    'backbone',
    'hbs!templates/Page1',
    'underscore'
], function (Backbone, template, _) {
    return Backbone.View.extend({
        navigatorBehaviors: [""],

        initialize: function () {
            this.render();
        },

        render: function () {
            var localisation = this.injector.getInstance("Localisation").getLocalisation();
            this.$el.html(template(_.extend(localisation.content, { page: localisation.nav.page1 })));

            return this;
        }
    });

});
