// Write a swapping function

function swap(array, index1, index2) {
    let holder = array[index1]
    array[index1] = array[index2]
    array[index2] = holder
    return array
}

// Implement Bubble Sort

function bubbleSort(array) {
    var sorted = false;
    while (!sorted) {
        sorted = true;
        for (var i = 1; i < array.length; i++) {
            //compare previous index with current index

            if (array[i-1] > array[i]) {
                //if the comparison passes 
                sorted = false;
                // do the swapping
                swap(array, (i-1), i)
                // [array[i-1], array[i]] = [array[i], array[i-1]]
            }
        }
    }
    return array;
}

// Implement Selection Sort

function selectionSort(array) {
    let min = array[0]
    let minPosition = 0
    let start = 0
    while(start < array.length - 1){
        for(let i = start; i < array.length; i++){
            if(min > array[i]){
                min = array[i]
                minPosition = i
            }
        }
        // let temp = array[start]
        // array[minPosition] = array[start]
        // array[start] = min 
        swap(array, minPosition, start)
        start++
        min = array[start]
    }
    return array
}

// Sample data
const arraySample = [5, 8, 13, 1, 9, 43, 9, 19, 33]

// console.log(swap(arraySample, 1, 3))
// console.log(bubbleSort(arraySample))
console.log(selectionSort(arraySample))