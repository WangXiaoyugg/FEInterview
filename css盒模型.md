### CSS盒模型

一、谈谈你对CSS盒模型的认识？

- 基本概念: 标准模型 + IE模型？
标准模型
width : content
height: content
IE模型
width : content + padding +border
height : content + padding +border

标准模型 和 IE模型的区别 （高度和宽度的不同？）

CSS 如何设置这两种盒模型？
box-sizing: content-box; 标准
box-sizing: border-box; IE

- JS 如何设置获取盒模型对应的宽和高 ？

dom.style.width / height (只能取内联样式的宽高)
dom.currentStyle.width / height (只有IE支持)
window.getComputedStyle(dom).width/height (浏览器都支持)
dom.getBoundingClientRect().width/height (计算位置，bottom-top,right-left);

- 实例题 根据盒模型解释边距重叠？
父子边距重叠
高度 100px;
overflow:hidden; 110px 触发BFC;

[demo](http://js.jirengu.com/guyadeqake/2/edit)

BFC(边距重叠的解决方案)？
BFC 基本概念 块级格式化上下文 
IFC => 自己查询
BFC 原理 =>BFC 渲染的规则
1. BFC 元素的垂直方向边距发生重叠 demo 加容器创建bfc
2. BFC 区域不会与浮动元素的box重叠 
demo 布局一个float，一个元素不float重叠，bfc解决

3. BFC 区域是独立的容器，不影响外面的元素 demo 

4. BFC 计算区域的高度，浮动元素也会参与计算 
demo 子元素浮动，父容器塌陷，父元素加BFC4. BFC 计算区域的高度，浮动元素也会参与计算 demo


如何创建BFC
1. float值不为 none
2. position 值不为 static /relative
3. display 值inline / table／table-cell
4. overflow 值不为 visible

BFC 的使用场景
