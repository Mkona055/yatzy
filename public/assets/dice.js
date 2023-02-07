var Dice = function(){
    let dice = {value:null};
    dice.roll = function(){
        dice.value = Math.floor(Math.random() * 6 + 1);
        return dice.value;
    }
    return dice;
}