/**
 * Created by chuan.she on 2015/11/10.
 */
//function createComparisonFunction(propertyName){
// return function(object1,object2){
//  var value1 = object1[propertyName];
//  var value2 = object2[propertyName];
//  if(value1 < value2){
//   return -1;
//  }else if(value1 > value2){
//   return 1;
//  }else{
//   return 0;
//  }
// };
//}
//
//var data = [{name:"Zar",age:28},{name:"Nick",age:29}];
//console.log(createComparisonFunction("name"));
//data.sort(createComparisonFunction("name"));
//console.log(data[0].name);
//data.sort(createComparisonFunction("age"));
//console.log(data[0].name);

//        var stringValue = "hello world ijiijeidj fdfafdfesd";
//        var positions = new Array();
//        var pos = stringValue.indexOf("e");
//        while(pos > -1){
//            positions.push(pos);
//            pos = stringValue.indexOf("e",pos+1);
//        }
//        console.log(positions);
//������ʽѭ�������ַ���
//        var text = "cat,bat,sat,fat";
//        var pattern = /.at/g;
//        while(pattern.lastIndex < text.length){
//            var matches = pattern.exec(text);
//            //var matches = text.match(pattern);
//            console.log(matches.index);
//            console.log(matches[0]);
//            console.log(pattern.lastIndex);
//        }
//replace()��������ַ����е������ַ�
/*function htmlEscape(text){
 return text.replace(/[<>"&]/g,function(match,pos,originalText){
 switch (match){
 case "<":
 return "&lt;"
 case ">":
 return "&gt;";
 case "&":
 return "&amp;";
 case "\"":
 return "&quot;";
 }
 });

 }
 console.log(htmlEscape("<p class=\"greeting\">Hello world!</p>"));*/
//encodeURL��encodeRULComponent������
//        var url = "http://www.wrox.com/illegal value.htm#start";
//        console.log(encodeURI(url));
//        console.log(encodeURIComponent(url));
//        eval("console.log('hi')");
//ע�����ַ�ʽ�Ĳ��
//        var global = function(){
//            return this;
//        };
//�˴�globalΪ����������������,global()Ϊִ�к�����
//        console.log(global());
//
//        var global = function(){
//            return this;
//        }();
//�˴�globalΪ����ִ�з��ص�ֵ
//        console.log(global);
//�����������Сֵ
//        var values = [1,2,3,4,5,6,7,8];
//        var max = Math.max.apply(Math,values);
//        console.log(max);
//�����������������ֵ֮��������
//        var num = Math.floor(Math.random()*9+2);
//        console.log(num);
//        function selectFrom(lowerValue,upperValue){
//            var choices = upperValue - lowerValue;
//            return Math.floor(Math.random()*choices + lowerValue);
//        }
//���ѡ�������е�һ��ֵ
//        console.log(selectFrom(2,10));
//        var colors = ["red","green","blue","black","gray","yellow"];
//        var color = colors[selectFrom(0,colors.length-1)];
//        console.log(color);

//ƥ���һ��'bat'��'cat',�����ִ�Сд
//var pattern1 = /[bc]at/i;
//ƥ���һ��'[bc]at',�����ִ�Сд
//var pattern2 = /\[bc\]at/i;
//ƥ��������'at'��β�����ַ����
//var pattern3 = /.at/gi;
//ƥ������'.at',�����ִ�Сд
//var pattern4 = /\.at/gi;
