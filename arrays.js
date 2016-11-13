//Basic Array
var arr = [1,2,3,4,5,6,'seven', 'eight'];

//Array Length
var arrLength = arr.length;

//For Loop Array Iteration
function loopIter(){
    for(var i = 1;i < arrLength; ++i){
        console.log(arrLength);
    }
}

//Adding an index end of an array
var pushArr = arr.push('nine');

//Removing an index from end of an array
var popArr = arr.pop();

//Adding an index to front of an array
var unShiftArr = arr.unshift(-1,0);

//Removing an index from the front of an array
var shiftArr = arr.shift();

//Removing elements in the middle of an array
var spliceRemoveThree = arr.splice(5,3); //Removes 3 elements starting wth index 5

//Adding elements in the middle of an array
var spliceAddFour = arr.splice(5,3,5,6,'seven','eight');

//Two dimensional array
var twoDimension = [];
twoDimension[0] = [1,2,3,4,5];
twoDimension[1] = [6,7,8,9,10];

//Iterate Two dimensional array
function twoDimensionIter(arr){
    for(var i = 0; i < arr.length; i++){
        for(var j = 0; j < arr[i].length; j++){
            console.log(arr[i][j]);
        }
    }
}

//Three dimensional array
var threeDimension = [];
threeDimension[0] = [[1,2,3],[4,5,6]];
threeDimension[1] = [[7,8,9],[10,11,12]];
threeDimension[2] = [[13,14,15],[16,17,18]];

function threeDimensionIter(arr){
    for(var i = 0; i < arr.length; i++){
        for(var j = 0; j < arr[i].length; j++){
            for(var z = 0; z < arr[i][j].length; z++){
                console.log(arr[i][j][z]);
            }
        }
    }
}

//Concatenation into an array
var zero = 0;
var negatives = [-3,-2,-1];
var positives = [1,2,3];

var concatNum = negatives.concat(zero, positives);

//Array iteration functions
function isEven(arr){
    return(arr % 2 == 0);
}

var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

//The 'every' method stops on first false return
var numbersEvery = numbers.every(isEven); // Output: 1

//The 'some' method stops on first true return
var numbersSome = numbers.some(isEven); // Output: 2

//The 'forEach' method iterates the entire array
var numbersForEach = numbers.forEach(isEven); // Output: 1...15

//The 'map' method creates a new array based on all of the returns of provided function
var numbersMap = numbers.map(isEven); // Output: [false,true,false,true...]

//The 'filter' method creates a new array of elements that return true from the provided function
var numbersFilter = numbers.filter(isEven); // Output: [2,4,6,8,10,12,14]

//The 'reduce' method creates a single value using each element from an array
var addValues = function(a,b){
    return a + b
};

var numbersReduce = numbers.reduce(addValues); // Output: 120

//Reversing the order of an array
var numbersReverse = numbers.reverse(); // Output: [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

//Sort array lexicographically
var numbersSort = numbers.sort(); // Output: [1, 10, 11, 12, 13, 14, 15, 2, 3, 4, 5, 6, 7, 8, 9]

//Sort array with compareFunction
function compareSort(a,b){
    return a-b
}

var numbersCompareSort = numbers.sort(compareSort); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

//Sort array with upper and lower case strings
var names = ['Ana','John','ana','john'];

function nameSort(a, b) {
    if(a.toLowerCase() < b.toLowerCase()){
        return -1
    }
    if(a.toLowerCase() > b.toLowerCase()){
        return 1
    }
    return 0
}

var sortNames = names.sort(nameSort); // Output: ["Ana", "ana", "John", "john"]


var newNumbers = [1,2,3,4,5,6,7,3];

//Find index of first matching element in an array
var arrIndexOf = newNumbers.indexOf(3); // Output: 2

//Find index of last matching element in an array
var arrLastIndexOf = newNumbers.lastIndexOf(3); // Output: 7

//Turn array elements into a string
var arrString = newNumbers.toString(); // Output: "1,2,3,4,5,6,7,3"

//Turn array elements into a string with a different separator
var evenMoreNumbers = [1,2,3,4,5,6];

var arrJoin = evenMoreNumbers.join('-'); //Output: "1-2-3-4-5-6"
