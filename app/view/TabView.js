Ext.define('STouchApp.view.TabView', {
    extend: 'Ext.tab.Panel',
    xtype: 'tab-view',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    initialize: function (config) {
        //alert('TabView');
        debugger;
        this.getTabs();
        this.getMoreTabs();
        Ext.apply(this, config);
        this.callParent(arguments);
    },
    config: {
        tabBarPosition: 'bottom',
        items: []
    },

    getTabs: function() {
        //debugger;
        var tabStore = Ext.StoreManager.lookup('Tabs');
        var tabItems = [];
        var record = null;
        for (var i = 0; i <= 2; i++) {
            record = tabStore.getAt(i);
            this.add({
                itemId: record.get('tabId'),
                title: record.get('tabName'),
                iconCls: record.get('iconCls'),
                html: record.get('tabName') + ' Screen'
            });
        }
    },

    getMoreTabs: function() {
        var tabStore = Ext.StoreManager.lookup('Tabs');
        var moreTabsStore = this.getMoreTabsStore(tabStore);
        this.add({  title: 'more',
                    iconCls: 'more',
                    xtype: 'more-tabs',
                    itemId: 'playerList',
                    store: moreTabsStore
                });
    },

    getMoreTabsStore: function(sourceStore) {
        // Does the shallow cloning of the records in TabsStore...
        var moreTabsStore = Ext.create ('Ext.data.Store', {
            model: sourceStore.model,
            storeId: 'moreTabsStore'
        });
        debugger;
        for (var i = 4; i < sourceStore.getCount(); i++) {
            moreTabsStore.add(sourceStore.getAt(i));
        }
        return moreTabsStore;
    }
});
