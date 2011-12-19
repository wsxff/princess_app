Ext.define('Gongzhu.view.Banner', {
    extend: 'Ext.DataView',
    xtype : 'banner',
    id:'p_banner',
		config:{
		  store: 'BannerPicStores',
		  itemTpl:"<img src='{pic}' alt='mainpic'/>",
		  flex:1,
		  height:300        
        }

});