/**
 * Created by chuan.she on 2015/11/10.
 */
//js�ж�������Ժ�����
//��������
//        var person = {};
//        Object.defineProperty(person,"name",{
//            //���ɸ�������ֵ
//            writable: false,
//            //configurable: false,
//            value: "Nick"
//        });
//        console.log(person.name);
//        person.name = "Greg";
//        console.log(person.name);
//����������,_year��ʾֻ��ͨ�����󷽷�ʹ�õ�����
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
//�����������Լ���ȡ���Ե�����
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
//        //������������_year
//        var descriptor = Object.getOwnPropertyDescriptor(book,"_year");
//        console.log(descriptor.value);
//        console.log(descriptor.configurable);
//        console.log(typeof descriptor.get);
//        //���ڷ���������year
//        var descriptor2 = Object.getOwnPropertyDescriptor(book,"year");
//        console.log(descriptor2.value);
//        console.log(descriptor2.enumerable);
//        console.log(typeof descriptor2.get);
//����ģʽ��ʹ��,�޷��������ʶ�������(������֪�����������)
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
//���캯��ģʽ��ʹ��
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
//        //������ͨ����ʹ��
//        Person("Greg",25,"Teacher");
//        window.sayName();
//        //����һ��������������е���
//        var o = new Object();
//        Person.call(o,"Kristen",25,"Nurse");
//        o.sayName();
//        var person2 = new Person("Greg",25,"Teacher");
//        console.log(person1.sayName == person2.sayName);
//        console.log(person1.constructor == Person);
//ԭ��ģʽ��ʹ��,������ж���ʵ�����������������Ժͷ���
//        function Person(){
//        }
//        Person.prototype.name = "Nick";
//        Person.prototype.age = 29;
//        Person.prototype.job = "Software Engineer";
//        Person.prototype.sayName = function () {
//            console.log(this.name);
//        }
//�ö�����������д����ԭ�Ͷ���
//        var friend = new Person();
//        Person.prototype = {
//            name: "Nick",
//            age: 29,
//            job: " Software Engineer",
//            sayName: function(){
//                console.log(this.name);
//            }
//        };
//        friend.sayName();       //error��ԭ�Ͷ���û��sayName����
//�ж������Ƿ���ԭ�Ͷ��������
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
//���Դ�����ʵ����hasOwnProperty()����true
//        console.log(person1.hasOwnProperty("name"));    //true
//        console.log("name" in person1);     //true
//        console.log(hasPrototypeProperty(person1,"name"));  //false
//        console.log(person1.name);
//delete������ɾ��ʵ������,�ָ��˶�ԭ����name���Ե�����
//        delete person1.name;
//        console.log(person1.hasOwnProperty("name"));  //false
//        console.log("name" in person1);   //true
//        console.log(hasPrototypeProperty(person1,"name"));  //true
//        console.log(person1.name);
//���ؿ�ö�ٵ�ʵ������
//        var keys = Object.keys(Person.prototype);
//        console.log(keys);
//��������ʵ������,�����Ƿ��ö��
//        var keys = Object.getOwnPropertyNames(Person.prototype);
//        console.log(keys);
//for-inѭ������ʵ����ԭ���еĿ�ö������
//        for(var prop in Person.prototype){
//            console.log(prop);
//        }
//���캯��ģʽ��ԭ��ģʽ����,����Ȱ����Լ���ʵ�����ԣ��ֹ���Է��������ã���ʡ�ڴ�
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
//��̬ԭ��ģʽ,ͬʱ�������캯��ģʽ��ԭ��ģʽ���ŵ�
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
//�������캯��ģʽ
//      function SpecialArray(){
//            var values = new Array();
//            //�ù��캯�����յĲ������ֵ
//            values.push.apply(values,arguments);
//            values.toPipedString = function () {
//                return this.join("|");
//            }
//            return values;
//      }
//      var colors = new SpecialArray("red","green","blue");
//      console.log(colors.toPipedString());
//���׹��캯��ģʽ,��ʹ��this��new��������û�й������ԣ�
// ����ͨ��������������˽�г�Ա�������ڰ�ȫ����
//function Person(name,age,job){
//    var o = new Object();
//    //�˴����˽�б����ͺ���
//    o.sayName = function(){
//        console.log(name);
//    }
//    return o;
//}
//var friend = Person("Nick",29,"Software Engineer");
//friend.sayName();
//ԭ������ʹ��
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
////�˴����ö����������ķ�������ԭ�ͷ�����ԭ�ͳ�ΪObject��ʵ����ԭ�������ж�
////SubType.prototype = {
////    getSubValue:function(){
////        return this.subProperty;
////    }
////}
//
//var instance  = new SubType();
//console.log(instance.getSuperValue());  //true
//console.log(instance.constructor);      //SuperType()
////���ַ����ж�ʵ����ԭ�͵Ĺ�ϵ
//console.log(instance instanceof SubType);
//console.log(instance instanceof SuperType);
//console.log(SubType.prototype.isPrototypeOf(instance));
//console.log(instance instanceof Object);

