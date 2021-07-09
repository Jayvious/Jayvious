({
    startClick : function(component, event, helper) {
        helper.gameContinue(component, event, helper);
    },

    handleClick : function(component, event, helper){
        //helper.fireEvent(component, event, helper);
        helper.gameplay(component,event,helper);
    }

    /*handleColor : function(component, event, helper){
        helper.handleEvent(component, event, helper);
    }*/

})
