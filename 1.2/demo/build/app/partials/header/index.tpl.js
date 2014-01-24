KISSY.add('app/partials/header/index.tpl', function(S) {

var croxFn = function anonymous(root) {
var obj = { '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;' };
	function $htmlEncode(s) {
		return String(s).replace(/[<>&"]/g, function(c) {
			return obj[c];
		});
	}var $s = '';function $print(s){ $s += s; }	$print("<div class=\"module\" style=\"border-bottom: 1px solid #CCC; margin: 30px 10px;\">    <span class=\"tip\">app/partials/header/index.tpl</span>    <h2>让Crox与Kissy成为好基友<span style=\"color: red;\">(");
	$print($htmlEncode(root.mode));
	$print(")</span> <div class=\"module\" style=\"float: right; font-size: 16px; margin-top: -10px; padding-top: 16px;\">    <span class=\"tip\">user.tpl</span>    用户：<a href=\"#nogo\">");
	$print($htmlEncode(root.username));
	$print("</a></div> </h2></div>");
return $s;
};

return {
    fn: croxFn
};

});