Ext.define('STouchApp.view.Main', {
    extend: 'Ext.Container',
    xtype: 'main',
    initialize: function (config) {
        //alert('Main');
        Ext.apply(this, config);
        this.callParent(arguments);
    },
    config: {

        items: [
            {
                xtype: 'container',
                html: 'App header goes here...',
                height: '10%',
            },
            {
                xtype: 'tab-view',
                height: '90%'
            }
        ]
    }
});
