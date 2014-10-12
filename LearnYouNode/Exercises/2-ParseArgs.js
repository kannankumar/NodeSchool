/*
LearnYouNode - Exercise 2
date- 12th Oct 2014
time-5:15pm
*/

//console.log(process.argv);

var argsArr = process.argv;
var argumentCount = argsArr.length - 2;
//console.log('Argument Count: ',argumentCount);
var sum = 0;
for(var count = 2;count<argsArr.length;count++){
//	console.log("  + "+argsArr[count]);
	sum = sum + parseInt(argsArr[count]);
}
//console.log("------------\n",sum);
console.log(sum);
