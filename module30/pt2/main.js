var circle = document.getElementById('circle');
var showTime = document.getElementById('time');
var timestart = new Date().getTime( );

function showCircle(){
    circle.style.display = 'block';

    circle.style.top = Math.random()* 500 + 'px';
    circle.style.left = Math.random()* 900 + 'px';
    timestart = new Date().getTime();
    circle.style.backgroundColor = randomColor ();
}

showCircle();

circle.onclick = function(){
    circle.style.display = 'none';
    setTimeout(showCircle, 1000); //koha matet me mil prandaj eshte 1000
    // new Date na jep kohen e sakt kur e klikojm
    var timeEnd = new Date().getTime();
    var time = (timeEnd - timestart)/1000;
    showTime.innerHTML = time + 's';

}


function randomColor(){
    var s = '0123456789ABCDEF';
    var color = '#';
    for (var i=0; i<6; i++){
        color = color + s[Math.floor(Math.random( )*16)]
    }
    return color;
}
