function calc(radius){
    var area = Math.PI * Math.pow(radius, 2)
    return area
}
function printAnswer(radius){
    area = calc(radius)
    return "r = " + radius + "; area = " + area
}
var one = printAnswer(7) 
var two = printAnswer(1.5) 
var three = printAnswer(20) 

var container = document.getElementById("container")

container.innerHTML = "<p>" + one + "</p><p>" + two + "</p><p>" + three + "</p>"