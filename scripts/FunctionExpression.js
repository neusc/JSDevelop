/**
 * Created by chuan.she on 2015/11/17.
 */
//�հ����γ�
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
////��ȻcreateComparisonFunction�����Ѿ�ִ�����,��������
////��Ȼ���ڴ��У������ڷ��ص�����������������,�γɱհ�
//var result = compare({name:"Nick"},{name:"Greg"});
////�ͷų�ȫ�ֻ���֮�������������
//compare = null;
//�հ�ֻ��ȡ�ð��������б��������һ��ֵ
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
//    //�˴��γɱհ�
//    // ����������Ǻ���������,����˫���ű�ʾ����ִ�н��
//    document.write(p[i]()+"<br/>");
//}
//��д�������հ�ִ�н��ֱ�Ӹ�ֵ������
//function createFunction(){
//    var result = new Array();
//    for(var i=0;i<10;i++){
//        //result[i] = function(num){
//        //    return function(){
//        //        return num;
//        //    };
//        //}(i);
//        //ֱ�ӽ�ִ�н����ֵ������
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
//����������ִ�л�������ȫ����,this�������б�ʾwindow
//���԰�this���󱣴���һ���հ����Է��ʵı���that��
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
//����ڴ�й¶������
//function assignHandler(){
//    var element = document.getElementById("someElement");
//    //�հ�����element.id�ĸ���������ѭ������
//    var id = element.id;
//    element.onclick = function(){
//        //console.log(element.id);
//        console.log(id);
//    }
//    //�հ������ð������������������,���������˱���id
//    // ��˰�����������Ȼ���ڶ�element���������
//    element = null;
//}
//Javascripģ�¿鼶������
//function outputNumbers(count){
//    for(var i=0;i < count; i++){
//        console.log(i);
//    }
//    console.log(i);
//}
//˽��������,��������ʱʹ�õı���
//function outputNumbers(count){
//    (function(){
//        for(var i=0;i<count;i++){
//            console.log(i);
//        }
//    })();
//    console.log(i); //����,˽���������еı�����ִ����֮����������
//}
//���캯������˽�б�������Ȩ����
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
//��˽����������ʹ��ԭ�ͷ���������̬˽�б���
//(function(){
//    var name="";
//    //��ʼ��һ��δ��var�����ı������ᴴ��һ��ȫ�ֱ���
//    Person = function (value) {
//        name = value;
//    };
//    Person.prototype.getName = function(){
//        //return this.name����
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
//ģ��ģʽΪ��������˽�б�������Ȩ����
//��Ҫ���ڶԵ�������ĳЩ��ʼ��,ͬʱ����Ҫά����˽�б���
//var application = function(){
//    //˽�б����ͺ���
//    var components = new Array();
//    //��ʼ��
//    components.push(new Object());
//    /*
//    ��ǿģ��ģʽ,�����ڵ���������ĳ�ֶ����ʵ��
//    var app = new BaseComponent();
//    app.getComponent = function(){
//    }
//    app.registerComponent = function(){
//    }
//    return app;
//     */
//    //����,����һ��������������ʽ�Ķ���
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

//�հ�ʵ��
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
//        ar[j]();    //�հ�����ʱtemp='c',i=3����
//    }
//}
//e();
//����հ���ȱ�����ǿ������������һ�㺯����ÿ��ѭ����ʱ�򣬰�temp������i�������ݽ�ȥ
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
        ar[j]();    //�հ�����ʱtemp='c',i=3����
    }
}
e();