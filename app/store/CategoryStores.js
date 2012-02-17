Ext.define('Gongzhu.store.CategoryStores', {
    extend  :'Ext.data.Store',
    model: 'Gongzhu.model.PrincessCategory',
    requires: ['Gongzhu.model.PrincessCategory'],

    autoLoad    : true
});