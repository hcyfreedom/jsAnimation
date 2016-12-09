/**
 * Created by Acer on 2016/12/9.
 */
window.onload = function () {
    var outer = document.getElementById('outer');
    var timer = null;

    outer.onmousemove = function () {
        startMove(0);
    };
    outer.onmouseout = function () {
        startMove(-200)
    }

    startMove = function (target) {
        clearInterval(timer);
       timer  = setInterval(function () {
           var speed = (target - outer.offsetLeft)/20;
            speed = speed>0?Math.ceil(speed):Math.floor(speed);
          if (outer.offsetLeft == target){
                clearInterval(timer);
          }else {
              outer.style.left = outer.offsetLeft + speed +'px';
          }
        },30)
    }
}