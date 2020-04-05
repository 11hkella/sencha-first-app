/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('FormPrac.view.main.Main', {
    extend: 'Ext.Container',
    requires: [
        Ext.util.ItemCollection
    ],
    xtype: 'main-view',

    fullscreen: true,
    height: '100%',
    scrollable: true,
    layout: {
        type: 'vbox',
        align: 'middle'
    },

    items: [{
        xtype: 'form-multicolumn'
    },
    {
        xtype: 'array-grid'
    }]


});
