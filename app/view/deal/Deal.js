Ext.define('testApp.view.deal.Deal', {
    extend: 'Ext.form.Panel',
    alias: 'widget.deal',
    "flex": 1,
    "id": "cntDealLinePercentScope",
    "cls": "clsExpandCollapsePanel clsSourceScopeSelectionPanel",
    // "margin": "0 0 0 10",
    "layout": {
        "type": "vbox",
        "align": "top"
    },
    "items": [{
        "xtype": "container",
        // "id": "cntAdminUIScope",
       
        // "margin": "0 0 0 10",
        "layout": {
            "type": "hbox",
            "align": "stretch"
        },
        items: [{
            "xtype": "label",
            "cls": "clsDealLabel",
            "margin": "0 0 0 10",
            "text": "Deal Line % Business"
        }, {
            "xtype": "container",
            "flex": 1,
            "reference": "cntAdminUIScopeDetails",
            // "id": "cntAdminUIScopeDetails",
            "referenceHolder": true,
            "layout": {
                "type": "hbox",
                "align": "stretch"
            },
            "items": [{
                "xtype": "label",
                "reference": "lblAdminUIScope",
                "cls": "clsScopeDetailsLabel clslblEllipsis",
                // "id": "lblAdminUIScope",
                "margin": "0 0 0 10"
            }]
        }]
    }, {
        "xtype": "container",
        "reference": "cntAdminUIOperation",
        // "id": "cntAdminUIOperation",
        "referenceHolder": true,
        "layout": {
            "type": "hbox",
            "align": "stretch",
            "pack": "end"
        },
        "items": [{
            "xtype": 'textfield',
            "fieldLabel":  'Low',
            "labelAlign": 'top',
            "labelSeparator" : ''
        },{
            "xtype": 'textfield',
            "fieldLabel":  'High',
            "labelAlign": 'top' ,
            "labelSeparator" : ''
        },{
            "xtype": "container",
            "reference": "cntAdminCommonOperation",
            // "id": "cntAdminCommonOperation",
            "referenceHolder": true,
            "layout": {
                "type": "hbox",
                "align": "stretch",
                "pack": "end"
            },
            "items": [{
                "xtype": "button",
                "reference": "btnAdminUIAdd",
                "cls": "custom-act-btn create clsAdminOperation",
                // "id": "btnAdminUIAdd",
                "margin": "0 10 0 0",
                "glyph": 72,
                "tooltip": "Add",

            }, {
                "xtype": "button",
                "reference": "btnAdminUISave",
                "cls": "clsPPOperationButton clsPPOperation5",
                // "id": "btnAdminUISave",
                "margin": "0 10 0 0",
                "glyph": 72,
                "tooltip": "Save",
                listeners: {
                    click: function(button, e, eOpts) {
                        getAdminUICommonFunctionManager().onBtnSaveClick(button, e, eOpts);
                    }
                }
            }, {
                "xtype": "button",
                "reference": "btnAdminUIDelete",
                "cls": "clsPPOperationButton clsPPOperation1",
                // "id": "btnAdminUIDelete",
                "margin": "0 10 0 0",
                "glyph": 72,
                "tooltip": "Delete",
                listeners: {
                    click: function(button, e, eOpts) {
                        getAdminUICommonFunctionManager().btnAdminUIDelete_click(button, e, eOpts);
                    }
                }
            }, {
                "xtype": "button",
                "reference": "btnAdminUIClearAllFilter",
                "cls": "custom-act-btn filterMyTask clsAdminOperation",
                // "id": "btnAdminUIClearAllFilter",
                "margin": "0 10 0 0",
                "glyph": 72,
                "tooltip": "Clear All Filters",
                listeners: {
                    click: function(button, e, eOpts) {
                        getAdminUICommonFunctionManager().onbtnClearAllFilters(button, e, eOpts);
                    }
                }
            }, {
                "xtype": "button",
                "reference": "btnAdminUIDiscard",
                "cls": "CloseAdminBtn clsAdminOperation",
                // "id": "btnAdminUICloseWindow",
                "margin": "0 10 0 0",
                "glyph": 72,
                "tooltip": "Discard",
                listeners: {
                    click: function(button, e, eOpts) {
                        getAdminUIController().onBtnAdminUIDiscard(button, e, eOpts);
                    }
                }
            }, {
                "xtype": "button",
                "reference": "btnAdminUICloseWindow",
                "cls": "CloseAdminBtn clsAdminOperation",
                // "id": "btnAdminUICloseWindow",
                "margin": "0 10 0 0",
                "glyph": 72,
                "tooltip": "Close",
                listeners: {
                    click: function(button, e, eOpts) {
                        getAdminUIController().onBtnCloseClick(button, e, eOpts);
                    }
                }
            }]
        }]
    }]
});
