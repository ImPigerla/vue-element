# vue-elementUI

Vue + ElementUI整合webpack构建工具的项目。

根据实际开发情况，实际上，又配置如下一些必用或者常用的功能：

1. 支持SCSS编译及全局变量引用（甚至mixins）；
1. 支持autoprefixer；
1. 支持eslint配置

## 如何开始

```js
npm install

// 开发模式
npm run dev

// 生产模式
npm run build
```

## 目录结构

    vue-element-project
    ├── build(构建)
    │   ├── webpack.base.config.js (基础webpack配置文件)
    │   ├── webpack.dev.config.js（开发版webpack配置文件）
    │   └── webpack.prod.config.js （生产版webpack配置文件）
    ├── config (配置)
    │   └── index.js (系统/打包相关的配置)
    ├── src(源文件)
    │   ├── components (组件)
    │   ├── filters（过滤器）
    │   ├── images (图片)
    │   │   └── favicon.ico （网站小图标）
    │   ├── mixins (混合)
    │   ├── modules (模块/工具/函数库)
    │   ├── router (vue-router路由)
    │   ├── store(vuex状态管理)
    │   ├── style (样式，全局&局部)
    │   │   ├── variables (变量文件)
    │   │   │   └── system-variable.scss (系统变量)
    │   │   └── index.scss (样式统一出口，可选)
    │   └── views (页面文件)
    │   └── views (页面文件)
    │       └── app.vue（入口文件）
    └─── .eslintrc.js（eslint配置文件）
