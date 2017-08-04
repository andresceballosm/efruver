angular.module('starter.services',[])

.service('WC', function(){
    return {
        WC: function(){
            var Woocommerce = new WooCommerceAPI.WooCommerceAPI({
                url: 'http://www.efruver.com',
                consumerKey: 'xxxxxxxxxxxxxxxxxxxxx',
                consumerSecret: 'xxxxxxxxxxxxxxxx'
            });
            return Woocommerce;
        }
}});
