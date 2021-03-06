/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('testApp.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',
    requires: [
        'testApp.store.Personnel'
    ],
    data: {
        name: 'testApp',

        loremIpsum: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },

    stores: {
        personnel: {
            autoLoad: true,
            proxy: {
                type: 'rest',
                useDefaultXhrHeader: false,
                method: 'GET',
                // withCredentials : true,
                //actionMethods: { create: 'POST', read: 'GET', update: 'POST', destroy: 'POST' },
                api: {
                    read: 'http://localhost:3000/api/employee',
                    create: 'http://localhost:3000/api/employee',
                    update: 'http://localhost:3000/api/employee'
                },
                headers: {
                    'Content-Type': "application/json",
                    'Authorization': "Bearer {token}"
                },
                reader: {
                    type: 'json'
                },
                writer: {
                    type: 'json',
                    writeAllFields:false
                }
            }
        }
    }
});
