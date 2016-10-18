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
        'testApp.view.extend.Scope',
        'testApp.plugin.Combo',
        'testApp.view.deal.Deal'
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
        title: 'Scope',
        iconCls: 'fa-adjust',
        items: [{
            xtype: 'scope',
            testProperty: 'test',
            name: 'Augusteen',
            adminViewConfig: {
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
            }

        }, {
            xtype: 'combobox',
            "id": "cmbTMStateMarket",
            "fieldLabel": "Geography",
            // "store": storeTMStateMarketLevel,
            "displayField": "Name",
            "multiSelect":true,
            "valueField": "Code",
            "listConfig": {
                "cls": "clsMassPriceChangeComboList clsPPComboDropDown clsPricePlanPricingGroupComboDropDown clsAdminLargeCombo",
                "tpl": ["<tpl for='.'><tpl if='LevelCode==&quot;Region&quot; || LevelCode==&quot;All Geography&quot; || VistaarExtjs.getCmp(&quot;cmbTMGeoLevel&quot;).getValue().length == 1'><div class='x-boundlist-item'><div class='clsComboboxitems'></div>{Name}</div><tpl else><tpl if='LevelCode==&quot;Market&quot;'><tpl if='VistaarExtjs.getCmp(&quot;cmbTMGeoLevel&quot;).getValue().indexOf(&quot;Region&quot;) != -1 && VistaarExtjs.getCmp(&quot;cmbTMGeoLevel&quot;).getValue().indexOf(&quot;State&quot;) != -1'><div class='x-boundlist-item'><div class='clsComboboxitems clsLevel2'></div>{Name}</div><tpl else><tpl if='VistaarExtjs.getCmp(&quot;cmbTMGeoLevel&quot;).getValue().indexOf(&quot;Region&quot;) != -1 || VistaarExtjs.getCmp(&quot;cmbTMGeoLevel&quot;).getValue().indexOf(&quot;State&quot;) != -1'><div class='x-boundlist-item'><div class='clsComboboxitems clsLevel1'></div>{Name}</div><tpl else><div class='x-boundlist-item'><div class='clsComboboxitems'></div>{Name}</div></tpl></tpl></tpl><tpl if='LevelCode==&quot;State&quot;'><tpl if='VistaarExtjs.getCmp(&quot;cmbTMGeoLevel&quot;).getValue().indexOf(&quot;Region&quot;) != -1'><div class='x-boundlist-item'><div class='clsComboboxitems clsLevel1'></div>{Name}</div><tpl else><div class='x-boundlist-item'><div class='clsComboboxitems'></div>{Name}</div></tpl></tpl></tpl></div></div></tpl>"]
                    /*"tpl": ["<tpl for='.'> <tpl if='LevelCode==&quot;State&quot; || LevelCode==&quot;Market&quot; || VistaarExtjs.getCmp(&quot;cmbTMGeoLevel&quot;).getValue().length == 1'> <div class='x-boundlist-item'> <div class='clsComboboxitems'></div>{Name}</div> <tpl else> <tpl if='LevelCode==&quot;State&quot;'> <tpl if='VistaarExtjs.getCmp(&quot;cmbTMGeoLevel&quot;).getValue().indexOf(&quot;State&quot;) != -1 && VistaarExtjs.getCmp(&quot;cmbTMGeoLevel&quot;).getValue().indexOf(&quot;Market&quot;) != -1'> <div class='x-boundlist-item'> <div class='clsComboboxitems clsLevel2'></div>{Name}</div> <tpl else> <tpl if='VistaarExtjs.getCmp(&quot;cmbTMGeoLevel&quot;).getValue().indexOf(&quot;State&quot;) != -1 || VistaarExtjs.getCmp(&quot;cmbTMGeoLevel&quot;).getValue().indexOf(&quot;Market&quot;) != -1'> <div class='x-boundlist-item'> <div class='clsComboboxitems clsLevel1'></div>{Name}</div> <tpl else> <div class='x-boundlist-item'> <div class='clsComboboxitems'></div>{Name}</div> </tpl> </tpl> </tpl> <tpl if='LevelCode==&quot;Market&quot;'> <tpl if='VistaarExtjs.getCmp(&quot;cmbTMGeoLevel&quot;).getValue().indexOf(&quot;State&quot;) != -1'> <div class='x-boundlist-item'> <div class='clsComboboxitems clsLevel1'></div>{Name}</div> <tpl else> <div class='x-boundlist-item'> <div class='clsComboboxitems'></div>{Name}</div> </tpl> </tpl> </tpl> </div> </div> </tpl>"]*/
            },
            minWidth: 75,
            "listeners": {
                select: 'onComboListSelected',
                change: function(field, newValue, oldValue, eOpts) {
                    // getAdminUICommonFunctionManager().onChangeAdminGeography(field, newValue, oldValue, eOpts);
                }
            },
            Width: 120,
            store: Ext.create('Ext.data.Store', {
                fields:['Name','Code','LevelCode'],
                data: [{
                    "Name": "Alabama",
                    "Code": "S4",
                    "LevelCode": "State"
                }, {
                    "Name": "AL - Control/Mil",
                    "Code": "M93",
                    "LevelCode": "Market"
                }, {
                    "Name": "AL - Open",
                    "Code": "M94",
                    "LevelCode": "Market"
                }, {
                    "Name": "Alaska",
                    "Code": "S3",
                    "LevelCode": "State"
                }, {
                    "Name": "AK",
                    "Code": "M43",
                    "LevelCode": "Market"
                }, {
                    "Name": "Arizona",
                    "Code": "S6",
                    "LevelCode": "State"
                }, {
                    "Name": "AZ",
                    "Code": "M115",
                    "LevelCode": "Market"
                }, {
                    "Name": "Arkansas",
                    "Code": "S5",
                    "LevelCode": "State"
                }, {
                    "Name": "AR",
                    "Code": "M23",
                    "LevelCode": "Market"
                }, {
                    "Name": "AR - Malt",
                    "Code": "M24",
                    "LevelCode": "Market"
                }, {
                    "Name": "California",
                    "Code": "S7",
                    "LevelCode": "State"
                }, {
                    "Name": "CA - Hayward",
                    "Code": "M122",
                    "LevelCode": "Market"
                }, {
                    "Name": "CA - LA",
                    "Code": "M123",
                    "LevelCode": "Market"
                }, {
                    "Name": "CA - Outstate",
                    "Code": "M124",
                    "LevelCode": "Market"
                }, {
                    "Name": "CA - WW",
                    "Code": "M126",
                    "LevelCode": "Market"
                }, {
                    "Name": "Colorado",
                    "Code": "S9",
                    "LevelCode": "State"
                }, {
                    "Name": "CO",
                    "Code": "M116",
                    "LevelCode": "Market"
                }, {
                    "Name": "Connecticut",
                    "Code": "S10",
                    "LevelCode": "State"
                }, {
                    "Name": "CT",
                    "Code": "M79",
                    "LevelCode": "Market"
                }, {
                    "Name": "Corporate",
                    "Code": "S8",
                    "LevelCode": "State"
                }, {
                    "Name": "CC - Airlines/Cruise Ships (Tax Free) - For Expor",
                    "Code": "M1",
                    "LevelCode": "Market"
                }, {
                    "Name": "CC - Airlines/Cruise Ships (Tax Paid)",
                    "Code": "M2",
                    "LevelCode": "Market"
                }, {
                    "Name": "CC - Barrel Room (CRM)",
                    "Code": "M3",
                    "LevelCode": "Market"
                }, {
                    "Name": "CC - Big Lots-Rancho Cucamonga",
                    "Code": "M4",
                    "LevelCode": "Market"
                }, {
                    "Name": "CC - Buonocore Dist-San Francisco, CA",
                    "Code": "M5",
                    "LevelCode": "Market"
                }, {
                    "Name": "CC - Carisam Distiled Spirits (Tax Free)",
                    "Code": "M6",
                    "LevelCode": "Market"
                }, {
                    "Name": "CC - Chateau Diana, Healdsburg, CA",
                    "Code": "M7",
                    "LevelCode": "Market"
                }, {
                    "Name": "CC - Cruise Ships (Tax Free) - For Export",
                    "Code": "M8",
                    "LevelCode": "Market"
                }, {
                    "Name": "CC - Cruise Ships (Tax Paid)",
                    "Code": "M9",
                    "LevelCode": "Market"
                }, {
                    "Name": "CC - DC Flynt",
                    "Code": "M11",
                    "LevelCode": "Market"
                }, {
                    "Name": "CC - Dollar Tree Stores-Chesapeake, VA",
                    "Code": "M12",
                    "LevelCode": "Market"
                }, {
                    "Name": "CC - Emp/Grower/Family Full Price",
                    "Code": "M13",
                    "LevelCode": "Market"
                }, {
                    "Name": "CC - Gallo Employees-Closeout",
                    "Code": "M14",
                    "LevelCode": "Market"
                }, {
                    "Name": "CC - Gallo Employees-EDC Disc Price,Mod,CA",
                    "Code": "M15",
                    "LevelCode": "Market"
                }, {
                    "Name": "CC - Gallo Employees-Family Personal",
                    "Code": "M16",
                    "LevelCode": "Market"
                }]
            })
        }]
    }, {
        title: 'Deal',
        iconCls: 'fa-adjust',
        items: [{
            xtype: 'deal'

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
