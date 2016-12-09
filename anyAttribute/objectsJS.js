/**
 * Created by Acer on 2016/12/9.
 */
window.onload = function () {
    var aLi = document.getElementsByTagName("li");
    //var timer  = null;

    for (i = 0;i<aLi.length;i++){
        aLi[i].timer = null;
        aLi[i].onmousemove = function () {
            startMove(this,'width',400)//写成height也可以呀
        };
        aLi[i].onmouseout = function () {
            startMove(this,'width',200)
        }
    }
}


//测试opacity
document.getElementById('item').onmousemove = function () {
    startMove(this,'opacity',100);
};
document.getElementById('item').onmouseout = function () {
    startMove(this,'opacity',50);
};
    function getStyle(obj,attr) {
        if (obj.currentStyle){
            return obj.currentStyle[attr];//针对ie
        }else {
            return getComputedStyle(obj,false)[attr];//针对其他
        }
}



var alpha = 30;
    function startMove(obj,attr,target) {
        clearInterval(obj.timer);

        obj.timer = setInterval(function () {

            var icur = 0;
            if (attr == 'opacity'){
                icur = Math.round(parseFloat(getStyle(obj,attr))*100);
            }else {
                icur = parseInt(getStyle(obj,attr));
            }
            var speed = (target -icur)/10;
            speed = speed>0?Math.ceil(speed):Math.floor(speed);

            if (icur == target){
                clearInterval(obj.timer);
            }else {
                if (attr =='opacity'){
                    obj.style.opacity = (icur + speed)/100;
                }else {
                    obj.style[attr] = icur + speed +'px';
                }
            }
        },30)
    }
