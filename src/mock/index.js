import Mock from "mockjs";

const { newsList } = Mock.mock({
  "newsList|75": [
    {
      id: "@increment",
      title: "@ctitle()",
      content: "@cparagraph(5,10)",
      img_url: "@image('50*50','#FF83FA','#FCFCFC','png','mono')",
      add_time: "@date(yyyy-MM-dd hh:mm:ss)",
    },
  ],
});

console.log(newsList);
var getQuery = (url, name) => {
  console.log(url, name);
  const index = url.indexOf("?");
  if (index !== -1) {
    const queryStrArr = url.substr(index + 1).split("&");
    for (var i = 0; i < queryStrArr.length; i++) {
      const itemArr = queryStrArr[i].split("=");
      console.log(itemArr);
      if (itemArr[0] === name) {
        return itemArr[1];
      }
    }
  }
  return null;
};

// 定义获取新闻列表的数据
// /api/get/news?pageinde1&pagesize=10
//正则的写法才能获取url参数
Mock.mock(/\/api\/get\/news/, "get", (options) => {
  // 获取传递参数pageindex，pagesize
  const pageindex = getQuery(options.url, "pageindex");
  const pagesize = getQuery(options.url, "pagesize");
  console.log(pageindex);
  console.log(pagesize);
  const start = (pageindex - 1) * pagesize;
  const end = pagesize * pageindex;
  const totalPage = Math.ceil(newsList.length / pagesize);

  //  pageindex:1 pagesize:10 返回0-9条数据  2-10-（10-19） 3-10（20-29）
  // 数据的起始位置：（pageindex-1）*pagesize 结束位置：pageindex*pagesize
  const list = pageindex > totalPage ? [] : newsList.slice(start, end);
  return {
    status: 200,
    message: "获取新闻列表成功",
    list: list,
    total: totalPage,
  };
});

// 定义添加新闻的数据
Mock.mock("/api/add/news", "post", (options) => {
  const body = JSON.parse(options.body);
  console.log(body);
  newsList.push(
    Mock.mock({
      id: "@increment",
      title: body.title,
      content: body.content,
      img_url: "@image('50*50','#FF83FA','#FCFCFC','png','mono')",
      add_time: "@date(yyyy-MM-dd hh:mm:ss)",
    })
  );
  return {
    status: 200,
    message: "添加成功",
    list: newsList,
    total: newsList.length,
  };
});

// 定义删除新闻
Mock.mock("/api/delete/news", "post", (options) => {
  console.log(options);
  const body = JSON.parse(options.body);
  console.log(body);
  const index = newsList.findIndex((item) => {
    return item.id === body.id;
  });
  newsList.splice(index, 1);
  console.log(index);
  return {
    status: 200,
    message: "添加成功",
    list: newsList,
    total: newsList.length,
  };
});
console.log(Mock);
