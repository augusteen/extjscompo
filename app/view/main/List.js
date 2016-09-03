/**
 * This view is an example list of people.
 */
Ext.define('testApp.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',
    plugins: ['gridsearch','cellediting'],
    requires: [
        'testApp.store.Personnel',
        'testApp.plugin.GridSearch'
    ],

    // plugins: {
    //     ptype: 'rowediting',
    //     clicksToEdit: 1
    // },
    title: 'Personnel',

    // store: {
    //     type: 'personnel'
    // },

    bind: {
        store: '{personnel}'
    },
    selModel: 'rowmodel',
    columns: [
        { text: 'Name', dataIndex: 'first_name',editor: {
                xtype: 'textfield',
                allowBlank: false
            } },
        { text: 'Email', dataIndex: 'last_name', flex: 1 ,editor: {
                xtype: 'textfield',
                allowBlank: false
            }},
        { text: 'Phone', dataIndex: 'job_title', flex: 1,editor: {
                xtype: 'textfield',
                allowBlank: false
            } }
    ],

    listeners: {
        // select: 'onItemSelected'
    }    ,
    dockedItems: [{
        xtype: 'toolbar',
        dock: 'bottom',
        ui: 'footer',
        layout: {
            pack: 'center'
        },
        items: [{
            minWidth: 80,
            text: 'Save',
            handler: function(){
                // console.log(this.getPersonnel());
                var str = this.up('gridpanel').getStore();
                
                str.sync();
            }
        }, {
            minWidth: 80,
            text: 'New',
            iconCls: 'icon-add',
            handler: function(){
                // console.log(this.getPersonnel());
                var str = this.up('gridpanel').getStore();
                str.insert(0,{});
            }
        }]
    }]
});
