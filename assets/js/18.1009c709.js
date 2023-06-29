(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{403:function(n,s,a){"use strict";a.r(s);var t=a(52),e=Object(t.a)({},(function(){var n=this,s=n.$createElement,a=n._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h1",{attrs:{id:"mysql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql"}},[n._v("#")]),n._v(" MySQL")]),n._v(" "),a("h2",{attrs:{id:"windows-离线安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#windows-离线安装"}},[n._v("#")]),n._v(" windows 离线安装")]),n._v(" "),a("ul",[a("li",[n._v("download: https://downloads.mysql.com/archives/community/")]),n._v(" "),a("li",[n._v("blog: https://www.cnblogs.com/yangyezhuang/p/16896972.html")])]),n._v(" "),a("h3",{attrs:{id:"安装步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装步骤"}},[n._v("#")]),n._v(" 安装步骤")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v("1. 下载离线安装包\n2. 配置环境变量\n    - 打开 ‘环境变量’，在系统变量内新建一个 MYSQL_HOME 变量\n    ```javascript\n\n    MYSQL_HOME  D:\\MYSQL\n\n    ```\n    - 在系统变量内找到其中的 Path变量，双击打开，再最后加上 %MYSQL_HOME%\\bin\n3. 新建 my.ini 文件 [D:\\MYSQL\\my.ini]\n    ```ini\n        [mysql]\n\n        # 设置mysql客户端默认字符集\n        default-character-set=utf8\n\n        [mysqld]\n\n        #设置3306端口\n        port = 3306\n\n        # 设置mysql的安装目录\n        basedir=D:\\MySQL\n\n        # 设置mysql数据库的数据的存放目录\n        datadir=D:\\MySQL\\data\n\n        # 允许最大连接数\n        max_connections=200\n\n        # 服务端使用的字符集默认为8比特编码的latin1字符集\n        character-set-server=utf8\n\n        # 创建新表时将使用的默认存储引擎\n        default-storage-engine=INNODB\n    ```\n4. 以管理员身份打开cmd（win+x 后按 a 键）切换至 bin 文件夹内\n    ```\n        mysqld --initialize-insecure --user=mysql\n    ```\n5. 安装服务\n    ```\n        mysqld -install\n\n        ## mysqld -remove\n    ```\n")])])]),a("h3",{attrs:{id:"进入-mysql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进入-mysql"}},[n._v("#")]),n._v(" 进入 MySQL")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v("1. 启动 MySQL 服务\n    > net start mysql\n2. 登录\n    > mysql -u root -p\n3. 设置密码\n    > ALTER USER 'root'@'localhost' IDENTIFIED BY '123456';\n4. 停止服务\n    > net stop mysql\n")])])]),a("h3",{attrs:{id:"express-连接-mysql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#express-连接-mysql"}},[n._v("#")]),n._v(" Express 连接 Mysql")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v("1. 生成 Express 项目\n```js\n    mkdir examples && cd example\n\n    express --no-view express-app\n\n    cd express-app && npm install\n\n    nodemon run start\n```\n\n2. 安装 mysql 模块\n```js\n    npm install mysql\n```\n\n3. 创建 sql 初始化文件\n    1. 创建 database\n    ```js\n        // 根目录下创建 database 文件夹\n        mkdir database\n\n        // 创建 db.config.js\n        const database = 'local' // 数据库名称\n        const config = {\n            host: '127.0.0.1',\n            port: 3306,\n            user: 'root',\n            password: 'root'\n        }\n\n        module.exports = {\n            database,\n            config\n        }\n    ```\n    2. 创建表初始化 SQL\n    ```js\n        name\n    ```\n4. \n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);