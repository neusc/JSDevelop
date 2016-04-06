//文档就绪后执行
$(document).ready(function(){

	//  $("p").css("background-color","red");
	// 	$("p").hide();;
	// });
	//$("button").click(function(){
	//	$("div").animate({
	//		left:'250px',
	//		opacity:'0.5',
	//		height:'150px',
	//		width:'150px'
	//	});
	//});

	//按顺序执行每个animate
	//$("button").click(function(){
	//	var div = $("div");
	//	div.animate({left:'100px'},"slow");
	//	div.animate({fontSize:'3em'},"slow");
	//})

	//callback函数的使用
	//$("button").click(function(){
	//	$("p").hide(1000, function(){
	//		alert("The paragraph is now hidden.");
	//	});
	//});

	//jQuery方法链接(chaining)
	//$("p").css("color","red").slideUp(2000).slideDown(2000);
});

//jQuery源码分析
var jQuery = function(selector,context){
    return jQuery.prototype.init();
}

jQuery.prototype = {
    init: function(){
        this.age = 18
        return this;
    },
    name: function(){},
    age: 20
}
console.log(jQuery().age);