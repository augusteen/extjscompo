/**
 * @class testApp.view.extend.Scope
 * @extends extendsClass
 * Description
 */
Ext.define('testApp.view.extend.Scope', {
    extend: 'Ext.container.Container',
    xtype: 'scope',
    mixins:{
    	mix:'testApp.view.extend.Mix'
    },
    // html: 'Hello how are you',
    /**
     * @method initComponent
     * @inheritdoc
     * @return {void}
     */
    initComponent: function() {
        //this.debug(arguments);

        var me = this;
        // console.log('scope constr');
         me.config.items[0].items[1].items[0] = me.config.adminViewConfig;
        // console.log(me.getName());
        // console.log(me.testFunction());
        this.callParent(arguments);
    },

    getName: function(){
    	// console.log('Overridedn' + this.name);
    	this.mixins.mix.getName.call(this);
    },
    testFunction: function() {

        console.log('testFunction');
    },
    config: {
        adminViewConfig: null,
        buttonConfig: null,
        gridId: null,
        items: [{
            "xtype": "container",
            "cls": "clsExpandCollapsePanel clsSourceScopeSelectionPanel",
            "layout": "anchor",
            "referenceHolder": true,
            "items": [{
                "xtype": "container",
                "id": "cntAdminUIScope",
                "margin": "0 0 0 10",
                "layout": {
                    "type": "hbox",
                    "align": "stretch"
                },
                items: [{
                    "xtype": "button",
                    "reference": "btnAdminUIScopeExpander",
                    "cls": "clsexpandcollapsebutton MPC-Scope-expander",
                    // "id": "btnAdminUIScopeExpander",
                    "margin": "0 0 0 0",
                    "enableToggle": true,
                    "glyph": 72,
                    "iconAlign": "top",
                    "pressed": true,
                    listeners: {
                        click: function(button, e, Opts) {
                            getAdminUIController().onBtnScopeExpanderClick(button, e, eOpts);
                        }
                    }
                }, {
                    "xtype": "label",
                    "cls": "clsExpandCollapsePanelLabel clsSourceScopeSelection",
                    "margin": "0 0 0 10",
                    "text": "SCOPE"
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
                            "xtype": "container",
                            items: [{
                                itemid: 'id_ScopeButtons'
                            }]
                        }, {
                            "xtype": "button",
                            "reference": "btnAdminUIAdd",
                            "cls": "custom-act-btn create clsAdminOperation",
                            // "id": "btnAdminUIAdd",
                            "margin": "0 10 0 0",
                            "glyph": 72,
                            "tooltip": "Add"
                        }, {
                            "xtype": "button",
                            "reference": "btnAdminUISave",
                            "cls": "clsPPOperationButton clsPPOperation5",
                            // "id": "btnAdminUISave",
                            "margin": "0 10 0 0",
                            "glyph": 72,
                            "tooltip": "Save"
                        }, {
                            "xtype": "button",
                            "reference": "btnAdminUIDelete",
                            "cls": "clsPPOperationButton clsPPOperation1",
                            // "id": "btnAdminUIDelete",
                            "margin": "0 10 0 0",
                            "glyph": 72,
                            "tooltip": "Delete"
                        }, {
                            "xtype": "button",
                            "reference": "btnAdminUIClearAllFilter",
                            "cls": "custom-act-btn filterMyTask clsAdminOperation",
                            // "id": "btnAdminUIClearAllFilter",
                            "margin": "0 10 0 0",
                            "glyph": 72,
                            "tooltip": "Clear All Filters"
                        }, {
                            "xtype": "button",
                            "reference": "btnAdminUICloseWindow",
                            "cls": "CloseAdminBtn clsAdminOperation",
                            // "id": "btnAdminUICloseWindow",
                            "margin": "0 10 0 0",
                            "glyph": 72,
                            "tooltip": "Close"
                        }]
                    }]
                }]
            }, {
                "xtype": "container",
                items: [{
                    itemid: 'id_ScopeContainer'
                }]
            }]
        }, {
            "xtype": "container",
            "id": "cntAdminUIGrid",
            "layout": "fit"
        }]
    }
});
