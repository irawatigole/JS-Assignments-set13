
//   You need to write a program to implement in place quick sort algorithm in JavaScript. Steps to implement Quick sort algorithm in place:

// 1) Choose an element, called pivot, from the list or array. Generally pivot is the middle element of array.

// 2) Reorder the list so that all elements with values less than the pivot come before the pivot, and all elements with values greater than the pivot come after it (equal values can go either way). This is also known as partitioning. After partitioning the pivot is in its final position.

// 3) Recursively apply the above steps to the sub-list of elements with smaller values and separately the sub-list of elements with greater values. If the array contains only one element or zero elements then the array is sorted.


// write Your test cases here
//  test('using quicksort algorithm step sort an array',() => { 
//    expect(quickSort([6, 5, 3, 1, 8, 7, 2, 4])).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
//  });

function quickSort(arr, left = 0, right= arr.length-1){
	let len = arr.length,
	index;
	if(len > 1){
		index = partition(arr, left, right)
		if(left < index -1){
			quickSort(arr, left, index -1)
		}
		if (index < right){
			quickSort(arr, index, right)
		}
	}
	return arr;
}

function partition(arr, left, right){
	let middle = Math.floor((right +  left) /2),
			pivot = arr[middle];
	i = left;
	j = right;
	
	while(i<=j){
		while(arr[i] < pivot){
			i++
		}
		while(arr[j]> pivot){
			j--
		}
		if(i<=j){
			[arr[i], arr[j]]  = [arr[j], arr[i]];
			i++;
			j--;
		}
	}
	return i;
}
	console.log(quickSort([6, 5, 3, 1, 8, 7, 2, 4]))