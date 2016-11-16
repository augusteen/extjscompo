Ext.define('testApp.view.preference.Preference', {
    extend: 'Ext.button.Button',
    alias: 'widget.menuBtn',
    "flex": 1,
    "margin": "0px 10px 0px 0px",
    "cls": "clsPPOperationButton clsPPOperation4",
    "id": "btnPreference",
    "enableToggle": true,
    "toggleGroup": "tglPreference",
    "glyph": 72,
    "iconAlign": "top",
    "tooltip": "Preferences",
    "menu": {
        "xtype": "menu",
        "stateEvents": ["beforeclose"],
        "stateful": true,
        "stateId": 'menuPreference',
        "cls": "clsMenuPreference",
        "id": "menuPreference",
        "width": 390,
        "defaultAlign": "tr-bl",
        listeners:{
            afterShow: function(){
                console.log('shown');
                 
            },
            afterRender: function(){
                console.log('expand');
                var obj_PricePlanPrefrenceForm = Ext.getCmp("formPricePlanPrefrence").getForm();
            obj_PricePlanPrefrenceForm.setValues({
                "All": false,
                "Shelf": true,
                "Selling Units": true,
                "RM %": true,
                "RMU %": true,
                "Net List ATAX per SU": true,
                "Net List ATAX": true,
                "Net List per SU": true,
                "Net List": true,
                "DM %": true,
                "DMU %": true,
                "Landed": true,
                "Net FOB": true,
                "DA": true,
                "SDA": true,
                "WP": true,
                "FOB": true,
                "RAB": false,
                "RAB (Less Bkg)": false,
                "Scan": true,
                "Landed": true,
                "Net List Before Tax": true,
                "Net Btl Cost Before Tax": true,
                "Net Btl Cost": true,
                "sort": "Descending"

            });
            }
        },
        afterShow: function(){
            console.log('show');
        },
        "items": [{
            "xtype": "panel",
            "border": false,
            "id": "window_Preference",
            "resizable": false,
            "width": 390,
            "frameHeader": false,
            "modal": false,
            "header": false,
            "title": "My Window",
            "cls": "clsPPWindowPreference",
            "items": [{
                "xtype": "container",
                "id": "cntPricePlanPreference",
                "layout": "fit",
                "items": [{
                    "xtype": "panel",
                    "id": "pnlPreferences",
                    "cls": "clsPPPreference",
                    "animCollapse": false,
                    "collapsed": false,
                    "collapsible": false,
                    "frameHeader": false,
                    "header": false,
                    "hideCollapseTool": true,
                    "placeholderCollapseHideMode": 4,
                    "title": "",
                    "layout": {
                        "type": "vbox",
                        "align": "stretch"
                    },
                    "items": [{
                        "xtype": "form",
                        "header": false,
                        "id": "formPricePlanPrefrence",

                        "items": [{
                            "xtype": "container",
                            "flex": 2,
                            "layout": {
                                "type": "vbox",
                                "align": "stretch"
                            },
                            "items": [{
                                "xtype": "label",
                                "flex": 1,
                                "text": "Metrics",
                                "cls": "clsLabelMetrics"
                            }, {
                                "xtype": "container",
                                "layout": {
                                    "type": "hbox",
                                    "align": "stretch"
                                },
                                "items": [{
                                    "xtype": "container",
                                    "flex": 1,
                                    "layout": "vbox",
                                    "cls": "clsPPPreferenceMetricsLeft",
                                    "items": [{
                                        "xtype": "checkbox",
                                        "fieldLabel": "",
                                        "id": "chkPricePlanPrefrenceAll",
                                        "boxLabel": "All",
                                        "name": "All",
                                        "cls": "clsPPCheckBoxes clsPPAll"
                                    }, {
                                        "xtype": "checkboxgroup",
                                        "id": "chkGrpPricePlanPrefrence",
                                        "columns": [115,
                                            115,
                                            115
                                        ],
                                        "items": []
                                    }]
                                }]
                            }]
                        }, {
                            "xtype": "container",
                            "flex": 1,
                            "cls": "clsPPPreferenceSort",
                            "layout": {
                                "type": "vbox",
                                "align": "stretch"
                            },
                            "items": [{
                                "xtype": "label",
                                "text": "Sort-Net List",
                                "cls": "clsLabelSort"
                            }, {
                                "xtype": "container",
                                "flex": 3,
                                "items": [{
                                    "xtype": "radiogroup",
                                    "id": "radiogrpPricePlanPrefrence",
                                    "columns": [120,
                                        120
                                    ],
                                    "vertical": true,
                                    "items": [{
                                        "xtype": "radio",
                                        "checked": true,
                                        "boxLabel": "Ascending",
                                        "name": "sort",
                                        "id": "radioPricePlanPrefrenceAscending",
                                        "inputValue": "Ascending"
                                    }, {
                                        "xtype": "radio",
                                        "boxLabel": "Descending",
                                        "name": "sort",
                                        "id": "radioPricePlanPrefrenceDescending",
                                        "inputValue": "Descending"
                                    }]
                                }]
                            }]
                        }]
                    }]
                }]
            }]
        }]
    }
});
