/**
 * Created by chuan.she on 2015/11/10.
 */
//js中对象的特性和属性
//数据属性
//        var person = {};
//        Object.defineProperty(person,"name",{
//            //不可更改属性值
//            writable: false,
//            //configurable: false,
//            value: "Nick"
//        });
//        console.log(person.name);
//        person.name = "Greg";
//        console.log(person.name);
//访问器属性,_year表示只能通过对象方法使用的属性
//        var book = {
//            _year: 2004,
//            edition:1
//        };
//        Object.defineProperty(book,"year",{
//           get: function () {
//               return this._year;
//           },
//           set: function(newValue){
//               if(newValue > 2004){
//                   this._year = newValue;
//                   this.edition += newValue - 2004;
//               }
//           }
//        });
//        book.year = 2005;
//        console.log(book.edition);
//定义多个属性以及读取属性的特性
//        var book = {};
//        Object.defineProperties(book,{
//            _year :{
//                value:2004
//            },
//            edition:{
//                value:1
//            },
//            year:{
//                get: function () {
//                    return this._year;
//                },
//                set: function (newValue) {
//                    if(newValue > 2005){
//                        this._year = newValue;
//                        this.edition += newValue - 2004;
//                    }
//                }
//            }
//
//        });
//        //对于数据属性_year
//        var descriptor = Object.getOwnPropertyDescriptor(book,"_year");
//        console.log(descriptor.value);
//        console.log(descriptor.configurable);
//        console.log(typeof descriptor.get);
//        //对于访问器属性year
//        var descriptor2 = Object.getOwnPropertyDescriptor(book,"year");
//        console.log(descriptor2.value);
//        console.log(descriptor2.enumerable);
//        console.log(typeof descriptor2.get);
//工厂模式的使用,无法解决对象识别的问题(即怎样知道对象的类型)
//function createPerson(name,age,job){
//    var o = new Object();
//    o.name = name;
//    o.age = age;
//    o.job = job;
//    o.sayName = function () {
//        console.log(this.name);
//    };
//    return o;
//}
//var person1 = createPerson("Nick",29,"Software Engineer");
//console.log(person1 instanceof createPerson);  //false
//构造函数模式的使用
//        function Person(name,age,job){
//            this.name = name;
//            this.age = age;
//            this.job = job;
//            this.sayName = function(){
//                console.log(this.name);
//            };
//        }
//
//        var person1 = new Person("Nick",29,"Software Engineer");
//        person1.sayName();
//        //当做普通函数使用
//        Person("Greg",25,"Teacher");
//        window.sayName();
//        //在另一个对象的作用域中调用
//        var o = new Object();
//        Person.call(o,"Kristen",25,"Nurse");
//        o.sayName();
//        var person2 = new Person("Greg",25,"Teacher");
//        console.log(person1.sayName == person2.sayName);
//        console.log(person1.constructor == Person);
//原型模式的使用,解决所有对象实例共享它包含的属性和方法
//        function Person(){
//        }
//        Person.prototype.name = "Nick";
//        Person.prototype.age = 29;
//        Person.prototype.job = "Software Engineer";
//        Person.prototype.sayName = function () {
//            console.log(this.name);
//        }
//用对象字面量重写整个原型对象
//        var friend = new Person();
//        Person.prototype = {
//            name: "Nick",
//            age: 29,
//            job: " Software Engineer",
//            sayName: function(){
//                console.log(this.name);
//            }
//        };
//        friend.sayName();       //error，原型对象没有sayName方法
//判断属性是否是原型对象的属性
//        function hasPrototypeProperty(Object,name){
//            return !Object.hasOwnProperty(name) && (name in Object);
//        }
//        var person1 = new Person();
//        person1.sayName();
//        var person2 = new Person();
//        person2.sayName();
//        console.log(person1.sayName == person2.sayName);
//        console.log(Person.prototype.isPrototypeOf(person1));
//        console.log(Object.getPrototypeOf(person1) == Person.prototype);
//        person1.name = "shec";
//属性存在于实例中hasOwnProperty()返回true
//        console.log(person1.hasOwnProperty("name"));    //true
//        console.log("name" in person1);     //true
//        console.log(hasPrototypeProperty(person1,"name"));  //false
//        console.log(person1.name);
//delete操作符删除实例属性,恢复了对原型中name属性的链接
//        delete person1.name;
//        console.log(person1.hasOwnProperty("name"));  //false
//        console.log("name" in person1);   //true
//        console.log(hasPrototypeProperty(person1,"name"));  //true
//        console.log(person1.name);
//返回可枚举的实例属性
//        var keys = Object.keys(Person.prototype);
//        console.log(keys);
//返回所有实例属性,不论是否可枚举
//        var keys = Object.getOwnPropertyNames(Person.prototype);
//        console.log(keys);
//for-in循环返回实例或原型中的可枚举属性
//        for(var prop in Person.prototype){
//            console.log(prop);
//        }
//构造函数模式和原型模式混用,对象既包含自己的实例属性，又共享对方法的引用，节省内存
//        function Person(name,age,job){
//            this.name = name;
//            this.age = age;
//            this.job = job;
//            this.friends = ["Nick","Court"];
//        }
//        Person.prototype = {
//            constructor:Person,
//            sayName: function () {
//                console.log(this.name);
//            }
//        }
//        var person1 = new Person("Nich",29,"Software Engineer");
//        var person2 = new Person("Greg",27,"Doctor");
//        person1.friends.push("Van");
//        console.log(person1.friends);
//        console.log(person2.friends);
//        console.log(person1.friends === person2.friends);
//        console.log(person1.sayName === person2.sayName);
//动态原型模式,同时包含构造函数模式和原型模式的优点
//      function Person(name,age,job){
//                this.name = name;
//                this.age = age;
//                this.job = job;
//
//                if(typeof this.sayName != "function"){
//                    Person.prototype.sayName = function(){
//                        console.log(this.name);
//                    }
//                };
//        }
//        var friend = new Person("Nich",29,"Software Engineer");
//        friend.sayName();
//寄生构造函数模式
//      function SpecialArray(){
//            var values = new Array();
//            //用构造函数接收的参数添加值
//            values.push.apply(values,arguments);
//            values.toPipedString = function () {
//                return this.join("|");
//            }
//            return values;
//      }
//      var colors = new SpecialArray("red","green","blue");
//      console.log(colors.toPipedString());
//稳妥构造函数模式,不使用this和new操作符，没有公共属性，
// 不能通过其他方法访问私有成员，适用于安全环境
//function Person(name,age,job){
//    var o = new Object();
//    //此处添加私有变量和函数
//    o.sayName = function(){
//        console.log(name);
//    }
//    return o;
//}
//var friend = Person("Nick",29,"Software Engineer");
//friend.sayName();
//原型链的使用
//function SuperType(){
//    this.property = true;
//}
//SuperType.prototype.getSuperValue = function () {
//    return this.property;
//}
//function SubType(){
//    this.subProperty = false;
//}
//SubType.prototype = new SuperType();
//SubType.prototype.getSubValue = function(){
//    return this.subProperty;
//}
////此处采用对象字面量的方法增加原型方法，原型成为Object的实例，原型链被切断
////SubType.prototype = {
////    getSubValue:function(){
////        return this.subProperty;
////    }
////}
//
//var instance  = new SubType();
//console.log(instance.getSuperValue());  //true
//console.log(instance.constructor);      //SuperType()
////两种方法判断实例和原型的关系
//console.log(instance instanceof SubType);
//console.log(instance instanceof SuperType);
//console.log(SubType.prototype.isPrototypeOf(instance));
//console.log(instance instanceof Object);

