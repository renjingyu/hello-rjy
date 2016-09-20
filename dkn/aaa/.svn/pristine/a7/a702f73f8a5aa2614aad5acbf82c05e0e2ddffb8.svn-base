/**
 * Created by hasee on 2016/9/12.
 */
function focusPic($btnLi,$picLi,$wrap) {
    var iNow =0;
    var len = $picLi.length;
    var timer = null;

    /*初始的设置*/
    $btnLi.removeClass("active").eq(iNow).addClass("active");
    $picLi.hide().eq(iNow).show();

    autoPlay();//自动轮播

    $wrap.hover(function () {
        clearInterval(timer)
    },function () {
        autoPlay()
    });

    /*小按钮的事件*/
    $btnLi.mouseover(function () {
        if($(this).hasClass("active")){return}
        iNow = $(this).index();

        changeView()
    });

    function autoPlay() {
        timer= setInterval(toNext,2000)
    }

    function toNext () {
        /*iNow++;
         iNow%=len;*/
        iNow =++iNow%len;
        changeView()
    }

    function changeView() {
        $btnLi.removeClass("active").eq(iNow).addClass("active");
        $picLi.stop().fadeOut().eq(iNow).stop().fadeIn()
        //console.log(iNow)
    };
}


/*function slidePic($wrap,$list,$btn,$prev,$next) {
    /!*划动轮播*!/
    /!* var $wrap = $(".ad-wrap");//壳子
     var $list = $(".ad-list"); //ul
     var $btn = $(".ad-btn li"); //按钮
     var $prev =  $(".ad-prev");
     var $next =  $(".ad-next");*!/

    var iNow = 0;
    var timer = null;
    var len = $btn.length;
    var iW = $wrap.width();


    autoPlay()//自动播放

    $btn.click(function () {
        iNow = $(this).index();
        changeView()
    });
    $prev.click(function () {
        iNow--;
        if(iNow<0){
            iNow = len-1;
        }
        changeView()
    });
    $next.click(toNext);
    $wrap.hover(function () {
        clearInterval(timer)
    },function () {
        autoPlay()
    });

    function toNext() {
        iNow++;
        if(iNow>=len){
            iNow=0;
        }
        changeView()
    }
    function autoPlay() {
        timer = setInterval(toNext,2000)
    }


    function changeView() {
        $btn.removeClass("active").eq(iNow).addClass("active");
        $list.stop().animate({"left":-iNow*iW})
    }
}*/
/*$wrap,$list,$btn,$prev,$next,autoPlay*/

function slidePic(option) {
    /*划动轮播*/
     var $wrap =  option.wrap;//壳子
     var $list = option.list; //ul
     var $btn =  option.btn; //按钮
     var $prev =  option.prev;
     var $next =  option.next;

    var iNow = 0;
    var timer = null;
    var len = $btn.length;
    var iW = $wrap.width();


    option.autoPlay && autoPlay()//如果需要自动，就自动播放

    $btn.click(function () {
        iNow = $(this).index();
        changeView()
    });
    $prev && $prev.click(function () {
        iNow--;
        if(iNow<0){
            iNow = len-1;
        }
        changeView()
    });
    $next && $next.click(toNext);

    /*如果需要轮播，再添加方法*/
    option.autoPlay && $wrap.hover(function () {
        clearInterval(timer)
    },function () {
        autoPlay()
    });

    function toNext() {
        iNow++;
        if(iNow>=len){
            iNow=0;
        }
        changeView()
    }
    function autoPlay() {
        timer = setInterval(toNext,2000)
    }


    function changeView() {
        $btn.removeClass("active").eq(iNow).addClass("active");
        $list.stop().animate({"left":-iNow*iW})
    }
}
