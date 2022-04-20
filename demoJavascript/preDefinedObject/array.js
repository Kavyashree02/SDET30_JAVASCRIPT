var arr1 = [1,2,3,4,5]
var arr2 = [10,20,30,40]

//properties:
//console.log(arr1.length);     //returns the length of an array = 5

//methods of an array

//1]concat(does not modify the original array, returns the new array)
// console.log(arr1.concat(arr2));
// console.log(arr1);

// console.log(arr1.concat([100,200,300,400]));
// console.log(arr1.concat([100,200,300,400], arr2));

//2]push method
//  console.log(arr1.push(7));  //to add after last value
//  console.log(arr1);    //return type is length of array

// console.log(arr1.pop()); //to remove the last value(delete)
// console.log(arr1);        //return type is deleted value

// console.log(arr1.unshift(5,6,7,"hello", " ")); //to add the value from start
// console.log(arr1);              //return type is deleted value

//console.log(arr1.shift(3));   //to remove the value from start
//console.log(arr1);             //return type is deleted value

//slice(specify start and end)
// console.log(arr1.slice(0,3)); //[ 1, 2, 3 ] //return type is array

//splice(1st tells where to start, 2nd tells how many items to be deleted,
//3rd& 4th so on tells what items to be added )
// console.log(arr1.splice(2,0,"a","b"));
// console.log(arr1);

// console.log(arr1.splice(2,2,"a","b","c"));
// console.log(arr1);

// every
// arr1.every(function (element){            //return type is boolean
//     return element>0
// })

// console.log(arr1.every(function (element){         //return type is boolean
//     return element<0
// }));

// console.log(arr1.every(function (element){          //return type is boolean(when all the elements satify the given condition then only it vill return true)
//     return element>3
// }));


//some
// console.log(arr1.some(function(element){
//     return element>4
// })); 

//indexof
// console.log(arr1.indexOf(4)); //return the index of the value from array

// console.log(arr1.indexOf(40))  // (works from left to right) which are not in array it will return output as -1

//lastIndexOf
//console.log(arr1.lastIndexOf(3,5));   //works from right to left

//reverse
//  console.log(arr1.reverse());     //reverse the elements of array

//includes
// console.log(arr1.includes(5));  //searches whther the elemnt is in array or not returns boolean value

//join
// console.log(arr1.join(2));   //(122232425)converts array into a string and separate/adds the array by using space or ,

//foreach method
//it is implemented by using map method
// arr1.forEach((element, index)=>{
//     console.log(element +":"+index);
//     console.log(element*2);
// })

//map method 
//it is implemented using filter method
// console.log(arr1.map((element, index)=>{
//     return element*3
// }));

// filter method
console.log(arr1.filter((element, index,array)=>{
    if (element>3) {
        return element        
    }
}));

// console.log(arr1);

//sort
// console.log(
//     arr1.sort((a,b)=>{
//         return a-b
//     }));

// //reduce
// console.log(arr1.reduce((a,b)=>{     //works from left to right ,a=0 by default if we are not specifying
//     return a+b                       //0+1, 1+2, 3+3, 6+4, 10+5
// }));                                 //a=0, b= elements of array

// console.log(arr1.reduce((a,b)=>{     //works from left to right a=0 by default if we are not specifying
//     return a+b                       //2+1, 3+2, 5+3,...
// },2));                               //a=2

// //reduceRight
// console.log(arr1.reduceRight((a,b)=>{    //works from right to left
//     return a-b
// },2));       //a=2
