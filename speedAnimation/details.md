1、setInterval设置定时器<br>setInterval(function(){</br>//内容</br>},30)<br>
clearInterval()清除定时器timer。timer也就是上述函数。timer=set...<br>
方法开始的时候就清除一下timer。因为如果不清除的话，每一次鼠标事件都会触发timer，动画效果受影响。比如，后续变大速度有问题。
一句话，以防定时器叠加。<br><br>
2、offsetLeft与style.left的区别<br>
offsetLeft 获取的是相对于父对象的左边距;<br>
left 获取或设置相对于 具有定位属性(position定义为relative)的父对象的左边距<br>
style.left 返回的是字符串，如28px，offsetLeft返回的是数值28，如果需要对取得的值进行计算，
还用offsetLeft比较方便。<br><br>
3、在两个function长得很像的时候，挑出不同的地方，作为参数传进去。//啊嘞，感觉是面向对象哎 哈哈哈<br>
速度值有正有负，正直就是往右，负值往左。<br><br>
4、最后精简一下，把速度值也封装起来。如果offsetLeft大于target，那么应该往左移动，speed为负值。反之，往右移动，正值。
<br>//酱紫虽然感觉是精简了，但是其实，调用的时候，灵活度下降。<br><br>
5、最后思考一下，我用的鼠标事件的节点，为什么是outer，而不是inner。<br><br>
<h3>考试大法好哇！！考完面向对象，嗯呢，比没学之前好很多呢！！</h3>