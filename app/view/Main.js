/**
 * STouchApp.view.Main is the extension of Ext.Container.
 * It is going to be the first view to loaded in the Viewport.
 * First item is to reserve the top 10% of the screen showing the header.
 * The the rest of the 90% of the screen is given to the tab-view which is defined in TabView.js.
 */
Ext.define('STouchApp.view.Main', {
    extend: 'Ext.Container',
    xtype: 'main',
    config: {
        items: [
            {
                xtype: 'container',
                height: '10%',
                layout: {
                    type: 'hbox'
                },
                items: [
                    {
                        xtype: 'container',
                        flex: .5,
                        html: "<img src='resources/images/umbrella.jpg'>",
                        cls: 'header-left-cls'// custom css defined in app.scss
                    },
                    {
                        xtype: 'container',
                        flex: 2.5,
                        padding: '20px',
                        cls: 'header-right-cls',// custom css defined in app.scss
                        html: 'We pay best price for your car.'
                    }
                ]
            },
            {
                xtype: 'tab-view',// xtype is used to create the object of the class on demand.
                height: '90%'
            }
        ]
    }
});
