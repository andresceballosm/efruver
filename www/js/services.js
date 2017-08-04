angular.module('starter.services',[])

.service('WC', function(){
    return {
        WC: function(){
            var Woocommerce = new WooCommerceAPI.WooCommerceAPI({
                url: 'http://www.efruver.com',
                consumerKey: 'ck_9ccdde95b1e6842d0a422b95bf449f66556e2c25',
                consumerSecret: 'cs_90eddbf55b98d7203c8353e5c12bfca4153ce71c'
            });
            return Woocommerce;
        }
}});