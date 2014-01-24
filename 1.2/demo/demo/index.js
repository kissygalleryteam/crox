KISSY.use('app/views/home/index', function(S, Home) {
    var data = {
        corp: 'alibaba MUX',
        username: 'zhifu.wzf',
        year: new Date().getFullYear(),
        mode: developing ? '开发模式，未翻译，依赖Crox，请求多' : '发布模式，已翻译，不再依赖Crox，请求少',
        classic: {
            name: "Chris",
            value: 10000,
            taxed_value: 10000 - (10000 * 0.4),
            in_ca: true
        }
    };
    Home.init('#page', data);
})