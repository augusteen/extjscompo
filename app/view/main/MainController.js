/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('testApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    init: function() {
        this.getTokenfromLocalStorage();
    },

    onItemSelected: function(sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function(choice) {
        if (choice === 'yes') {
            //
        }
    },

    getTokenfromLocalStorage: function() {
        Ext.Ajax.useDefaultXhrHeader = false;

        // Can also be specified in the request options
        Ext.Ajax.cors = true;
        var token = localStorage.getItem('user-token');
        // console.log(token);
        this.getViewModel().set('token', token);
    }
});
