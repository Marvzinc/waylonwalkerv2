(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{yZlL:function(e,t,r){"use strict";r.r(t),r.d(t,"BlogPost",(function(){return h})),r.d(t,"BlogPostTemplate",(function(){return f})),r.d(t,"pageQuery",(function(){return w}));r("3nLz");var n=r("q1tI"),a=r.n(n),o=r("TJpk"),l=r.n(o),i=r("vOnD"),m=r("Wbzz"),c=r("Bl7J"),s=r("9eSz"),d=r.n(s),p=r("Tgqd");var u=i.a.div.withConfig({displayName:"blog-post__BlogPostWrapper",componentId:"t5wcn1-0"})(["display:flex;flex-direction:column;align-items:center;"]),g=i.a.div.withConfig({displayName:"blog-post__BlogPostStyles",componentId:"t5wcn1-1"})(["background:rgba(51,0,38,.13);background:hsla(234,33%,15%,0.66);overflow:hidden;display:block;margin:.2rem;max-width:1000px;width:95%;position:relative;margin:2rem 0;padding:1rem;border-radius:2px;box-shadow:.2rem .2rem 1rem rgba(0,0,0,.2);display:flex;flex-direction:column;color:whitesmoke;@media (max-width:700px){h1{font-size:2.5rem;}width:100%;margin:0rem;padding:.3rem;}a{color:#6F6BAE;text-decoration-color:#330026;text-decoration-color:goldenrod;}p>img{box-shadow:.2rem .2rem 1rem rgba(51,0,38,.4);max-width:1000px;width:95vw;align-self:center;justify-self:center;align-items:center;justify-items:center;margin:auto;}p:has(>img){margin:8rem;display:flex;justify-content:center;align-items:center;}p{}blockquote{color:#777;border-left:2px solid goldenrod;font-size:1rem;padding:1rem 0 1rem .5rem;margin:1.5rem 0;}hr{border-top:1px solid goldenrod;background:none;margin:1rem 2rem}h1{margin-top:5rem;}.tweet{display:flex;justify-content:flex-end;margin:1rem 0;}.tweet a{display:inline-block;border-radius:5px;padding:.5rem 1rem;background:#645FC4;color:#FEDD58;text-decoration:none;}"]),f=function(e){var t,r;function n(){return e.apply(this,arguments)||this}return r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.prototype.render=function(){var e=this,t=this.props,r=t.content,n=t.url,o=t.slug,i=t.description,c=t.title,s=t.cover,f=t.fluidCover,h=t.date,w=t.twitter_cover,y=void 0!==w?w.src:s.src,x="https://twitter.com/intent/tweet?text="+encodeURIComponent(c.slice(0,150))+"%0A%0A@waylonwalker%0A%0A"+n;return a.a.createElement(a.a.Fragment,null,a.a.createElement(l.a,{meta:[{name:"title",content:c+" | Waylon Walker"},{name:"description",content:i},{name:"og:title",content:c+" | Waylon Walker"},{name:"og:url",content:"https://waylonwalker.com"+o},{name:"og:article:published_time",content:h},{name:"og:article:modified_time",content:h},{name:"og:description",content:i},{name:"og:image",content:"https://www.waylonwalker.com"+y},{name:"twitter:title",content:c+" | Waylon Walker"},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:image",content:"https://www.waylonwalker.com"+y},{name:"twitter:description",content:i}]},a.a.createElement("title",null,c)),a.a.createElement(u,null,a.a.createElement(g,null,a.a.createElement(d.a,{fluid:f}),a.a.createElement("h1",{style:{textAlign:"right",zIndex:2},className:"blog title"},c),a.a.createElement("p",{style:{textAlign:"right",zIndex:2}},h),a.a.createElement("div",{className:"tweet"},a.a.createElement("a",{href:x},"🙌 Share this post on ",a.a.createElement(p.e,null))),a.a.createElement("hr",{style:{margin:"1rem 25% "}}),a.a.createElement("div",{ref:function(t){e.markdownContainer=t},dangerouslySetInnerHTML:{__html:r}}),a.a.createElement("hr",{style:{margin:"3rem 25% 0"}}),a.a.createElement("br",null),a.a.createElement("p",{style:{display:"flex",justify:"center",textAlign:"center",margin:"3rem auto"}},a.a.createElement("span",{role:"img","aria-label":""},"👀")," see an issue, edit this post on ",a.a.createElement("a",{href:"https://github.com/WaylonWalker/waylonwalkerv2/edit/main/src/pages"+o.slice(0,-1)+".md",alt:"edit post url",title:"edit this post"}," ",a.a.createElement(p.b,null)," GitHub")),a.a.createElement("p",{style:{display:"flex",justify:"center",margin:"auto",textAlign:"center",marginBottom:".5rem"}},"If you found value in this post ",a.a.createElement("br",null),"and want to send a tip."),a.a.createElement("p",{style:{display:"flex",justify:"center"}},a.a.createElement("a",{href:"https://www.buymeacoffee.com/bBdtMQO",target:"_blank",style:{display:"inline-block",margin:"auto"}},a.a.createElement("img",{src:"https://cdn.buymeacoffee.com/buttons/lato-violet.png",alt:"Buy Me A Coffee",style:{height:"51px",width:"217px",margin:"auto"}}))),a.a.createElement("div",{className:"tweet",style:{justifyContent:"center",flexDirection:"column",alignItems:"center",maxWidth:"300px",margin:"1rem auto",textAlign:"center"}},a.a.createElement("p",null,"If you want to show your support, non-monetarily"),a.a.createElement("a",{href:x},"🙌 Share this post on ",a.a.createElement(p.e,null)))),a.a.createElement("p",null,"Check out my other",a.a.createElement(m.Link,{to:"/blog",style:{margin:".2rem"}},"blogs"))))},n}(a.a.Component),h=function(e){var t=e.data.markdownRemark,r=null!==t.frontmatter.twitter_cover?t.frontmatter.twitter_cover.childImageSharp.fixed:null!==t.frontmatter.cover?t.frontmatter.cover.childImageSharp.fixed:"";return a.a.createElement(c.a,{description:t.frontmatter.description,title:t.frontmatter.title,keywords:t.frontmatter.tags,time:t.frontmatter.date,url:"https://waylonwalker.com"+t.frontmatter.path},a.a.createElement(f,{content:t.html,url:"https://waylonwalker.com"+t.frontmatter.path,slug:t.fields.slug,description:t.frontmatter.description,tags:t.frontmatter.tags,title:t.frontmatter.title,cover:null!==t.frontmatter.cover?t.frontmatter.cover.childImageSharp.fixed:"",fluidCover:null!==t.frontmatter.cover?t.frontmatter.cover.childImageSharp.fluid:"",twitter_cover:r,date:t.frontmatter.date,devto_url:t.frontmatter.devto_url,devto_id:t.frontmatter.devto_id}))};t.default=h;var w="115399708"}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-cd107e7acaccbb1379bd.js.map