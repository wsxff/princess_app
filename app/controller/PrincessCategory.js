Ext.define('Gongzhu.controller.PrincessCategory', {
    extend : 'Ext.app.Controller',
    views : [
    'PrincessCategory',

    ],
    stores: [
    'CategoryStores',
    ],
    refs : [

    {
        ref       : 'princesscat',
        selector  : 'princesscat',
        xtype     : 'princesscat'
    }
    ],
    init : function(){
        var me = this;
        //masterview.setActiveItem(1);
        this.control({
            'princesscat': {
                itemtap: function(list,index){this.onCatTap(list,index);}
            },
        });

    },

    onCatTap: function(list,index){
        var record = list.getStore().getAt(index);
        localStorage['cat_id']=record.data.cat_id;  

        if (record.data.icon !=""){
            this.goSubCat(list,record);
        }else{
            this.goProductList(list,record);
        }
    },
    goSubCat : function(list,record){
        var store = list.getStore();
        store.getProxy().extraParams.id= record.data.cat_id; 
        store.read();  
        store.load();
        list.setItemTpl("<div class='item_content'><span class='item_title'>{cat_name}</span><p class='small_title'>共{product_count}款商品</p></div>");
        list.setStore(store) ;
        list.deselect(record);

    },
    goProductList : function(list,record){
        var newcontroller =  'ProductList';
        controller = this.getController(newcontroller),
        newview = controller.getNewView(),viewportcontroller = this.getController('Viewport');
        viewportcontroller.doNavigation(newview);
    },
    getNewView : function(){
        var me = this;
        me.currentview = me.getView('PrincessCategory').create();
        return me.currentview;
    },

});