//console.log(window === this);

console.log(a); //referenceError : z is not defined
var a
a=100;
console.log(a);

sample()
function sample() {
    console.log("i am a sample function");    
}
sample()

//fun1()
var fun1= function()
{
    console.log("this is function expression");
    
    demo()
    function demo() {
        var b=20;
        console.log(b);
        console.log("this is function function");
        sample()
        
    }
}

fun1()
