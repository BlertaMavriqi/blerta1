//function printNames(){
   // document.write("John");
    //document.write("<br>");
    //setTimeout(function(){//menyre e asinkronizume pershkak se e kena perdor setTimeout edhe nuk i shkon me rend p.sh rreshti i1 edhe 100, kurse menyra e sinkronizume shkon secili rresht me rend
   //     document.write("Anna");  }, 3000);
   // document.write("Bob")
//}
//printNames();



var colors = ['red', 'green', 'blue', 'purple'];

function changeBgColor(){
    document.querySelector('body').style.background = colors [Math.floor(Math.random()*colors.length)];

}

var names = ['John', 'Anna', 'Bob', 'Mark'];
function changeNames (){
    document.querySelector('p').innerHTML = names[Math.floor(Math.random()*colors.length)];
}

setInterval(changeBgColor, 1000);
setInterval(changeNames, 1000);

