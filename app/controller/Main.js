Ext.define('Gongzhu.controller.Main',{
    extend: 'Ext.app.Controller',

    config: {
        profile: Ext.os.deviceType.toLowerCase()
    },
    views : [
    'Main',
    'Header',
    'PrincessCategory',
    'PrincessMenu'
    ],
    stores: [
        'BannerPicStores',
        'MenuStores',
        'CategoryStores'
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
    ],
    init : function(){
       
        this.getMainView().create();

        this.control({
            'titlelist': {
                select: this.onListTap
            },
            'etitlelist': {
                select: this.onListTapE
            },
            'header': {
               select: this.onHeaderTap
            },
            'viewport > panel': {
                            render: this.onPanelRendered
                        }

        });
        
    },
    
    onHeaderTap: function(){alert("test");}
   
    
});
