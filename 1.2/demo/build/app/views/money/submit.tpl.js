KISSY.add('app/views/money/submit.tpl', function(S) {

var croxFn = function anonymous(root) {
var obj = { '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;' };
	function $htmlEncode(s) {
		return String(s).replace(/[<>&"]/g, function(c) {
			return obj[c];
		});
	}var $s = '';function $print(s){ $s += s; }	$print("有钱啦！可是，你应该也要把银行卡乖乖交给");
	$print($htmlEncode(root.wife));
	$print("，悲剧啊！");
return $s;
};

return {
    fn: croxFn
};

});