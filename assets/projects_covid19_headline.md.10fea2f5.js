import{_ as e,o as i,c as a,a as t}from"./app.28b0de2b.js";const u=JSON.parse('{"title":"COVID-19 新冠疫情实时数据和政策展示","description":"","frontmatter":{},"headers":[],"relativePath":"projects/covid19/headline.md","lastUpdated":1685008100000}'),l={name:"projects/covid19/headline.md"},r=t('<h1 id="covid-19-新冠疫情实时数据和政策展示" tabindex="-1">COVID-19 新冠疫情实时数据和政策展示 <a class="header-anchor" href="#covid-19-新冠疫情实时数据和政策展示" aria-hidden="true">#</a></h1><p>项目线上演示地址：<a href="http://brucecai55520.gitee.io/covid19" target="_blank" rel="noreferrer">http://brucecai55520.gitee.io/covid19</a></p><p>接口主要使用的是天行数据和聚合数据提供的 API，前者没有跨域问题，后者有</p><ul><li>病毒信息、国内疫情数据、新闻热点：<a href="https://www.tianapi.com/apiview/169" target="_blank" rel="noreferrer">https://www.tianapi.com/apiview/169</a></li><li>国内所有省份疫情数据（即那个疫情地图的数据）：<a href="http://iwenwiki.com/wapicovid19/all.php" target="_blank" rel="noreferrer">http://iwenwiki.com/wapicovid19/all.php</a></li><li>国外疫情数据：<a href="https://www.tianapi.com/apiview/176" target="_blank" rel="noreferrer">https://www.tianapi.com/apiview/176</a></li><li>疫情出行政策（包括城市 ID 的获取、具体政策详情等）：<a href="https://www.juhe.cn/docs/api/id/566" target="_blank" rel="noreferrer">https://www.juhe.cn/docs/api/id/566</a></li></ul><p>项目要点记录：</p><ul><li>封装 axios</li><li><code>src</code>路径起别名</li><li>配置代理</li><li><code>background-size</code> 属性</li><li><code>props</code> 对象和数组默认值写法</li><li>组件封装</li><li><code>this.$slots.default</code></li><li><a href="https://cn.vuejs.org/v2/api/#Vue-use" target="_blank" rel="noreferrer">Vue.use()</a>：插件的定义和使用</li><li>render 写 JSX 语法 - <a href="https://cn.vuejs.org/v2/guide/render-function.html#JSX" target="_blank" rel="noreferrer">渲染函数&amp;JSX</a></li><li>echarts 的基本使用</li><li>echarts 地级市地图的 <code>map</code> 必须为中文</li><li>echarts 世界地图名称映射关系，只有名称和它内置的一样才能正确显示地图。而获取的数据的地点名称和它内置的不同，因此需要做一个映射</li><li>vue-awesome-swiper 轮播图插件的使用</li><li>vant 组件库按需引入</li><li>axios 合并发送请求</li><li>text-overflow ；display: -wekit-box- ； white-space: nowrap&amp;pre-wrap 属性</li><li>flex: none 含义</li><li>点击更多展示所有文字思路：先判断字符串长度是否大于 90，是则截取前 90 个字符展示，同时显示更多按钮；点击按钮则把内容替换为完整的文字</li><li>window.location.href 代替 a 标签</li><li>parentNode 和 parentElement 区别</li><li>flex 实现图片居中</li><li>打包路径问题 publicPath，不然部署有 Provisional headers are shown 错误；还有国内地图点击的跳转路径也是</li><li>聚合数据 API 生产环境无法使用，跨域问题，jsonp 的使用</li><li>报错：<code>Mixed Content: The page at &#39;https://brucecai55520.gitee.io/covid19/#/&#39; was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint &#39;http://iwenwiki.com/wapicovid19/all.php&#39;. This request has been blocked; the content must be served over HTTPS.</code> HTTPS 页面里动态的引入 HTTP 资源,比如引入一个 js 文件,会被直接 block 掉的。部署 Gitee Pages 时不能使用 HTTPS，要使用 HTTP</li></ul>',6),o=[r];function c(n,p,s,d,h,w){return i(),a("div",null,o)}const f=e(l,[["render",c]]);export{u as __pageData,f as default};
