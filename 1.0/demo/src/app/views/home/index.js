KISSY.add('app/views/home/index', function(S, Node, Tmpl) {
    return {
        init: function(dom, data) {
            var html = Tmpl.fn(data);
            Node.one(dom).html(html);
        }
    }
}, {
    requires: [
        'node',
        'app/views/home/index.tpl'
    ]
});