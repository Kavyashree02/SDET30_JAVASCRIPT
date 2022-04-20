console.log(this);       //window

console.log("=============inside function=========");
function sample() {
    console.log(this);
    }

    sample()
    console.log("============inside object=========");

    var person = {
        fname : "kavyashree",
        lname : "S",
        introduce : function () {
            console.log(this);        //person object
            var self = this
            function greet(){
                console.log(self);
                
            }
            greet()
        }
    }
    person.introduce()