// Your code here
function saturdayFun(string = "roller-skate"){
    return "This Saturday, I want to " + string +"!";
}
const mondayWork = function(string = "go to the office") {
    return "This Monday, I will " + string + ".";
}
function wrapAdjective(flair = "*"){
    return function(par = "special"){
        return "You are " + flair + par + flair +"!";
    }
}