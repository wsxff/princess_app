Ext.define('Gongzhu.view.PrincessList', {
       extend: 'Ext.List',
    xtype : 'princesslist',

	config:{
	    disclosure: true,
	  store: 'CategoryTitleStores',
	  itemTpl:"<img src='{icon}' width=35 height=35/>{title}{etitle}<br/><small>{desc}</small>",
	  flex:1,

    
    }

});