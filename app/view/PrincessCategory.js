Ext.define('Gongzhu.view.PrincessCategory', {
    extend: 'Ext.List',
    xtype : 'princesscat',

    config:{

        disclosure: true,
        store: 'CategoryStores',
        itemTpl:"<div style='float:left'><img src='{icon}' width=35 height=35 /></div><div >{cat_name}<br/><small>共{product_count}款商品</small></div>",
        flex:2,
        onItemDisclosure: function (record) { 
           
            if (record.data.icon !=""){
                var store = this.getStore();
                store.getProxy().extraParams.id= record.data.cat_id; 
                store.read();  
                store.load();
                //var subcat = Ext.create('Gongzhu.view.PrincessCategory');
                this.setItemTpl("<strong>{cat_name}</strong><br/><small>共{product_count}款商品</small>");
                this.setStore(store) ;
this.deselect(record);
                this.refresh();

            }
            else{
                alert("get product list view");
                 
            }

        },
        items:[{xtype:'header',dock:'top'}],
    }

});