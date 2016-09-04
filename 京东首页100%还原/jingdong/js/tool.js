// JavaScript Document










//获取样式的
	           function getStyle(obj,name){
					var value=obj.currentStyle ? obj.currentStyle[name]:getComputedStyle(obj,false)[name];//后半句是兼容IE的
					if(name=="opacity"){
						 value=Math.round(parseFloat(value)*100);
						
					}else{
						
						 value=parseInt(value);	
						
					};
					return value;//把数字拿出来
				};
	
	
	           //alert(getStyle(oDiv,"left"));
	
	
	
	
	
	
	
	
			  //总体思想是把走的总共时间分成多少份，然后把要走的距离也分成多少份，所以走的时候是一份时间走一份距离
			  //var oUl=document.getElementById("ul");
			  //var timer=null;
			  function move(obj,moveMode,end,stopTime){
				  //为开始位置定位，不一定从left=0开始,left:200px;是200对应
				   //var start=200;
				   
				   
				   var start=getStyle(obj,moveMode);//获取初始位置是left是向右走，获取top是向下走
				   
				   
				   
				   
				   
				   //要走过的距离，end是别人给的终点值
				   var dis=end-start;
				   //时间每30ms有多少份
				   var count=parseInt(stopTime/30);
				   
				   var n=0;//一开始份数是0
				   clearInterval(obj.timer);
				   obj.timer=setInterval(function(){
					   n++;
					   //一份一份的走距离,一开始n是0，就是起点
					   var step_dis=start+dis/count*n;
					   
					   
					   /*var a=1-n/count;
					   var step_dis=start+dis/(1-a*a*a*a*a);   这两条公式是令在结束时变缓慢的*/
					   
					   
					   
					   
					   
					  
					   if(moveMode=="opacity"){
						    obj.style.opacity=step_dis/100;
						     obj.style.filter='alpha(opacity:'+step_dis+')';//专门针对IE7以下
							 
					    }else{
					   
					   
					   
							   //JSON用法因为没有obj.style.moveMode所以只能用这个moveMode相当于在样式里是一个键--------KEY
							   obj.style[moveMode]=step_dis+"px";   //obj.style[moveMode]=-step_dis+"px"; 这里是往相反方向走
					           
					   };
					   
					   
					   
					
					   
					   if(n==count){                 //等于时间总的份数
						   clearInterval(obj.timer);
					   }else{};
					   
					   
				   },30);
			   
				  
			  };
			  