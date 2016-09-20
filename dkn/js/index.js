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
            $('.header').css({'position':'relative','top':0,'left':0,'z-index':5})
        }
    });

    //屏幕缩到最小时 点击左上角小菜单 大导航菜单显示
    $('.small_menu').click(function () {
        console.log(1)
        $('#nav_left').css({'display': 'block','width':'90%'});
        $('.header').css({'width':'90%','margin':0})
        $('.nav_skew').css({'transform': 'skew(0deg)','width':'99%'});
        $('.nav_cont').css({'width':'100%','height':'100%'})
        $('#left_mainBox').css({'width':'100%'})
        $('#left_content').css({'width':'100%'})
        $('.small_close').show();
    })

    $('.nav_left_close').click(function () {
        $('#nav_left').hide();
        $('.small_close').hide();
        $('.header').css({'width':'100%'})
    })

    //左侧菜单自定义的滚动条
    new addScroll('left_mainBox', 'left_content', 'scrollDiv');


    //banner轮播
    focusPic($('.dian span'),$('.banner ul li'),$('.banner ul'))

    //菜单栏右侧显示
    //nav_right_list1
    $('.nav_left_top').click(function () {
        $('.nav_right').show();
        $('.nav_right_list2').hide();
        $('.nav_right_list1').show();
        $('.nav_right_list1').animate({left:-78})
        $('.nav_left_top_skew').css({left:252})
    })


    //nav_right_list2
    $('#left_content li').click(function () {
        $('.nav_right').show();
        $('.nav_right_list1').hide();
        $('.nav_right_list2').show();
        $('.nav_right_list2').animate({left:-78})
    })

    $('.nav_left_bottom li').click(function () {
        $('.nav_right').show();
        $('.nav_right_list1').hide();
        $('.nav_right_list2').show();
        $('.nav_right_list2').animate({left:-78})
    })

    //点击页面其它部分关闭右侧
    $('body').on('click',function (ev) {
        if($(ev.target.offsetParent).attr('class') != 'nav_left_top' && $(ev.target.offsetParent).attr('id') != 'left_content' && $(ev.target.offsetParent).attr('class') != 'nav_left_bottom'){
            $('.nav_right').hide();
        }
    })

    //右侧关闭按钮事件
    $('.nav_right_close').click(function () {
        $('.nav_right').hide();
    })

    // services (运动俱乐部等)  最小尺寸点击切换状态
    var iSnow = $('.services_btn').width();
    var iScont = 0;
    $(".services_btn_prev").click(function () {
        if(iScont<=0){
            iScont = 0;
            $(this).hide();
        }else {
            iScont--;
            $('.services ul').animate({'margin-left':-iSnow*iScont})
            $(this).show();
            $(".services_btn_next").show();
        }

    })
    $(".services_btn_next").click(function () {
        if(iScont>=2){
            $(this).hide();
        }else {
            iScont++;
            $('.services ul').animate({'margin-left':-iSnow*iScont})
            console.log(iScont)
            $(".services_btn_prev").show();
        }

    })

    //产品列表 缩到最小时 点击切换状态

    var iPnow = $('.product2').width();
    var iPcont = 0;
    $(document).on('click','#product2_dian_prev',function(){
    	if(iPcont<=0){
            iPcont = 0;
        }

        iPcont--;
        iSild('.product2_cont_box',this,'#product2_dian_next','0')
        console.log(iPnow)
    })
    
    $(document).on('click','#product2_dian_next',function(){
    	if(iPcont>=1){
            iPcont = 1;
        }

        iPcont++;
        iSild('.product2_cont_box',this,'#product2_dian_prev','-100%')
       
        console.log(iPnow)

    })
    
    
  
    
   

    //产品列表 缩到中间尺寸布局转换时 点击切换状态

   var box = null;
    $('.product_right_dian_prev').each(function(){
    	box= $(this).parent().siblings();
    	sibling = $(this).siblings();
    	$(this).click(function(){
    		if(iPcont<=0){
	            iPcont = 0;
	        }
	
	        iPcont--;
	        iSild(box,this,sibling,'0')
	    	})
    })
    
    $('.product_right_dian_next').each(function(){
    	box= $(this).parent().siblings();
    	sibling = $(this).siblings();
    	
    	$(this).click(function(){
    		
	    	if(iPcont>=1){
	            iPcont = 1;
	        }
	
	        iPcont++;
	        iSild(box,this,sibling,'-100%')
	       
	    })
    	
    })
  
	
	//点击小圆点滑动切换方法
	function iSild($box,$btn,$otherBtn,iLeft){
    	$($box).animate({'margin-left':iLeft})
    	if($($btn).hasClass('active')){
    		return;
    	}else{
    		$(this).addClass('active')
    		$($otherBtn).removeClass('active')
    	}
        
        
    }
	
	//运动建议 轮播切换   有问题
	slidePic({
    	wrap:$('.movement_cont'),
        list:$('.movement_cont').find(".movement_cont_box"),
        btn: $('.movement_cont').find(".movement_cont_dian a"),
        prev:$('.movement_cont_dian').find('.movement_cont_btn_prev'),
        next:$('.movement_cont_dian').find('.movement_cont_btn_next')
    })
    
	
   //ajax读取商品信息
 

        
    $.get("json/product.json",function (data) {
        proData = data; //所有的商品

        $(".product1 .product_right_box ul").each(function () {
           var index =  $(this).index(".product1 .product_right_box ul")+1;

            var str = "";
            for(var i=(index-1);i<index;i++){
                    
                   str+='<a href="detils.html?pId='+proData[i].pId+'">'+
                                '<li class="pro_price">'+
									'<div class="pro_price_bg">'+
                                        '<b>￥'+proData[i].price+'</b>'+
                                        '<span>.00</span>'+
                                    '</div>'+
                                '</li>'+
                                '<li class="pro_img">'+
                                    '<img src="'+proData[i].img+'">'+
                                '</li>'+
                                '<li class="pro_txt">'+
                                    proData[i].name+
                                '</li>'+
                                '<li class="pro_brand">'+
                                    '<span>DOMYOS</span>'+
                                    '<span class="pro_evaluate">'+
	                                   '<i class="fa fa-star"></i>'+
	                                   '<i class="fa fa-star"></i>'+
	                                   '<i class="fa fa-star"></i>'+
	                                   '<i class="fa fa-star"></i>'+
	                                   '<i class="fa fa-star-half-empty"></i>'+
	                               '</span>'+
                                '</li>'+
                            '</a>'
	            }
	
	            $(this).html(str)


	        });
	
	        $("img.lazy").lazyload({
	            effect : "fadeIn"
	        });
		});


});