Ext.define('testApp.model.Personnel',{
	extend: 'Ext.data.Model',
	alias: 'model.personnel',
	idProperty: 'id',
    fields: [
       {name:'id', type:'int' },
       {name: 'first_name', type: 'string'},
       {name: 'last_name', type: 'string' }, 
       {name: 'job_title',type: 'string'}
    ]
});