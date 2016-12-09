/**
 * Created by Acer on 2016/12/9.
 */
function getStyle(obj,attr) {
    if (obj.currentStyle){
        return obj.currentStyle[attr];//针对ie
    }else {
        return getComputedStyle(obj,false)[attr];//针对其他
    }
}

var alpha = 30;
function startMove(obj,attr,target,fn) {
    clearInterval(obj.timer);

    obj.timer = setInterval(function () {

        var icur = 0;
        if (attr == 'opacity'){
            icur = Math.round(parseFloat(getStyle(obj,attr))*100);
        }else {
            icur = parseInt(getStyle(obj,attr));
        }
        //2.算速度
        var speed = (target -icur)/10;
        speed = speed>0?Math.ceil(speed):Math.floor(speed);
        //检测停止
        if (icur == target){

            clearInterval(obj.timer);

            if(fn){
                fn();
            }
        }else {
            if (attr =='opacity'){
                obj.style.opacity = (icur + speed)/100;
            }else {
                obj.style[attr] = icur + speed +'px';
            }
        }
    },30)
}
