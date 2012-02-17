Ext.define('Gongzhu.store.MenuStores', {
    extend  :'Ext.data.Store',
    model: 'Gongzhu.model.PrincessMenu',
    requires: ['Gongzhu.model.PrincessMenu'],
    proxy: {
        type: 'jsonp',
        url : 'http://sns.gongzhu.com/index/get_meun.json'
    },
    autoLoad    : true,
});