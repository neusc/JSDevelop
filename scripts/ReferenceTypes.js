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
//正则表达式循环遍历字符串
//        var text = "cat,bat,sat,fat";
//        var pattern = /.at/g;
//        while(pattern.lastIndex < text.length){
//            var matches = pattern.exec(text);
//            //var matches = text.match(pattern);
//            console.log(matches.index);
//            console.log(matches[0]);
//            console.log(pattern.lastIndex);
//        }
//replace()函数替代字符串中的特殊字符
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
//encodeURL和encodeRULComponent的区别
//        var url = "http://www.wrox.com/illegal value.htm#start";
//        console.log(encodeURI(url));
//        console.log(encodeURIComponent(url));
//        eval("console.log('hi')");
//注意两种方式的差别
//        var global = function(){
//            return this;
//        };
//此处global为函数名即函数引用,global()为执行函数体
//        console.log(global());
//
//        var global = function(){
//            return this;
//        }();
//此处global为函数执行返回的值
//        console.log(global);
//求数组最大最小值
//        var values = [1,2,3,4,5,6,7,8];
//        var max = Math.max.apply(Math,values);
//        console.log(max);
//随机产生任意两个数值之间的随机数
//        var num = Math.floor(Math.random()*9+2);
//        console.log(num);
//        function selectFrom(lowerValue,upperValue){
//            var choices = upperValue - lowerValue;
//            return Math.floor(Math.random()*choices + lowerValue);
//        }
//随机选择数组中的一个值
//        console.log(selectFrom(2,10));
//        var colors = ["red","green","blue","black","gray","yellow"];
//        var color = colors[selectFrom(0,colors.length-1)];
//        console.log(color);

//匹配第一个'bat'或'cat',不区分大小写
//var pattern1 = /[bc]at/i;
//匹配第一个'[bc]at',不区分大小写
//var pattern2 = /\[bc\]at/i;
//匹配所有以'at'结尾的三字符组合
//var pattern3 = /.at/gi;
//匹配所有'.at',不区分大小写
//var pattern4 = /\.at/gi;
