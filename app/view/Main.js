
$.getJSON(
    "http://sns.gongzhu.com/index/get_banner.json?callback=?",
    function(json){
        alert(json.pic);
        store = {"pic":"Apple","link":"Banana"};
    }
);


Ext.define('Gongzhu.view.Main', {
    extend: 'Ext.Container',
    requires: [
    'Gongzhu.view.Header',
    'Gongzhu.view.CategoryList'
    ],
    config: {
        fullscreen: true,
        layout: 'hbox',
        items: [

        {
            xtype :'header',
            docked : 'top'
        }, {
            xtype:'tabpanel',
            tabBarPosition : 'bottom',
            items : [{

                title : '首页',
                iconCls : 'home',
                layout:'vbox',
                items:[
                {  
                    html:'focus pic',
                    flex: 1}
                    ,{
                        xtype: 'list',

disclosure: true,
onItemDisclosure: {
    scope: 'test',
    handler: function(record, btn, index) {
        alert('active next page ' + record.get('title'));
    }
},
                           itemTpl: '{icon}{title}<br/><small>{subtitle}</small>',
                           store: {
                               fields: ['icon','title','subtitle', 'url'],
                               data: [
                               {icon: 'iconA',title:'护肤',subtitle:'小护士,牛尔', url: 'ext-scheduler-2-0-upgrading-to-ext-js-4'},
                               {icon: 'iconB',title:'美白',subtitle:'人参肥皂', url: 'sencha-touch-2-what-to-expect'},
                               {icon: 'iconC',title:'熬夜',subtitle:'红牛,维生素', url: 'senchacon-2011-now-packed-with-more-goodness'},
                               {icon: 'iconD',title:'防晒',subtitle:'雪花膏',url: 'new-ext-js-4-documentation-center'}
                               ,
                               {icon: 'iconA',title:'护肤',subtitle:'小护士,牛尔', url: 'ext-scheduler-2-0-upgrading-to-ext-js-4'},
                                  {icon: 'iconB',title:'美白',subtitle:'人参肥皂', url: 'sencha-touch-2-what-to-expect'},
                                  {icon: 'iconC',title:'熬夜',subtitle:'红牛,维生素', url: 'senchacon-2011-now-packed-with-more-goodness'},
                                  {icon: 'iconD',title:'防晒',subtitle:'雪花膏',url: 'new-ext-js-4-documentation-center'}
                               ]
                           },
                        flex:5
                        }]
                    }, {
                        title : '收藏',
                        iconCls : 'star',
                        cls : 'home',
                        html : ['<h1>收藏views</h1>',"需要组合控件，数据关联失败"].join("")
                    },
                    //this is the new item
                    {
                        title : '点评',
                        iconCls : 'user',
                        xtype : 'formpanel',
                        url : 'contact.php',
                        layout : 'vbox',

                        items : [{
                            xtype : 'fieldset',
                            title : 'Contact Us',
                            instructions : '(email address is optional)',
                            items : [{
                                xtype : 'textfield',
                                label : 'Name'
                            }, {
                                xtype : 'emailfield',
                                label : 'Email'
                            }, {
                                xtype : 'textareafield',
                                label : 'Message'
                                }]
                            }, {
                                xtype : 'button',
                                text : 'Send',
                                ui : 'confirm',
                                handler : function() {
                                    this.up('formpanel').submit();
                                }
                                }]
                            }, {
                                title : '更多',
                                iconCls : 'more',
                                cls : 'more',
                                html : ['更多'].join("")

                            }
                            ]

                        }

                        ]
                    }

                });



