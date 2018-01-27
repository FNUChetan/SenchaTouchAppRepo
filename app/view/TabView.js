/**
 * STouchApp.view.TabView is the extension of Ext.tab.Panel.
 * It is to create the tabs by reading the tab names from a store on the fly.
 */
Ext.define('STouchApp.view.TabView', {
    extend: 'Ext.tab.Panel',
    xtype: 'tab-view',
    // The requires entries will load the files beforehand.
    requires: [
        'STouchApp.view.HomeTab'
    ],
    initialize: function (config) {
        this.addHomeScreenTabs();
        this.addMoreTabsScreen();
        Ext.apply(this, config);
        this.callParent(arguments);
    },
    config: {
        tabBarPosition: 'bottom',
        items: []
    },
    /**
     * Creates the tab which will be shown in the home screen.
     */
    addHomeScreenTabs: function() {
        var me = this;
        var tabStore = Ext.StoreManager.lookup('Tabs');
        var tabItems = [];
        var record = null;
        // Add the home tab which contains the carousel to show slide show on top of the home screen.
        me.addHomeTab(tabStore.getAt(0));
        for (var i = 1; i <= 2; i++) {
            record = tabStore.getAt(i);
            this.add({
                itemId: record.get('tabId'),
                title: record.get('tabName'),
                iconCls: record.get('iconCls'),
                html: record.get('tabName') + ' Screen'
            });
        }
    },
    /**
     * Creates the list of options to be shown in MoreTabs screen.
     */
    addMoreTabsScreen: function() {
        var tabStore = Ext.StoreManager.lookup('Tabs');
        var moreTabsStore = this.getMoreTabsStore(tabStore);
        this.add({  title: 'more',
                    iconCls: 'more',
                    xtype: 'more-tabs',
                    itemId: 'moreTabs',
                    store: moreTabsStore
                });
    },
    /**
     * Does the shallow cloning of the more tabs records in TabsStore.
     * @param {STouchApp.store.Tabs} sourceStore
     * @return {Ext.data.Store} moreTabsStore
     */
    getMoreTabsStore: function(sourceStore) {
        var moreTabsStore = Ext.create ('Ext.data.Store', {
            model: sourceStore.model,
            storeId: 'moreTabsStore'
        });
        for (var i = 4; i < sourceStore.getCount(); i++) {
            moreTabsStore.add(sourceStore.getAt(i));
        }
        return moreTabsStore;
    },

    /**
     * Adds a tab by creating an object of home-tab which internaly
     * creates and have an object of banner-carousel where a slide show
     * of images will be shown.
     * @param {STouchApp.store.Tabs} tabData
     */
    addHomeTab: function(tabData) {
        this.add([{
            itemId: tabData.get('tabId'),
            title: tabData.get('tabName'),
            iconCls: tabData.get('iconCls'),
            xtype: 'home-tab'
        }])
    }
});
