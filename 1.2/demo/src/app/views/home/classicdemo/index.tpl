<div class="module" style="margin-top: 30px; margin-left: 20px;">
    <span class="tip">app/views/home/classicdemo/index.tpl</span>
<pre style="margin-bottom: 0; font-size: 16px;">
    你好 {{root.classic.name}}<br>
<br>
    你刚赢了 ￥{{ root.classic.value}}<br>
<br>
{{#if root.classic.in_ca}}
    嗯，税后 ￥{{ root.classic.taxed_value}}<br>
{{/if}}
<br>
</pre>
</div>