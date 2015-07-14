define([
    'backbone',
    'jquery',
    'hbs!templates/Tabs'
], function (Backbone, $, template) {
    return Backbone.View.extend({

        navigatorBehaviors: ["IHasStateTransition"],

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
            e.preventDefault();
            var target = $(e.target),
                njs = this.injector.getInstance("njs"),
                currentTab = this.$el.find(".tab.active");

            currentTab.removeClass("active");
            target.parent(".tab").addClass("active");

            njs.request("/myapp/" + target.data('tab'));
        }
    });

});
