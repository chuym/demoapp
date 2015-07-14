requirejs.config({
    hbs: {
        templateExtension: "hbs",
        disableI18n: true,
        disableHelpers: true
    },
    paths: {
        jquery: "../vendor/jquery/dist/jquery",
        underscore: "../vendor/underscore/underscore",
        backbone: "../vendor/backbone/backbone",
        "backbone-command": "../vendor/backbone-command/backbone-command",
        "backbone-injector": "../vendor/backbone-injector/backbone-injector",
        "backbone-super": "../vendor/backbone-super/backbone-super/backbone-super",
        injector: "../vendor/injector.js/injector-js",
        navigatorjs: "../vendor/navigator.js/navigator-js",
		hbs: "../vendor/require-handlebars-plugin/hbs",
		json2 : "../vendor/require-handlebars-plugin/hbs/json2",
		i18nprecompile : "../vendor/require-handlebars-plugin/hbs/i18nprecompile",
		handlebars : "../vendor/require-handlebars-plugin/Handlebars"
    },
    shim: {
        underscore: {
            exports: "_"
        },
        hbs: ["underscore"],
        backbone: {
            deps: ["jquery", "underscore"],
            exports: 'Backbone'
        },
        "backbone-injector": ["backbone", "injector"],
        "backbone-command": ["backbone"],
        "backbone-super": ["backbone"],
        navigatorjs: {
            deps: ["jquery"],
            exports: 'navigatorjs'
        },
    }
});

require([
    "backbone-injector",
    "backbone-command",
    "backbone-super"
]);

require([
    "ApplicationContext",
    "jquery"
], function (ApplicationContext, $) {
    $(function () {
        var router = new ApplicationContext({$el: $("body")});
    });
});
