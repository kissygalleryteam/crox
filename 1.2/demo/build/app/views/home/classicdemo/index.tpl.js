KISSY.add('app/views/home/classicdemo/index.tpl', function(S) {

var croxFn = function anonymous(root) {
var obj = { '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;' };
	function $htmlEncode(s) {
		return String(s).replace(/[<>&"]/g, function(c) {
			return obj[c];
		});
	}var $s = '';function $print(s){ $s += s; }	$print("<div class=\"module\" style=\"margin-top: 30px; margin-left: 20px;\">    <span class=\"tip\">app/views/home/classicdemo/index.tpl</span><pre style=\"margin-bottom: 0; font-size: 16px;\">    你好 ");
	$print($htmlEncode(root.classic.name));
	$print("<br><br>    你刚赢了 ￥");
	$print($htmlEncode(root.classic.value));
	$print("<br><br>");
	if(root.classic.in_ca){
		$print("    嗯，税后 ￥");
		$print($htmlEncode(root.classic.taxed_value));
		$print("<br>");
	}
	$print("<br></pre></div>");
return $s;
};

return {
    fn: croxFn
};

});