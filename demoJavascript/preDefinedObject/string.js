var str = " Hi am Kavyashree "

// console.log(str.length);    //17

//trim is used to trim the spaces in starting and ending of a string
// console.log(str.trim()+" "+str.trim().length);       //Hi am Kavyashree 16

//to get a string in a string => we need to specify start position and length(n-10=>10-1)
//  console.log(str.substring(6,-3));
//  console.log(str.substring(1,10));     //Hi am Kavya

// console.log(str.slice(2,5));          // Hi am Kavya

//to check whether the string is starting with particular alphabet
// console.log(str.startsWith("K",7));        //true

//to replace the given string
//console.log(str.replace("am", "i am"));         // Hi i am Kavyashree 

//to repeat the string 
//console.log(str.repeat(3));    //Hi am Kavyashree  Hi am Kavyashree  Hi am Kavyashree

//to compare the given string whether it is matching or not
// console.log(str.localeCompare(" Hi"));  //1
// console.log(str.localeCompare("Hi"));   //-1
// console.log(str.localeCompare(" Hi am Kavyashree "));  //0

// var a="a"
// var b="a"
// if (0==false) {
//     console.log("equal");
// }else
// {
//     console.log("not equal");
// }