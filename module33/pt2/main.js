$('li').click(function(){
    alert('clicked');
});

$('#btn').click(function(){
    console.log($('#h1').text());
    $('#h1').text('testing text');
    $('#h1').append('extra text');
});

$('#btn2').on('click', function(){
    console.log("clicked");
});

$('.hidden').show();
$('.hidden').show(300);
$('.hidden').show('slow');

$('#squere').animate({
    'width' : '200px' ,
    'height' : '200px'
});

$('.testing').click(function(){
$('.testing').animate({
    'left' : '+= 50px', 
    'opacity' : 0.25,
    'fontSize' : '12px'
},
     300,
     function(){
        console.log("animation is complete");
     }
);
});





