/**
 * Created by Acer on 2016/12/9.
 */
window.onload = function () {
    var aLi = document.getElementsByTagName("li");
    //var timer  = null;

    for (i = 0;i<aLi.length;i++){
        aLi[i].timer = null;
        aLi[i].onmousemove = function () {
            startMove(this,400)
        };
        aLi[i].onmouseout = function () {
            startMove(this,200)
        }
    }
    
    function startMove(obj,target) {
        clearInterval(obj.timer);

        obj.timer = setInterval(function () {
            var speed = (target - obj.offsetWidth)/10;
            speed = speed>0?Math.ceil(speed):Math.floor(speed);

            if (obj.offsetWidth == target){
                clearInterval(obj.timer);
            }else {
                obj.style.width = obj.offsetWidth + speed +'px';
            }
        },30)
    }
}