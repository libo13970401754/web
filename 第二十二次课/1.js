// +function (){
//     console.log("this is pitaya")
// }()

console.log((function(x){
    console.log("this is pitaya 2")
    x.printName = function(){
        console.log("this is print name")
        return 233
    }
    return x() + x.printName()
})(()=>{console.log("this is arrow function");return 777})
)
//node.js 浏览器v8 
