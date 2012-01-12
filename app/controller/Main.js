Ext.define('Gongzhu.controller.Main',{
    extend: 'Ext.app.Controller',

    config: {
        profile: Ext.os.deviceType.toLowerCase()
    },
    views : [
    'Main',
    'Header',
    'PrincessCategory',
    'PrincessMenu',
    'PrincessBrand',
    'ProductList',
    'Product'
    ],
    stores: [
    'BannerPicStores',
    'MenuStores',
    'CategoryStores',
    'BrandStores',
    'ProductStores',
    'ProductListStores',

    ],
    refs: [
    {
        ref       : 'main',
        selector  : 'mainview',
        xtype     : 'mainview',
        autoCreate: true
    },
    {
        ref       : 'header',
        selector  : 'header',
        xtype     : 'header'
    },
    {
        ref       : 'bootomtabs',
        selector  : 'tabpanel',
        xtype     : 'bootomtabs'
    },
    {
        ref       : 'banner',
        selector  : 'banner',
        xtype     : 'banner'
    },
    {
        ref       : 'princessmenu',
        selector  : 'princessmenu',
        xtype     : 'princessmenu'
    },
    {
        ref       : 'princesscat',
        selector  : 'princesscategory',
        xtype     : 'princesscat'
    },
    {
        ref       : 'productlist',
        selector  : 'productlist',
        xtype     : 'productlist'
    },
    {
        ref       : 'product',
        selector  : 'product',
        xtype     : 'product'
    },
    ],
    init : function(){

        var masterview = this.getMainView().create();
        //masterview.setActiveItem(1);
        this.control({
            'princesscat': {
                itemtap: this.onCatListTap
            },
            'princessmenu': {
                itemtap: this.onMenuListTap
            },
            'princesbrand': {
                itemtap: this.onBrandListTap
            },
            'header': {
               
            },
            'productlist':{
                itemtap: this.onProductListTap
            },
            'banner':{
                tap: this.onBannerTap
            }
        });

    },
    
    onBannerTap: function(){
        alert("ok");
    },
    
    onCatListTap: function(list,index){
        var record = list.getStore().getAt(index);
        if (record.data.icon !=""){

            var store = list.getStore();
            store.getProxy().extraParams.id= record.data.cat_id; 
            store.read();  
            store.load();
            //var subcat = Ext.create('Gongzhu.view.PrincessCategory');
            list.setItemTpl("<strong>{cat_name}</strong><br/><small>共{product_count}款商品</small>");
            list.setStore(store) ;
            list.deselect(record);
            list.refresh({type: 'slide',duration: 500,});
        }else{

            var plist = Ext.create('Gongzhu.view.ProductList');
            var store = plist.getStore();
            store.getProxy().extraParams.cid = record.data.cat_id
            store.read();
            store.load();
            plist.setStore(store);
            plist.show({type: 'flip'});
            plist.refresh();
            
        }
    },
    onMenuListTap: function(list,index){
        var record = list.getStore().getAt(index);
        if (strContains(record.data.etitle,'CATALOG')){
            var pcat = Ext.create('Gongzhu.view.PrincessCategory');
            pcat.show({type: 'flip'});
        };
        if (strContains(record.data.etitle,'BRAND')){
            var pbrand = Ext.create('Gongzhu.view.PrincessBrand');
            pbrand.show({type: 'slide',duration: 5000,});
        };
        if (strContains(record.data.etitle,'FUNCTION')){alert("function view")};
        if (strContains(record.data.etitle,'SEARCH')){alert(" search view")};
    },
    
    onBrandListTap: function(list,index){
        var record = list.getStore().getAt(index);
        var plist = Ext.create('Gongzhu.view.ProductList');
        var store = plist.getStore();
        store.getProxy().extraParams.bid = record.data.brand_id
        store.read();
        store.load();
        plist.setStore(store);
        plist.show({type: 'flip'});
        plist.refresh();
    },
    
    onProductListTap: function(list,index){
       
        var record = list.getStore().getAt(index);
        var product = Ext.create('Gongzhu.view.Product');
        var store = product.getStore();
        store.getProxy().extraParams.id = record.data.product_id
        store.read();
        store.load();
        product.setStore(store);
        product.show({type: 'flip'});
        product.refresh();
    }
});
