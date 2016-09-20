$(function () {

    var $chAll = $(".ch-all");
    var $chItem = $(".ch-item");
    var $ok = $(".ok");
    var $cartBar = $("#cart-bar");

    var $allNum = $(".all-num");
    var $allSum = $(".all-sum");

    var iT = $ok.offset().top;

    $chAll.on("click",function () {
        /*判断当前是否选中*/
        if($(this).prop("checked")){
            $chItem.prop("checked",true);
            $chAll.prop("checked",true)
        }else {
            $chItem.prop("checked",false);
            $chAll.prop("checked",false)
        }
        getSum()
    });
    //事件委托
    $(document).on("click",".ch-item",function () {
        //console.log($(this).prop("checked"))
        if(!$(this).prop("checked")){
            //如果当前没有选中，就干掉全选
            $chAll.prop("checked",false)
        }else {

            var allCh = true;//假设被全选
            //判断所有的选项是否都选中
            $(".ch-item").each(function () {
                if(!$(this).prop("checked")){
                    //如果有一个没有被选中
                    allCh =false
                }
            });
            if(allCh){
                $chAll.prop("checked",true)
            }

        }
        getSum()

    });
    
        console.log($cartBar);
    $(window).on("scroll load",function () {
        var iH = $(this).scrollTop()+$(this).height();

        console.log("ok:"+iT);
        console.log("iH:"+iH);
        if(iH<iT){
            $cartBar.addClass("fixed")
        }else {
            $cartBar.removeClass("fixed")
        }
    })



    /*加减*/
    $(document).on("click",".num-minus",function () {

        var oP =$(this).parents(".cart-item");
        var num =oP.find(".num-text");
        var price = oP.find(".item-price");
        var sum = oP.find(".item-sum");

        var val = num.val();
        if(val<=1){
            val=2
        }
        num.val(--val);
        //金额
        sum.html(val*price.html())
        getSum()

    });
    $(document).on("click",".num-plus",function () {

        var oP =$(this).parents(".cart-item");
        var num =oP.find(".num-text");
        var price = oP.find(".item-price");
        var sum = oP.find(".item-sum");

        var val = num.val();

        num.val(++val);//可能要判断库存

        //金额
        sum.html(val*price.html())
        getSum()
    });
    
    
    function getSum() {
        var allNum = 0;
        var allSum = 0;
        $(".ch-item:checked").each(function () {
            var oP = $(this).parents(".cart-item");
            var num =oP.find(".num-text");
            var sum = oP.find(".item-sum");
            allNum+=parseFloat(num.val());
            allSum+=parseFloat(sum.html());
        });
        $allNum.html(allNum);
        $allSum.html(allSum);

        
    }

    //console.log(fnBase.accAdd(0.2,0.1));
    //console.log(0.1+0.2)
});