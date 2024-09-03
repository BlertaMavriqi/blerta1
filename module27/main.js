for(var i = 0;i<5;i++){
    console.log("vlera e i eshte :"+i);

}
console.log("--------------");

var personat= { emri:"Agon", mbiemri:"Ramadani", mosha: 18};

var text = '';

var z;

for(z in personat){
    text += personat[z];
}

console.log(text);

console.log("--------------");

var emrat = ['Altina' , 'Andi', 'Anila'];

var y;
//deklarimi me marr elemntin
for (y of emrat){
    console.log(y);
}
//=== e krahason edhe tipin
console.log("--------------");
var f = 0;
do{
    f = f+1;
    console.log(f);
}while(f<5);

console.log("--------------");

var x =0;
while(x<17){
    x=x+1;
    console.log(x);
}

console.log("--------------");

var l= 0;
var c= 0;
while(l<3){
    l++;
    c+=l;
    console.log(l);
    console.log(c);
}

console.log("--------------");

var p =["java","html", "jc"];
var w;
for (w of p){
    console.log(w);
}
console.log("--------------");

var students = ["Jon","Hana","Ana"]

var input = document.getElementById("i1")
var btnAdd = document.getElementById("btn_add")
var btnShow = document.getElementById("btn_show")

btnAdd.onclick = function(){
    students.push(input.value);
}

btnShow.onclick = function(){
    for(i=0; i<students.length; i++){
        document.write(students[i] = '<br>');
    }
}