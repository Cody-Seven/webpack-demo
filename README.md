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

- 样式需要style-loader和css-loader处理,css-loader可以把js的模块化思想应用到css，所有的类名，动画名默认都只作用域当前模块。modules配置为true时开启模块化模式，localIdentName: '[name]__[local]--[hash:base64:5]'配置可以实现类名不同。

- css预处理器: postcss可以自动为css代码适应不同浏览器的css前缀。除了postcss外，添加一个autoprefixed的插件。在根目录新建postcss.config.js

- 添加sass-loader，但是greeter.scss没生效。

- plugins插件，loader可以说是打包构建过程中用来处理源文件的jsx scss less，一次处理一个。插件是对整个构建过程起作用。eg：添加一个版权声明的插件,config文件中需要引入，new。添加之后js文件头部会自动添加代码

- HtmlWebpackPlugin插件，会依据简单的index.html自动饮用你打包后的js文件的新index.html，js添加hash时非常有用。