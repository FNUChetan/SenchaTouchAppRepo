Ext.define('STouchApp.model.Tab', {
    extend: 'Ext.data.Model',
    fields: [
         {name: 'tabName', type: 'string'},
         {name: 'tabId',  type: 'int'},
         {name: 'id',  type: 'int'},
         {name: 'iconCls',  type: 'string'}
     ]
});