class mobile {
    constructor(brand, model, ram, rom, price)
    {
        this.brand = brand
        this.model = model
        this.ram = ram
        this.rom = rom
        this.price = price
    }
}
var m1 = new mobile("redmi", "note7Pro", 4 , 64, 14000)
console.log(m1);
m1.color = "white"
m1.screensize = 5.5
console.log(m1);