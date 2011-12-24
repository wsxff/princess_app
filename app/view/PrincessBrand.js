Ext.define('Gongzhu.view.PrincessBrand', {
    extend: 'Ext.List',
    xtype : 'princesbrand',

    config:{

        disclosure: true,
        store: 'BrandStores',
        itemTpl:"<div>{chname}</div>",
        flex:2,
        html:'brand',
         grouped: true,
            indexBar: true,
        onItemDisclosure: function (record) { 
                alert("get product list view");
        },
        items:[{xtype:'header',dock:'top'}],
    }

});