define([
    'backbone',
    'jquery',
    'hbs!templates/Tabs'
], function (Backbone, $, template) {
    return Backbone.View.extend({

        navigatorBehaviors: [""],

        events: {
            'click .tab a': 'changeTab'
        },

        initialize: function () {
            this.render();
        },

        render: function () {
            var localisation = this.injector.getInstance("Localisation").getLocalisation();
            this.$el.html(template(localisation.nav));

            return this;
        },

        changeTab: function (e) {
            var target = $(e.target),
                njs = this.injector.getInstance("njs");

            e.preventDefault();
            njs.request("/myapp/" + target.data('tab'));
        }
    });

});
