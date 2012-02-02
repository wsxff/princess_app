Ext.define('Gongzhu.controller.ProductList', {
    extend : 'Ext.app.Controller',
    views : [
    'ProductList',
    'FilterBar'
    ],
    stores: [
    'ProductListStores',
    ],
    refs : [
    {
        ref       : 'productlist',
        selector  : 'productlist',
        xtype     : 'productlist'
    },
    {
        ref         :'filterPrice',
        selector    :'#filter_price'
    },
    {
        ref         :'filterStars',
        selector    :'#filter_stars'
    },
    {
        ref         :'filterBrand',
        selector    :'#filter_brand'
    }
    ],
    init : function(){
        var me = this;
        //masterview.setActiveItem(1);       

        this.control({
            'productlist': {
                itemtap: function(list,index){
                    this.onListTap(list,index);
                }
            },
            '#filter_brand' : {
                //change: this.dofilter
            },
            '#filter_price' : {
                //change: this.dofilter
            },
            '#filter_stars' : {
                //change: this.dofilter
            }
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

        me.currentview = me.getView('ProductList').create({store : store});
        Ext.getCmp('filter_brand').setValue(localStorage['brand_id']);
        return me.currentview;
    },

});