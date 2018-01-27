/**
 * STouchApp.view.HomeTab is the extension of Ext.Container.
 * It is going to be the first tab in the tab panel.
 */
Ext.define('STouchApp.view.HomeTab', {
    extend: 'Ext.Container',
    xtype: 'home-tab',
    requires: [
        'STouchApp.view.BannerCarousel'
    ],
    config: {
        /*
         * We have to keep the layout as vbox as we need to show banner carousel in the first top half
         * and rest of the content in the next half of the same tab.
         * If you comment the layout then you won't see the banner carousel.
         */
        layout: 'vbox',
        items: [
        {
            flex: 1,
            itemId: 'bannerCarousel',
            xtype: 'banner-carousel'// Object of banner carousel get because of this line.
        },
        {
            flex: 3,
            xtype: 'container',
            html : 'Home Screen Content Goes here...'
        }
    ]
    }
});