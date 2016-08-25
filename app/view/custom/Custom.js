/**
 * @class testApp.view.custom.Custom
 * @extends Ext.Component
 * Description
 */
Ext.define('testApp.view.custom.Custom', {
    extend: 'Ext.Component',
    xtype: 'custom',
    alias: 'widget.custom',
    requires: [],

    config: {
        cls: 'green-box',
        // html: 'Some <b>HTML</b> content',
        height: 60,
        // width: 300

        tpl: ['<ol class="breadcrumb">', '<tpl for="."> <li><a href="#{route}" >{bread}</a></li> <tpl if="xindex != xcount">  /  </tpl></tpl>', '</ol>'],
        data: [{ bread: 'Home', route: 'home' }, { bread: 'Library', route: 'library' }]
    },
    listeners: {
        render: function(c) {
            // console.log(c.getEl());


        },

        /**
         * @method afterRender
         * @inheritdoc
         * @return {void}
         */
        afterRender: function() {
            // this.debug(arguments);

            // this.callParent(arguments);
            // 
            this.mon(this.el, { scope: this, click: this.handleEvent });
        },
    },

    /**
     * @method initComponent
     * @inheritdoc
     * @return {void}
     */
    initComponent: function() {
        // this.debug(arguments);

        console.log('init Component of custom');
        this.callParent(arguments);

        this.update(this.routes);
    },

    handleEvent: function(e) {

        if (e.target.tagName === 'A') {
            console.log('clicked on route control');
            console.log(e);
            this.fireEvent('routeclicked',e,e.target.text);
        }
    }

});
