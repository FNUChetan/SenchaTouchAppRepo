/**
 * STouchApp.controller.MainController is the extension of Ext.app.Controller.
 * Plan is to write all home screen related logics to be written here.
 */
Ext.define('STouchApp.controller.MainController', {
    extend: 'Ext.app.Controller',
    models: ['Tab'],// This entry will load the Tab model's JS file beforehand.
    stores: ['Tabs']// This entry will load the Tab store's JS file beforehand.
});