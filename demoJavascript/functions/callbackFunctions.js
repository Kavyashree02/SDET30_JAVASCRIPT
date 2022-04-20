function normal(externalFunction) {
    externalFunction()
    console.log("i am a normal function");    
}

function callBack() {
    console.log("i am a callback function");    
}
normal(callBack)

// function ecommerce(status) {
//     if (status()=="paymentSuccessful") {
//         console.log("product booked successfully");
//        }
//    else{
//        console.log("insufficient balance");
//    }
// }
// //    ecommerce(function paymentStatus(){
// //        return "paymentSuccessful"
// //    })
   

//    ecommerce(paymentStatus)

//    function paymentStatus()
//    {
//        return "paymentSuccessful"
//    }

   