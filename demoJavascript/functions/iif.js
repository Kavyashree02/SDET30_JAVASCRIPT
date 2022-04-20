/*(function(a,b){
    console.log(a+b);
})(3,5)*/


/*var sum = (function(a,b){
    console.log(a+b);
})(3,5)*/

var sum = (function(a,b){    // anonymous function
    console.log(arguments);
    return(a+b);
})(3,5,7, true, undefined,null)

console.log(sum);
