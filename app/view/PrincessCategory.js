Ext.define('Gongzhu.view.PrincessCategory', {
    extend: 'Ext.List',
    xtype : 'princesscat',

    config:{

        disclosure: true,
        store: 'CategoryStores',
        itemTpl:"<img src='{icon}' width=35 height=35 />{cat_name}{product_count}<br/><small>{cat_id}</small>",
        flex:2,
        onItemDisclosure: function (record) { 

            var store = Ext.getStore('SubCategoryStores');  
            store.getProxy().extraParams.id= record.data.cat_id; 
            store.read();  
            store.load();
            var subcat = Ext.create('Gongzhu.view.SubCategory');
            subcat.setStore(store) ;

            subcat.show();
            subcat.refresh();
        },
        items:[{xtype:'header',dock:'top'}],


    }

});