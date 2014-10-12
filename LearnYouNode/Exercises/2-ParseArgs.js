// LearnYouNode - Exercise 2
// Date- 12th Oct 2014

var argsArr = process.argv;
var sum = 0;
for(var counter = 2; counter < argsArr.length;counter++){
	sum = sum + parseInt(argsArr[counter]);
}
console.log(sum);
