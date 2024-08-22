//var button1 = document.getElementById ("btn1");

//button1.onclick = function(){
//    alert("hello world!");
// }

//var button1 = document.querySelector('button');
var button2 = document.getElementById("btn2");
var button3 = document.getElementById("btn3");
var button4 = document.getElementById("btn4");

var v_button = document.getElementById("btn1");
var btnhide = document.getElementById("btnhide");
btnhide.onclick = function(){
    btnhide.setAttribute("class", "test2");
}
v_button.onclick = function(){
//    v_button.style.color = "red";
//   v_button.style.backgroundColor = "blue";
//    v_button.style.textAlign = "center";
//    v_button.style.fontSize = "100px";
//  v_button.style.padding = "20px";
v_button.setAttribute("class", "test");




//v_button.style.cssText = "color :red; background-color: blue; text-algin: center: font-size: 100px; padding: 20px;"
}

//button1.addEventListener('click',function(){
//    alert("hello guyss!!");
//})

//button2.onmouseover = function(){
 //   alert("une jam dyshi");
//}
button3.onmouseleave = function(){
    alert("une jam treshi");
}
button4.onmouseenter = function(){
    alert(" une jam katershi")
}

var div1 = document.getElementById('d1');
var div2 = document.getElementById('d2');
div1 = function(){
div1.setAttribute("class", "test3");
}
div2 = function(){
    div2.setAttribute("class", "test4");
    }
 