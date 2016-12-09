
/**
 * Created by Acer on 2016/12/9.
 */
window.onload = function () {
    var oLi = document.getElementById('li1');

    oLi.onmousemove = function () {
        startMove(oLi,{width:400,height:300,opacity:100})
    }
    oLi.onmouseout = function () {
        startMove(oLi,{width:100,height:100,opacity:30})
    }
}