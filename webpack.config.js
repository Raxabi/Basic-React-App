// I prefer to use ESM syntax but for webpack.config.js file I need __dirname, that arent disponible by default using ESM syntax
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

// Indicate to Webpack how to compile React or JSX Code (For TSX must install ts-loader)
const JavaScriptLoaderRules = {
    test: /\.js$/,
    loader: "babel-loader",
    options: {
        presets: [
            [
                "@babel/preset-react",
            ]
        ]
    }
}

// Indicate to webpack how to compile CSS Code
const CSSLoaderRules = {
    test: /\.css$/,
    use: [ "style-loader", "css-loader" ]
}

// Indicate to webpack some rules defined by plugins
const WebpackPlugins = [
        new HtmlWebpackPlugin({
            template: "public/index.html"
        })
    ]

module.exports = {
    // Indicate what file webpack must read (Webpack get as entry file index.js inside folder src in itself implicitily, so this property is optional)
    entry: "./src/index.js",

    // Indicate webpack what folder and filename must be the result of compile the project
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "main.source.js"
    },
    module: {
        rules: [
            JavaScriptLoaderRules,
            CSSLoaderRules
        ]
    },
    
    plugins: WebpackPlugins
}