Ext.define('Gongzhu.view.PrincessCategory', {
    extend: 'Ext.List',
    xtype : 'princesscat',

    config:{

        disclosure: true,
        store: 'CategoryStores',
        itemTpl:"<img src='{icon}' width=35 height=35 />{cat_name}{product_count}<br/><small>{cat_id}</small>",
        flex:2,
        onItemDisclosure: function (record) { 
            if (record.data.icon !=""){
                var store = Ext.getStore('CategoryStores');  
                store.getProxy().extraParams.id= record.data.cat_id; 
                store.read();  
                store.load();
                //var subcat = Ext.create('Gongzhu.view.PrincessCategory');
                this.setStore(store) ;
                this.setItemTpl("{cat_name}{product_count}<br/><small>{product_count}</small>");
                this.refresh();
            }
            else{
                alert("get product list view");
            }

        },
        items:[{xtype:'header',dock:'top'}],
    }

});