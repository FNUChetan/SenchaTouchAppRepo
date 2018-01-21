Ext.define('STouchApp.controller.MainController', {
    extend: 'Ext.app.Controller',
    models: ['Tab'],
    stores: ['Tabs'],

    config: {
        refs: {
            tabListStore: 'STouchApp.store.TabListStore'
        }
        /*refs: {
            loginForm: 'formpanel'
        },
        control: {
            'formpanel button': {
                tap: 'doLogin'
            }
        }*/
    },

    init: function() {
        //alert('MainController');
        //this.loadTabStore(); // Call this function to load the Tabs store from server side data.
    }//,

    /*loadTabStore: function() {
        let me = this;
        debugger;
        me.getTabsStore().load({
            params : {},
            success : function() {},
            failure : function() {},
            callback : function() {}
        });
    }*/
});