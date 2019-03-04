// 1、导航管理
//
//   const news_router = require("../libs/newsRouter");
//
//   http://www.douban.com/news       mod_news
//     http://www.douban.com/news/list
//     http://www.douban.com/news/artical
//     http://www.douban.com/news/323

http://163.com/news/guoji
http://163.com/news/bendi
http://163.com/news/junshi

http://163.com/news/

const news_router = require("../libs/newsRouter");

app.use("/news",news_router)
