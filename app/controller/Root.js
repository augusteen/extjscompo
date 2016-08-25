/**
 * @class testApp.controller.Root
 * @extends Ext.app.Controller
 * Description
 */
Ext.define('testApp.controller.Root', {
    extend: 'Ext.app.Controller',
    alias : 'controller.root',
    config: {
      
    },

    init : function(){
    	console.log('Root controller initiated');
    }
});