Ext.define('Gongzhu.view.PrincessBrand', {
    extend: 'Ext.List',
    xtype : 'princesbrand',

    config:{

        disclosure: true,
        store: 'BrandStores',
        itemTpl:"<div>{chname}</div>",
        flex:2,
        grouped: true,
        indexBar: true,
        onItemDisclosure: function (record) { 

        },
        items:[{xtype:'header',dock:'top'}],
    }

});
