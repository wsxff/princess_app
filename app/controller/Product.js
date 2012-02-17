Ext.define('Gongzhu.controller.Product', {
    extend : 'Ext.app.Controller',
    views : [
    'Product',

    ],
    stores: [
    'ProductStores',
    ],
    refs : [

    {
        ref       : 'product',
        selector  : 'product',
        xtype     : 'product'
    }
    ],
    init : function(){
        var me = this;
        //masterview.setActiveItem(1);
        this.control({
            'product': {
                //itemtap: function(list,index){this.onListTap(list,index);}
            },
        });

    },

    getNewView : function(){
        var me = this;
        var store = this.getStore('ProductStores');
        if(localStorage['product_id'] !=""){
            store.getProxy().extraParams.id =  localStorage['product_id'];
            alert(localStorage['product_id']);
        }


        store.read();
        store.load();

        me.currentview = me.getView('Product').create(
            {store : store
            });
            return me.currentview;
        },

    });