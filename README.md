##   项目接口文档
   项目的本地地址为http://localhost:3000
### 首页
##### 推荐内容
api接口：/api/index_list/data 

请求类型：get

数据类型：Object {}

##### 运动户外
tabId:顶部栏目的id，page：渲染第几页的数据
api接口：/api/index_list/${tabId}/data/${page}

请求类型：get

数据类型：Object {}



#####   搜索接口（传值）
api接口：/api/goods/search

请求类型：get

请求参数：keyword（搜索"关键词";pprice和discount（连个排序方式，包含升序降序）
例子 /api/goods/search？keyword&pprice=desc

数据类型：Object {}


