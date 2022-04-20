//array
//declaration
var arr1 = new Array("value1", "kavyashree", "tyss", 2, undefined, null, ["java", "selenium", "javascript", "webdriverio"]
,{fname: "kavyashree"})
// console.log(typeof(arr1));
// console.log(arr1);
//console.log(arr1.length);

// var arr2 = new Array( "kavyashree")
// console.log(arr2);
// console.log(arr2.length);

// var arr3 = new Array(5)
// console.log(arr3);
// console.log(arr3.length);

// var arr4 =[5]
// console.log(arr4);
// console.log(arr4.length);

//for loop
/*for (let index = 0; index < arr1.length; index++) {
    console.log(index +":"+ arr1[index]);
    
}*/

//while loop
// var index=0;
// while (index<arr1.length) {
//     console.log(index +":"+ arr1[index]);
//     index++
    
// }

//do while loop
/*var index=0;
do
 {
    console.log(index +":"+ arr1[index]);
    index++}
    while (index<arr1.length)*/

    //for of loop

    // for(var element of arr1){
    //     console.log(element);
    // }

    //for in loop
    for(var item in arr1)
    {
        console.log(item);
    }

    /*console.log("============for loop============");
    var arr5= [1,2, , ,5, ,7]
    for (let index = 0; index < arr5.length; index++) {
        console.log(index);
        
    }
 console.log("=====while loop===========");
 var i=0
 while (i<arr5.length) {
     console.log(i+":"+arr5[i]);
     i++
 }

 console.log("=========do while loop=====");
 //do while loop
 var j=0;
 do{
     console.log(j+":"+arr5[j]);
     j++
 }while (j<arr5.length);

console.log("=======for of loop");
 //for of loop

    for(var element of arr5){
        console.log(element);
    }

    console.log("======for in loop=========");
    //for in loop
    for(var item in arr5)
    {
        console.log(item);
    }*/


    // //for each method
    // var arr5= [1,2, , ,5, ,7]
    // arr5.forEach((value, index, arr)=>{
    //     console.log(index +": "+value+":"+arr);
    // })

