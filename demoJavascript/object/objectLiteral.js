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


//accessing the properties ====>by dot notation(.) & by bracket notation[]
//by using dot notation(.)

// console.log(person.YOE);
// console.log(person.fname);
// console.log(person.introduce());

//by using bracket notation([])

// console.log(person["skillset"]);
// console.log(person["bioData"]);

// for (var property in person) {
//     if (Object.hasOwnProperty.call(person, property)) {
//        console.log(person[property]);
        
//     }
// }

// console.log(person.bioData.address);
var a=person.skillset[1];
console.log(a);

//var flag = false
// for(i=0;i<person.skillset.length;i++)
// if (person.skillset[i] =="selenium") {
//     console.log("contains selenium");
//     flag = true;
//     break;    
// }
// /*else{
//     console.log("does not contain");
// }*/
// if (flag=false) {
//     console.log("does not contain");
// }
