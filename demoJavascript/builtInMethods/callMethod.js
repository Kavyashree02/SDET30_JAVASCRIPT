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
        console.log(this.fname + " "+ this.lname);
    } 
}

function greeting(greet1, greet2) {
    console.log(greet1+" "+this.fname + " "+ this.lname+" "+ greet2);

}

// person1.introduce()
// console.log(person1.fname);
//person2.fullname()

//person2.fullname.call(person1)
// person1.introduce.call(person2)    //function barrowing 
greeting.call(person1, "good morning", "welcome")
// greeting.call(person2,"good morning", "welcome")