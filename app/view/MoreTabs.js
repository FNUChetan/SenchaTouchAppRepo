/**
 * STouchApp.view.MoreTabs is the extension of Ext.List.
 * This makes the more tabs screen.
 */
Ext.define('STouchApp.view.MoreTabs', {
    extend: 'Ext.List',
    xtype: 'more-tabs',
    config: {
        store: null,
        itemTpl: ['<div>{tabName}</div>']
    }
});
