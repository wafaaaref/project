var form = document.getElementById('para');
form.style.color = "blue";
var x = document.getElementsByTagName('div')
x[0].style.color = "red"
var y = document.getElementsByClassName('div')
y[0].style.color = "violet"
var w= document.getElementsByName('head')
w[0].style.color = "green"

var u= document.querySelector('para')
w[0].style.color = "black"

function show(){

    var user=document.getElementById('user');
    var mail=document.getElementById('mail');
    var password=document.getElementById('pass');
     if(user.value.length<5){
    
        user.style.border="red 3px solid"
     }
    
    }