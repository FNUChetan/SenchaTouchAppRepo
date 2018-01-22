/**
 * STouchApp.model.Tab is the extension of Ext.data.Model.
 * It is to keep the structure of data expected in the tabs object
 * coming from the server.
 */
Ext.define('STouchApp.model.Tab', {
    extend: 'Ext.data.Model',
    fields: [
         {name: 'tabName', type: 'string'},
         {name: 'tabId',  type: 'int'},
         {name: 'id',  type: 'int'},
         {name: 'iconCls',  type: 'string'}
     ]
});