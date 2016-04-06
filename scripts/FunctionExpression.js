/**
 * Created by chuan.she on 2015/11/17.
 */
//闭包的形成
//function createComparisonFunction(propertyName){
//    return function(object1,object2){
//        var value1 = object1[propertyName];
//        var value2 = object2[propertyName];
//        if(value1 < value2){
//            return -1;
//        }else if(value1 > value2){
//            return  1;
//        }else{
//            return  0;
//        }
//    };
//}
//var compare = createComparisonFunction("name");
////虽然createComparisonFunction函数已经执行完毕,但其活动对象
////仍然在内存中，存在于返回的匿名函数作用域中,形成闭包
//var result = compare({name:"Nick"},{name:"Greg"});
////释放除全局环境之外的所有作用域
//compare = null;
//闭包只能取得包含函数中变量的最后一个值
//function createFunctions(){
//    var result = new Array();
//    for(var i=0;i<10;i++){
//        result[i] = function(){
//            return i;
//        };
//    }
//    return result;
//}
//var p = createFunctions();
//for(var i = 0;i< p.length;i++){
//    //此处形成闭包
//    // 数组包含的是函数的引用,加上双括号表示函数执行结果
//    document.write(p[i]()+"<br/>");
//}
//重写函数将闭包执行结果直接赋值给数组
//function createFunction(){
//    var result = new Array();
//    for(var i=0;i<10;i++){
//        //result[i] = function(num){
//        //    return function(){
//        //        return num;
//        //    };
//        //}(i);
//        //直接将执行结果赋值给数组
//        result[i] = function(){
//            return i;
//        }();
//    }
//    return result;
//}
//var p = createFunction();
//for(var i=0;i< p.length;i++){
//    console.log(p[i]);
//}
//匿名函数的执行环境具有全局性,this对象在中表示window
//可以把this对象保存在一个闭包可以访问的变量that中
//var name = "The Window";
//var object = {
//    name:"My Object",
//    getNameFunc:function(){
//        //var that = this;
//        return function(){
//            return this.name;
//         //   return that.name;
//        };
//    }
//};
//console.log(object.getNameFunc()());
//console.log((object.getNameFunc = object.getNameFunc)()); //The Window
//解决内存泄露的问题
//function assignHandler(){
//    var element = document.getElementById("someElement");
//    //闭包引用element.id的副本，消除循环引用
//    var id = element.id;
//    element.onclick = function(){
//        //console.log(element.id);
//        console.log(id);
//    }
//    //闭包会引用包含函数的整个活动对象,由于引用了变量id
//    // 因此包含函数中仍然存在对element对象的引用
//    element = null;
//}
//Javascrip模仿块级作用域
//function outputNumbers(count){
//    for(var i=0;i < count; i++){
//        console.log(i);
//    }
//    console.log(i);
//}
//私有作用域,适用于临时使用的变量
//function outputNumbers(count){
//    (function(){
//        for(var i=0;i<count;i++){
//            console.log(i);
//        }
//    })();
//    console.log(i); //报错,私有作用域中的变量在执行完之后立即销毁
//}
//构造函数创建私有变量和特权方法
//function Person(name){
//    var age = 29;
//    this.getName = function(){
//        return name;
//    };
//    this.setName = function(value){
//        name = value;
//    }
//}
//var person = new Person("Nick");
//console.log(person.age);    //undefined
//console.log(person.name);   //undefined
//console.log(person.getName());  //Nick
//person.setName("Greg");
//console.log(person.getName());  //Greg
//在私有作用域中使用原型方法创建静态私有变量
//(function(){
//    var name="";
//    //初始化一个未用var声明的变量，会创建一个全局变量
//    Person = function (value) {
//        name = value;
//    };
//    Person.prototype.getName = function(){
//        //return this.name错误
//        return name;
//    };
//    Person.prototype.setName = function(value){
//        name = value;
//    };
//})();
//var person1 = new Person("Nick");
//console.log(person1.getName());
//person1.setName("Greg");
//console.log(person1.getName());
//
//var person2 = new Person("Michael");
//console.log(person1.getName());
//console.log(person2.getName());
//模块模式为单例创建私有变量和特权方法
//主要用于对单例进行某些初始化,同时又需要维护其私有变量
//var application = function(){
//    //私有变量和函数
//    var components = new Array();
//    //初始化
//    components.push(new Object());
//    /*
//    增强模块模式,适用于单例必须是某种对象的实例
//    var app = new BaseComponent();
//    app.getComponent = function(){
//    }
//    app.registerComponent = function(){
//    }
//    return app;
//     */
//    //公共,返回一个对象字面量形式的对象
//    return{
//        getComponentCount: function () {
//            return components.length;
//        },
//        registerComponent: function (component) {
//            if(typeof component == "object"){
//                components.push(component);
//            }
//        }
//    };
//
//}();
//var array = new Array();
//application.registerComponent(array);
//console.log(application.getComponentCount());

//闭包实例
//function f(x){
//    var arrs = [];
//    for(var i=0;i< x.length;i++){
//        var temp = x[i];
//        arrs.push(function(){
//           console.log(temp+' '+x[i]);
//        });
//    }
//    return arrs;
//}
//function e(){
//    var ar = f(['a','b','c']);
//    var iLen = ar.length;
//    for(var j=0;j<iLen;j++){
//        ar[j]();    //闭包调用时temp='c',i=3不变
//    }
//}
//e();
//解决闭包的缺陷我们可以再在外面包一层函数，每次循环的时候，把temp参数和i参数传递进去
function f(x){
    var arrs = [];
    for(var i=0;i< x.length;i++){
        var temp = x[i];
        (function(temp,i){
            arrs.push(function(){
                console.log(temp+' '+x[i]);
            });
        })(temp,i);
    }
    return arrs;
}
function e(){
    var ar = f(['a','b','c']);
    var iLen = ar.length;
    for(var j=0;j<iLen;j++){
        ar[j]();    //闭包调用时temp='c',i=3不变
    }
}
e();