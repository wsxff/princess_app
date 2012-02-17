Ext.define('Gongzhu.store.ProductStores', {
    extend  :'Ext.data.Store',
    model: 'Gongzhu.model.Product',
    requires: ['Gongzhu.model.Product'],
    proxy: {
        type: 'jsonp',
        url : 'http://sns.gongzhu.com/product/get_product.json',
        extraParams: {  
                  id: ''
              }
    },
   
});