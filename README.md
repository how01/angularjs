angularjs
=========

angular front client build
实验室项目
1)项目架构 angularjs nodejs(nodemon) /ruby

2)项目目录介绍：
myApp
├── bin/
│   ├── startServer nodemon 启动脚本
│
├── node_modules/   nodejs 依赖模块 
│   
├── public/         应用目录
│   ├── custom_modules/ 应用模块
│   │   ├── header/
│   │   ├── footer/
│   │   └── form/         
│   ├── app.js          应用脚本        
│   └── data/ 数据服务
│
├── views/
├── routes/
└── Gruntfile.js 自动构建脚本



3)启动方式 cd myApp/ && grunt
