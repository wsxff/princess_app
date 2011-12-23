Ext.define('Gongzhu.store.CategoryStores', {
    extend  :'Ext.data.Store',
    model: 'Gongzhu.model.PrincessCategory',
    requires: ['Gongzhu.model.PrincessCategory'],
    proxy: {
        type: 'jsonp',
        url : 'http://sns.gongzhu.com/viewtype/get_catalog.json'
    },
    autoLoad    : true
});