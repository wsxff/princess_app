Ext.define('Gongzhu.view.PrincessBrand', {
    extend: 'Ext.List',
    xtype : 'princessbrand',
    requires: [
    'Gongzhu.view.SubHeader',
    ],
    config:{

        disclosure: true,
        store: 'BrandStores',
        itemTpl:"<div>{chname}</div>",

        grouped: true,
        indexBar: true,
        onItemDisclosure: function (record) { 

        } 
    }

});
