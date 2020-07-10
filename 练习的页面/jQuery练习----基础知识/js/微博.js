$(function(){
	$("body").delegate(".tt","propertychange input",function(){
		//判断是否输入内容
		if($(this).val().length>0){
			//如果有内容，则能点击按钮
			$(".send").prop("disabled",false);
		}else{
			//没有内容，则不能使按钮生效
			$(".send").prop("disabled",true);
		}
	});
	$(".send").click(function(){
		var $text=$(".tt").val();
		var $Weibo=createEle($text);
		$(".messageList").prepend($Weibo);
		
	});
	function createEle(text){
		var $Weibo=$("<div class='info'><p class='infot'><span class='time'>"+date()+ "</span><br>"
					+"<span class='infoText'>"+text+"</span>​​​​</p><p class='op'><span class='handle'>"
					+"<a href='javascript:;' class='infoTop'>0</a><a href='javascript:;' class='infoDown'>0</a><a href='javascript:;'class='infoDel' >删除</a>"
					+"</span></p></div>");
					return $Weibo;
	}
	$("body").delegate(".infoTop","click",function(){
		$(this).text(parseInt($(this).text())+1);
	})
	$("body").delegate(".infoDown","click",function(){
	$(this).text(parseInt($(this).text())+1);
	})
	$("body").delegate(".infoDel","click",function(){
		$(this).parents(".info").remove()
	})
	function date(){
		var date=new Date();
		var arr=[date.getFullYear()+"-",date.getMonth()+1+"-",date.getDate()+"  ",date.getHours()+":",
				date.getMinutes()+":",date.getSeconds()];
		return arr.join(" ");
	}
})