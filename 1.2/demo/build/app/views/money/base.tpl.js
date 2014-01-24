KISSY.add('app/views/money/base.tpl', function(S) {

var croxFn = function anonymous(root) {
var obj = { '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;' };
	function $htmlEncode(s) {
		return String(s).replace(/[<>&"]/g, function(c) {
			return obj[c];
		});
	}var $s = '';function $print(s){ $s += s; }	$print("你好 ");
	$print($htmlEncode(root.name));
	$print("你刚赢了 ￥");
	$print($htmlEncode(root.money.value));
	if(root.in_ca){
		$print("嗯，税后 ￥");
		$print($htmlEncode(root.money.taxed_value));
		$print("有钱啦！可是，你应该也要把银行卡乖乖交给");
		$print($htmlEncode(root.wife));
		$print("，悲剧啊！");
	}
return $s;
};

return {
    fn: croxFn
};

});