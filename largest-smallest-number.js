// You have given an unsorted array and you need to find the largest and smallest element in the array. don't use the method sort.



    function maxMinOfArray(arr){
        let result = [];
        let max = arr[0];
        let min = arr[0];
        for (let i=1 ;i< arr.length; i++){
            if(arr[i] > max){
                max = arr[i];
             } else if (arr[i] < min){
                min = arr[i];
             
            }
        
           
        }
        result.push(max,min)
        return result
    }

  console.log(maxMinOfArray([-20, 34, 21, -87, 92, 2147483647]));
  console.log(maxMinOfArray([10, -2147483648, -2]))