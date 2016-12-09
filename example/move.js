/**
 * Created by Acer on 2016/12/9.
 */
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


function startMove(obj,json,fn) {
    clearInterval(obj.timer);

    obj.timer = setInterval(function () {
        var flag = true;//判断是否所有的运动都完成了。到达最终效果
   for (var attr in json){
        var icur = 0;
        if (attr == 'opacity'){
            icur = Math.round(parseFloat(getStyle(obj,attr))*100);
        }else {
            icur = parseInt(getStyle(obj,attr));
        }
        //2.算速度
       // var speed = 0;
        var speed = (json[attr] -icur)/10;
        speed = speed>0?Math.ceil(speed):Math.floor(speed);
        //检测停止
        if (icur != json[attr]){

           flag = false;

        }
            if (attr =='opacity'){
                obj.style.opacity = (icur + speed)/100;
            }else {
                obj.style[attr] = icur + speed +'px';
            }
   }
    if (flag){
        clearInterval(obj.timer);
        if (fn){
            fn();
        }
    }



    },30)
}
