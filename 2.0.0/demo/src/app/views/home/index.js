KISSY.add('app/views/home/index', function(S, Node, fn) {
    return {
        init: function(dom, data) {
            var html = fn(data);
            Node.one(dom).html(html);
        }
    }
}, {
    requires: [
        'node',
        'app/views/home/index.tpl'
    ]
});