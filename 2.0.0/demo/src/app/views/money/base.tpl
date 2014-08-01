你好 {{root.name}}

你刚赢了 ￥{{ root.money.value}}

{{#if root.in_ca}}

嗯，税后 ￥{{ root.money.taxed_value}}

{{include ./submit.tpl}}

{{/if}}