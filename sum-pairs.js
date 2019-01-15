// write Your test cases here
//  test('it should return an array with pair of elements whose sum equals to a target number.',() => { 
//    expect(pairElement([10,20,10,40,50,60,70], 50)).toEqual([3,4]);
//  });
// //write Your test cases here
//  test('it should return text "invalid input" if the input array is empty',() => { 
//    expect(pairElement([], 50)).toBe('invalid input');
//  });
// //write Your test cases here
//  test('it should return empty array if the second input is zero.',() => { 
//    expect(pairElement([10,20,10,40,50,60,70], 0)).toEqual([]);
//  });



function pairElement(a,b){
    if(a.length == 0){
        return 'invalid input'
    } else if (b == 0){
        return []
    }

    var output = [];
    for (var i=a.length; i>=0; i--){
        for (var j=a.length; j>i-1; j--){
            if (a[j] == b - a[i]){
                output.push(i+1,j+1);
                return output
            }
        }
    }

}
console.log(pairElement([10,20,10,40,50,60,70],50));
console.log(pairElement([10,20,10,40,50,60,70], 0));
console.log(pairElement([], 50));

