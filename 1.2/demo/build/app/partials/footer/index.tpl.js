KISSY.add(function(S, require) {

    return function(root) {
        var $s = '';
        $s += "<div class=\"module\" style=\"text-align: center; margin: 10px;\">\n    <span class=\"tip\">app/partials/footer/index.tpl</span>\n    Copy right @ ";
        $s += KISSY.escapeHtml(root.corp);
        $s += " ";
        $s += KISSY.escapeHtml(root.year);
        $s += "\n</div>";
        return $s;
    };

});