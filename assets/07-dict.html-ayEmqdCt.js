const t=JSON.parse('{"key":"v-6ab5c137","path":"/Python/07-dict.html","title":"dictionary","lang":"en-US","frontmatter":{"title":"dictionary","date":"2024-01-20T13:40:10.000Z","author":"Alexa","isOriginal":true,"category":["Python"],"tag":["web","typora"],"icon":"coding","sticky":false,"star":false,"article":true,"timeline":true,"image":false,"navbar":true,"sidebarIcon":true,"headerDepth":5,"comment":true,"lastUpdated":true,"description":"1. How to Create a Phone Book Suppose we have the following contacts: Name Phone Number 李雷 123456 韩梅梅 132456 大卫 154389 Mr.Liu 131452 Bornforthis 180595 Alexa 131559","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://axagiii.com/zh/Python/07-dict.html"}],["meta",{"property":"og:url","content":"https://axagiii.com/Python/07-dict.html"}],["meta",{"property":"og:site_name","content":"Alexa-Blog"}],["meta",{"property":"og:title","content":"dictionary"}],["meta",{"property":"og:description","content":"1. How to Create a Phone Book Suppose we have the following contacts: Name Phone Number 李雷 123456 韩梅梅 132456 大卫 154389 Mr.Liu 131452 Bornforthis 180595 Alexa 131559"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://axagiii.com/"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-07T07:35:50.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"dictionary"}],["meta",{"property":"article:author","content":"Alexa"}],["meta",{"property":"article:tag","content":"web"}],["meta",{"property":"article:tag","content":"typora"}],["meta",{"property":"article:published_time","content":"2024-01-20T13:40:10.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-07T07:35:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"dictionary\\",\\"image\\":[\\"https://axagiii.com/\\"],\\"datePublished\\":\\"2024-01-20T13:40:10.000Z\\",\\"dateModified\\":\\"2024-02-07T07:35:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Alexa\\"}]}"]]},"headers":[{"level":2,"title":"1. How to Create a Phone Book","slug":"_1-how-to-create-a-phone-book","link":"#_1-how-to-create-a-phone-book","children":[]},{"level":2,"title":"2. Dictionary Structure","slug":"_2-dictionary-structure","link":"#_2-dictionary-structure","children":[]},{"level":2,"title":"3. Dictionary Key & Value","slug":"_3-dictionary-key-value","link":"#_3-dictionary-key-value","children":[]},{"level":2,"title":"4. Creating a Dictionary Using the dict() Function","slug":"_4-creating-a-dictionary-using-the-dict-function","link":"#_4-creating-a-dictionary-using-the-dict-function","children":[]},{"level":2,"title":"5. Accessing Dictionary Data","slug":"_5-accessing-dictionary-data","link":"#_5-accessing-dictionary-data","children":[{"level":3,"title":"5.1 Using Square Brackets","slug":"_5-1-using-square-brackets","link":"#_5-1-using-square-brackets","children":[]},{"level":3,"title":"5.2 Issue with the Above Extraction Method","slug":"_5-2-issue-with-the-above-extraction-method","link":"#_5-2-issue-with-the-above-extraction-method","children":[]},{"level":3,"title":"5.3 Using .get() to Solve","slug":"_5-3-using-get-to-solve","link":"#_5-3-using-get-to-solve","children":[]}]},{"level":2,"title":"6. Updating Dictionary Data","slug":"_6-updating-dictionary-data","link":"#_6-updating-dictionary-data","children":[]},{"level":2,"title":"7. Deleting Dictionary Data","slug":"_7-deleting-dictionary-data","link":"#_7-deleting-dictionary-data","children":[]},{"level":2,"title":"8. Dictionary Structure: Nesting Dictionaries","slug":"_8-dictionary-structure-nesting-dictionaries","link":"#_8-dictionary-structure-nesting-dictionaries","children":[{"level":3,"title":"8.1 Dictionary in a List","slug":"_8-1-dictionary-in-a-list","link":"#_8-1-dictionary-in-a-list","children":[]},{"level":3,"title":"8.2 Storing a List in a Dictionary","slug":"_8-2-storing-a-list-in-a-dictionary","link":"#_8-2-storing-a-list-in-a-dictionary","children":[]},{"level":3,"title":"8.3 Storing a Dictionary in a Dictionary","slug":"_8-3-storing-a-dictionary-in-a-dictionary","link":"#_8-3-storing-a-dictionary-in-a-dictionary","children":[]}]},{"level":2,"title":"9. Common Dictionary Methods","slug":"_9-common-dictionary-methods","link":"#_9-common-dictionary-methods","children":[{"level":3,"title":"9.1 .pop(key)","slug":"_9-1-pop-key","link":"#_9-1-pop-key","children":[]},{"level":3,"title":"9.2 .keys()","slug":"_9-2-keys","link":"#_9-2-keys","children":[]},{"level":3,"title":"9.3 .values()","slug":"_9-3-values","link":"#_9-3-values","children":[]},{"level":3,"title":"9.4 .items()","slug":"_9-4-items","link":"#_9-4-items","children":[]},{"level":3,"title":"9.5 in","slug":"_9-5-in","link":"#_9-5-in","children":[]}]}],"git":{"createdTime":1707291350000,"updatedTime":1707291350000,"contributors":[{"name":"alexa-gui","email":"zg319@cam.ac.uk","commits":1}]},"readingTime":{"minutes":5.26,"words":1579},"filePathRelative":"Python/07-dict.md","localizedDate":"January 20, 2024","excerpt":"<h2> 1. How to Create a Phone Book</h2>\\n<p>Suppose we have the following contacts:</p>\\n<table>\\n<thead>\\n<tr>\\n<th>Name</th>\\n<th>Phone Number</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>李雷</td>\\n<td>123456</td>\\n</tr>\\n<tr>\\n<td>韩梅梅</td>\\n<td>132456</td>\\n</tr>\\n<tr>\\n<td>大卫</td>\\n<td>154389</td>\\n</tr>\\n<tr>\\n<td>Mr.Liu</td>\\n<td>131452</td>\\n</tr>\\n<tr>\\n<td>Bornforthis</td>\\n<td>180595</td>\\n</tr>\\n<tr>\\n<td>Alexa</td>\\n<td>131559</td>\\n</tr>\\n</tbody>\\n</table>","autoDesc":true}');export{t as data};
