Ext.define('Gongzhu.view.SubCategory', {
    extend: 'Ext.List',
    xtype : 'subcat',

    config:{

        disclosure: true,
        store: 'SubCategoryStores',
        itemTpl:"{cat_name}{product_count}<br/><small>{cat_id}</small>",
        flex:2,
        onItemDisclosure: function (record) { 
            
            alert('get detail');

            this.refresh();
        }
        ,
        items:[
        {
            xtype:'header',dock:'top'
        }
        ],
    }    

});