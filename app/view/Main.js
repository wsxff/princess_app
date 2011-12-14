

Ext.define('Gongzhu.view.Main', {
    extend: 'Ext.Container',
    requires: [
    'Gongzhu.view.Header',
    'Gongzhu.view.CategoryList'
    ],
    config: {
        fullscreen: true,
        layout: 'hbox',
        width:640,
        items: [

        {
            xtype :'header',
            docked : 'top'
        }, {
            xtype:'tabpanel',
            tabBarPosition : 'bottom',
            width:640,
            items : [{

                title : '首页',
                iconCls : 'home',
                layout:'vbox',
                items:[
                {  
                    xtype: 'dataview',
                    store:'BannerPicStores',
                    itemTpl:"<img src='{pic}' />",
                    flex: 1,
                    height:300
                    }
                    ,{
                        xtype: 'list',

                        disclosure: true,
                        onItemDisclosure: {
                            scope: 'test',
                            handler: function(record, btn, index) {
                                alert('active next page --' + record.get('link'));
                            }
                        },
                        itemTpl: '<img src="{icon}" width=35 height=35/>{title}{etitle}<br/><small>{desc}</small>',
                        store: 'CategoryTitleStores',
                        flex:5
                        }]
                    }, {
                        title : '收藏',
                        iconCls : 'star',
                        cls : 'home',
                        html : 'others'
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



