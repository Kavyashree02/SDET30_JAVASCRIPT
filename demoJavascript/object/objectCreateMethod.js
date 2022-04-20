var person = {
    fname : "kavyashree",
    lname : "S",
    skillset : ["javascript", "java", "api", "selenium"],
    YOE : 3,
    introduce : function()
    {
        console.log("hello all myself" + this.fname +" "+ this.lname);
    },
    bioData : {fname : "kavyashree",
    address : "INDIA",
    lname : "S",
    skillset : ["javascript", "java", "api", "selenium"],
    YOE : 3,
    introduce : function()
    {
        console.log("hello all myself" + this.fname +" "+ this.lname);
    }

    }
}

var person2 = Object.create(person);
// console.log(person);
person2.fname = "xyz";
person2.lname = "pqr";
console.log("===============================");
console.log(person2);           //{ fname: 'xyz', lname: 'pqr' }

// for(var property in person2)
// {
//     if(person2.hasOwnProperty.call(person2, property)){
//         const element = person2[property];
//         console.log(element);
//     }
//    console.log(person2[property]);
// }

// var a = new Number(3)
// console.log(a);