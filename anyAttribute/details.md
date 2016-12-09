对于offsetxxx有个bug，就是一旦加了除开width和height之外的其他属性，动画效果就会出现出乎意料的效果。<br>
具体啥效果？我的姐，自己写写看看吧。<br>
所以一句话，前面的例子都是懵的，俺们要少用offs这种。要用style.left，用parseInt把字符串转为数值。<br>
所以咯，要用到函数getStyle,自己定义的哦<br>
然后就是 变化的部分当做参数传进去的原则  obj.style[attr] = icur + speed +'px';
<br>
然后关于width这种需要int的数 和 opacity这种需要 float的数，判断一下属性值是什么，然后给相应的方法就OK。<br>
也为了避免float之后，计算机取数不咋精确这个问题，加个Math.round四舍五入一下