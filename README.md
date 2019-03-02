- webpack在终端使用：webpack {entry file} {destination for bundled file} 这里webpack安装在目录下,entry file是入口文件。{destination for bundled file}是打包文件的存放路径。eg: node_modules/.bin/webpack app/index.js public/bundle.js 结果报错，找不到bundle.js，即使手动新建bundle.js不报错也会打包到dist下，由webpack版本造成。

- sourcemap可以帮助调试，通过devtool设置，一般可以采用eval-source-map，打包速度快。

- 本地服务器用webpack-dev-server插件，通过devServer设置,然后package.json中设置webpack-dev-server
      1. contentBase：默认回味跟文件夹提供本地服务器，想另外设置通过这个设置。
      2. port：端口，默认8080
      3. inline：true时，源代码改变自动刷新页面。
      4. historyApiFallback：在单页应用中，true时所有的跳转将指向index.html，依赖Html5 History Api

- Loaders可以让webpack有能力调用外部的脚本或工具，实现对不同格式的文件的处理，loader是在modules下配置：
      1. test：一个用以匹配loaders所处理的文件的拓展名的正则表达式。
      2. loader：loader名称。
      3. include/exclude：手动添加必须处理的文件或屏蔽不需要处理的文件。
      4. query：为loader提供其他选项。

- webpack1.*需要json-loader,2.*以上版本都不需要

- babel是一个编译js的平台，可以用最新的js代码，而不用管浏览器对新标准对支持程度。可以使用js进行拓展对语言，比如React对jsx。Babel是几个模块化对包，核心功能位于babel-core的npm中，一般还会用解析ES6的babel-preset-env包和解析jsx的babel-preset-react

- babel-preset-env 和 babel-preset-react配置env react失败了，换成@babel/preset-env和@babel/preset-react，配置'@babel/react', '@babel/env'，跑通。

- babel可以放在webpack.config.js中配置但是多了一般新建babelrc配置，webpack会自动调用。
