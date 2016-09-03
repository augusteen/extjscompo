Ext.define('testApp.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',

    fields: [
        'first_name', 'last_name', 'job_title'
    ]

    // data: { items: [
    //     { name: 'Jean Luc', email: "jeanluc.picard@enterprise.com", phone: "555-111-1111" },
    //     { name: 'Worf',     email: "worf.moghsson@enterprise.com",  phone: "555-222-2222" },
    //     { name: 'Deanna',   email: "deanna.troi@enterprise.com",    phone: "555-333-3333" },
    //     { name: 'Data',     email: "mr.data@enterprise.com",        phone: "555-444-4444" }
    // ]},
    // autoLoad: true
    
});
