KISSY.add(function(S, require) {

    return function(root) {
        var $s = '';
        $s += "<div class=\"module\" style=\"float: right; font-size: 16px; margin-top: -10px; padding-top: 16px;\">\n    <span class=\"tip\">user.tpl</span>\n    用户：<a href=\"#nogo\">";
        $s += KISSY.escapeHtml(root.username);
        $s += "</a>\n</div>";
        return $s;
    };

});