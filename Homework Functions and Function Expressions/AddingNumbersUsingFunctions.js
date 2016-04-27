function add(number)
{
	var addSum = function (numberToAdd)
	{
		return add(number + numberToAdd);
	};
	
	addSum.valueOf = addSum.toString = function ()
	{
		return number;
	};
	
	return addSum;
}

console.log(+add(1));
console.log(+add(2)(3));
console.log(+add(1)(1)(1)(1)(1));
console.log(+add(1)(0)(-1)(-1));

var addTwo = add(2);
console.log(+addTwo);
var addTwo = add(2);
console.log(+addTwo(3));
var addTwo = add(2);
console.log(+addTwo(3)(5));