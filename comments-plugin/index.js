// 以去掉bundle中的/*!  */注释为demo
module.exports = class RemoveCommentsPlugin {
    apply(compiler) {
        // emit：webpack将要输出目录时执行
        compiler.hooks.emit.tap('RemoveCommentsPlugin', compliation => {
            // console.log(compliation.assets);
            // compliation此次打包上下文
            for (const name in compliation.assets) {
                // name文件名称
                // console.log(name);
                // console.log(compliation.assets[name].source()); // 输出文件内容
                if (name.endsWith('.js')) {
                    const content = compliation.assets[name].source();
                    const noComments = content.replace(/(\/\*\!.*\*\/\!)/g, '!');
                    // 返回source size，webpack内部要求
                    compliation.assets[name] = {
                        source: () => noComments,
                        size: () => noComments.length
                    }
                }
            }
        });
    }
}