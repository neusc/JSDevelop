/**
 * Created by chuan.she on 2015/12/9.
 */
/*
* Node����
* */
//var someNode = document.getElementsByTagName("html")[0];
//nodeType 1:Ԫ�ؽڵ�     3:�ı��ڵ�
//if(someNode.nodeType == 1){
//    var value = someNode.nodeName;
//    console.log(value);
//}
//�ڵ��childNodes���Ա�����NodeList����
//var firstChild = someNode.childNodes[0];
//var secondChild = someNode.childNodes.item(1);
//�ӽڵ���ܰ���\n�����Ŀ��ı��ڵ�
//var count  = someNode.childNodes.length;    //3
//console.log(someNode.firstChild);   //someNode.childNodes[0]
//console.log(someNode.lastChild);    //someNode.childNodes[someNode.childNodes.length-1]
//console.log(firstChild);
//console.log(secondChild);
//console.log(someNode.hasChildNodes());  //true
//��nodeList����ת��Ϊ����,slice(start,end)
//function convertToArray(nodes){
//    var array = null;
//    try{
//        //��Է�IE�����
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
//׷���ӽڵ��Ϊ���һ���ڵ�
//var returnNode = someNode.appendChild(newNode); //returnNode == newNode
//�����ӽڵ㵽�̶�λ��֮ǰ�Լ��ڵ�Ĳ���
//var returnNode = someNode.insertBefore(newNode,someNode.lastChild); //returnNode == newNode
//var returnNode = someNode.replaceChild(newNode,someNode.firstChild);    //returnNode���滻�Ľڵ�
//var removeNode = someNode.removeChild(someNode.firstChild); //���ر��Ƴ��Ľڵ�
//var deepList = mylist.cloneNode(true);  //true��ʾ���,�����������ӽڵ���,falseֻ���ƽڵ㱾��
/*
 * Document����
 * */
//��ȡ��ҳ�ж��ض���ǩ������
//var html = document.documentElement; //document.childNodes[0],document.firstChild�ȼ�
//var body = document.body;  //ȡ�ö�<body>������
//var doctype = document.doctype; //ȡ�ö�<!DOCTYPE>������
//var title = document.title; //ȡ�ð�����<title>�е��ı�
//var url = document.URL;  //ȡ��������URL
//var domain = document.domain;   //ȡ������
//var referrer = document.referrer;   //ȡ����Դҳ���URL

//var images = document.getElementsByTagName("img");//���ض�̬HTMLCollection���϶�����NodeList��������
//console.log(images.length);
//console.log(images[0].src);
//console.log(images.item(0).src);
//var myImage = images.namedItem("myImage");//��HTMLCollection������ѡȡ�̶�name��image
//var myImage = images["myImage"]; //���ݴ���Ĳ������ͣ�����item()��namedItem()����

/*
   ElementԪ��
 */
//<div id="myDiv" class="bd" title="Body text"></div>
var div = document.getElementById("myDiv");
console.log(div.nodeName);  //"DIV"Ϊ��д��ʽ
console.log(div.tagName == div.nodeName); //true
console.log(div.id);  //"myDiv"
console.log(div.className);  //"bd"
console.log(div.title);  //"Body text"
div.className ="ft";  //�޸�Ԫ��class���Ե�ֵ


