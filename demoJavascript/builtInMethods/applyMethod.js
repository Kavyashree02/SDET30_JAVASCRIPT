//apply() is similar to call() but mandatory fileds should be passed in the form of an array


var person1 = {
    fname : "kavyashree",
    lname : "S",
    introduce : function(){
        console.log("hello all myself " + this.fname +" "+ this.lname);
    }
}

var person2 = {
    fname : "unknown",
    lname : "unknown",
    fullname :  function () {
        console.log(this.fname+" "+ this.lname);
    } 
}

function greeting(greet1, greet2) {
    console.log(greet1+" "+this.fname +" "+ this.lname+" "+ greet2);

}

greeting.apply(person1, ["hello good morning", "welcome"])

person1.introduce.apply(person2)

