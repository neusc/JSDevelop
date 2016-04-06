/**
 * Created by chuan.she on 2015/12/9.
 */
/*
* Node类型
* */
//var someNode = document.getElementsByTagName("html")[0];
//nodeType 1:元素节点     3:文本节点
//if(someNode.nodeType == 1){
//    var value = someNode.nodeName;
//    console.log(value);
//}
//节点的childNodes属性保存着NodeList对象
//var firstChild = someNode.childNodes[0];
//var secondChild = someNode.childNodes.item(1);
//子节点可能包括\n带来的空文本节点
//var count  = someNode.childNodes.length;    //3
//console.log(someNode.firstChild);   //someNode.childNodes[0]
//console.log(someNode.lastChild);    //someNode.childNodes[someNode.childNodes.length-1]
//console.log(firstChild);
//console.log(secondChild);
//console.log(someNode.hasChildNodes());  //true
//将nodeList对象转换为数组,slice(start,end)
//function convertToArray(nodes){
//    var array = null;
//    try{
//        //针对非IE浏览器
//        array = Array.prototype.slice.call(nodes,0);
//    }catch(ex){
//        array = new Array();
//        for(var i= 0,len = nodes.length;i<len;i++){
//            array.push(nodes[i]);
//        }
//    }
//    return array;
//}
//console.log(convertToArray(someNode.childNodes));
//追加子节点成为最后一个节点
//var returnNode = someNode.appendChild(newNode); //returnNode == newNode
//插入子节点到固定位置之前以及节点的操作
//var returnNode = someNode.insertBefore(newNode,someNode.lastChild); //returnNode == newNode
//var returnNode = someNode.replaceChild(newNode,someNode.firstChild);    //returnNode被替换的节点
//var removeNode = someNode.removeChild(someNode.firstChild); //返回被移除的节点
//var deepList = mylist.cloneNode(true);  //true表示深复制,包括完整的子节点树,false只复制节点本身
/*
 * Document类型
 * */
//获取网页中对特定标签的引用
//var html = document.documentElement; //document.childNodes[0],document.firstChild等价
//var body = document.body;  //取得对<body>的引用
//var doctype = document.doctype; //取得对<!DOCTYPE>的引用
//var title = document.title; //取得包含在<title>中的文本
//var url = document.URL;  //取得完整的URL
//var domain = document.domain;   //取得域名
//var referrer = document.referrer;   //取得来源页面的URL

//var images = document.getElementsByTagName("img");//返回动态HTMLCollection集合对象，与NodeList对象相似
//console.log(images.length);
//console.log(images[0].src);
//console.log(images.item(0).src);
//var myImage = images.namedItem("myImage");//在HTMLCollection集合中选取固定name的image
//var myImage = images["myImage"]; //根据传入的参数类型，调用item()和namedItem()方法

/*
   Element元素
 */
//<div id="myDiv" class="bd" title="Body text"></div>
var div = document.getElementById("myDiv");
console.log(div.nodeName);  //"DIV"为大写形式
console.log(div.tagName == div.nodeName); //true
console.log(div.id);  //"myDiv"
console.log(div.className);  //"bd"
console.log(div.title);  //"Body text"
div.className ="ft";  //修改元素class属性的值


