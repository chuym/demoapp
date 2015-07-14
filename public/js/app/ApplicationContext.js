define([
    "backbone",
    "underscore",
    "navigatorjs",
    "models/LocalisationModel",
    "views/Main",
    "views/Header",
    "views/Footer",
    "views/Tabs",
    "views/Page1",
    "views/Page2",
    "views/Page3"
], function (Backbone, _, navigatorjs, LocalisationModel, Main, Header, Footer, Tabs, Page1, Page2, Page3) {
    return Backbone.CommandRouter.extend({
        Backbone, $e: null,
        njs: null,
        stateViewMay: null,
        stateUrlSyncer: null,
        routes: {
            "": ""
        },

        initialize: function (options) {
            this.$el = options.$el;

            this.initializeNavigator();
            this.mapModels();
            this.mapStates();
            //this.bindCommands();

            var urlState = this.stateUrlSyncer.getUrlState();

            this.njs.start(urlState.equals('') ? 'myapp/page1' : urlState);
        },

        initializeNavigator: function () {
            this.njs = new navigatorjs.Navigator();
            console.log(this.$el[0]);
            this.stateViewMap = new navigatorjs.integration.StateViewMap(this.njs, this.$el);
            this.stateUrlSyncer = new navigatorjs.integration.StateUrlSyncer(this.njs);

            this.stateUrlSyncer.usePushState();
            this.stateUrlSyncer.start();
            this.injector.map("njs").toValue(this.njs);
        },

        mapModels: function () {
            this.injector.map("Localisation").toSingleton(LocalisationModel);
        },

        mapStates: function () {
            var _this = this;
            var states = ["myapp/page1", "myapp/page2", "myapp/page3"],
                recipe = this.stateViewMap.mapState(states).toView(Main).withArguments({injector: this.injector});


            [Header, Tabs, Footer].forEach(function (view) {
                _this.stateViewMap.mapState(states).toView(view).withArguments({injector: _this.injector}).withParent(recipe).inside("#app");
            });

            _.zip([Page1, Page2, Page3], states).forEach(function (pair) {
                var view = pair[0],
                    state = pair[1];
                _this.stateViewMap.mapState([state]).toView(view).withArguments({injector: _this.injector}).withParent(recipe).inside("#tab-content");
            });
        }
    });
});
