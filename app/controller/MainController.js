/**
 * STouchApp.controller.MainController is the extension of Ext.app.Controller.
 * This is to load tabs object coming from the server or a json file.
 */
Ext.define('STouchApp.controller.MainController', {
    extend: 'Ext.app.Controller',
    models: ['Tab'],// This entry will load the Tab model's JS file beforehand.
    stores: ['Tabs']// This entry will load the Tab store's JS file beforehand.
});