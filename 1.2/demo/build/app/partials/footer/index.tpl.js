KISSY.add('app/partials/footer/index.tpl', function(S) {

var croxFn = function anonymous(root) {
var obj = { '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;' };
	function $htmlEncode(s) {
		return String(s).replace(/[<>&"]/g, function(c) {
			return obj[c];
		});
	}var $s = '';function $print(s){ $s += s; }	$print("<div class=\"module\" style=\"text-align: center; margin: 10px;\">    <span class=\"tip\">app/partials/footer/index.tpl</span>    Copy right @ ");
	$print($htmlEncode(root.corp));
	$print(" ");
	$print($htmlEncode(root.year));
	$print("</div>");
return $s;
};

return {
    fn: croxFn
};

});