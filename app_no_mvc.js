Ext.application({
	name : 'Princess',

	launch : function() {
		Ext.create("Ext.TabPanel", {
			fullscreen : true,
			tabBarPosition : 'bottom',

			items : [{
				xtype : 'panel',
				docked : 'top',

				html : 'banner is img'
			}, {

				xtype : 'list',
				title : '首页',
				iconCls : 'home',

				itemTpl : '{title}',
				store : {
					fields : ['title', 'url'],
					data : [{
						title : '按分类',
						url : 'ext-scheduler-2-0-upgrading-to-ext-js-4'
					}, {
						title : '按功效',
						url : 'sencha-touch-2-what-to-expect'
					}, {
						title : '按品牌',
						url : 'senchacon-2011-now-packed-with-more-goodness'
					}, {
						title : '按搜索',
						url : 'new-ext-js-4-documentation-center'
					}]
				}
			}, {
				title : '收藏',
				iconCls : 'star',
				cls : 'home',
				html : ['<h1>Welcome to Sencha Touch</h1>', "<p>You're creating the Getting Started app. This demonstrates how ", "to use tabs, lists and forms to create a simple app</p>", '<h2>Sencha Touch (2.0.0pr1)</h2>'].join("")
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

			}]
		}).setActiveItem(0);
	}
});
