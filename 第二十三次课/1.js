// 闭包
function apple(){
    var number=0;
    return function(){
    console.log(number++)
    }
}
var a = apple()
a()
a()
a()

// 闭包
for(var i =0;i<10;i++){
    (function(i){
    setTimeout(function(){
        console.log("this is"+ i)
    },2000)
    })(i)
}

// 异步
function orange(){
    console.log("this is orange 1")
    setTimeout(function(){  
        console.log("this is orange 2")
        setTimeout(function(){  
            console.log("this is orange 2_1")
        },3000)
    },2000)
    console.log("this is orange 3")
}
orange()


for(let i =0;i<10;i++){
    setTimeout(function(){
        console.log("this is"+ i)
    },2000)
}
