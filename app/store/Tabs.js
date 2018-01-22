/**
 * STouchApp.store.Tabs is the extension of Ext.data.Store.
 * Uses: STouchApp.model.Tab
 * This is to load tabs object coming from the server or a json file.
 */
Ext.define('STouchApp.store.Tabs', {
    extend: 'Ext.data.Store',
    model: 'STouchApp.model.Tab',
    data : [
         {tabName: 'Home', tabId: '1', id: '1', iconCls: 'home'},
         {tabName: 'Get Quote', tabId: '2', id: '2', iconCls: 'compose'},
         {tabName: 'Quote On call', tabId: '3', id: '3', iconCls: 'fa fa-cogs'},
         {tabName: 'more', tabId: '4', id: '4', iconCls: 'more'},
         {tabName: 'About Us', tabId: '5', id: '5', iconCls: ''},
         {tabName: 'Customer Reviews', tabId: '6', id: '6', iconCls: ''},
         {tabName: 'Request for a call', tabId: '7', id: '8', iconCls: ''}
     ],
     autoLoad: false
});