KISSY.use('app/views/home/index', function(S, Home) {
    var data = {
        corp: 'alibaba MUX',
        username: 'zhifu.wzf',
        year: new Date().getFullYear(),
        mode: developing ? 'kissy模式，未翻译，依赖Crox' : 'kissyfn模式，已翻译，不再依赖Crox',
        classic: {
            name: "Chris",
            value: 10000,
            taxed_value: 10000 - (10000 * 0.4),
            in_ca: true
        }
    };
    Home.init('#page', data);
})