({
    gameContinue : function(component, event, helper) {
        const colors = component.get('v.colors');
        var level = component.get('v.level');
        const randomColors = helper.mixColors(colors, level);
        console.log(randomColors);
        
        for(var i = 0; i < randomColors.length; i++){
            var color = randomColors[i].toString();
            //console.log(color);
            var button = document.getElementById(randomColors[i]);
            button.style.backgroundColor = 'white';
            console.log(button.style.backgroundColor + i);
            helper.blink(i, button , color);
            
        }
        component.set('v.pattern', randomColors);

    },

    mixColors : function(colors, lvl){
        var randomColors = new Array;
        for(var i = 0; i < lvl; i++){
            const randomElement = colors[Math.floor(Math.random() * colors.length)];
            randomColors.push(randomElement);
        }
        return randomColors;
    },

    blink : function(i, button , color){
        setTimeout(function(){ 
            console.log(color);
            console.log(button.style.backgroundColor);
            button.style.backgroundColor = color }, (i + 1) * 1000);
    },

    gameplay : function(component, event, helper){
       //var input = component.get('v.input');
       var clickedCount = component.get('v.clickedCount')
       var pattern = component.get('v.pattern');
       var level = component.get('v.level');
       var whichOne = event.currentTarget.id;
       var winner = false;
       //console.log(whichOne);
       //input.push(whichOne);
       if(pattern[clickedCount] === whichOne){
           clickedCount++;
           component.set("v.clickedCount",clickedCount);
           winner = true;
       }else{
           winner = false;
           alert('Simon didnt say that! Reloading page.')
           setTimeout(function () {
            //alert('Reloading Page');
            location.reload(true);
            }, 100);
       }


       if(clickedCount == pattern.length && winner){
        level++;
        pattern = new Array;
        //input = new Array;
        component.set('v.clickedCount', 0);
        component.set('v.level', level);
        component.set('v.pattern', pattern);
        var sButton = component.find('start');
        sButton.set('v.label', 'Continue Game');
       }
    }
})
