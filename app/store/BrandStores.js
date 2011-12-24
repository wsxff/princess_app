Ext.define('Gongzhu.store.BrandStores', {
    extend  :'Ext.data.Store',
    model: 'Gongzhu.model.Brand',
    requires: ['Gongzhu.model.Brand'],
    proxy: {
        type: 'jsonp',
        url : 'http://sns.gongzhu.com/viewtype/get_brand.json'
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