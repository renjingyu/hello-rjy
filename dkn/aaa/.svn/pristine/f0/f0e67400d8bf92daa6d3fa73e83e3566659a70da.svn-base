/**
 * Created by hasee on 2016/9/12.
 */
$(function () {
    focusPic($("#banner-btn li"),$("#banner-list li"),$("#banner-wrap"));



    $(".ad-wrap").each(function () {
    /*    slidePic(
            $(this),
            $(this).find(".ad-list"),
            $(this).find(".ad-btn li"),
            $(this).find(".ad-prev"),
            $(this).find(".ad-next")
        );*/

        slidePic({
            wrap:$(this),
            list:$(this).find(".ad-list"),
            btn: $(this).find(".ad-btn li"),
            prev:$(this).find(".ad-prev"),
            next: $(this).find(".ad-next"),
            autoPlay:true
        })
    });

   /* slidePic($(".ad-wrap"),$(".ad-list"),$(".ad-btn li"),$(".ad-prev"),$(".ad-next"));*/
    var proData = [];
    $.get("json/product.json",function (data) {
        proData = data; //所有的商品

        var str = "";
        for(var i=0;i<4;i++){
            //  i=0;i<4    ;i++
            //  i=4;i<8    ;i++
            str+='<li>' +
                '<a href="###"><img src="'+proData[i].img+'" alt=""></a>' +
                '<div class="pad5">' +
                '<p><a  href="###">'+proData[i].name+'</a></p>' +
                '<p class="ovfl">' +
                '<em class="fl font-b font14 price-color">'+proData[i].price+'</em>' +
                '<span class="fr color99">销量:'+proData[i].sellerNum+'</span>' +
                '</p>' +
                '</div>' +
                '</li>'
        }
        $(".sct-list").eq(0).html(str);




        var str = "";
        for(var i=4;i<8;i++){
            //  i=0;i<4    ;i++
            //  i=4;i<8    ;i++
            str+='<li>' +
                '<a href="###"><img src="'+proData[i].img+'" alt=""></a>' +
                '<div class="pad5">' +
                '<p><a  href="###">'+proData[i].name+'</a></p>' +
                '<p class="ovfl">' +
                '<em class="fl font-b font14 price-color">'+proData[i].price+'</em>' +
                '<span class="fr color99">销量:'+proData[i].sellerNum+'</span>' +
                '</p>' +
                '</div>' +
                '</li>'
        }
        $(".sct-list").eq(1).html(str);



        var str = "";
        for(var i=8;i<12;i++){
            //  i=0;i<4    ;i++
            //  i=4;i<8    ;i++
            str+='<li>' +
                '<a href="###"><img src="'+proData[i].img+'" alt=""></a>' +
                '<div class="pad5">' +
                '<p><a  href="###">'+proData[i].name+'</a></p>' +
                '<p class="ovfl">' +
                '<em class="fl font-b font14 price-color">'+proData[i].price+'</em>' +
                '<span class="fr color99">销量:'+proData[i].sellerNum+'</span>' +
                '</p>' +
                '</div>' +
                '</li>'
        }
        $(".sct-list").eq(2).html(str);


        /*$(".sct-list").each(function () {
           var index =  $(this).index(".sct-list")+1;
            console.log(index);

            var str = "";
            for(var i=4*(index-1);i<4*index;i++){
                //  i=0;i<4    ;i++
                //  i=4;i<8    ;i++
                str+='<li>' +
                        '<a href="###"><img src="'+proData[i].img+'" alt=""></a>' +
                        '<div class="pad5">' +
                            '<p><a  href="###">'+proData[i].name+'</a></p>' +
                            '<p class="ovfl">' +
                                '<em class="fl font-b font14 price-color">'+proData[i].price+'</em>' +
                                '<span class="fr color99">销量:'+proData[i].sellerNum+'</span>' +
                            '</p>' +
                        '</div>' +
                    '</li>'
            }

            $(this).html(str)


        })*/
    })


});