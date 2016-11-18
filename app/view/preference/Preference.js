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
        preference: [{
            "Name": "Shelf",
            "UOM": "$",
            "Code": "Shelf"
        }, {
            "Name": "RM %",
            "UOM": "%",
            "Code": "RM_PERC"
        }, {
            "Name": "NBC",
            "UOM": "$",
            "Code": "Net_List_per_Selling_Unit_ATAX"
        }, {
            "Name": "Net List",
            "UOM": "$",
            "Code": "Net_List_ATAX"
        }, {
            "Name": "NBC Before Tax",
            "UOM": "$",
            "Code": "Net_List_per_Selling_Unit"
        }, {
            "Name": "Net List Before Tax",
            "UOM": "$",
            "Code": "Net_List"
        }, {
            "Name": "DM %",
            "UOM": "%",
            "Code": "DM_PERC"
        }, {
            "Name": "Landed",
            "UOM": "$",
            "Code": "Landed"
        }, {
            "Name": "State Tax",
            "UOM": "$",
            "Code": "State Tax"
        }, {
            "Name": "Freight",
            "UOM": "$",
            "Code": "Freight"
        }, {
            "Name": "Net FOB",
            "UOM": "$",
            "Code": "Net_FOB"
        }, {
            "Name": "SDA",
            "UOM": "$",
            "Code": "SDA"
        }, {
            "Name": "FOB",
            "UOM": "$",
            "Code": "Bill_FOB"
        }, {
            "Name": "RAB",
            "UOM": "$",
            "Code": "RAB"
        }, {
            "Name": "SKU Count",
            "UOM": "",
            "Code": "SKU_Count"
        }, {
            "Name": "Dist Count",
            "UOM": "",
            "Code": "Distributor_Count"
        }],
        getConfigForPreferenceWindow: function(pFactsList) {
            var items = [];
            var state = Ext.state.Manager.get('menuPreferencestate')
            for (var l_facts in pFactsList) {
                var l_object = {};
                l_object["fieldLabel"] = "";
                l_object["boxLabel"] = pFactsList[l_facts]["Name"];
                l_object["name"] = pFactsList[l_facts]["Code"];
                l_object["cls"] = "clsPPCheckBoxes";
                if(state.value[pFactsList[l_facts]["Code"]])
                l_object["checked"] = true;
                items.push(JSON.parse(JSON.stringify(l_object)));
            }

            return items;
        },

        "cls": "clsMenuPreference",
        "id": "menuPreference",
        "width": 390,
        "defaultAlign": "tr-bl",
        listeners: {
            // beforeshow: function() {
            //     console.log('shown');

            // },
            afterRender: function() {
                console.log('expand');
                // var obj_PricePlanPrefrenceForm = Ext.getCmp("formPricePlanPrefrence").getForm();

                var l_configCheckGroup = Ext.getCmp("chkGrpPricePlanPrefrence");
                l_configCheckGroup.removeAll();
                var l_prefrenceWindowconfig = this.getConfigForPreferenceWindow(this.preference);
                l_configCheckGroup.add(l_prefrenceWindowconfig);
            }
        },
        afterShow: function() {
            // console.log('show');
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
                                        "stateful": true,
                                        "stateId": 'menuPreferencestate',
                                        stateEvents: ['change'],
                                        listeners: {
                                            // change: function() {
                                            //     console.log('shown');

                                            // },
                                            afterrender: function(){
                                                console.log('afterender');
                                                // var state = Ext.state.Manager.get('menuPreferencestate');
                                                // // var l_configCheckGroup = Ext.getCmp("chkGrpPricePlanPrefrence");
                                                // if(state.value)
                                                // this.setValue(state.value);

                                            }
                                        },
                                        getState: function() {
                                            var state = Ext.form.CheckboxGroup.prototype.getState()
                                            // var l_configCheckGroup = Ext.getCmp("chkGrpPricePlanPrefrence");
                                            state = this.addPropertyToState(state,'value',this.getValue())
                                            return state;
                                        },
                                        applyState: function(state) {

                                            // Ext.apply()
                                            if(state){
                                            // var l_configCheckGroup = Ext.getCmp("chkGrpPricePlanPrefrence");
                                            this.setValue(state.value);
                                            console.log('Menu State' + state);
                                            Ext.apply(this,state.value);
                                            }
                                        },
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
