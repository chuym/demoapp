define([
    'backbone',
    'hbs!templates/Page3'
], function (Backbone, template) {
    return Backbone.View.extend({
        navigatorBehaviors: [""],

        initialize: function () {
            this.render();
        },

        render: function () {
            var localisation = this.injector.getInstance("Localisation").getLocalisation();
            this.$el.html(template(_.extend(localisation.content, { page: localisation.nav.page3 })));

            return this;
        }
    });

});
