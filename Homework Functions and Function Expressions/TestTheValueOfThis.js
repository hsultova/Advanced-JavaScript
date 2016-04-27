var obj;

function testContext()
{
	console.log(this);
}

function test()
{
	console.log('In function');
	testContext();
};

console.log('Global');
testContext();
test();
console.log('As object');
obj = new testContext();