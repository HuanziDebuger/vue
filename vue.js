//vuejs的相关指令
1.new 
new vue({});//执行一个vue
2.设置三个属性 data、methods、watch
new vue({
	data:{ //页面用到的一下数据data
		a:1,
		b:"apple",
		c:'banana'
	},
	methods:function(){//页面用的到方法
		console.log(this.a);
	},
	watch:function(newval,oldval){//事件监听方法
		console.log(newval,oldval);
	}
});
3.常用指令 通过html指令渲染页面
  v-text 渲染数据
  v-html 渲染html
  v-if 判断是否显示
  v-on 绑定事件
  v-for 循环渲染
 