/**
 * @class testApp.plugin.GridSearch
 * @extends extendsClass
 * Description
 */
Ext.define('testApp.plugin.GridSearch', {
    extend: 'Ext.mixin.Observable',
    alias: 'plugin.gridsearch',
    config: {
        iconCls: 'icon-zoom',
        checkIndexes: "all",
        mode: 'local',
        minChars: 1,
        width: 100,
        searchText: 'Search',
        selectAllText: 'Select all',
        position: 'bottom',
        paramNames: {
            fields: 'fields',
            query: 'query'
        }
    },

    init: function(grid) {
        console.log(grid);
        //this.grid = cmp.view.up('gridpanel');
        console.log(grid.rendered);
        if (grid.rendered) {

            this.onRend();
        } else {
            console.log('Grid Rendered');
            grid.on('render', this.onRend, this);
        }
    },

    onRend: function() {
        console.log(this);
        var me = this;
        var tb = this.getToolbar();
        this.menu = new Ext.menu.Menu();
        this.field = Ext.create('Ext.form.field.Text', {
            width: this.width,
            selectOnFocus: undefined === this.selectOnFocus ?
                true : this.selectOnFocus,
            triggers: {
                searchtext: {
                    cls: 'x-form-search-trigger',
                    handler: function() {
                        // console.log('search clicked');
                        me.triggerSearch();
                    }
                },
                cleartext: {
                    cls: 'x-form-clear-trigger',
                    handler: function() {
                        // console.log('trigger clicked');
                        this.setValue('');
                    }
                }
            },
            // onTriggerClick : Ext.bind(this.onTriggerClear, this),
            minLength: this.minLength
        });
        tb.add('->', this.field);
    },

    triggerSearch: function() {
        console.log('Trigger Search');
        if (!this.field.isValid()) {
            return;
        }
        var val = this.field.getValue(),
            store = this.store;
            // proxy = store.getProxy();
        if ('local' === this.mode) {
            store.clearFilter();
            if (val) {
                store.filterBy(function(r) {
                    var retval = false;
                    this.menu.items.each(function(item) {
                        if (!item.dataIndex || !item.checked || retval) {
                            return;
                        }
                        var rv = r.get(item.dataIndex),
                            rv = rv instanceof Date ?
                            Ext.Date.format(rv, this.getDateFormat(item)) : rv;
                        var re = new RegExp(Ext.String.escape(val), 'gi');
                        retval = re.test(rv);
                    }, this);
                    if (retval) {
                        return true;
                    }
                    return retval;
                }, this);
            }
        } 
        // else if (proxy instanceof Ext.data.proxy.Server) {
        //     if (store.lastOptions && store.lastOptions.params) {
        //         store.lastOptions.params[store.paramNames.start] = 0;
        //     }
        //     var fields = [];
        //     this.menu.items.each(function(item) {
        //         if (item.checked && item.dataIndex) {
        //             fields.push(item.dataIndex);
        //         }
        //     });
        //     delete(proxy.extraParams[this.paramNames.fields]);
        //     delete(proxy.extraParams[this.paramNames.query]);
        //     if (store.lastOptions && store.lastOptions.params) {
        //         delete(proxy.lastOptions.params[this.paramNames.fields]);
        //         delete(proxy.lastOptions.params[this.paramNames.query]);
        //     }
        //     if (fields.length) {
        //         proxy.extraParams[this.paramNames.fields] = Ext.encode(fields);
        //         proxy.extraParams[this.paramNames.query] = val;
        //     }
        //     store.load();
        // }
    },
    getDateFormat: function(menuItem) {
        var columnNames = Ext.Array.pluck(this.columns, 'dataIndex'),
            columnIndex = Ext.Array.indexOf(columnNames, menuItem.dataIndex),
            format = this.grid.columns[columnIndex].format;
        return this.dateFormat || format;
    },
    getToolbar: function() {
        var me = this.cmp,
            dockedItems = me.getDockedItems(),
            toolbar = null,
            hasToolbar = false;

        if (dockedItems.length > 0) {
            Ext.each(dockedItems, function(item) {
                if (item.xtype === 'toolbar' && item.dock == me.position) {
                    hasToolbar = true;
                    toolbar = item;
                    return false;
                }
            });
        }
        if (!hasToolbar) {
            toolbar = me.addDocked({
                xtype: 'toolbar',
                dock: this.position
            })[0];
        }
        return toolbar;
    }
});
