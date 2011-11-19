Ext.application({
    name: 'Sencha',
 
    launch: function() {
        Ext.create("Ext.TabPanel", {
            fullscreen: true,
            tabBarPosition: 'bottom', //tabBar设在下方
 
            items: [
                {
                    title: 'Home',
                    iconCls: 'home', //添加Tab的图标
                    html: [//添加内容
                        
                        '<h1>Welcome to Sencha Touch</h1>',
                        "<p>You're creating the Getting Started app. This demonstrates how ",
                        "to use tabs, lists and forms to create a simple app</p>",
                        '<h2>Sencha Touch (2.0.0pr1)</h2>'
                    ].join("")
                }
            ]
        });
    }
});