const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const { dirname } = require("path");

module.exports={
    entry:"./src/index.js",
    output:{
        filename:"main.js",
        path:path.resolve(__dirname,"build")
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:path.join(__dirname,"public","index.html")
        }),
    ],
    devServer:{
        static:{
            directory:path.join(__dirname,"build"),
        },
        port:8080,
    },
    module:{
        rules:[
            {
                test:/\.(js)$/,
                exclude:/node-modules/,
                use:["babel-loader"],
            },
        ],
    },
    resolve:{
        extensions:["*",".js"]
    }
};