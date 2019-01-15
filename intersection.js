// Your task is to write a function to return the intersection of two sorted arrays. For example, if the two sorted arrays as input are [21, 34, 41, 22, 35] and [61, 34, 45, 21, 11], it should return an intersection array with numbers [34, 21], For the sake of this problem you can assume that numbers in each integer array are unique.

// test(' write a function to return the intersection of two sorted arrays',() => { 
//     expect(interSection([21, 34, 41, 22, 35],[61, 34, 45, 21, 11])).toEqual([34, 21]);
//   });


function common(arr1, arr2) {
    var newArr = [];
    newArr = arr2.filter(function(v){
         return arr1.indexOf(v) >= 0;})
    newArr.concat(arr1.filter(function(v){ return newArr.indexOf(v) >= 0;}));
  
    return newArr;
  }
  console.log(common([21, 34, 41, 22, 35],[61, 34, 45, 21, 11]))