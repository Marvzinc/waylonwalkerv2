(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{D5pO:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return v})),n.d(e,"HotTipsQuery",(function(){return w}));var r=n("q1tI"),a=n.n(r),o=n("vOnD"),s=n("Bl7J"),i=(n("6kNP"),n("8npG"),n("sPse"),n("kD0k")),c=n.n(i),l=(n("ls82"),n("UyA5")),u=n("2O3R"),p=n("YGJC");function f(t,e,n,r,a,o,s){try{var i=t[o](s),c=i.value}catch(l){return void n(l)}i.done?e(c):Promise.resolve(c).then(r,a)}function m(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var o=t.apply(e,n);function s(t){f(o,r,a,s,i,"next",t)}function i(t){f(o,r,a,s,i,"throw",t)}s(void 0)}))}}var d=o.a.div.withConfig({displayName:"HotTips__HotTipsStyle",componentId:"wlb024-0"})(["display:flex;margin:auto;flex-direction:column;justify-content:flex-start;align-items:center;align-content:center;justify-self:center;min-height:100vh;width:calc(min(1800px,90vw));input{margin-left:1rem;}img{margin:auto;}.post-cards{display:flex;flex-wrap:wrap;justify-content:center;}.post-wrapper:{display:inline-flex;}.robots{display:None;opacity:0;visibility:hidden;}"]),h=function(t){var e,n;function r(e){var n;return(n=t.call(this,e)||this).componentDidMount=m(c.a.mark((function t(){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:window.addEventListener("scroll",n.handleScroll);case 1:case"end":return t.stop()}}),t)}))),n.incrementMaxEntries=function(){n.setState({numPosts:n.state.numPosts+n.state.incrementBy})},n.handleScroll=function(){var t="innerHeight"in window?window.innerHeight:document.documentElement.offsetHeight,e=document.body,r=document.documentElement,a=Math.max(e.scrollHeight,e.offsetHeight,r.clientHeight,r.scrollHeight,r.offsetHeight)-n.state.incrementOffset;t+window.pageYOffset>=a&&n.incrementMaxEntries()},n.setSearch=function(t){return n.setState({search:t},(function(){return n.SearchWithFuse()}))},n.SearchWithFuse=function(){var t=new p.a(n.state.posts,{keys:["node.html"]});""===n.state.search?n.setState({filteredPosts:n.state.posts}):n.setState({filteredPosts:t.search(n.state.search).map((function(t){return t.item}))})},n.state={posts:e.posts,filteredPosts:e.posts,search:"",numPosts:3,incrementBy:9,incrementOffset:2e3},n}return n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,r.prototype.render=function(){var t=this;return a.a.createElement(d,null,a.a.createElement("form",{action:""},a.a.createElement("label",{htmlFor:"search"},"Search:",a.a.createElement("input",{"aria-label":"Search",type:"text",name:"search",value:this.state.search,id:"search",onChange:function(e){return t.setSearch(e.target.value)}}))),a.a.createElement(u.a,{className:"post-cards"},this.state.filteredPosts.slice(0,this.state.numPosts).map((function(t,e){return a.a.createElement("div",{key:t.node.id,className:"post-wrapper",style:{display:"inline-flex"}},a.a.createElement(l.a,{key:t.node.id,frontmatter:t.node.frontmatter,html:t.node.html,content:t.node.plainText,fileAbsolutePath:t.node.fileAbsolutePath}))}))))},r}(r.Component);var y=o.a.div.withConfig({displayName:"hot-tips__HotTipsStyles",componentId:"xoziav-0"})([""]),v=function(t){var e,n;function r(){return t.apply(this,arguments)||this}return n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,r.prototype.render=function(){var t=this.props.data.allMarkdownRemark.edges;return a.a.createElement(s.a,null,a.a.createElement(y,null,a.a.createElement("h1",null,"Hot Tips"),a.a.createElement(h,{posts:t})))},r}(a.a.Component),w="328022329"}}]);
//# sourceMappingURL=component---src-pages-hot-tips-js-0f8f04b55c66bd5cad05.js.map