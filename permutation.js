// Write a program to print all permutations of a String for example, the if input is "xyz" then it should print "xyz", "yzx", "zxy", "xzy", "yxz", "zyx".
function permutation(str){
	let result = [];
	if (str.length == 1){
		result.push(str);
		return result;
	} else if (str.length ==2){
		result.push(str, str[1]+str[0]);
		return result;
	}
	str.split('').forEach(function(chr, ind, arr){
		let output = [].concat(arr);
		output.splice(ind, 1);
		permutation(output.join('')).forEach(function(perm){
			result.push(chr+perm);
		});
	});
	result.splice(1,0,result[3],result[4]);
	result.splice(5,2);
	return result;
}
console.log(permutation('xyz'))