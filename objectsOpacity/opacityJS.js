/**
 * Created by Acer on 2016/12/9.
 */
window.onload = function () {
    var warps = document.getElementsByClassName("warp");
    //var timer = null;
    //var alpha = 50;
    var speed = 1;
    // console.log(warps)
    // console.log(warps.length)

    for (i=0;i<warps.length;i++){
        warps[i].timer = null;
        warps[i].alpha = 30;
        warps[i].onmousemove = function () {
            startMove(this,100);
        };
        warps[i].onmouseout = function () {
            startMove(this,50);
        }
    }

    startMove =function (obj,target) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            if (obj.alpha>target){
                speed = -10;
            }else {
                speed = 10;
            }

            if (obj.alpha == target){
                clearInterval(obj.timer);
            }else {
                obj.alpha += speed;
                obj.style.opacity = obj.alpha/100;
            }
        },30)
    }

}