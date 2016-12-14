// 安装cordova
npm install -g ionic cordova  
$ ionic start ionic2-test --v2  
// 安装 ionic2-test
cd ionic2
// 启动
ionic2 serve

1. ionic serve 启动服务 浏览器浏览
2. ionic build ios/android 创建ios和android应用

3. 新添加的组件，服务，指令，管道，都要添加到 app/app.module.ts中，和ng2是一样的。
4. 组件中的图片放置在目录 根目录/www/assets/img文件夹中   通过<img src="assets/img/favicon.ico" />引用

5. 如果报以下错误： No component factory found for "组件名称" 因为在app.module.ts中entryComponents中没有注册组件，和ng2不同的地方就是，ng2中只需要在declarations总注册组件。
