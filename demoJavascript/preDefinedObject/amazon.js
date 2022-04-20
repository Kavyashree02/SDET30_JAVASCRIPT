// var amazon =[{productName : "iphone", productPrice : 10000},
//               {productName : "ipod", productPrice : 5000},
//               {productName : "mac", productPrice : 15000}
// ]



//get the sum product price
//console.log(amazon.length); 

// console.log(amazon.reduce((a,b)=>{
//     console.log((b.productPrice));
//     return a+b.productPrice
// },0));

//using forof loop
// var sum=0
// for (var product of amazon) {
//     console.log(product);
//     var price = product.productPrice
//     sum = sum+price    
// }

//console.log(sum);

//using foreach 
// sum=0
// amazon.forEach((product) => {
//     sum =sum +product.productPrice 
// });
// console.log("total sum of thr product is " +sum);


//using for loop
// var sum=0
// for (let index = 0; index < amazon.length; index++) {
//     sum = sum + amazon[index].productPrice
//     console.log(sum);
//    }
//    console.log("total sum of thr product is " +sum);

//["iphone", "ipod", "mac"]
//[10000,5000,15000]

//using forof loop
// var product=[]
// for (const element of amazon) {
//      product.push(element.productPrice) 
//     }
// console.log(product);

// var product=[]
// for (const element of amazon) {
//      product.push(element.productName) 
//     }
// console.log(product);

//using reduce



var citizen = [{name : "abc", address : "INDIA"},
{name : "def", address : "US"},
{name : "ghi", address : "EUROPE"},
{name : "jkl", address : "JAPAN"},
{name : "mno", address : "INDIA"}
]

//using reduce
// console.log(citizen.reduce((count, people)=>{
//     if(people.address == "INDIA")
//     {
//         count= count+1
//     }
//     return count
// },0));

// //using filter
var IndiansArmy = citizen.filter((people)=>{
    return people.address=="INDIA"
});

IndiansArmy.forEach((item)=>{
    console.log(item.name);
})



