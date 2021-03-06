### Http协议类

- Http协议的主要特点
简单快速 资源的uri是固定的
灵活 http头完成不同数据结构的传输
无连接  连接一次断掉
无状态  服务端不能记住两次连接者的状态

- Http报文的组成部分
请求报文 
请求行  Http方法 url http 版本
请求头 key value
空行 服务端下面当请求体解析
请求体 数据部分

响应报文
状态行 协议 状态码 
响应头 key value
空行 浏览器下面当响应体解析
响应体 数据部分

- Http方法
get  获取资源
post 传输资源
put 更新资源
delete 删除资源
head 获取报文首部

- POST 和 GET 的区别
get 在浏览器会退是无害的，而post会再次提交请求 记住
get url地址可以被收藏 而post不可以
get 可以被浏览器主动缓存，而 post 不会，除非手动设置 记住
get 只能进行url编码，而post支持多种编码方式
get 请求参数会被完整保留在浏览器的历史记录里，而post中参数不会保留 记住
get url传送参数是又长度限制，而post没有限制 记住
get 只接受ASCII字符，而post没有参数的数据类型的限制
get 直接将参数暴露在url上，所以不能用来传递敏感信息，不安全，post没有
get 参数通过url传递，post 是在放在 Request body 中 记住

- HTTP 状态码
1xx : 指示信息 -请求 已接收，继续处理
2xx : 成功 - 表示请求已被成功接收
3xx : 重定向 - 要完成请求必须进行更进一步的操作
4xx : 客户端错误 - 请求有语法错误或请求无法实现
5xx : 服务器错误 - 服务器未能实现合法的请求

200 OK 客户请求成功
206 Partial Content : 客户发送一个带有Range头的GET请求，服务器完成了 （video/audio）
301 Move Permanently: 所请求的页面已经转移至新的url 永久
302 Found : 所请求的页面已经临时转移至新的url
304 Not Modified : 客户端有缓存的文档并发出了一个条件性的请求，告诉服务端原来缓存的文档还可以继续使用
400 Bad Request : 客户端请求有语法错误，不能被服务器所理解
401 Unauthorized : 请求未经授权，必须和WWW-Authenticate 报头域一起使用
403 Forbidden : 对被请求页面的访问禁止
404 Not Found : 请求资源不存在
500 Internal Server Error : 服务器发生不可预期的错误原来缓冲的文档还可以继续使用
503 Sever Unvailable : 请求为完成，服务器临时过载或宕机，一段时间后恢复正常

- 什么是持久连接
HTTP 1.1 版本
HTTP 协议采用 请求-应答 模式，当使用普通模式，非Keep-Alive模式，每个请求／应答 客户和服务器都要新建一个链接，完成后立即断开（http 协议为无连接的协议）

当使用 keep-Alive 模式 （持久连接／连接重用）时， keep-Alive 功能使得客户端到服务器端的连接持续有效，当出现对服务器后继请求时， keep-Alive 功能避免了建立或者重新连接

- 什么是管线化

没有持久连接
在某个连接上的消息传递类似于请求1 =》 响应1 =》 请求2 =》 响应2 =》 请求3 =》 响应3

在使用 持久连接的情况下 ，
某个连接上的消息就变成了类似这样
请求1 =》 请求2 =》 请求3 =》 响应1 =》响应2 =》响应3

```
管线化机制通过持久连接完成的，仅支持 HTTP／1.1 支持此技术
只有 GET 和 HEAD 请求可以进行管线化， 而POST则有所限制
只有初次创建连接时不应启动管线机制，因为对方的服务器不一定支持 HTTP／1.1 版本的协议
管线化不会影响响应到来的顺序，如果上面的例子所示，响应返回的顺序并未改变
HTTP／1.1 要求服务器支持管线化，但并不要求服务器也对响应进行管线化处理，只是要求对于管线化的请求不失败即可
由于上面提到的服务器端问题，开启管线化很可能并不会带来大幅度的性能提升，而且很多服务器端代理程序对于管线化的支持并不好，因此现代浏览器如 chrome 和 firefox 默认并未开启管线化支持
```









































