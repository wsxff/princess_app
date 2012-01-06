Ext.define('Gongzhu.store.ProductStores', {
    extend  :'Ext.data.Store',
    model: 'Gongzhu.model.Product',
    requires: ['Gongzhu.model.Product'],
    proxy: {
        type: 'jsonp',
        url : 'http://sns.gongzhu.com/product/get_product.json',
        reader:{root: 'list'}
    },
    autoLoad    : true,
    getGroupString: function (record) {
            if (record && record.data.letter) {
               return record.get('letter');
            } else { 
                return '';   
            }
    }
});