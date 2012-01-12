Ext.define('Gongzhu.view.Product', {
     extend: 'Ext.DataView',
     xtype : 'product',
   
		config:{
            fullscreen:true,
		  store: 'ProductStores',
		  itemTpl:"<div>{product_name},<br/><img src='{image_url}' alt='mainpic'/><br/>分类{cat_id}<br/>{price} 详细介绍<br/>stars:{stars},{useds}条点评</div>",
		   items:[
              {xtype:'searchbar',docked:'top'}],

        }

});