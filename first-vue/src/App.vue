<template>
  <div id="app">
    <h1>{{title}}</h1>
    <h1 v-text="title"></h1>
    <!--v-html 不会渲染html标签-->
    <h1 v-html="html"></h1>
    <input v-model="newItem" @keyup.enter="addNewItems">
    <ul>
    <!--class="{这个是代表判断条件是否成立，然后输出class}"-->
      <li v-for="item in items" v-bind:class="{finished:item.isFinished}" v-on:click="toggleFinish(item)">
        {{item.label}}
      </li>
    </ul>
  </div>
</template>

<script>
import store from './store.js';//此处是es6调用文件方法
console.log(store);
export default {
  data(){ //此处是es6的写法，==function data(){}
    return {
      title:'this is todo list',
      html:'<p>this is html</p>',
      items:store.fetch(),//调用了store.js的方法
      className:'liClass',
      newItem:''
    }
  },
  methods:{
    toggleFinish:function(item){
      //console.log(item);
      item.isFinished=!item.isFinished;

    },
    addNewItems:function(){
      //console.log(this.newItem);
      this.items.push({
        label:this.newItem,
        isFinished:false

      })
      this.newItem='';
    }
  },
  watch:{
    items:{
      handler(items){
        store.save(items);
      },
      deep:true
      }
    
  }
}
//export default { 只支持一个export 
 // name: 'app'
//}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.finished{ color:#f00;}
</style>