//借用构造函数
//function SuperType(){
//    this.colors = ["red","green","blue"];
//}
//function SubType(){
//    SuperType.call(this);
//}
//var instance1 = new SubType();
//instance1.colors.push("black");
//console.log(instance1.colors);
//
//var instance2 = new SubType();
//console.log(instance2.colors);
//借用构造函数传参
//function SuperType(name){
//    this.name = name;
//}
//function SubType(){
//    SuperType.call(this,"Nick");
//    this.age = 29;
//}
//var instance = new SubType();
//console.log(instance.name);
//console.log(instance.age);
//组合继承
//function SuperType(name){
//    this.name = name;
//    this.colors = ["red","green","blue"];
//}
//SuperType.prototype.sayName = function () {
//    console.log(this.name);
//}
////继承实例属性并添加自己属性
//function SubType(name,age){
//    SuperType.call(this,name);
//    this.age = age;
//}
////继承原型方法并定义自身原型方法
//SubType.prototype = new SuperType();
//SubType.prototype.sayAge = function () {
//    console.log(this.age);
//}
////实例属性中的colors属性覆盖SubType.prototype中的colors属性
//var instance1 = new SubType("Nick",29);
//instance1.colors.push("black");
//console.log(instance1.colors);
//instance1.sayName();
//instance1.sayAge();
//
//var instance2 = new SubType("Greg",27);
//console.log(instance2.colors);
//instance2.sayName();
//instance2.sayAge();
//原型式继承
//function object(o){
//    function F(){};
//    F.prototype = o;
//    return new F();
//}
//作为其他对象的原型基础
//var person = {
//    name:"Nick",
//    friends:['Shelby','Court','van']
//};
//
//var anotherPerson = object(person);
//anotherPerson.name = "Greg";
//anotherPerson.friends.push("Bob");
//console.log(anotherPerson.name);
//console.log(anotherPerson.friends);
//
//var newPerson = object(person);
//newPerson.name = "Jack";
//newPerson.friends.push("Dan");
//console.log(newPerson.name);
//console.log(newPerson.friends);
//寄生组合式继承
//function inheritPrototype(subType,superType){
//    var prototype = object(superType.prototype);
//    prototype.constructor = subType;
//    subType.prototype = prototype;
//}
//function SuperType(name){
//    this.name = name;
//    this.colors = ["red","green","blue"];
//}
//SuperType.prototype.sayName = function(){
//    console.log(this.name);
//}
//function SubType(name,age){
//    //只调用一次SuperType构造函数,子类型原型中没有多余的name和colors属性
//    SuperType.call(this,name);
//    this.age = age;
//}
//inheritPrototype(SubType,SuperType);
//SubType.prototype.sayAge = function(){
//    console.log(this.age);
//}

