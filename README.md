angularjs<br>
=========<br>
<br>
angular front client build<br>
实验性项目<br>
1)项目架构 angularjs nodejs(nodemon) /ruby<br>
<br>
2)项目目录介绍：<br>
myApp<br>
├── bin/<br>
│   ├── startServer nodemon 启动脚本<br>
│<br>
├── node_modules/   nodejs 依赖模块 <br>
│   <br>
├── public/         应用目录<br>
│   ├── custom_modules/ 应用模块<br>
│   │   ├── header/<br>
│   │   ├── footer/<br>
│   │   └── form/      <br>   
│   ├── app.js          应用脚本        <br>
│   └── data/ 数据服务<br>
│
├── views/<br>
├── routes/<br>
└── Gruntfile.js 自动构建脚本<br>
<br>
<br>
<br>
3)启动方式 cd myApp/ && grunt
