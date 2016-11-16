/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('testApp.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',
    plugins: 'viewport',
    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'testApp.view.main.MainController',
        'testApp.view.main.MainModel',
        'testApp.view.main.List',
        'testApp.view.custom.Custom',
        'testApp.view.layout.Layout',
        'testApp.view.preference.Preference',
        'testApp.view.extend.Scope',
        'testApp.plugin.Combo'
    ],

    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa-th-list'
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            plugins: 'responsive',
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    items: [{
        title: 'Home',
        iconCls: 'fa-home',
        // The following grid shares a store with the classic version's grid as well!
        items: [{
            xtype: 'mainlist'
        }]
    }, {
        title: 'Users',
        iconCls: 'fa-user',
        items: [{
                xtype: 'custom',
                routes: [{ bread: 'Home 2', route: 'home' }, { bread: 'Library 2', route: 'library' }],
                listeners: {
                    afterRender: function() {
                        console.log(this.routes);
                    },
                    routeclicked: function(e, text) {
                        console.log('clicked ' + text);
                    }
                }
            }]
            // bind: {
            //     html: '{loremIpsum}'
            // }
    }, {
        title: 'Layout',
        iconCls: 'fa-users',
        layout: 'fit',
        items: [{
            xtype: 'layout'
        }]
    }, {
        title: 'Layout',
        iconCls: 'fa-users',
        layout: 'fit',
        items: [{
            xtype: 'menuBtn'
        }]
    }, {
        title: 'Google',
        iconCls: 'fa-adjust',
        items: [{
            xtype: 'scope',
            testProperty: 'test',
            name: 'Augusteen',
            templateConfig: {
                adminViewConfig: [{
                    xtype: 'combobox',
                    width: 150,
                    queryMode: 'local',
                    valueField: 'abbr',
                    displayField: 'name',
                    plugins: ['combowrap'],
                    store: Ext.create('Ext.data.Store', {
                        fields: ['abbr', 'name'],
                        data: [
                            { "abbr": "AL", "name": "Alabama Alabama" },
                            { "abbr": "AK", "name": "Alaska Alabama" },
                            { "abbr": "AZ", "name": "Arizona Alabama" }
                        ]
                    })
                }],
                adminViewConfig2: [{
                    xtype: 'combobox',
                    width: 150,
                    queryMode: 'local',
                    valueField: 'abbr',
                    displayField: 'name',
                    plugins: ['combowrap'],
                    store: Ext.create('Ext.data.Store', {
                        fields: ['abbr', 'name'],
                        data: [
                            { "abbr": "AL", "name": "Alabama Alabama" },
                            { "abbr": "AK", "name": "Alaska Alabama" },
                            { "abbr": "AZ", "name": "Arizona Alabama" }
                        ]
                    })
                }]
            }

        }]
    }],

    tbar: ['->', {
        xtype: 'button',
        id: 'logout',
        iconCls: 'x-fa fa-sign-out',
        listeners: {
            click: 'onLogOut'
        }
    }]
});
