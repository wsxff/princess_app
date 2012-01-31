Ext.define('Gongzhu.controller.PrincessMenu', {
    extend : 'Ext.app.Controller',
    views : [
    'PrincessMenu',
    'Header',
    'Banner',
    'TabPanel'
    ],
    stores: [
    'BannerPicStores',
    'MenuStores',
    ],
    refs : [
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
    }
    ],
    init : function(){
        var me = this;
        //masterview.setActiveItem(1);
        this.control({
            '#princess_menu': {
                itemtap: function(list,index){this.onMenuListTap(list,index);}
            },
        });

    },

    onMenuListTap: function(list,index){

        var record = list.getStore().getAt(index);
        var newcontroller;
        
        if (strContains(record.data.etitle,'CATALOG')){
            newcontroller = 'PrincessCategory';
        };
        if (strContains(record.data.etitle,'BRAND')){
            newcontroller = 'PrincessBrand';
        };
        if (strContains(record.data.etitle,'FUNCTION')){
            alert("function view")
            };
        if (strContains(record.data.etitle,'SEARCH')){
            alert(" search view")
            };

        controller = this.getController(newcontroller),
        newview = controller.getNewView(),viewportcontroller = this.getController('Viewport');
        viewportcontroller.doNavigation(newview);
    },
    getNewView : function(){
        var me = this;
        me.currentview = me.getView('PrincessMenu').create();
        return me.currentview;
    },
    //private
    strContains:function(str, sub){  
        return (str.indexOf(sub) != -1);  
    }
});