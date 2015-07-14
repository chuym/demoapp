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
        $e: null,
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
            this.stateViewMap = new navigatorjs.integration.StateViewMap(this.njs, this.$el);
            this.stateUrlSyncer = new navigatorjs.integration.StateUrlSyncer(this.njs);

            this.stateUrlSyncer.usePushState();
            this.stateUrlSyncer.start();
            this.injector.map("njs").toValue(this.njs);
        },

        mapModels: function () {
            this.injector.map("localisation").toSingleton(LocalisationModel);
        },

        mapStates: function () {
            var _this = this;
            var states = ["myapp/page1", "myapp/page2", "myapp/page3"],
                recipe = this.stateViewMap.mapState(states).toView(Main).withArguments({injector: this.injector});


            this.stateViewMap.mapState(states).toView(Header).withArguments({injector: _this.injector}).withParent(recipe).inside("header");
            this.stateViewMap.mapState(states).toView(Tabs).withArguments({injector: _this.injector}).withParent(recipe).inside("[data-target=content]");
            this.stateViewMap.mapState(states).toView(Footer).withArguments({injector: _this.injector}).withParent(recipe).inside("footer");

            this.stateViewMap.mapState("myapp/page1").toView(Page1).withArguments({injector: _this.injector}).withParent(recipe).inside("[data-target=page-content]");
            this.stateViewMap.mapState("myapp/page2").toView(Page2).withArguments({injector: _this.injector}).withParent(recipe).inside("[data-target=page-content]");
            this.stateViewMap.mapState("myapp/page3").toView(Page3).withArguments({injector: _this.injector}).withParent(recipe).inside("[data-target=page-content]");
        }
    });
});
