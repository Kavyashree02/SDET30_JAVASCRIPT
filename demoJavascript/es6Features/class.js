class Person{
    constructor(fname, lname, address, email){
        this.fname = fname
        this.lname = lname
        this.address = address
        this.email = email
    }

    //var let const is not allowed inside class
    a=10;  //non-static
    static b = 30;

    //function keyword is not allowed inside class
    display(){        //non static method
        console.log(this.a);  //10
    }
    static sample(){               //static method
        console.log(this.a);     //undefined
        console.log(this.b);    //30
    }

    //to access non static inside static
    static sample1(obj_ref){
        obj_ref.display()  //a=10

    }

    static sample2(){             //static method
        this.sample()
    }

    display2(){
        // to access static inside nonstatic method
        Person.sample()            //undefined, 30 
    }

    }

    let p1 = new Person("kavyashree", "S", "India", "kavyashree@gmail.com")
    let p2 = new Person("dhruthi", "S", "India", "dhruthi@gmail.com")

    // console.log(p1.fname);  //kavyashree
    // console.log(p1.a);     //10
    // console.log(p1.b);        //undefined

    //p1.display()  //to access non static method
    //p1.sample()      //TypeError: p1.sample is not a function

    //to access static methods use classname.methodname
    //Person.sample()     //undefined, 30  

    //Person.sample1(p1)     //10

    //p1.display2()       //undefined, 30
    

    class B extends Person{
        displayParentMethod(){
            //this.display()   //10
           // console.log(super.a);    //10
            //console.log(this.a);          //10
             super.display()
        }

        displayParentMethod(c){
            console.log(c);      //100
        }
    }
    
    let inst_b = new B()
    inst_b.display()           //10
    inst_b.displayParentMethod(100)       //100

    //2 ways of doing export
    //module.exports = B         //to export entire class

    module.exports = inst_b