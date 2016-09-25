/**
 * @class testApp.plugin.Combo
 * @extends extendsClass
 * Description
 */
Ext.define('testApp.plugin.Combo', {
    alias: 'plugin.combowrap',
    init: function(combo) {
        console.log('Combo');
        combo.fieldSubTpl = this.fieldSubTpl;
        combo.displayTpl.html = this.displayTpl;
        combo.setRawValue = this.setRawValue;
        console.log(combo);
    },
    displayTpl: '<tpl for="."> {[typeof values === "string" ? values : values["Name"]]}</tpl>',
    fieldSubTpl: [
        '<div id="{id}" type="{type}" ',
        '<tpl if="size">size="{size}" </tpl>',
        '<tpl if="tabIdx">tabIndex="{tabIdx}" </tpl>',
        'class="{fieldCls} {typeCls} x-form-text-default" autocomplete="off"></div>',
        '<div id="{cmpId}-triggerWrap" class="{triggerWrapCls}" role="presentation">',
        '{triggerEl}',
        '</div>', {
            compiled: true,
            disableFormats: true
        }
    ],

    setRawValue: function(value) {
        var me = this;
        me.rawValue = value;
        // console.log(value);
        if (me.inputEl) {
            me.inputEl.dom.innerHTML = value;
            me.inputEl.set({ "data-qtip": value });
        }
        return value;
    }
});
