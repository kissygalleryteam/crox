KISSY.add(function(S, require) {

    return function(root) {
        var $s = '';
        $s += "<div class=\"module\" style=\"margin: 30px 10px;\">\n    <span class=\"tip\">app/views/home/content.tpl</span>\n    <h3>Crox经典示例的Kissy再现</h3>\n    " +
            require('./classicdemo/index.tpl')(root) +
            "\n</div>";
        return $s;
    };

});