function Chestnut (name,price,origin,weight){
    this.name = name,
    // this.__proto__ = {} js自动帮你加好
    this.price = price,
    this.origin = origin,
    this.weight = weight
    this.printName = function(){
        console.log("this is "+ this,name)
    }
}

Chestnut.prototype.printName2 = function(){
    console.log("this is Chestnut prototype")
}
let che1 = new Chestnut("大栗子",20,"江西",12)
che1.printprice = function(){
    console.log("this is price" + this.price)
}
che1.printprice()
console.log(che1.__proto__)
console.log(Chestnut.prototype)

let obj1 = new Object({});
obj1.name = "张三"
console.log(obj1.__proto__.__proto__)



// function Object2(){
//     this.__proto__ = Object2.prototype2 
// }
// Object2.prototype2 ={
//     __proto__:null
// } 

// let obj1 = new Object2()
// console.log(obj1.__proto2__.__proto2__)
// function pear(name){
//     return "this is "+`${nmae}`//模板字符串
// }
// console.log(pear("大桃子"))

let str = 'return' + '`我是 ${name}`';
let func = new Function('name',str)
console.log(func("大桃子"))

function func2(name){
    return "我是" + name
}