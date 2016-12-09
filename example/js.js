
/**
 * Created by Acer on 2016/12/9.
 */
window.onload = function () {
    var oMove = document.getElementById('move');
    var aList = oMove.getElementsByTagName('a');
    for (var  i = 0; i<aList.length;i++){
        aList[i].onmousemove = function () {
            var _this = this.getElementsByTagName('i')[0];//当前a下面的i，虽然只有一个，但是还是相当于取出来一串，所有要取第一个。
            startMove(_this,{top:-50,opacity:0},function () {
                _this.style.top = 25 +'px';
                startMove(_this,{top:20,opacity:100});
            })
        }
    }
}