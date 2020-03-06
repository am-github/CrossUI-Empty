// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
// Sub module don't support async functions
xui.Class('Module.Test', 'xui.Module',{
    Instance:{
        // Dependencies css
        Dependencies: [],
        // Required modules
        Required:[],
        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block10")
                .setLeft("0.8333333333333334em")
                .setTop("0.8333333333333334em")
                .setWidth("24.166666666666668em")
            );
            
            host.xui_ui_block10.append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button6")
                .setDirtyMark(false)
                .setLeft("15.75em")
                .setTop("3.3333333333333335em")
                .setWidth("4.583333333333333em")
                .setCaption("Button")
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },
        // To determine how properties affects this module
        propSetAction : function(prop){
        }
    },
    // export
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        },
        $Functions:{
        }
    }
});