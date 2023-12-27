const n=JSON.parse('{"key":"v-1dcd066f","path":"/Python/03-numeric-type.html","title":"Numeric Type","lang":"en-US","frontmatter":{"title":"Numeric Type","date":"2023-12-18T13:40:10.000Z","author":"Alexa","isOriginal":true,"category":["Python"],"tag":["web","typora"],"icon":"coding","sticky":false,"star":false,"article":true,"timeline":true,"image":false,"navbar":true,"sidebarIcon":true,"headerDepth":5,"comment":true,"lastUpdated":true,"description":"1. Characteristics of Numeric Types image-20231222232833034 In [2]: 1+1 Out[2]: 2 In [3]: 1+1.0 Out[3]: 2.0 In [4]: 9-1 Out[4]: 8 In [5]: 9-1.0 Out[5]: 8.0 In [6]: 2*2 Out[6]: 4 In [7]: 2*2.0 Out[7]: 4.0 In [8]: 9/3 Out[8]: 3.0 In [9]: # If one of the numbers is float, the result will be float (highest priority) In [10]: # Division involves precision issues, so the result is a float","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://axagiii.com/zh/Python/03-numeric-type.html"}],["meta",{"property":"og:url","content":"https://axagiii.com/Python/03-numeric-type.html"}],["meta",{"property":"og:site_name","content":"Alexa-Blog"}],["meta",{"property":"og:title","content":"Numeric Type"}],["meta",{"property":"og:description","content":"1. Characteristics of Numeric Types image-20231222232833034 In [2]: 1+1 Out[2]: 2 In [3]: 1+1.0 Out[3]: 2.0 In [4]: 9-1 Out[4]: 8 In [5]: 9-1.0 Out[5]: 8.0 In [6]: 2*2 Out[6]: 4 In [7]: 2*2.0 Out[7]: 4.0 In [8]: 9/3 Out[8]: 3.0 In [9]: # If one of the numbers is float, the result will be float (highest priority) In [10]: # Division involves precision issues, so the result is a float"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://axagiii.com/"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-22T16:13:55.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Numeric Type"}],["meta",{"property":"article:author","content":"Alexa"}],["meta",{"property":"article:tag","content":"web"}],["meta",{"property":"article:tag","content":"typora"}],["meta",{"property":"article:published_time","content":"2023-12-18T13:40:10.000Z"}],["meta",{"property":"article:modified_time","content":"2023-12-22T16:13:55.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Numeric Type\\",\\"image\\":[\\"https://axagiii.com/\\"],\\"datePublished\\":\\"2023-12-18T13:40:10.000Z\\",\\"dateModified\\":\\"2023-12-22T16:13:55.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Alexa\\"}]}"]]},"headers":[{"level":2,"title":"1. Characteristics of Numeric Types","slug":"_1-characteristics-of-numeric-types","link":"#_1-characteristics-of-numeric-types","children":[]},{"level":2,"title":"2. Arithmetic Operators","slug":"_2-arithmetic-operators","link":"#_2-arithmetic-operators","children":[]},{"level":2,"title":"3. A Little Practice: Numeric Transformation","slug":"_3-a-little-practice-numeric-transformation","link":"#_3-a-little-practice-numeric-transformation","children":[]},{"level":2,"title":"4. Comparison Operators: Comparing the Values","slug":"_4-comparison-operators-comparing-the-values","link":"#_4-comparison-operators-comparing-the-values","children":[]},{"level":2,"title":"5. Assignment Operators","slug":"_5-assignment-operators","link":"#_5-assignment-operators","children":[{"level":4,"title":"7.3.1 Sum and Difference of Numbers:","slug":"_7-3-1-sum-and-difference-of-numbers","link":"#_7-3-1-sum-and-difference-of-numbers","children":[]},{"level":4,"title":"7.3.2 Multiplication and Division of Numbers","slug":"_7-3-2-multiplication-and-division-of-numbers","link":"#_7-3-2-multiplication-and-division-of-numbers","children":[]},{"level":4,"title":"7.3.3 Remainder and Power Operation","slug":"_7-3-3-remainder-and-power-operation","link":"#_7-3-3-remainder-and-power-operation","children":[]},{"level":4,"title":"7.3.4 Comparison Operations","slug":"_7-3-4-comparison-operations","link":"#_7-3-4-comparison-operations","children":[]}]}],"git":{"createdTime":1703260075000,"updatedTime":1703261635000,"contributors":[{"name":"alexa-gui","email":"zg319@cam.ac.uk","commits":2}]},"readingTime":{"minutes":4.74,"words":1421},"filePathRelative":"Python/03-numeric-type.md","localizedDate":"December 18, 2023","excerpt":"<h2> 1. Characteristics of Numeric Types</h2>\\n<figure><figcaption>image-20231222232833034</figcaption></figure>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code>In <span class=\\"token punctuation\\">[</span><span class=\\"token number\\">2</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">:</span> <span class=\\"token number\\">1</span><span class=\\"token operator\\">+</span><span class=\\"token number\\">1</span>\\nOut<span class=\\"token punctuation\\">[</span><span class=\\"token number\\">2</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">:</span> <span class=\\"token number\\">2</span>\\n\\nIn <span class=\\"token punctuation\\">[</span><span class=\\"token number\\">3</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">:</span> <span class=\\"token number\\">1</span><span class=\\"token operator\\">+</span><span class=\\"token number\\">1.0</span>\\nOut<span class=\\"token punctuation\\">[</span><span class=\\"token number\\">3</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">:</span> <span class=\\"token number\\">2.0</span>\\n\\nIn <span class=\\"token punctuation\\">[</span><span class=\\"token number\\">4</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">:</span> <span class=\\"token number\\">9</span><span class=\\"token operator\\">-</span><span class=\\"token number\\">1</span>\\nOut<span class=\\"token punctuation\\">[</span><span class=\\"token number\\">4</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">:</span> <span class=\\"token number\\">8</span>\\n\\nIn <span class=\\"token punctuation\\">[</span><span class=\\"token number\\">5</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">:</span> <span class=\\"token number\\">9</span><span class=\\"token operator\\">-</span><span class=\\"token number\\">1.0</span>\\nOut<span class=\\"token punctuation\\">[</span><span class=\\"token number\\">5</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">:</span> <span class=\\"token number\\">8.0</span>\\n\\nIn <span class=\\"token punctuation\\">[</span><span class=\\"token number\\">6</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">:</span> <span class=\\"token number\\">2</span><span class=\\"token operator\\">*</span><span class=\\"token number\\">2</span>\\nOut<span class=\\"token punctuation\\">[</span><span class=\\"token number\\">6</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">:</span> <span class=\\"token number\\">4</span>\\n\\nIn <span class=\\"token punctuation\\">[</span><span class=\\"token number\\">7</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">:</span> <span class=\\"token number\\">2</span><span class=\\"token operator\\">*</span><span class=\\"token number\\">2.0</span>\\nOut<span class=\\"token punctuation\\">[</span><span class=\\"token number\\">7</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">:</span> <span class=\\"token number\\">4.0</span>\\n\\nIn <span class=\\"token punctuation\\">[</span><span class=\\"token number\\">8</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">:</span> <span class=\\"token number\\">9</span><span class=\\"token operator\\">/</span><span class=\\"token number\\">3</span>\\nOut<span class=\\"token punctuation\\">[</span><span class=\\"token number\\">8</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">:</span> <span class=\\"token number\\">3.0</span>\\n\\nIn <span class=\\"token punctuation\\">[</span><span class=\\"token number\\">9</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">:</span> <span class=\\"token comment\\"># If one of the numbers is float, the result will be float (highest priority)</span>\\n\\nIn <span class=\\"token punctuation\\">[</span><span class=\\"token number\\">10</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">:</span> <span class=\\"token comment\\"># Division involves precision issues, so the result is a float</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};
