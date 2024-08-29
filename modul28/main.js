var input = document.getElementById('input_id')
var button = document.getElementById('btn_id')
var text = document.getElementById('teksti_id')

button.onclick = function(){
    text.innerHTML = input.value 
}
// nese del -1 nuk eshte ne fjali fjala
var text1 = "the best school is digital school"
var result1 = text1.search("digital school")
document.getElementById("rez1").innerHTML = result1

var text2 = "the best school is digital school"
var result2 = text2.search(/digital school/)
document.getElementById("rez2").innerHTML = result2

var text3 = "the best school is digital school"
var result3 = text3.replace(/digital school/, "another school")
document.getElementById("rez3").innerHTML = result3

var text4 = "abcdef"
var regex = new RegExp('abc')
document.getElementById('rez4').innerHTML = regex.test(text4)

var text5 = "the best school is digital school"
var regex1 = /school/g; // by default
document.getElementById('rez5').innerHTML = text5.match(regex1)

var text6 = "the best school is digital school"
var regex2 = /[abc]/g;
document.getElementById('rez6').innerHTML = text6.match(regex2)


var text7 = "digital school is in top 10 best schools"
var regex3 = /[0-9]/g;
document.getElementById('rez8').innerHTML = text7.match(regex3)

var text8 = "100 percent"
var regex4 = /\d/g;
document.getElementById('rez9').innerHTML = text8.match(regex4)