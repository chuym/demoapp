define([
    'backbone',
    'jquery',
    'hbs!templates/Tabs'
], function (Backbone, $, template) {
    return Backbone.View.extend({

        navigatorBehaviors: ["IHasStateTransition", "IHasStateUpdate"],

        localisation: 'inject',

        events: {
            'click .tab a': 'changeTab'
        },

        initialize: function () {
			this.listenTo(this.localisation, "change:lang", this.render);

            this.render();
        },

        render: function () {
            this.$el.html(template(this.localisation.getLocalisation().nav));

            return this;
        },

        changeTab: function (e) {
            e.preventDefault();
            var target = $(e.target),
                njs = this.injector.getInstance("njs");

            njs.request("/myapp/" + target.data('tab'));
        },
        transitionIn: function (done) {
            this.$el.show(done);
        },

        transitionIn: function (done) {
            this.$el.hide(done);
        },

        updateState: function (truncated, full) {
            var active = full.getLastSegment();

            this.$el.find('.active').removeClass("active");
            this.$el.find('[data-tab="' + active + '"]').parent().addClass("active")
        }
    });

});
