/**
 * @class testApp.view.extend.Scope
 * @extends extendsClass
 * Description
 */
Ext.define('testApp.view.extend.Scope', {
    extend: 'Ext.container.Container',
    xtype: 'scope',
    mixins: {
        mix: 'testApp.view.extend.Mix'
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
        // debugger;
        // var vm = me.getViewModel();

        // vm.set('admin',me.config.admin);
        // console.log(me);
        // var adminView = me.config.adminViewConfig;
        // me.config.items[0].items[1].items = me.config.adminViewConfig;
        
        if (me.config.templateConfig) {
            this.updateTemplateConfig(me.config.items, me.config.templateConfig);
        }
        this.callParent(arguments);
    },

    getName: function() {
        // console.log('Overridedn' + this.name);
        this.mixins.mix.getName.call(this);
    },
    updateTemplateConfig: function(item, templateConfig) {
        // debugger;
        // console.log('testFunction');
        for (iter in templateConfig) {
            this.applyTemplateConfig(item, iter, templateConfig[iter]);
        }
    },
    applyTemplateConfig: function(object, key, value) {

        if (object.itemId || object.items || Ext.isArray(object)) {
            if (object.itemId == key) {
                object.items = value;
            } else {
                var newobject;

                if (Ext.isArray(object))
                    newobject = object;
                else
                    newobject = object.items;

                for (obj in object) {
                    this.applyTemplateConfig(object[obj], key, value);
                }

                // Ext.iterate(object.items, this.applyTemplateConfig(item,));
            }
        }
    },
    viewModel: {
        admin: null
    },
    config: {
        admin: null,
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
                itemId: "adminViewConfig"
                    // "items": adminViewConfig
            }]
        }, {
            "xtype": "container",
            "id": "cntAdminUIGrid",
            "layout": "fit",
            "itemId":"adminViewConfig2"
        }]
    }
});
