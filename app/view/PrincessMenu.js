Ext.define('Gongzhu.view.PrincessMenu', {
    extend: 'Ext.List',
    xtype : 'princessmenu',
    requires: [
    'Gongzhu.view.PrincessCategory',

    ],
    config:{

        disclosure: true,
        store: 'MenuStores',
        itemTpl:"<img src='{icon}' width=35 height=35/>{title}{etitle}<br/><small>{desc}</small>",
        flex:2,
        onItemDisclosure: function (record) { // TODO: Render the selected note in the note editor. 
           
            if (strContains(record.data.etitle,'CATALOG')){
                var pcat = Ext.create('Gongzhu.view.PrincessCategory');
                pcat.show();
            };
            if (strContains(record.data.etitle,'BRAND')){alert("brand view")};
            if (strContains(record.data.etitle,'FUNCTION')){alert("function view")};
            if (strContains(record.data.etitle,'SEARCH')){alert(" search view")};
            
        }

    }

});

function strContains(str, sub){  
    return (str.indexOf(sub) != -1);  
}