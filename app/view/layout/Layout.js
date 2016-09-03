/**
 * @class Layout
 * @extends extendsClass
 * Description
 */
Ext.define('testApp.view.layout.Layout', {
    extend: 'Ext.container.Container',
    alias: 'widget.layout',
    requires: [
    ],
    layout: {
    type: 'vbox',
    align : 'stretch',
    pack  : 'start'
},
    config: {
        configName: null
    },
    items: [{
    		xtype: 'panel',
    		title: 'Hello',
    		flex: 1
    	},
    	{
    		xtype:'panel',
    		layout: 'fit',
    		overflowY: 'scroll',
    		flex:2,
    		items: [
    			{
    		xtype: 'panel',
    		title: 'Hello',
    		height: 300
    	},{
    		xtype: 'panel',
    		title: 'Hello',
    		height: 300
    	},{
    		xtype: 'panel',
    		title: 'Hello',
    		height: 300
    	}
    		]
    	}

    ]
});