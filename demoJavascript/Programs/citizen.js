var citizen=[
    {name :"abc", address : "INDIA"},
    {name :"def", address : "USA"},
    {name :"ghi", address : "EUROPE"},
    {name :"jkl", address : "JAPAN"},
    {name :"mno", address : "INDIA"}    
]

//Get output in the form of object ---------->INDIA :2, USA : 1, EUROPE :1, JAPAN:1

// console.log(citizen.reduce((countObject, item)=>{
//     if(countObject[item.address]){
//         //countObject[item.address]++             //here countobject is a  ref object
//         countObject[item.address] = countObject[item.address]+1
//     }
//     else
//     {
//         countObject[item.address]=1
//             }
//             return countObject

// },{}));            //here decalre an empty object ==>{}

// var ref_object = {}
// ref_object.India = 1
// console.log(ref_object)

//using reduce method
console.log(citizen.reduce((count, people)=>{
    if(people.address == "INDIA")
    {
        count = count+1
    }
    return count
},0));

//it will give array(name) of an Indians
var IndiansArray = citizen.filter((people)=>{
    return people.address == "INDIA"
});

IndiansArray.forEach((item)=>{
    console.log(item.name);
})