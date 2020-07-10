(function(window,undefined){
			 var njQuery=function(selector){
				 return new njQuery.prototype.init(selector);
			 }
			 njQuery.prototype={
				 constructor:njQuery,
				 init:function(selector){
					 //传入'' null undefined NaN 0 false
					 if(!selector){
						 return this;
					 }
					 //字符串
					 else if(njQuery.isStr(selector)){
						 //2.1判断是否代码片段
						 if(njQuery.isHtml(selector)){
							 //2.1.1根据代码片段创建所有元素
							 var temp=document.createElement("div");
							 temp.innerHTML=selector;
							 //2.1.2将创建好的一级元素添加到jQuery中
								 // for(var i=0;i<temp.children.length;i++){
									//  this[i]=temp.children[i];
								 // }
							 //2.1.3给jQuery对象添加length属性
									// this.length=temp.children.length
									[].push.apply(this,temp.children);
							 //2.1.4返回加工好的this(jQuery)
							 return this;
						 }else{//2.2判断是否选择器
						 //2.2.1根据传入的选择器找到对应元素
						 var res=document.querySelectorAll(selector);
						 //2.2.2将找到的元素添加到njQuery上
						 for(var i=0;i<res.children.length;i++){
						 			 this[i]=res.children[i];
								}
								this.length=res.children.length
						 //2.2.3返回加工好的this
						 return this;
						 }
					 }
					// 数组
					else if(typeof selector==="object"&&"length" in selector&&selector!=window){
						// 3.1真数组
						// 3.2伪数组
					}
				 }
			 }
			 njQuery.trim=function(str){
				 if(!njQuery.isStr(str)){
					 return str;
				 }
				 //判断是否支持trim方法
				 if(str.trim){
					 return str.trim()
				 }else{
					 return str.replace(/^\s+|\s+$/g,"");
				 }
			 }
			 njQuery.isStr=function(str){
				 return typeof selector==="string"
			 }
			 njQuery.isHtml=function(str){
			 	return selector.charAt(0)=="<"&&selector.charAt(selector.length-1)==">"&&selector.length>=3
			 }
			 njQuery.prototype.init.prototype=njQuery.prototype
			 window.njQuery=window.$=njQuery;
		 })(window);
		