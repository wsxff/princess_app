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
        ref       : 'bodyview',
        selector  : 'tabpanel',
        xtype     : 'princessbody'
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
            'titlelist': {
                select: this.onListTap
            },
            'etitlelist': {
                select: this.onListTap
            },
            'header': {
               // select: this.loadSubCat
            },
            'viewport > panel': {
                render: this.onPanelRendered
            }

        });

    },

    loadSubCat: function(){alert("loading subcat");}


});
