# react-webpack-setup
Web Pack

- Web Pack is a bundler.
  [Parcel]
- Bundling is the process of bundle all resources files and configure a mapping for application.

Step-1
- Create a new folder for your react-application

            E:\react-webpack-app

- Open in VS Code
- Run the following command in Terminal

            > npm  init  -y

- This will add "package.json"  [meta data]
- Add the following folders into project

        a) public        [static resources - images, text, html..]
        b) src            [dynamic resources - css, js, ts, sass..]

- Add a following files into project

        public/index.html
        src/index.js

Step-2
- Download and Install all libraries required for React Application


> npm install webpack webpack-cli --save-dev
> npm install html-webpack-plugin --save-dev
> npm install --save-dev webpack-dev-server
> npm i @babel/core @babel/preset-env babel-loader --save-dev
> npm i react react-dom --save
> npm i @babel/preset-react --save-dev

Step-3  [https://webpack.js.org/]

- Create  Webpack Configuration file

            webpack.config.js

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "build"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "build"),
    },
    port: 8080,
  },
  module: {
      rules: [
        {
          test: /\.(js)$/,
          exclude: /node_modules/,
          use: ["babel-loader"],
        },
      ],
  },
  resolve: {
    extensions: ["*", ".js"],
  },
};


- Create a bable config fil

        .babelrc

{
    "presets": [
      "@babel/preset-env",
      ["@babel/preset-react", {
      "runtime": "automatic"
     }]
    ]
}


- Go to package.json

{
  "name": "react-webpack-app",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack --mode production",
    "start": "webpack serve --mode development"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@babel/core": "^7.21.0",
    "@babel/preset-env": "^7.20.2",
    "@babel/preset-react": "^7.18.6",
    "babel-loader": "^9.1.2",
    "html-webpack-plugin": "^5.5.0",
    "webpack": "^5.75.0",
    "webpack-cli": "^5.0.1",
    "webpack-dev-server": "^4.11.1"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  }
}

- Index.js

import React from "react";
import  {createRoot} from "react-dom/client";
import  { AppComponent  } from "./app.component";

const root = createRoot(document.getElementById("root"));
root.render(<AppComponent/>);


- AppComponent.js


export function AppComponent()
{
    return(
        <div>
            <h2>Welcome to React</h2>
            <p>Application Created with Web Pack</p>
        </div>
    )
}

- Index.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React-Webpack</title>
</head>
<body>
    <noscript>Please Enable JavaScript</noscript>
    <div id="root"></div>
</body>
</html>
