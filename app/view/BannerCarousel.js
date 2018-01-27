/**
 * STouchApp.view.BannerCarousel is the extension of Ext.Carousel.
 * This can be used to show the slide show of the images in the home tab.
 */
Ext.define('STouchApp.view.BannerCarousel', {
    extend: 'Ext.Carousel',
    xtype: 'banner-carousel',

    defaults: {
        styleHtmlContent: true
    },

    config: {
        items: [
        {
            xtype: 'container',
            cls: 'home-banner-1'// This css class sets the background image of the first slide.
        },
        {
            xtype: 'container',
            cls: 'home-banner-2'// This css class sets the background image of the first slide.
        },
        {
            xtype: 'container',
            cls: 'home-banner-3'// This css class sets the background image of the first slide.
        }
    ]
    }
});