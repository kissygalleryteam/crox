KISSY.add(function(S, require) {

    return function(root) {
        var $s = '';
        $s += "<div class=\"module\" style=\"border-bottom: 1px solid #CCC; margin: 30px 10px;\">\n    <span class=\"tip\">app/partials/header/index.tpl</span>\n    <h2>让Crox与Kissy成为好基友<span style=\"color: red;\">(";
        $s += KISSY.escapeHtml(root.mode);
        $s += ")</span> " +
            require('./user/index.tpl')(root) +
            " </h2>\n</div>";
        return $s;
    };

});