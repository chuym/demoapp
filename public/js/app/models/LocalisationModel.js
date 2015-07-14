define([
    "backbone"
], function (Backbone) {
    return Backbone.Model.extend({
        defaults: {
            lang: 'EN',
            data: {
                EN: {
                    header: {
                        header: "This is the header"
                    },
                    nav: {
                        page1: "Page 1",
                        page2: "Page 2",
                        page3: "Page 3",
                    },
                    content: {
                        content: "This is the content of"
                    },
                    footer: {
                        footer: "This is the footer"
                    }
                },
                ES: {
                    header: {
                        header: "Este es el encabezado"
                    },
                    nav: {
                        page1: "Pagina 1",
                        page2: "Pagina 2",
                        page3: "Pagina 3",
                    },
                    content: {
                        content: "Este es el encabezado para la "
                    },
                    footer: {
                        footer: "Este es el pie de pagina"
                    }
                }
            }
        },

        getLocalisation: function() {
            return this.get('data')[this.get('lang')];
        }
    });
});
