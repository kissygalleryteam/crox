KISSY.add('app/partials/header/user/index.tpl', function(S) {

var croxFn = function anonymous(root) {
var obj = { '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;' };
	function $htmlEncode(s) {
		return String(s).replace(/[<>&"]/g, function(c) {
			return obj[c];
		});
	}var $s = '';function $print(s){ $s += s; }	$print("<div class=\"module\" style=\"float: right; font-size: 16px; margin-top: -10px; padding-top: 16px;\">    <span class=\"tip\">user.tpl</span>    用户：<a href=\"#nogo\">");
	$print($htmlEncode(root.username));
	$print("</a></div>");
return $s;
};

return {
    fn: croxFn
};

});