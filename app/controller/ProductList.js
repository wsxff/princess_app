Ext.define('Gongzhu.controller.ProductList', {
    extend : 'Ext.app.Controller',
    views : [
    'ProductList',

    ],
    stores: [
    'ProductListStores',
    ],
    refs : [

    {
        ref       : 'productlist',
        selector  : 'productlist',
        xtype     : 'productlist'
    }
    ],
    init : function(){
        var me = this;
        //masterview.setActiveItem(1);
        this.control({
            'productlist': {
                itemtap: function(list,index){

                    this.onListTap(list,index);}
                },
            });

        },

        onListTap: function(list,index){
            var record =  list.getStore().getAt(index);
            localStorage['product_id'] =record.data.product_id;

            var newcontroller =  'Product';
            controller = this.getController(newcontroller),
            newview = controller.getNewView(),viewportcontroller = this.getController('Viewport');
            viewportcontroller.doNavigation(newview);
        }
        ,
        getNewView : function(){
            var me = this;
            var store = this.getStore('ProductListStores');
            if(localStorage['cat_id'] !=""){
                store.getProxy().extraParams.cid =  localStorage['cat_id'];
            }
            if(localStorage['brand_id'] !=""){
                store.getProxy().extraParams.bid =  localStorage['brand_id'];
            }

            store.read();
            store.load();

            me.currentview = me.getView('ProductList').create(
                {store : store
                });
                return me.currentview;
            },

        });