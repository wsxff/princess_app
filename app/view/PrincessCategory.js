Ext.define('Gongzhu.view.PrincessCategory', {
    extend: 'Ext.List',
    xtype : 'princesscat',

    config:{

        disclosure: true,
        store: 'CategoryStores',
        itemTpl:"<img src='{icon}' width=35 height=35 />{cat_name}{product_count}<br/><small>{cat_id}</small>",
        flex:2,
        onItemDisclosure: function (record) { // TODO: Render the selected note in the note editor. 

        }

    }

});