//彻底理解原型

/*对于所有的对象，都有__proto__属性，这个属性对应该对象的原型
对于函数对象，除了__proto__属性之外，还有prototype属性，
当一个函数被用作构造函数来创建实例时，该函数的prototype属性值将被作为原型赋值给所有对象实例（也就是设置实例的__proto__属性）*/

//function Person(name,age){
//    this.name = name;
//    this.age = age;
//    this.getInfo = function(){
//        console.log(this.name+" is "+this.age+" years old");
//    };
//}
//var will = new Person("Will","28");
//console.log(will.__proto__);    //Person{}原型
//console.log(Object.getPrototypeOf(will));   //获取原型标准方法
//console.log(will.constructor);  //Person(name,age)构造函数
//
//Person.prototype.MaxNumber = 9999;
//Person.__proto__.MinNumber = -9999;
//console.log(will.MaxNumber);    //9999
//console.log(will.MinNumber);    //undefined

//使用封装类实现继承
function extend(Sub,Sup){
    //Sub表示子类，Sup表示超类
    // 首先定义一个空函数
    var F = function(){};

    // 设置空函数的原型为超类的原型
    F.prototype = Sup.prototype;

// 实例化空函数，并把超类原型引用传递给子类
    Sub.prototype = new F();

    // 重置子类原型的构造器为子类自身
    Sub.prototype.constructor = Sub;

    // 在子类中保存超类的原型,避免子类与超类耦合
    Sub.sup = Sup.prototype;

    if(Sup.prototype.constructor === Object.prototype.constructor) {
        // 检测超类原型的构造器是否为原型自身
        Sup.prototype.constructor = Sup;
    }
}
//测试代码如下：
// 下面我们定义2个类A和类B，我们目的是实现B继承于A
function A(x) {
    this.x = x;
    this.getX = function(){
        return this.x;
    }
}
A.prototype.add = function(){
    return this.x + this.x;
}
A.prototype.mul = function(){
    return this.x * this.x;
}
// 构造函数B
function B(x){
    A.call(this,x); // 继承构造函数A中的所有属性及方法
}
extend(B,A);  // B继承于A
var b = new B(11);
console.log(b.getX()); // 11
console.log(b.add());  // 22
console.log(b.mul());  // 121

