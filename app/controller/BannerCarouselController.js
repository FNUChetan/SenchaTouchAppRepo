/**
 * STouchApp.controller.BannerCarouselController is the extension of Ext.app.Controller.
 * This Controller will have all the handlers and logics related to the banner-carousel.
 */
Ext.define('STouchApp.controller.BannerCarouselController', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            bannerCarousel: 'banner-carousel'
        },
        control: {
            bannerCarousel: {
                activate: 'onActivateBannerCarousel'
            }
        }
    },

    /**
     * onActivateBannerCarousel is the handler which will run on activate of
     * banner-carousel.
     * @param {STouchApp.view.BannerCarousel} carousel
     */
    onActivateBannerCarousel: function( carousel ) {
        var scope = carousel;
        setInterval(function() {
                if (scope.getActiveIndex() === 2) {
                scope.animateActiveItem(0, {type:'slide', direction:'left'});
            } else {
                scope.next();
            }
        }, 2000);
    }
});