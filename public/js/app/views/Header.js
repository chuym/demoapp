define([
    'backbone',
    'hbs!templates/Header'
], function (Backbone, template) {
    return Backbone.View.extend({

        navigatorBehaviors: ["IHasStateTransition", "IHasStateUpdate"],
        tagName: "header",

        localisation: 'inject',

        events: {
            'click .lang a': 'changeLanguage'
        },

        initialize: function () {
			this.listenTo(this.localisation, "change:lang", this.render);
            this.render();
        },

        render: function () {
            this.$el.html(template(this.localisation.getLocalisation().header));

            return this;
        },

        changeLanguage: function (e) {
            e.preventDefault();
            var target = $(e.target);

            this.localisation.set('lang', target.data('lang'));
        },

        transitionIn: function (done) {
            this.$el.show(0, done);
        },

        transitionIn: function (done) {
            this.$el.hide(0, done);
        }


    });
});
