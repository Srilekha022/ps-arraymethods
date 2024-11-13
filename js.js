//1.Sort an array of numbers in ascending order.

function sort(arr){
    for(let i=0;i<arr.length-1;i++){
        for(let j=0;j<arr.length-i-1;j++){
            if (arr[j] > arr[j + 1]) {
               let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
        }
    }
}
return arr;
}
num=[5, 3, 8, 4, 2];
console.log(sort(num));

//2.Find the second largest number in a given array.
function findSecondLargest(arr) {
    let largest = arr[0];
    let secondLargest = -Infinity;
  for (let i = 1; i < arr.length; i++) {
      if (arr[i] > largest) {
        secondLargest = largest;
        largest = arr[i];
      } else if (arr[i] < largest && arr[i] > secondLargest) {
        secondLargest = arr[i];
      }
    }
    return secondLargest;
  }
  const array = [5, 2, 10, 8, 3];
  const secondLargest = findSecondLargest(array);
  console.log("Second largest element:", secondLargest);



  //3.Count how many positive and negative numbers are in an array.
  //i.
  let numb= [10,-12,89,56,-83,8,90,-8]
  let pos_count=neg_count=0;
  for(let i=0;i<numb.length;i++){
        if (numb[i]<0)
         neg_count++;
        else
         pos_count++;
      }
  console.log(`The positive numbers in an array is ${pos_count}`)
  console.log(`The negative numbers in an array is ${neg_count}`)
  
 //ii
 function countPositivesAndNegatives(arr) {
    let positiveCount = 0;
    let negativeCount = 0;

    // Iterate through the array
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positiveCount++;  // Increment positive count
        } else if (arr[i] < 0) {
            negativeCount++;  // Increment negative count
        }
    }

    return {
        positives: positiveCount,
        negatives: negativeCount
    };
}

const numbers = [5, -3, 8, -4, 2, -1];
const result = countPositivesAndNegatives(numbers);
console.log("Positive numbers: " + result.positives);  // Output: 4
console.log("Negative numbers: " + result.negatives);  // Output: 2

