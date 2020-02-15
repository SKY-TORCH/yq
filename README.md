# 新型冠状病毒疫情实时动态省市地图

> 武汉加油，众志成城，共抗疫情
>贵州天衍炬恒科技有限公司

+ [贵州天衍炬恒科技有限公司](https://www.sky-torch.com)

非常感谢 shfshanyue的疫情代码，本仓库为Copy修改版，在原有基础上新增 ali-oss-pulish并重写了bucket上传代码，PS：上传代码中的Bucket信息为个人信息，需要修改
以下是原作者GitHub项目链接

+ [新型冠状病毒疫情实时动态省市地图](https://github.com/shfshanyue/2019-ncov)

## 快速开始

``` bash
# 获取数据
$ node scripts/build-origin.js

$ npm start
```

## 部署

使用 `github actions` 与 `alioss` 自动部署，使用 `github actions` 的定时任务每半个小时部署一次(为了获取最新数据)。

关于部署可以参考以下文章

+ [使用 AliOSS 部署及加速你的静态网站](https://github.com/shfshanyue/you-dont-need-vps/blob/master/deploy-fe-with-alioss.md)

配置OSS Bucket后，在scripts/ali-oss-uploader.js脚本中修改 参数

 id: 您的ID
 secret: 您的Secret秘钥
 region:  OSS区域
 bucket: 实例名称

## 数据来源

数据爬自丁香园，使用脚本 `build-origin.js` 获取数据。数据每半个小时爬取一次，直接注入到前端，因此对丁香园造成的压力很小。

另外，如果你需要更详细的数据，可以参考项目 [BlankerL/DXY-2019-nCoV-Crawler](https://github.com/BlankerL/DXY-2019-nCoV-Crawler)。


