Ext.define('Gongzhu.controller.PrincessBrand', {
    extend : 'Ext.app.Controller',
    views : [
    'PrincessBrand',

    ],
    stores: [
    'BrandStores',
    ],
    refs : [

    {
        ref       : 'princessbrand',
        selector  : 'princessbrand',
        xtype     : 'princessbrand'
    }
    ],
    init : function(){
        var me = this;
        //masterview.setActiveItem(1);
        this.control({
            'princessbrand': {
                itemtap: function(list,index){this.onBrandTap(list,index);}
            },
        });

    },
   
    onBrandTap: function(list,index){
        var record = list.getStore().getAt(index);
        localStorage['brand_id']=record.data.brand_id;
        var newcontroller =  'ProductList';
        controller = this.getController(newcontroller),
        newview = controller.getNewView(),viewportcontroller = this.getController('Viewport');
        viewportcontroller.doNavigation(newview);
    }
    ,
    getNewView : function(){
        var me = this;
        me.currentview = me.getView('PrincessBrand').create();
        return me.currentview;
    },

});