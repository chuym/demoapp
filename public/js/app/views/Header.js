define([
    'backbone',
    'hbs!templates/Header'
], function (Backbone, template) {
    return Backbone.View.extend({

        navigatorBehaviors: [""],
        tagName: "header",

        events: {
            'click .lang a': 'changeLanguage'
        },

        injector: 'inject',

        initialize: function () {
            var localisation = this.injector.getInstance("Localisation");
			this.listenTo(localisation, "change:lang", this.render);
            this.render();
        },

        render: function () {
            var localisation = this.injector.getInstance("Localisation").getLocalisation();
            this.$el.html(template(localisation.header));

            return this;
        },

        changeLanguage: function (e) {
            e.preventDefault();
            var target = $(e.target),
                localisation = this.injector.getInstance("Localisation");

            localisation.set('lang', target.data('lang'));
            console.log(localisation.get('lang'));
        }
    });
});
