/**
 * Created by chuan.she on 2015/11/23.
 */
//this�ؼ��ֵ�ʹ��
//var context="global";
//ִ�������İ���ȫ�ֺͺ���������,�ڽ���ִ��������ʱ
//this��ֵ�Ѿ�ȷ��(�����������������AO)
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

//window����
//��ܵ�ʹ��.top:�����;parent:ֱ���ϲ���;self:windows������
//��ȡ����λ��,�������������
//var leftPos = (typeof window.screenLeft == "number")?
//                window.screenLeft:window.screenX;
//var rightPos = (typeof window.screenTop == "number")?
//                window.screenTop:window.screenY;
//�ƶ�����λ��
//window.moveTo(200,300);
//window.moveBy(0,100);
//�������ڴ�С
//window.resizeTo(100,100);
//window.resizeBy(100,50);
//console.log(window.innerHeight);
//console.log(window.innerWidth);//ҳ����ͼ����С,��ȥ�߿���
//console.log(window.outerHeight);//������ߴ�
//console.log(window.outerWidth);
//���ݵ�����������һ����ΪtopFrame���´���
//var win = window.open("http://www.baidu.com","topFrame","height=800,width=500,top=10,left=100,resizable=yes");
//var win = window.open("http://www.baidu.com","_blank");
//�ڶ�����������,��topFrame�����д�������
//window.open("http://www.sina.com.cn","topFrame");
//win.resizeTo(1000,800);
//win.moveTo(200,10);
//console.log(win.opener);    //ָ�������ԭʼ����window
//�ж�ԭʼ���ں��´򿪴��ڵ���ϵ,��ʹ�ڶ�������������
//win.opener = null;
//win.close();
//console.log(win.closed);
//��ⵯ�������Ƿ�������
//var blocked = false;
//try{
//    var win = window.open("http://www.baidu.com","_blank");
//    //��������Դ����γ�������
//    if(win == null){
//        blocked = true;
//    }
//    //���������չ��������������
//}catch(ex){
//    blocked = true;
//}
//if(blocked){
//    console.log("The popup was blocked!");
//}
//��ʱ����,��һ�����������鴫���ַ���
//ʱ�������ʾ�೤ʱ��󽫴�����ӵ�jsִ�ж���
//����һ������ִ��
//var timeoutId = setTimeout(function(){
//    alert("Hello World!");
//},1000);
//�ڴ���ִ��ǰȡ��ִ��
//clearTimeout(timeoutId);
//��Ъ����,һ������¿���ʹ�ó�ʱ���ô���
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
//confirm()�Ի����ʹ��
//if(confirm("Ary you sure?")){
//    alert("I'm glad you are sure!")
//}else{
//    alert("I'm so sorry to hear you are not sure!");
//}
//prompt()�Ի����ʹ�ã��ڶ�������Ϊ�ı���Ĭ��ֵ
//var result = prompt("What is your name","");
//if(result != null){
//    alert("Welcome,"+result);
//}
//��ʾ��ӡ�Ի���
//window.print();

//location����
//ʹ��location�����ѯURL���ַ�������
//function getQueryStringArgs(){
//    //ȥ��URL�в�ѯ�ַ�����ʼ��?
//    var qs = (location.search.length>0 ? location.search.substring(1) : "");
//    args = {};
//    //����&���ַ������Ϊ"name=value"����
//    items = qs.split("&");
//    item = null;
//    name = null;
//    value = null;
//    len = items.length;
//    for(i=0;i<len;i++){
//        //��"name=value"���͵�����ÿһ����Ϊ
//        //name��value��������
//        item = items[i].split("=");
//        name = decodeURIComponent(item[0]);
//        value = decodeURIComponent(item[1]);
//
//        if(name.length){
//            //�Զ�����������ʽ��������
//            args[name] = value;
//        }
//    }
//    return args;
//}
//location.search = "?q=javascript&num=10";
//var args = getQueryStringArgs();
//console.log(args["q"]);
//console.log(args["num"]);
//replace�����ض������ʹ�ú��˹���,����������ɼ�¼
//setTimeout(function(){
//    location.replace("http://www.baidu.com");
//},1000);
//URL���¼���,����һ���µ���ʷ��¼,���Ժ�����ǰһҳ��
//location.search="?q=javascript";
//ҳ���ض�������URL�������������µ���ʷ��¼,
//�޷�������ǰһҳ��
//location.replace("http://www.baidu.com");
//location.reload();//���¼���,���ܴӻ���
//location.reload(true);//�ӷ��������¼���

//navigator����
//���������Ƿ�װ��ĳ�����
//function hasPlugin(name){
//    name = name.toLowerCase();
//    //pluginsΪ���������Ϣ������
//    for(var i=0;i<navigator.plugins.length;i++){
//        //nameΪplugins������Ԫ�ص�����,��ʾ�������
//        if(navigator.plugins[i].name.toLowerCase().indexOf(name) > -1){
//            return true;
//        }
//    }
//    return false;
//}
//console.log(hasPlugin("Flash"));
//console.log(hasPlugin("Firebug"));
//history�����ʹ��
//ÿ����������ڡ���ǩҳ���ܶ����Լ���
//history�������ض�window�����
//history.go(-1);
//history.go("baidu.com");
//history.back();
//history.forward();
//console.log(history.length); //1
