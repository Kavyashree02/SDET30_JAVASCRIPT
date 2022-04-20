let arr1=[10,20,30,40,50]
// let x=arr1[2]
// let y=arr1[4]
// console.log(x,y);    //30 50

//array destructuring
//  let[x,y]=arr1
//  console.log(x,y);      //10 20

//skipping values in between
let[a,,b,,]=arr1
 console.log(a,b);             //10 30

//rest parameter
// let[p,q, ...r]= arr1
// console.log(p,q,r);       //10 20 [ 30, 40, 50 ]

//object destruturing
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

//console.log(person.bioData.address);

//object destruturing(normal way)
// // let firstName = person.fname
// // let skills = person.skillset
// // console.log(firstName, skills);   //kavyashree [ 'javascript', 'java', 'api', 'selenium' ]

//object destruturing
let{fname,lname}= person   
console.log(fname,lname);      //kavyashree S

// let {YOE:experience, skillset:technologies}=person
// console.log(experience,technologies);       //3 [ 'javascript', 'java', 'api', 'selenium' ]
