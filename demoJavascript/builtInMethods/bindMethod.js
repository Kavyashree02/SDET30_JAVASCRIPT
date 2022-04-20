var person1 = {
    fname : "kavyashree",
    lname : "S",
    introduce : function(){
        console.log("hello all myself " + this.fname +""+ this.lname);
    }
}

var person2 = {
    fname : "unknown",
    lname : "unknown",
    fullname :  function () {
        console.log(this.fname + " "+ this.lname);
    } 
}

function greeting(greet1, greet2) {
    console.log(greet1+" "+this.fname + " "+ this.lname+" "+ greet2);

}

var returnedCopy = greeting.bind(person1, "good morning", "welcome")
returnedCopy()            //good morning kavyashree S welcome

// var result = person2.fullname.bind(person1)

///////////////////////////////
// function sum(a,b){
//     return (a+b)
// }
// console.log(sum(2,5));

// var add2 = sum.bind(this, 2)          //function currying
// console.log("sum of the numbers " + add2(5));

// //console.log(Number(true));    //1
// //console.log(Number(false));     //0
// console.log(Number(undefined));     //NaN