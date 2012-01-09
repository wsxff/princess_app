Ext.define('Gongzhu.view.Product', {
    extend: 'Ext.DataView',
    xtype : 'product',
    id:'product_detiial',
		config:{
		  store: 'ProductStores',
		  itemTpl:"<div><img src='{pic}' alt='mainpic'/></div>"
        }

});