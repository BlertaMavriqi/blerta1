var programminglanguages = ["javascript", "php","puthon"]
console.log(programminglanguages)

console.log(programminglanguages[o])

// array method push(e shton ne fund nje element)
programminglanguages.push("java")
console.log(programminglanguages)
// array method pop( e largon elementin e fundit ne array)
programminglanguages.pop()
console.log(programminglanguages)
// array method unshift(e shton nje element ne fillim te nje array)
programminglanguages.unshift("c#")
console.log(programminglanguages)
// array method shift(e largon nje element ne fillim te nje array) 
programminglanguages.shift()
console.log(programminglanguages)


programminglanguages.splice(0,2,"ruby")
console.log(programminglanguages)

console.log(math.random()*5)

console.log(math.floor(math.random()*6))

var students = ["john","mike"]
var [s1,s2] = students;

console.log(s1)
console.log(s2)

var places = ["london", "Paris","new york", "berlin"]
var [first, second] = places 

console.log(first)
console.log(second)

var numbers = [1,2,3,4,5,6,7,8,9,10]
var [firstNum, secondNum, ...otherNums] = numbers

console.log(firstNum)
console.log(secondNum)
console.log(otherNums)











