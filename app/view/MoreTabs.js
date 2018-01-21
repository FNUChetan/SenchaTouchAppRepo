Ext.define('STouchApp.view.MoreTabs', {
    extend: 'Ext.List',
    xtype: 'more-tabs',
    initialize: function (config) {
        Ext.apply(this, config);
        this.callParent(arguments);
    },
    config: {
        store: null,
        itemTpl: ['<div>{tabName}</div>']
    }
});
