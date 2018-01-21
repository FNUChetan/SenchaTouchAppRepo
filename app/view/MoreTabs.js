Ext.define('STouchApp.view.MoreTabs', {
    extend: 'Ext.List',
    xtype: 'more-tabs',
    config: {
        store: null,
        itemTpl: ['<div>{tabName}</div>']
    }
});
