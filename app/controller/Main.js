Ext.define('Gongzhu.controller.Main',{
    extend: 'Ext.app.Controller',

    config: {
        profile: Ext.os.deviceType.toLowerCase()
    },
    views : [
    'Main',
    'Header',
    
    ],
    stores: [
        'BannerPicStores',
        'CategoryTitleStores'
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
        ref       : 'princesslist',
        selector  : 'princesslist',
        xtype     : 'princesslist'
    },
    ],
    init : function(){

        this.getMainView().create();
        
    }
   
    
})
