KISSY.add(function(S, require) {

    return function(root) {
        var $s = '';
        $s += "<div class=\"module\" style=\"margin: 20px auto; width: 980px;\">\n    <span class=\"tip\">app/views/home/index.tpl</span>\n\n" +
            require('../../partials/header/index.tpl')(root) +
            "\n\n" +
            require('./content.tpl')(root) +
            "\n\n" +
            require('app/partials/footer/index.tpl')(root) +
            "\n\n</div>";
        return $s;
    };

});