function Haw(nmae,price,origin){
    this.name = nmae;
    this.price = price;
    this.origin = origin;
    this.printName = function(){
        console.log("this is Haw")
    }
}
// Haw()
 
Haw.prototype.printprice = function(){
    console.log("protoytpe print price")
}
var h1 = new Haw("山楂",2,"河南省");
h1.printName()
h1.printprice()
Haw.printprice()