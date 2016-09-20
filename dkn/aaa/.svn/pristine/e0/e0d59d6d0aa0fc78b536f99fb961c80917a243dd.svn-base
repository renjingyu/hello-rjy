
var cookie = {
    fnGet:function (name) {
        var str = document.cookie; //获取到所有的cookie
        var arr = str.split("; "); //["a=5","b=10","user=sdsd"]

        for(var i=0;i<arr.length;i++){
            // arr[i]  //"a=5" "b=10"  "user=sdsd"
            var arr2 = arr[i].split("="); //"a=5" => ["a","5"]
            //"a=5"
            if(arr2[0] == name){ //对比，看看等号前面的值是否等于name
                return decodeURIComponent(arr2[1]) ;  ///如果等于name就返回等号后面的值
            }
        }
    },
    fnSet:function (name,value,path,time) {
        var oDate = new Date();
        oDate.setDate(oDate.getDate()+time);
        console.log(oDate.getDate());
        //如果没有传路径path 或者time，那么无效的路径和时间会变成默认的是路径和时间

        console.log(encodeURIComponent(value))
        var str = ""+name+"="+encodeURIComponent(value)+";path="+path+";expires="+oDate;
        console.log(str);
        document.cookie = str;
    },
    fnRemove:function (name,path) {
        setCookie(name,"",path,-1);
    }
};
