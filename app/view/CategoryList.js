Ext.regModel('Contact', {
    fields: ['firstName', 'lastName']
});

Ext.create('Ext.data.Store', {
    id: 'ListStore',
    model: 'Contact',
    sorters: 'firstName',
    getGroupString : function(record) {
        return record.get('firstName')[0];
    },
    data: [
    {firstName: 'Julio', lastName: 'Benesh'},
    {firstName: 'Julio', lastName: 'Minich'},
    {firstName: 'Tania', lastName: 'Ricco'},
    {firstName: 'Odessa', lastName: 'Steuck'},
    {firstName: 'Nelson', lastName: 'Raber'},
    {firstName: 'Tyrone', lastName: 'Scannell'},
    {firstName: 'Allan', lastName: 'Disbrow'},
    {firstName: 'Cody', lastName: 'Herrell'},
    {firstName: 'Julio', lastName: 'Burgoyne'},
    {firstName: 'Jessie', lastName: 'Boedeker'},
    {firstName: 'Allan', lastName: 'Leyendecker'},
    {firstName: 'Javier', lastName: 'Lockley'},
    {firstName: 'Guy', lastName: 'Reasor'},
    {firstName: 'Jamie', lastName: 'Brummer'},
    {firstName: 'Jessie', lastName: 'Casa'},
    {firstName: 'Marcie', lastName: 'Ricca'},
    {firstName: 'Gay', lastName: 'Lamoureaux'},
    {firstName: 'Althea', lastName: 'Sturtz'},
    {firstName: 'Kenya', lastName: 'Morocco'},
    {firstName: 'Rae', lastName: 'Pasquariello'},
    {firstName: 'Ted', lastName: 'Abundis'},
    {firstName: 'Jessie', lastName: 'Schacherer'},
    {firstName: 'Jamie', lastName: 'Gleaves'},
    {firstName: 'Hillary', lastName: 'Spiva'},
    {firstName: 'Elinor', lastName: 'Rockefeller'},
    {firstName: 'Dona', lastName: 'Clauss'},
    {firstName: 'Ashlee', lastName: 'Kennerly'},
    {firstName: 'Alana', lastName: 'Wiersma'},
    {firstName: 'Kelly', lastName: 'Holdman'},
    {firstName: 'Mathew', lastName: 'Lofthouse'},
    {firstName: 'Dona', lastName: 'Tatman'},
    {firstName: 'Clayton', lastName: 'Clear'},
    {firstName: 'Rosalinda', lastName: 'Urman'},
    {firstName: 'Cody', lastName: 'Sayler'},
    {firstName: 'Odessa', lastName: 'Averitt'},
    {firstName: 'Ted', lastName: 'Poage'},
    {firstName: 'Penelope', lastName: 'Gayer'},
    {firstName: 'Katy', lastName: 'Bluford'},
    {firstName: 'Kelly', lastName: 'Mchargue'},
    {firstName: 'Kathrine', lastName: 'Gustavson'},
    {firstName: 'Kelly', lastName: 'Hartson'},
    {firstName: 'Carlene', lastName: 'Summitt'},
    {firstName: 'Kathrine', lastName: 'Vrabel'},
    {firstName: 'Roxie', lastName: 'Mcconn'},
    {firstName: 'Margery', lastName: 'Pullman'},
    {firstName: 'Avis', lastName: 'Bueche'},
    {firstName: 'Esmeralda', lastName: 'Katzer'},
    {firstName: 'Tania', lastName: 'Belmonte'},
    {firstName: 'Malinda', lastName: 'Kwak'},
    {firstName: 'Tanisha', lastName: 'Jobin'},
    {firstName: 'Kelly', lastName: 'Dziedzic'},
    {firstName: 'Darren', lastName: 'Devalle'},
    {firstName: 'Julio', lastName: 'Buchannon'},
    {firstName: 'Darren', lastName: 'Schreier'},
    {firstName: 'Jamie', lastName: 'Pollman'},
    {firstName: 'Karina', lastName: 'Pompey'},
    {firstName: 'Hugh', lastName: 'Snover'},
    {firstName: 'Zebra', lastName: 'Evilias'}
    ]
});


Ext.define('Gongzhu.view.CategoryList', {
    extend: 'Ext.Container',
    xtype:'categorylist',
    config:{
        title : '首页',
        iconCls : 'home',
        items:[{html:'foucus pic'},{html:"list"},{


            xtype: 'list',


            itemTpl: '{icon}{title}<br/>{subtitle}',
            store: {
                fields: ['icon','title','subtitle', 'url'],
                data: [
                {icon: 'iconA',title:'护肤',subtitle:'小护士,牛尔', url: 'ext-scheduler-2-0-upgrading-to-ext-js-4'},
                {icon: 'iconB',title:'美白',subtitle:'小护士,牛尔', url: 'sencha-touch-2-what-to-expect'},
                {icon: 'iconC',title:'熬夜',subtitle:'小护士,牛尔', url: 'senchacon-2011-now-packed-with-more-goodness'},
                {icon: 'iconD',title:'防晒',subtitle:'小护士,牛尔',url: 'new-ext-js-4-documentation-center'}
                ]
            }

            }]
        }
    });