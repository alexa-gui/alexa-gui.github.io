const t=JSON.parse(`{"key":"v-3d2e458d","path":"/zh/Python/06-tuple.html","title":"tuple","lang":"zh-CN","frontmatter":{"title":"tuple","date":"2024-01-20T13:40:10.000Z","author":"Alexa","isOriginal":true,"category":["Python"],"tag":["web","typora"],"icon":"coding","sticky":false,"star":false,"article":true,"timeline":true,"image":false,"navbar":true,"sidebarIcon":true,"headerDepth":5,"comment":true,"lastUpdated":true,"description":"1. 创建元组 使用小括号创建 里面的元素用逗号隔开 tup = (2, \\"x\\", \\"y\\") print(tup, type(tup)) # output (2, 'x', 'y') &lt;class 'tuple'&gt;","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://axagiii.com/Python/06-tuple.html"}],["meta",{"property":"og:url","content":"https://axagiii.com/zh/Python/06-tuple.html"}],["meta",{"property":"og:site_name","content":"Alexa的博客"}],["meta",{"property":"og:title","content":"tuple"}],["meta",{"property":"og:description","content":"1. 创建元组 使用小括号创建 里面的元素用逗号隔开 tup = (2, \\"x\\", \\"y\\") print(tup, type(tup)) # output (2, 'x', 'y') &lt;class 'tuple'&gt;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://axagiii.com/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-02-07T07:35:50.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"tuple"}],["meta",{"property":"article:author","content":"Alexa"}],["meta",{"property":"article:tag","content":"web"}],["meta",{"property":"article:tag","content":"typora"}],["meta",{"property":"article:published_time","content":"2024-01-20T13:40:10.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-07T07:35:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"tuple\\",\\"image\\":[\\"https://axagiii.com/\\"],\\"datePublished\\":\\"2024-01-20T13:40:10.000Z\\",\\"dateModified\\":\\"2024-02-07T07:35:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Alexa\\"}]}"]]},"headers":[{"level":2,"title":"1. 创建元组","slug":"_1-创建元组","link":"#_1-创建元组","children":[]},{"level":2,"title":"2. 列表和元组的对比","slug":"_2-列表和元组的对比","link":"#_2-列表和元组的对比","children":[]},{"level":2,"title":"3. 元组是不可变的","slug":"_3-元组是不可变的","link":"#_3-元组是不可变的","children":[]},{"level":2,"title":"4. 元组的取值和分片操作","slug":"_4-元组的取值和分片操作","link":"#_4-元组的取值和分片操作","children":[]},{"level":2,"title":"5. 元组的特点","slug":"_5-元组的特点","link":"#_5-元组的特点","children":[]},{"level":2,"title":"6. 元组的拼接","slug":"_6-元组的拼接","link":"#_6-元组的拼接","children":[]},{"level":2,"title":"7. 元组的排序","slug":"_7-元组的排序","link":"#_7-元组的排序","children":[{"level":3,"title":"7.1 小试牛刀 「根据现有的知识排序」","slug":"_7-1-小试牛刀-「根据现有的知识排序」","link":"#_7-1-小试牛刀-「根据现有的知识排序」","children":[]},{"level":3,"title":"7.2 使用 sorted()","slug":"_7-2-使用-sorted","link":"#_7-2-使用-sorted","children":[]}]},{"level":2,"title":"8. zip()","slug":"_8-zip","link":"#_8-zip","children":[]}],"git":{"createdTime":1707291350000,"updatedTime":1707291350000,"contributors":[{"name":"alexa-gui","email":"zg319@cam.ac.uk","commits":1}]},"readingTime":{"minutes":3.5,"words":1049},"filePathRelative":"zh/Python/06-tuple.md","localizedDate":"2024年1月20日","excerpt":"<h2> 1. 创建元组</h2>\\n<ul>\\n<li>使用小括号创建</li>\\n<li>里面的元素用逗号隔开</li>\\n</ul>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code>tup <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">(</span><span class=\\"token number\\">2</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"x\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"y\\"</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token keyword\\">print</span><span class=\\"token punctuation\\">(</span>tup<span class=\\"token punctuation\\">,</span> <span class=\\"token builtin\\">type</span><span class=\\"token punctuation\\">(</span>tup<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\n\\n<span class=\\"token comment\\"># output</span>\\n<span class=\\"token punctuation\\">(</span><span class=\\"token number\\">2</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'x'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'y'</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">&lt;</span><span class=\\"token keyword\\">class</span> <span class=\\"token string\\">'tuple'</span><span class=\\"token operator\\">&gt;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{t as data};
