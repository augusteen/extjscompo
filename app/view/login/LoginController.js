/**
 * @class testApp.view.login.LoginController
 * @extends extendsClass
 * Description
 */
Ext.define('testApp.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    onLoginClick: function() {

        // localStorage.setItem("TutorialLoggedIn", true);

        // this.getView().destroy();
 		var me = this,
            view = this.getView(),
            form = view.down('form');

        Ext.Ajax.request({
            url: 'http://localhost:3000/authenticate',
            method: 'POST',
            jsonData: form.getValues(),
            success: function (response) {
                 var data = Ext.decode(response.responseText);
                 if (data.token) {

                    view.destroy();

                    me.saveToken(data.token);

                    Ext.widget('app-main');
                 }
            },
            failure: function() {
                me.clearToken();
                Ext.Msg.alert('Error','Username or Password not valid!');
            }
        });
    },

    saveToken: function (token) {
        var app = testApp.getApplication();
        localStorage.setItem('user-token', token);
        app.fireEvent('tokenmodified');
    },

    clearToken: function () {
        localStorage.removeItem('user-token');
    },

    init : function(){
        console.log('Login controller initiated');
    }
});