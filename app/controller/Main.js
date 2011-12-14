Ext.define('Gongzhu.controller.Main',{
    extend: 'Ext.app.Controller',

    config: {
        profile: Ext.os.deviceType.toLowerCase()
    },
    views : [
    'Main',
    'Header',
    'CategoryList'
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
        selector  : 'headerview',
        xtype     : 'headerview'
    },
    {
        ref       : 'categorylist',
        selector  : 'categorylistview',
        xtype     : 'categorylistview'
    }
    ],
    init : function(){

        this.getMainView().create();
    }
})
