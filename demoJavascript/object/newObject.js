var car = new  Object()
car.brand = "TOYOTA"
car.model = "Land Cruser"
car.color = "white"
car.spec = ["2.5l turbocharged engine", "250BHP", "500Nm"]
car.drive = function () {
    console.log("travel");
    }

    car.brochure = {brand : "TOYOTA",
         model : "Land Cruser",
         color : "whitePink",
         spec : ["2.5l turbocharged engine", "250BHP", "500Nm"],
         drive : function () {
        console.log("travel");
        }}
    
        // console.log(car);
        console.log(car.brochure);

        