/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'FormPrac.Application',

    name: 'FormPrac',

    requires: [
        // This will automatically load all classes in the FormPrac namespace
        // so that application classes do not need to require each other.
        'FormPrac.*'
    ],

    // The name of the initial view to create.
    mainView: 'FormPrac.view.main.Main'
});
