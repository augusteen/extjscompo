/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('testApp.Application', {
    extend: 'Ext.app.Application',
    name: 'testApp',
    controllers: [
        'Root'
    ],
    /**
     * @requires testApp.controller.Root
     */
    requires: [
        'testApp.controller.Root', 'testApp.view.login.LoginController'
    ],
    stores: [

    ],

    views: [
        'testApp.view.login.Login',
        'testApp.view.main.Main'
    ],

    launch: function() {

        Ext.state.Manager.setProvider(new Ext.state.LocalStorageProvider());
        var token = localStorage.getItem('user-token');

        // loggedIn = localStorage.getItem("TutorialLoggedIn");

        Ext.create({
            xtype: token ? 'app-main' : 'login'
                // xtype : 'app-main'
                // renderTo: Ext.getBody()
        });
    }
});
