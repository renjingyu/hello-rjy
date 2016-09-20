/**
 * Created by yu on 2016/9/12.
 */
$(function () {
	//顶部关闭功能
	$('#top_close').click(function(){
		$('.top_banner').hide();
	})
    //滚轮滑动满一屏时 导航栏固定
    $(window).scroll(function () {
        var iScrollT = $(window).scrollTop();
        if(iScrollT>500){
        			$('.header').css({'position':'fixed','top':0,'left':0,'z-index':100,'width':'100%'});

        }else {
            $('.header').css({'position':'relative','top':0,'left':0,'z-index':5});
        }
        //滚轮大于第一屏时
        if(iScrollT>700){
        
           	$('#product_intrud_tit').addClass('product_intrud_tit_fixed');

        }else {
            $('#product_intrud_tit').removeClass('product_intrud_tit_fixed');
        }
    });

    //屏幕缩到最小时 点击左上角小菜单 大导航菜单显示
    
	
	//产品列表 图片	
	slidePic({
	    wrap:$('.product_cont_center'),
	    list:$(this).find(".product_cont_center_box"),
	    btn: $('.pro_img').find("img")
	})
	
	
	
	//产品图片轮播
	$('.product_trait_img').each(function(){
		nextBtn = $(this).find('.product_trait_img_next'); //下一个按钮
		prevBtn = $(this).find('.product_trait_img_prev');	//上一个按钮
		parSiblBox = $(this).find('.product_trait_img_box'); //要移动的盒子
		parSiblBoxImg = parSiblBox.find('img');
		
		proSilder(parSiblBox,parSiblBoxImg,nextBtn,prevBtn)
		
	})
	
	
	function proSilder($box,$boxImg,$nextBtn,$prevBtn){
		var iIndex = 0;
		var iW = $boxImg.width();
		var len = $boxImg.length;
		//下一个
		$nextBtn.click(function() {
			if (iIndex>=len-7) {
				iIndex=len-7;
			}
			iIndex++;
			$box.animate({left:-iIndex*iW});
		})
		//上一个
		$prevBtn.click(function() {
			if (iIndex<=0) {
				iIndex=1;
			}
			iIndex--;
			$box.animate({left:-iIndex*iW});
		})
		
	}
	
	//顾客评价
    
	
	
    var $imgList = $(".product_show");
	
	
   //ajax读取商品信息
	var url =  window.location.href;
    console.log(url.split("?"))//数组
    url.split("?")[1]//"pId=0020003"

    console.log(url.split("?")[1].split("=")[1])//0020003
    var pId = fnBase.request("pId");
    //console.log(fnBase.request("timer"));
    $.get("json/product.json",function (data) {
        for(var i=0;i<data.length;i++){
            if(data[i].pId==pId){

                //有imgArray就使用imgArray，没有的话就使用[data[i].img]（放在数组里面使用）
		
                var imgArray = data[i].imgArray||[data[i].img];
				console.log(data[i])

                /*设置列表图片的src*/
                var str = "";
                for(var j=0;j<imgArray.length;j++){
                    str+='<div class="product_name">'+
							'<span></span>'+
							'<b>'+data[i].name+'</b>'+
						'</div>'+
						'<div class="product_cont row">'+
						'<div class="product_cont_left col-lg-3">'+
							'<div class="product_cont_left_cent">'+
								'<ul>'+
									'<li><i>款号 : '+data[i].cateId+'</i></li>'+
									'<li><span>运动前，运动中和放松运动时保持温暖！</span></li>'+
									'<li>'+data[i].des+'</li>'+
								'</ul>'+
								'<div class="look_more">'+
									'<div>'+
										'<img src="'+imgArray[0]+'"/>'+
									'</div>'+
									'<span>浏览更多</span>'+
								'</div>'+
								'<div class="look_more">'+
									'<div>'+
										'<i class="fa fa-caret-square-o-right"></i>'+
									'</div>'+
									'<span>'+
										'视频'+
									'</span>'+
								'</div>'+
							'</div>'+
						'</div>'+
						'<div class="product_cont_center col-lg-6">'+
							'<ul class="product_cont_center_box">'+
								'<li><img src="'+imgArray[0]+'"/></li>'+
								'<li><img src="'+imgArray[0]+'"/></li>'+
								'<li><img src="'+imgArray[0]+'"/></li>'+
							'</ul>'+
						'</div>'+
						'<div class="product_cont_right col-lg-3">'+
							'<ul>'+
								'<li class="pro_pirce">'+
									'<div>'+
										'<b>￥'+data[i].price+'</b><span>.00</span>'+
									'</div>'+
								'</li>'+
								'<li class="pro_choose">'+
									'<a href="javascript:;" id="pro_choose">请选择颜色和尺寸</a>'+
								'</li>'+
								'<li class="pro_brand">'+
									'<span>'+
										'<i class="fa fa-star"></i>'+
										'<i class="fa fa-star"></i>'+
										'<i class="fa fa-star"></i>'+
										'<i class="fa fa-star"></i>'+
										'<i class="fa fa-star"></i>'+
									'</span>'+
									'<i class="fa fa-chevron-circle-down"></i>'+
								'</li>'+
								'<li class="pro_pingjia">'+
									'<a href="###">'+data[i].sellerNum+'条评价</a>'+
								'</li>'+
								'<li class="pro_img">'+
									'<img class="active" src="'+imgArray[0]+'"/>'+
									'<img src="'+imgArray[0]+'"/>'+
									'<img src="'+imgArray[0]+'"/>'+
								'</li>'+
							'</ul>'+
						'</div>'
                }

                $imgList.html(str)
            }
        }
    });

});