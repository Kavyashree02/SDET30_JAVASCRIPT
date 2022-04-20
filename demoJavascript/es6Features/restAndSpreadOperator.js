//rest
// function rest(a,b, ...c) {
//     console.log(a,b,c);          //100 200 [ 300, 400, 500 ]
// }
// rest(100,200,300,400,500)

//spread
// let arr1 = ["a","b","c",100]
// function spread(x,y,z,p) {
//     console.log(x,y,z,p);           //a b c 100
// }
// spread(...arr1)

let arr1 = ["a","b","c",100,200,300]
function spread(x,y,z,p) {
    console.log(x,y,z,p);           //a b c 100
}
spread(...arr1)