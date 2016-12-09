/**
 * Created by Acer on 2016/12/9.
 */
window.onload = function () {
    var Li  = document.getElementById('li1');
        Li.onmousemove = function () {
            startMove(Li,'width',600,function () {
                startMove(Li,'height',300,function () {
                    startMove(Li,'opacity',100)
                })
            });
        }

        Li.onmouseout =function () {
            startMove(Li,'opacity',10,function () {
                startMove(Li,'height',100,function () {
                    startMove(Li,'width',100)
                })
            })
        }

}