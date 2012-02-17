Ext.define('Gongzhu.view.Banner', {
    extend: 'Ext.DataView',
    xtype : 'banner',
    id:'p_banner',
		config:{
		  store: 'BannerPicStores',
		  itemTpl:"<div><img src='{pic}' alt='mainpic'/></div>",
		  height:300,
		  
        }

});