/**
 * Created by Acer on 2016/12/9.
 */
window.onload = function () {
    var warp = document.getElementById("warp");
    var timer = null;
    var alpha = 50;
    var speed = 1;
    warp.onmousemove = function() {
        startMove(100);
    };
    warp.onmouseout = function () {
        startMove(50);
    };

    startMove =function (target) {
        clearInterval(timer);
        timer = setInterval(function () {


            if (alpha>target){
                speed = -10;
            }else {
                speed = 10;
            }

            if (alpha == target){
                clearInterval(timer);
            }else {
                alpha += speed;
                warp.style.opacity = alpha/100;
            }
        },50)
    }

}