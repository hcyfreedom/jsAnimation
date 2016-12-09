在最开始的例子里面，可以看到，动画效果的变化是匀速的，没有快也没有慢。
<br>
所以找到的办法就是，speed不设置为固定值，而是靠目标值和offsetLeft之差来动态改变的。并且加个系数/10这种，效果更明显。<br>
但是造成一个不好的结果就是，left居然出现小数部分，为什么呢，因为 outer.style.left = outer.offsetLeft + speed +'px';<br>
所以，利用Math.ceil向上取整speed（speed>0时候），Math.floor向下取整speed。——总之，就是要取整
