/**
 * Created by chuan.she on 2015/11/23.
 */
//this关键字的使用
//var context="global";
//执行上下文包括全局和函数上下文,在进入执行上下文时
//this的值已经确定(作用域链、激活对象AO)
//var obj={
//    context:"object",
//    method:function(){
//        console.log(this+":"+this.context);
//
//        function f(){
//            var context = "function";
//            console.log(this+":"+this.context);
//        };
//        f();
//
//        (function(){
//            var context = "function";
//            console.log(this+":"+this.context);
//        })();
//    }
//};
//
//obj.method();
// [object Object]:object
// [object Window]:global
// [object Window]:global

//window对象
//框架的使用.top:最顶层框架;parent:直接上层框架;self:windows对象本身
//获取窗口位置,兼容主流浏览器
//var leftPos = (typeof window.screenLeft == "number")?
//                window.screenLeft:window.screenX;
//var rightPos = (typeof window.screenTop == "number")?
//                window.screenTop:window.screenY;
//移动窗口位置
//window.moveTo(200,300);
//window.moveBy(0,100);
//调整窗口大小
//window.resizeTo(100,100);
//window.resizeBy(100,50);
//console.log(window.innerHeight);
//console.log(window.innerWidth);//页面视图区大小,减去边框宽度
//console.log(window.outerHeight);//浏览器尺寸
//console.log(window.outerWidth);
//根据第三个参数打开一个名为topFrame的新窗口
//var win = window.open("http://www.baidu.com","topFrame","height=800,width=500,top=10,left=100,resizable=yes");
//var win = window.open("http://www.baidu.com","_blank");
//第二个参数存在,在topFrame窗口中打开新链接
//window.open("http://www.sina.com.cn","topFrame");
//win.resizeTo(1000,800);
//win.moveTo(200,10);
//console.log(win.opener);    //指向打开它的原始对象window
//切断原始窗口和新打开窗口的联系,可使在独立进程中运行
//win.opener = null;
//win.close();
//console.log(win.closed);
//检测弹出窗口是否被屏蔽了
//var blocked = false;
//try{
//    var win = window.open("http://www.baidu.com","_blank");
//    //被浏览器自带屏蔽程序屏蔽
//    if(win == null){
//        blocked = true;
//    }
//    //被浏览器扩展或其它程序屏蔽
//}catch(ex){
//    blocked = true;
//}
//if(blocked){
//    console.log("The popup was blocked!");
//}
//超时调用,第一个参数不建议传递字符串
//时间参数表示多长时间后将代码添加到js执行队列
//并不一定马上执行
//var timeoutId = setTimeout(function(){
//    alert("Hello World!");
//},1000);
//在代码执行前取消执行
//clearTimeout(timeoutId);
//间歇调用,一般情况下可以使用超时调用代替
//var num = 0;
//var max = 10;
//var intervalId = null;
//function incrementNumber(){
//    num++;
//    if(num == max){
//        clearInterval(intervalId);
//        alert("Done!");
//    }
//}
//intervalId = setInterval(incrementNumber,500);
//confirm()对话框的使用
//if(confirm("Ary you sure?")){
//    alert("I'm glad you are sure!")
//}else{
//    alert("I'm so sorry to hear you are not sure!");
//}
//prompt()对话框的使用，第二个参数为文本框默认值
//var result = prompt("What is your name","");
//if(result != null){
//    alert("Welcome,"+result);
//}
//显示打印对话框
//window.print();

//location对象
//使用location对象查询URL中字符串参数
//function getQueryStringArgs(){
//    //去掉URL中查询字符串开始的?
//    var qs = (location.search.length>0 ? location.search.substring(1) : "");
//    args = {};
//    //根据&将字符串拆分为"name=value"数组
//    items = qs.split("&");
//    item = null;
//    name = null;
//    value = null;
//    len = items.length;
//    for(i=0;i<len;i++){
//        //将"name=value"类型的数组每一项拆分为
//        //name和value两个参数
//        item = items[i].split("=");
//        name = decodeURIComponent(item[0]);
//        value = decodeURIComponent(item[1]);
//
//        if(name.length){
//            //以对象字面量形式保存数组
//            args[name] = value;
//        }
//    }
//    return args;
//}
//location.search = "?q=javascript&num=10";
//var args = getQueryStringArgs();
//console.log(args["q"]);
//console.log(args["num"]);
//replace方法重定向后不能使用后退功能,浏览器不生成记录
//setTimeout(function(){
//    location.replace("http://www.baidu.com");
//},1000);
//URL重新加载,生成一个新的历史记录,可以后退至前一页面
//location.search="?q=javascript";
//页面重定向至新URL，但不会生成新的历史记录,
//无法回退至前一页面
//location.replace("http://www.baidu.com");
//location.reload();//重新加载,可能从缓存
//location.reload(true);//从服务器重新加载

//navigator对象
//检测浏览器是否安装了某个插件
//function hasPlugin(name){
//    name = name.toLowerCase();
//    //plugins为包含插件信息的数组
//    for(var i=0;i<navigator.plugins.length;i++){
//        //name为plugins中数组元素的属性,表示插件名称
//        if(navigator.plugins[i].name.toLowerCase().indexOf(name) > -1){
//            return true;
//        }
//    }
//    return false;
//}
//console.log(hasPlugin("Flash"));
//console.log(hasPlugin("Firebug"));
//history对象的使用
//每个浏览器窗口、标签页或框架都有自己的
//history对象与特定window对象绑定
//history.go(-1);
//history.go("baidu.com");
//history.back();
//history.forward();
//console.log(history.length); //1
