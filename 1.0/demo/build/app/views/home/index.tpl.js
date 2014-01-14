KISSY.add('app/views/home/index.tpl', function(S) {

var croxFn = function anonymous(root) {
var obj = { '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;' };
	function $htmlEncode(s) {
		return String(s).replace(/[<>&"]/g, function(c) {
			return obj[c];
		});
	}var $s = '';function $print(s){ $s += s; }	$print("<div class=\"module\" style=\"margin: 20px auto; width: 980px;\">    <span class=\"tip\">app/views/home/index.tpl</span><div class=\"module\" style=\"border-bottom: 1px solid #CCC; margin: 30px 10px;\">    <span class=\"tip\">app/partials/header/index.tpl</span>    <h2>让Crox与Kissy成为好基友<span style=\"color: red;\">(");
	$print($htmlEncode(root.mode));
	$print(")</span> <div class=\"module\" style=\"float: right; font-size: 16px; margin-top: -10px; padding-top: 16px;\">    <span class=\"tip\">user.tpl</span>    用户：<a href=\"#nogo\">");
	$print($htmlEncode(root.username));
	$print("</a></div> </h2></div><div class=\"module\" style=\"margin: 30px 10px;\">    <span class=\"tip\">app/views/home/content.tpl</span>    <h3>Crox经典示例的Kissy再现</h3>    <div class=\"module\" style=\"margin-top: 30px; margin-left: 20px;\">    <span class=\"tip\">app/views/home/classicdemo/index.tpl</span><pre style=\"margin-bottom: 0; font-size: 16px;\">    你好 ");
	$print($htmlEncode(root.classic.name));
	$print("<br><br>    你刚赢了 ￥");
	$print($htmlEncode(root.classic.value));
	$print("<br><br>");
	if(root.classic.in_ca){
		$print("    嗯，税后 ￥");
		$print($htmlEncode(root.classic.taxed_value));
		$print("<br>");
	}
	$print("<br></pre></div></div><div class=\"module\" style=\"text-align: center; margin: 10px;\">    <span class=\"tip\">app/partials/footer/index.tpl</span>    Copy right @ ");
	$print($htmlEncode(root.corp));
	$print(" ");
	$print($htmlEncode(root.year));
	$print("</div></div>");
return $s;
};

return {
    fn: croxFn
};

});