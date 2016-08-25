/**
 * This view is an example list of people.
 */
Ext.define('testApp.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'testApp.store.Personnel'
    ],

    title: 'Personnel',

    // store: {
    //     type: 'personnel'
    // },

    bind : {
        store : '{personnel}'
    },
    columns: [
        { text: 'Name',  dataIndex: 'first_name' },
        { text: 'Email', dataIndex: 'last_name', flex: 1 },
        { text: 'Phone', dataIndex: 'job_title', flex: 1 }
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
