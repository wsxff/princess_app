Ext.define('Gongzhu.view.NavigationTitle', {

    extend: 'Ext.navigation.View',
    xtype : 'navlist',
    requires: [
    'Gongzhu.view.Header',

    ],
    //true means the back button text will always be 'back'
    // useTitleForBackButtonText: true,
    config:{

        items: [

        //first item, which is visibile initially

        {
            title: 'View Example',
            layout: 'vbox',
            padding: 10,
            items: [
            {
                xtype: 'button',
                text: 'Push another view!',
                handler: function() {
                    //we already have other items in this navigation view, so we can simply use an index if we want

                    alert(this.getText());
                    view23.push(1);

                }
            }
            ]
        },

        //Second item. Show when the button above is pressed.
        {
            title: 'Second',
            layout: 'vbox',
            padding: 10,
            items: [
            {
                xtype: 'button',
                text: 'Another?',
                handler: function() {
                    view.push(2);
                }
            }
            ]
        },

        //Third item. Show when the button above is pressed.
        {
            title: 'Third',
            layout: 'vbox',
            padding: 10,
            items: [
            {
                xtype: 'button',
                text: 'Push a new view',
                handler: function() {
                    view.push({
                        title: 'New view',
                        items: [
                        {
                            xtype: 'button',
                            text: 'Pop this view',
                            handler: function() {
                                view.pop();
                            }
                        }
                        ]
                    });
                }
            }
            ]
        }
        ]
    }
});
var view23 = Ext.create('Gongzhu.view.NavigationTitle');