//���ù��캯��
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
//���ù��캯������
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
//��ϼ̳�
//function SuperType(name){
//    this.name = name;
//    this.colors = ["red","green","blue"];
//}
//SuperType.prototype.sayName = function () {
//    console.log(this.name);
//}
////�̳�ʵ�����Բ�����Լ�����
//function SubType(name,age){
//    SuperType.call(this,name);
//    this.age = age;
//}
////�̳�ԭ�ͷ�������������ԭ�ͷ���
//SubType.prototype = new SuperType();
//SubType.prototype.sayAge = function () {
//    console.log(this.age);
//}
////ʵ�������е�colors���Ը���SubType.prototype�е�colors����
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
//ԭ��ʽ�̳�
//function object(o){
//    function F(){};
//    F.prototype = o;
//    return new F();
//}
//��Ϊ���������ԭ�ͻ���
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
//�������ʽ�̳�
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
//    //ֻ����һ��SuperType���캯��,������ԭ����û�ж����name��colors����
//    SuperType.call(this,name);
//    this.age = age;
//}
//inheritPrototype(SubType,SuperType);
//SubType.prototype.sayAge = function(){
//    console.log(this.age);
//}

//�������ԭ��

/*�������еĶ��󣬶���__proto__���ԣ�������Զ�Ӧ�ö����ԭ��
���ں������󣬳���__proto__����֮�⣬����prototype���ԣ�
��һ���������������캯��������ʵ��ʱ���ú�����prototype����ֵ������Ϊԭ�͸�ֵ�����ж���ʵ����Ҳ��������ʵ����__proto__���ԣ�*/

//function Person(name,age){
//    this.name = name;
//    this.age = age;
//    this.getInfo = function(){
//        console.log(this.name+" is "+this.age+" years old");
//    };
//}
//var will = new Person("Will","28");
//console.log(will.__proto__);    //Person{}ԭ��
//console.log(Object.getPrototypeOf(will));   //��ȡԭ�ͱ�׼����
//console.log(will.constructor);  //Person(name,age)���캯��
//
//Person.prototype.MaxNumber = 9999;
//Person.__proto__.MinNumber = -9999;
//console.log(will.MaxNumber);    //9999
//console.log(will.MinNumber);    //undefined

//ʹ�÷�װ��ʵ�ּ̳�
function extend(Sub,Sup){
    //Sub��ʾ���࣬Sup��ʾ����
    // ���ȶ���һ���պ���
    var F = function(){};

    // ���ÿպ�����ԭ��Ϊ�����ԭ��
    F.prototype = Sup.prototype;

// ʵ�����պ��������ѳ���ԭ�����ô��ݸ�����
    Sub.prototype = new F();

    // ��������ԭ�͵Ĺ�����Ϊ��������
    Sub.prototype.constructor = Sub;

    // �������б��泬���ԭ��,���������볬�����
    Sub.sup = Sup.prototype;

    if(Sup.prototype.constructor === Object.prototype.constructor) {
        // ��ⳬ��ԭ�͵Ĺ������Ƿ�Ϊԭ������
        Sup.prototype.constructor = Sup;
    }
}
//���Դ������£�
// �������Ƕ���2����A����B������Ŀ����ʵ��B�̳���A
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
// ���캯��B
function B(x){
    A.call(this,x); // �̳й��캯��A�е��������Լ�����
}
extend(B,A);  // B�̳���A
var b = new B(11);
console.log(b.getX()); // 11
console.log(b.add());  // 22
console.log(b.mul());  // 121

