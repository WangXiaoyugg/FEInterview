### dom事件类

- 基本概念：DOM事件的级别
dom0 element.onclick = function(){};
dom2 element.addEventListener('click',function(){},false);
dom3 element.addEventListener('keydown',function(){},false); 增加的了事件类型

- DOM事件模型
捕获 从上到下
冒泡 从下到上

- DOM事件流
第一解读是捕获 
第二阶段 目标阶段 事件通过捕获到达到目标对象
第三阶段冒泡 目标元素上传到window对象


- 描述DOM事件捕获的具体流程

捕获
window => document => html(document.documentElement) =>
body => 父级元素 => 目标元素
冒泡 和 捕获 顺序相反


- Event对象的常见应用

event.preventDefault() a标签阻止默认跳转
event.stopPropagation() 阻止冒泡

event.stopImmediatePropagation()
保证事件的优先级
一个按钮绑定 a,b click 事件 ， a的回调使用组织 b 事件的执行

event.currentTarget 当前所绑定的事件

event.taget 事件代理，当前被点击的元素

- 自定义事件
var eve = new Event('custom');
eve.addEventListener('custom',function(){
	console.log('custom');
})

ev.dispatchEvent(eve);
CustomEvent('name',obj);可带参数
