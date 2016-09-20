/**
 * Created by hasee on 2016/9/12.
 */
$(function () {

    var pageRows = 10;
    var productData = [];
    var $proList = $(".sct-list");



    $.get("json/product.json",function (data) {
        console.log(data);
        productData = data;
        var pageCount =data.length/pageRows;//总共有多少页

        addData(1);

        $("#page-rows").createPage({
            pageCount:pageCount, //总共有多少页
            current:1,//当前第几页
            backFn:function (page) {
                //alert(page)当前跳转到的页码
                addData(page)
            }
        });

    });
    
    function addData(page) {
       // productData = 有45条数据的数组
        //page是页码
        //pageRows是每页显示多少条
        console.log("需要添加第"+page+"页的数据")

        //page =2
        //10
        var disNum = (page-1)*10;
        //需要给$proList里面添加数据
        var str = "";
        for(var i=0;i<pageRows;i++){
            if(!productData[disNum+i]){
                break
            }
            str+='<li>' +
                '<a href="###"><img src="'+productData[i+disNum].img+'" alt=""></a>' +
                '<div class="pad5">' +
                    '<p>' +
                        '<a  href="###">'+productData[i+disNum].name+'</a>' +
                    '</p>' +
                    '<p class="ovfl">' +
                        '<em class="fl font-b font14 price-color">'+productData[i+disNum].price+'</em>' +
                        '<span class="fr color99">'+productData[i+disNum].sellerNum+'</span>' +
                    '</p>' +
                '</div>' +
                '</li>'
        }

        $proList.html(str)

    }




   /* $("#page-rows").createPage({
        pageCount: proData.length/10,
        current: 1,
        backFn: function (page) {
            addData(page)
        }
    })*/





    /*var $list= $(".sct-list");
    var proData = [];
    $.get("json/product.json",function (data) {
        proData = data; //所有的商品
        addData(1)


        $("#page-rows").createPage({
            pageCount: proData.length/10,
            current: 1,
            backFn: function (page) {
                addData(page)
            }
        })

    })
    
    
    function addData(page) {
        page--;
        var str = "";
        for(var i=0;i<10;i++){

            str+='<li>' +
                '<a href="###"><img src="'+proData[page*10+i].img+'" alt=""></a>' +
                '<div class="pad5">' +
                '<p><a  href="###">'+proData[page*10+i].name+'</a></p>' +
                '<p class="ovfl">' +
                '<em class="fl font-b font14 price-color">'+proData[page*10+i].price+'</em>' +
                '<span class="fr color99">销量:'+proData[page*10+i].sellerNum+'</span>' +
                '</p>' +
                '</div>' +
                '</li>'
        }
        $list.html(str);
    }
*/

});