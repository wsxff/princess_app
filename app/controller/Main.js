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
    'PrincessBrand'
    ],
    stores: [
    'BannerPicStores',
    'MenuStores',
    'CategoryStores',
    'BrandStores'


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
    ],
    init : function(){

        this.getMainView().create();

        this.control({
            'princesscat': {
                itemtap: this.onCatListTap
            },
            'princessmenu': {
                itemtap: this.onMenuListTap
            },
            'header': {
                // select: this.loadSubCat
            },
            'viewport > panel': {
                render: this.onPanelRendered
            }

        });

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
            alert("get product list view");
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
    }
});
