Ext.define('Gongzhu.view.PrincessMenu', {
    extend: 'Ext.List',
    xtype : 'princessmenu',
    requires: [
    'Gongzhu.view.Banner',
    'Gongzhu.view.PrincessCategory',
    'Gongzhu.view.PrincessBrand',
    ],
    config:{

        disclosure: true,
        store: 'MenuStores',
        itemTpl:"<div style='float:left'><img src='{icon}' width=35 height=35/></div><div>{title}{etitle}<br/><small>{desc}</small></div>",
        flex:2,
        onItemDisclosure: function (record) { // TODO: Render the selected note in the note editor. 
           
            if (strContains(record.data.etitle,'CATALOG')){
                var pcat = Ext.create('Gongzhu.view.PrincessCategory');
                pcat.show();
            };
            if (strContains(record.data.etitle,'BRAND')){
                var pbrand = Ext.create('Gongzhu.view.PrincessBrand');
                pbrand.show();
            };
            if (strContains(record.data.etitle,'FUNCTION')){alert("function view")};
            if (strContains(record.data.etitle,'SEARCH')){alert(" search view")};
            
        },items:[{xtype:'banner'}]

    }

});

function strContains(str, sub){  
    return (str.indexOf(sub) != -1);  
}