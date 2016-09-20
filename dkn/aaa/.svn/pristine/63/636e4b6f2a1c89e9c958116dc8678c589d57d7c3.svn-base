$(function () {

     var url =  window.location.href;
    //console.log(url.split("?"))//数组
    //url.split("?")[1]//"pId=0020003"

   // console.log(url.split("?")[1].split("=")[1])//0020003
    var pId = fnBase.request("pId");
    //console.log(fnBase.request("timer"));
    $.get("json/product.json",function (data) {
        for(var i=0;i<data.length;i++){
            if(data[i].pId==pId){
                //找到和url里面pId一样的商品
                console.log(data[i].imgArray);

                //有imgArray就使用imgArray，没有的话就使用[data[i].img]（放在数组里面使用）

                var imgArray = data[i].imgArray||[data[i].img];
                console.log(imgArray);
                /*设置大图的src*/
                $blowUpImg.attr("src",imgArray[0])
                $bigPicWrap.find("img").attr("src",imgArray[0])

                /*设置列表图片的src*/
                var str = "";
                for(var j=0;j<imgArray.length;j++){
                    str+='<li><img src="'+imgArray[j]+'" ></li>'
                }

                $imgList.html(str)
            }
        }
    });



    var $bigPicWrap = $(".big-pic");
    var $moveBox = $(".move-box");
    var $blowUpWrap = $(".blowUp-pic");
    var $blowUpImg = $(".blowUp-pic img");
    var $imgList = $(".list-pic ul");



    var offsetT = $bigPicWrap.offset().top;
    var offsetL = $bigPicWrap.offset().left;



    /*列表图片点击事件*/
    $imgList.on('click',"img",function () {
        var src = $(this).attr("src");
        $bigPicWrap.find("img").attr("src",src);
        $blowUpImg.attr("src",src)
    });










    /*当鼠标移入图片的壳子时*/
    $bigPicWrap.mouseover(function () {
        $moveBox.show();
        $blowUpWrap.show();
    });

    /*当鼠标移出图片的壳子时*/
    $bigPicWrap.mouseout(function () {
        $moveBox.hide();
        $blowUpWrap.hide();
    });

    $bigPicWrap.mousemove(function (ev) {
        console.log(ev.pageX);
        var iL = ev.pageX-offsetL-50;
        var iT = ev.pageY-offsetT-50;

        if(iL<0){
            iL=0
        }else if(iL>200){
            iL=200
        }else {
            iL = iL
        }

        iT = iT<0?0:iT>200?200:iT;

        $moveBox.css({left:iL,top:iT})
        //iL 0-200
        //iT 0-200
        $blowUpImg.css({left:-iL*3/2,top:-iT*3/2})
    });




















    /*var $bigPicWrap = $(".big-pic");
    var $bigPic = $(".big-pic img");
    var $moveBox = $(".move-box");
    var $blowUpWrap = $(".blowUp-pic");
    var $blowUpPic = $(".blowUp-pic img");
    var $listPic= $(".list-pic img");
    var offsetL = $bigPicWrap.offset().left;
    var offsetT = $bigPicWrap.offset().top;

    $bigPicWrap.hover(function (ev) {
        $moveBox.show();
        $blowUpWrap.show()
    },function () {
        $moveBox.hide()
        $blowUpWrap.hide()
    });
    $bigPicWrap.mousemove(function (ev) {

        var  iL = ev.pageX-offsetL-50;
        var  iT = ev.pageY-offsetT-50;
        iL = iL<0?0:iL>200?200:iL;  //0-200
        iT = iT<0?0:iT>200?200:iT;  //0-200


        $moveBox.css({left:iL,top:iT})
        $blowUpPic.css({left:-iL*3/2,top:-iT*3/2})

    })*/
})