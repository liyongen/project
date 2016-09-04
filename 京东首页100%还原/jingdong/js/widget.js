// JavaScript Document





//------------------------------------淘宝导航栏浮窗功能





function menu(oMenu,aLi,oMenuCont){
				//var oMenu=document.getElementById('taobaoMenu');//找到元素,声明变量
				//var aLi=oMenu.getElementsByTagName('li');//找到元素li的对象集合,声明变量
				//var ai=oMenu.getElementsByTagName('i');//找到元素i的对象集合,声明变量
				//var oMenuCont=oMenu.getElementsByTagName('div');//找到右边div对象集合,声明变量
				var show_timer=null;//显示右侧
				var hide_timer=null;//关闭右侧
				var move_timer=null;//离开右侧 回到左侧
				
				for(var i=0; i<aLi.length; i++){//定义for循环
					aLi[i].index = i;//把每一个li安上编号
					aLi[i].onmouseover=function(){//移入li触发事件
						var _this=this; //声明变量把this赋值到_this,因为setTimeout里的this指向window；
						clearTimeout(hide_timer);//清除：移出li时的定时事件
						clearTimeout(move_timer);//清除：移出oMenuCont时的定时事件
						this.style.backgroundColor="#f94a14";//事件：移入的li，属性改变
						//ai[this.index].style.color="#fff";//事件：移入的li，i属性改变
						show_timer=setTimeout(function(){//定时200毫秒后，事件发生
							for (var j = 0; j < aLi.length; j++) {//for循环，找到所有右图
								if(_this.index == j){//判断。当j等于（事件发生li的当前编号）时，对应编号的右图显现
									oMenuCont[_this.index].style.display="block";
								}
								else{//否则，其它的右图隐藏
									oMenuCont[j].style.display = "none";
								}
							}
						},200);
					};
					aLi[i].onmouseout=function(){//移出li触发事件
						clearTimeout(show_timer);//清除：移入li时的定时事件。（由于移入时hide_timer、move_timer两个定时事件已经清除，所用不用理会）
						
						
						
						hide_timer=setTimeout(function(){//定时时100毫秒后，事件发生
								for(var j = 0; j < aLi.length; j++){//for循环，右图全部隐藏
								 oMenuCont[j].style.display = "none";//事件：右图隐藏
								}
						},100);
						this.style.backgroundColor="#c81623";//事件：移出的li，属性改变
						//ai[this.index].style.color="#ff8e58";//事件：移出的i，属性改变
					};
				
				};
				for(var i=0; i<oMenuCont.length; i++){//定义for循环
					oMenuCont[i].index = i;
					
					oMenuCont[i].onmouseover=function(){
						clearTimeout(hide_timer);//清除：移出li时的定时事件
						clearTimeout(move_timer);//清除：移出oMenuCont时的定时事件
						this.style.display="block";//事件：右图显现
						aLi[this.index].style.backgroundColor="#f94a14";//事件：移入的右图，li属性改变
						//ai[this.index].style.color="#fff";//事件：移入的右图，i属性改变
					};
					oMenuCont[i].onmouseout=function(){//移出右图触发事件
					//（由于移入时hide_timer、move_timer两个定时事件已经清除，所用不用再清除）
						aLi[this.index].style.backgroundColor="#c81623";//事件：移出的右图，li属性改变
						//ai[this.index].style.color="#ff8e58";//事件：移出的右图，i属性改变
						move_timer=setTimeout(function(){//延时关闭
						for(var j = 0; j < oMenuCont.length; j++)	{//for循环，右图全部隐藏
						oMenuCont[j].style.display = "none";
						}
						},50);
					}
				}


}



//---------------------------------------------------------一楼按钮轮播功能窗口


//function floor1(aBtn,aImg){
					///*		  //找到3个按钮 
//					//找到3个图片
//					var aBtn=document.getElementsByTagName('button');
//					var aImg=document.getElementsByTagName('img');*/
//					
//					//点击事件
//						for(var i=0; i<aBtn.length; i++){
//							
//							//发编号牌照
//							aBtn[i].index=i;
//							
//							//绑定事件
//							aBtn[i].onmouseover=function(){
//								for(var j=0; j<aBtn.length; j++){
//									aBtn[j].className="";//清空所有按钮的class
//									aImg[j].style.display="none";//隐藏所有的图片
//								};
//								
//								//给自己加上class
//								this.className="floor1ac";
//								console.log(this.className);
//								//跟自己相对应图片显示
//								aImg[this.index].style.display="block";
//							}
//						}
//					
//					
//					//让其中一个显示，另外其他的隐藏


