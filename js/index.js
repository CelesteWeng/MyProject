var pageList = $('#page_list');
var psList = $('#ps_list');
var picList = $("pic_list")
var jsList = $("js_list")
var activeList = $("active_list")

// 静态页面的数据

var pageDate = [{
        img_src: './img/page/sheji.png',
        title: '设计图还原',
        dome_src: 'https://woshihuasheng.github.io/qwe/index',
        num: '查看：50次',
        date: '2017/08/23',
        flag: '',
    },
    {
        img_src: './img/page/xiaomi.png',
        title: '小米商城官网',
        dome_src: 'https://woshihuasheng.github.io/xiaomi/index',
        num: '查看：36次',
        date: '2017/07/23',
        flag: '',
    },
    {
        img_src: './img/page/js.png',
        title: '建设银行首页',
        dome_src: 'https://woshihuasheng.github.io/js/index_js',
        num: '查看：40次',
        date: '2017/08/20',
        flag: '',
    },
    {
        img_src: './img/page/boot.png',
        title: '改版响应式网页',
        dome_src: 'https://woshihuasheng.github.io/xiangying/index',
        num: '查看：20次',
        date: '2017/08/28',
        flag: '',
    },    
    {
        img_src: './img/page/app.png',
        title: '基于vue.js移动端app',
        dome_src: 'https://woshihuasheng.github.io/app/index',
        num: '查看：30次',
        date: '2017/08/16',
        flag: '',
    },
    {
        img_src: './img/page/read.png',
        title: '网易云阅读首页',
        dome_src: 'https://woshihuasheng.github.io/yunyuedu/index',
        num: '查看：30次',
        date: '2017/07/16',
        flag: '',
    },
    {
        img_src: './img/page/pig.png',
        title: '小猪理财app_MUI',
        dome_src: 'https://woshihuasheng.github.io/pig/main',
        num: '查看：30次',
        date: '2017/07/26',
        flag: '',
    },
];

var newLi = ''
var isflag = 0; //用来判断是否为第一个li 是的话去掉margin_left;
for (var i = 0; i < pageDate.length; i++) {
    if (isflag % 4 == 0) {
        pageDate[i].flag = 'flag';
    }
    newLi += `
    <li class="` + pageDate[i].flag + `">
    <div class="page">
        <div class="pic">
            <img src="` + pageDate[i].img_src + `" alt="">
        </div>
        <p class="title">` + pageDate[i].title + `</p>
        <div class="dis">
            <p class="title2">` + pageDate[i].title + `</p>
            <a href="` + pageDate[i].dome_src + `" class="dome" target="_blank">在线演示</a>       
            <span class="num">` + pageDate[i].num + `</span>
            <span class="date">` + pageDate[i].date + `</span>
        </div>
    </div>
</li>
    `
    isflag++;
}
pageList.append(newLi) //插入节点