/**
 * Created by Administrator on 2015/11/23.
 */

/*var opt={
 aList:aList,
 aListImg:aListImg,//小图列表
 oPic:oPic,//大图列表
 oPicWrap:oPicWrap,//大图壳子
 oBlowPic:oBlowPic,//放大大图
 oBlowWrap:oBlowWrap,//放大大图壳子
 oMove:move,//大图壳子移动box
 prev,//小图列表按钮
 next,//小图列表按钮
 oUl,//小图滚动壳子
 aLi//小图滚动li列表
 num//小图显示的数量

 }*/
function fnBlowUp(opt,imgObj){

    var oSmImg = opt.oPicWrap;
    var oBgImg = opt.oBlowPic;
    var oWarp = opt.oBlowWrap;
    var oMoveMouse = opt.oMove;
    var src = opt.aListImg.eq(0)[0].src;
    var iNow = 0;
    var len = 0,w= 0,l=0;
    var ml = parseInt(opt.aLi.css('marginLeft'))||0;
    var mr = parseInt(opt.aLi.css('marginRight'))||0;
    w = mr+ml;
    w+=opt.aLi.outerWidth();
    len = opt.aLi.length;

    opt.aLi.removeClass('active').eq(iNow).addClass('active');
    opt.oBlowPic[0].src=imgObj.href1[iNow];
    opt.oPic[0].src = imgObj.href2[iNow];

    opt.aLi.on('click',function(){
        iNow = $(this).index();
        changeView()
    });

    if(opt.aListImg.length>opt.num){
        opt.prev.show();
        opt.next.show();
        fnSlide (opt.prev,opt.next,opt.oUl)
    };

    oSmImg.on('mouseover',function(e){
        oWarp.show();
        oMoveMouse.show();

        var disx = oBgImg.width()-oWarp.width();
        var disy = oBgImg.height()-oWarp.height();
        var e = e||window.event;
        var l=e.pageX-oSmImg.offset().left-oMoveMouse.width()/2;
        var t=e.pageY-oSmImg.offset().top-oMoveMouse.height()/2;

        oSmImg.on('mousemove',function(e){
            var e = e||window.event;
            var l=e.pageX-oSmImg.offset().left-oMoveMouse.width()/2;
            var t=e.pageY-oSmImg.offset().top-oMoveMouse.height()/2;

            if(l<0)
            {
                l=0;
            }
            else if(l>oSmImg.width()-oMoveMouse.width())
            {
                l=oSmImg.width()-oMoveMouse.width();
            }

            if(t<0)
            {
                t=0;
            }
            else if(t>oSmImg.height()-oMoveMouse.height())
            {
                t=oSmImg.height()-oMoveMouse.height();
            }
            oMoveMouse.css({'top':t,'left':l});
            var percentX=l/(oSmImg.width()-oMoveMouse.width());
            var percentY=t/(oSmImg.height()-oMoveMouse.height());
            oBgImg.css({'top':-percentY*disy,'left':-percentX*disx});
        });

    });
    oSmImg.on('mouseout',function(){
        oMoveMouse.hide();
        oWarp.hide();
        oSmImg.off('mousemove');
    });
    function changeView(){
        opt.aLi.removeClass('active').eq(iNow).addClass('active');
        opt.oBlowPic[0].src=imgObj.href1[iNow];
        opt.oPic[0].src = imgObj.href2[iNow];

        if(iNow===0){
            opt.oUl.stop().animate({'left':0},400)
        }else if(iNow===len-1){
            opt.oUl.stop().animate({'left':-(len-opt.num)*w},400)
        };

        if(iNow<=Math.ceil(opt.num/2)-1){
            opt.oUl.stop().animate({'left':0},400)
        }else if(len-1-iNow<= Math.ceil(opt.num/2)-1){
            opt.oUl.stop().animate({'left':-(len-opt.num)*w},400)
        } else  {
            var over = iNow-Math.ceil(opt.num/2)+1;
            opt.oUl.stop().animate({'left':-w*over},400)
        }
    }

    function fnSlide (oPrev,oNext,oUl) {
        oUl.css('width',w*len);
        oPrev.click(function(){
            iNow=iNow-1<0?len-1:iNow-1;
            changeView();
        });
        oNext.click(function(){
            iNow=iNow>=len-1?0:iNow+1;
            changeView();
        });
    }
}