function floor1(aBtn,oUl,aDiv){
                      var num=0;//自动播放的卡片编号，从第0张开始
						var timer=null;
						
						for(var i=0;i<aBtn.length;i++){//点击事件
							aBtn[i].index=i;//给每一个li发编号
							aBtn[i].onmouseover=function()//给每一个li绑定对应的一个框
							{
								for(var i=0;i<aBtn.length;i++)
								{
									aBtn[i].className='';	//在点击之前把所有的li的背景色全部清掉
									aDiv[i].style.display='none';   //在点击之前把所有对应的框都清掉一遍
								};		
								this.className='floor1ac';    // 当前这个li增加背景色
								aDiv[this.index].style.display='block'; // 当前这个li对应的框显示
								num=this.index;//点击的时候如果我点击第3张图片的时候离开后他是从第二张开始自动播放，有一点瑕疵，这时候就告诉电脑我是点击第几张，应该从这一张后面一张开始自动播放，这时候的num已经变化不是0
							};	
						};
						
						
						function tab_change(num){//建立自动播放函数
							for(var i=0;i<aBtn.length;i++){
								for(var i=0;i<aBtn.length;i++){
									aBtn[i].className='';	
									aDiv[i].style.display='none';
								};		
								aBtn[num].className='floor1ac';
								aDiv[num].style.display='block';
							};
						};
					
						function auto_run(){//建立起定时器函数
							timer=setInterval(function(){//定时器启动
								tab_change(num);//调用自动轮播函数
								num++;
								if(num==9) num=0;
							},1000);
						
						};
						auto_run();//引爆定时器函数
						
						aDiv.onmouseover=function(){//当鼠标附上去时候清除定时器，自动播放结束
							clearInterval(timer);
						};
						aDiv.onmouseout=function(){//当鼠标离开的时候启动定时器，自动播放开始
							auto_run();//启动定时器时候一时间不知道怎样启动定时器，所以只好在定时器外面给他建立一个函数，以便我在这里调用定时器
						};
						oUl.onmouseover=function(){//当鼠标附上去时候清除定时器，自动播放结束
							clearInterval(timer);
						};
						oUl.onmouseout=function(){//当鼠标离开的时候启动定时器，自动播放开始
							auto_run();//启动定时器时候一时间不知道怎样启动定时器，所以只好在定时器外面给他建立一个函数，以便我在这里调用定时器
						};

};


















//------------------------------------图片按钮轮播功能
function btn_roll(numBtn,aLi,oUl,prevBtn,nextBtn,move){
          var show_num=0;//现在对应的图片号码就是li[0],相当于这个0,即当前图片索引
		  var timer=null;
		  
		  var li_w=getStyle(aLi[0],"width");
		      oUl.style.width=li_w*aLi.length+"px";//这里就ul{width:2000px;}不用再写
		   
	 
	      //按钮与对应出现的图片绑为一个事件----------------------------------------------------------
		   for(var i=0;i<numBtn.length;i++){
					   numBtn[i].index=i;
					  numBtn[i].onclick=function(){
						          //clearInterval(timer);
								  clearInterval(oUl.timer);
								  for(var j=0;j<numBtn.length;j++){
									  numBtn[j].className=" ";
									  aLi[j].className=" ";
								  };
								  this.className="ac";
								  aLi[this.index].className="show";
								  
								  
								  
								  //图片移动
							
								  show_num=this.index
								  move(oUl,"left",-li_w*show_num,30);
							      
								  
								  
								  numBtn[this.index].onmouseout=function(){                        
									    //clearInterval(timer);
								        clearInterval(oUl.timer);
										for(var i=0;i<numBtn.length;i++)                  //点击之前把所有按钮的背景红色清掉，把所有的图片隐藏
										{
											numBtn[i].className='';	
											aLi[i].className='show';
										};
										numBtn[this.index].className='ac';
										//timer=setInterval(tab_change,30);
								  };
					  };
					  
		   };
	       
		   
		   //左按钮的点击与移出--------------------------------------------------------------------------
		   prevBtn.onclick=function(){
			   //clearInterval(timer);
			   show_num++;
			   if(show_num>=aLi.length-1){
				   show_num=aLi.length-1; 
			   };
			   move(oUl,"left",-li_w*show_num,1000);
			   
			   for(var j=0;j<numBtn.length;j++){
									  numBtn[j].className="";
									 
			   };
			   numBtn[show_num].className="ac";
		   
		   };
		   prevBtn.onmouseout=function(){
			   //clearInterval(timer);
			   
		   };
	       
		   //右按钮的点击与移出-----------------------------------------------------------------------------
		   nextBtn.onclick=function(){
			   //clearInterval(timer);
			   show_num--;
			   if(show_num<=0){
				   show_num=0; 
			   };
			   move(oUl,"left",-li_w*show_num,1000);
			   
			   for(var j=0;j<numBtn.length;j++){
								numBtn[j].className="";
									  
			   };
			   numBtn[show_num].className="ac";
			   
			   
			   
		   };
		   nextBtn.onmouseout=function(){
			  // clearInterval(timer);
			
		   };



};






 //-----------------------------------------------------------------------------自动轮播           
			
			function tab_change(id){
				            
				            var oBox=document.getElementById(id);
						   var numBtn=oBox.getElementsByTagName("ol")[0].children;
						  var aLi=oBox.getElementsByTagName("ul")[0].children;
						  var oUl=oBox.getElementsByTagName("ul")[0];
						  var ol=oBox.getElementsByTagName("ol")[0];
				          
						  
						  
				
				
				
				
			                 	
							var w=(aLi.length)*aLi[0].offsetWidth;
								//oUl.innerHTML+=oUl.innerHTML;//两套图片一起叠加，现在是10个li，请注意这个写法
								oUl.style.width=w+"px";
								
								
								
							var left=oUl.offsetLeft-2;
							    oUl.style.left=left+"px";
								
								
						    //判断走到全部的二分之一时显示那个按钮变颜色-----------------------------------------------
							if(-aLi[0].offsetWidth*1/2<left&&left<0){
									for(var j=0; j<numBtn.length; j++){
										numBtn[j].className="";//清空所有按钮的class
										
								    };							
									oUl.style.left=left+"px";
									numBtn[0].className='ac';	
							}else if((-aLi[0].offsetWidth-aLi[0].offsetWidth*2)/2<left&&left<-aLi[0].offsetWidth*1/2){


                                 for(var j=0; j<numBtn.length; j++){
										numBtn[j].className="";//清空所有按钮的class
										
								 };
							     oUl.style.left=left+"px";
								 numBtn[1].className='ac';
							}else if((-aLi[0].offsetWidth*2-aLi[0].offsetWidth*3)/2<left&&left<(-aLi[0].offsetWidth-aLi[0].offsetWidth*2)/2){
									for(var j=0; j<numBtn.length; j++){
										numBtn[j].className="";//清空所有按钮的class
										
								    };							
									oUl.style.left=left+"px";
									numBtn[2].className='ac';	
							}else if((-aLi[0].offsetWidth*3-aLi[0].offsetWidth*4)/2<left&&left<(-aLi[0].offsetWidth*2-aLi[0].offsetWidth*3)/2){
									for(var j=0; j<numBtn.length; j++){
										numBtn[j].className="";//清空所有按钮的class
										
								    };							
									oUl.style.left=left+"px";
									numBtn[3].className='ac';	
							}else if((-aLi[0].offsetWidth*4-aLi[0].offsetWidth*5)/2<left&&left<(-aLi[0].offsetWidth*3-aLi[0].offsetWidth*4)/2){
									for(var j=0; j<numBtn.length; j++){
										numBtn[j].className="";//清空所有按钮的class
										
								    };							
									oUl.style.left=left+"px";
									numBtn[4].className='ac';	
							}else if(-aLi[0].offsetWidth*5<left&&left<(-aLi[0].offsetWidth*4-aLi[0].offsetWidth*5)/2){
									for(var j=0; j<numBtn.length; j++){
										numBtn[j].className="";//清空所有按钮的class
										
								    };							
									oUl.style.left=left+"px";
									numBtn[5].className='ac';	
							}else if(left<-(w-aLi[0].offsetWidth)){
										
										left=0;
										oUl.style.left=left+"px";
										
							};
							oBox.onmouseover=function(){                                   //当鼠标附上去这页面范围时候，自动轮播停止
								clearInterval(timer);
							};
							oBox.onmouseout=function(){                                     //当鼠标离开这页面范围时候，自动轮播启动
								 delay();
							};
                            
							
							
							
							
			};
			
			
			
			
			
			
	var timer=null;
