function printArgsInfo()
{
	var i;
	var type;
	for (i = 0; i < arguments.length; i++)
	{
		type = Array.isArray(arguments[i]) ? "array" : typeof arguments[i];
		console.log((arguments[i] + ' (' + type + ')').trim());
	}
}

printArgsInfo(2, 3, 2.5, -110.5564, false);
printArgsInfo(null, undefined, "", 0, [], {});
printArgsInfo([1, 2], ["string", "array"], ["single value"]);
printArgsInfo("some string", [1, 2], ["string", "array"], ["mixed", 2, false, "array"], { name: "Peter", age: 20 });
printArgsInfo([[1, [2, [3, [4, 5]]]], ["string", "array"]]);
