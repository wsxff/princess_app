Ext.define('Gongzhu.store.CategoryTitleStores', {
     extend  :'Ext.data.Store',
    model: 'Gongzhu.model.CategoryTitle',
    requires: ['Gongzhu.model.CategoryTitle'],
    proxy: {
        type: 'jsonp',
        url : 'http://sns.gongzhu.com/index/get_meun.json'
    },
       autoLoad    : true,
});