function delay(){	 //时间戳
	timer=setInterval(function(){
		tab_change("main1-banner");
	},30);
};
		   
		   
		   






//-------------------------------------------------------左侧导航

//侧边
			function fix(id){
				var oCblf=document.getElementById(id);
				var aLi=oCblf.children;
				var aFloow=document.getElementsByClassName("floow");
				var arr=['服装','美妆','手机','家电','数码','运动','居家','母婴','食品','图书','车品'];
				
				window.onscroll=function(){
					var t=document.documentElement.scrollTop||document.body.scrollTop;
					
					if(t<=document.documentElement.clientHeight||t>=aFloow[10].offsetTop+600){
						oCblf.style.display="none";
					}
					else{
						oCblf.style.display="block";
						oCblf.style.top=t+'px';
						
						if(t<=aFloow[0].offsetTop){
							
							
							for(var i=0;i<aLi.length;i++){                   //这是一个模块，每一次变成字体前都把全部楼层变回原样
								aLi[i].children[0].innerHTML=(i+1)+'F';
								aLi[i].children[0].className=""
							}
							
							

						}
						for(var j=0;j<aLi.length-1;j++){
							if(t>=aFloow[j].offsetTop+280 &&t <aFloow[j+1].offsetTop+280){
								for(var i=0;i<aLi.length;i++){
									aLi[i].children[0].innerHTML=(i+1)+'F';
									aLi[i].children[0].className=""
								}
								aLi[j].children[0].innerHTML=arr[j];         //开始变化那一楼层
								aLi[j].children[0].className="ac"
							}
						
						}
						if(t>=aFloow[10].offsetTop+280){
							for(var i=0;i<aLi.length;i++){
								aLi[i].children[0].innerHTML=(i+1)+'F';
								aLi[i].children[0].className=""
							}
							aLi[10].children[0].innerHTML=arr[4];
							aLi[10].children[0].className="ac";
						}
						
					}
					
				}
				
				
				
				
			}
				










		   