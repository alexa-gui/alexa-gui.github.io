import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,d as p}from"./app--kPdamV4.js";const t="/assets/image-20240122235113623-OOvN_KoN.png",e={},o=p(`<h2 id="_1-创建集合" tabindex="-1"><a class="header-anchor" href="#_1-创建集合" aria-hidden="true">#</a> 1. 创建集合</h2><ol><li>直接使用花括号创建</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>set1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>使用 set() 方法</li></ol><figure><img src="`+t+`" alt="image-20240122235113623" tabindex="0" loading="lazy"><figcaption>image-20240122235113623</figcaption></figure><h2 id="_2-集合的交集" tabindex="-1"><a class="header-anchor" href="#_2-集合的交集" aria-hidden="true">#</a> 2. 集合的交集</h2><p>交集：intersection，求两个集合中都出现了的元素， 用<code>&amp;</code>运算符实现</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>set1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">}</span>
set2 <span class="token operator">=</span> <span class="token builtin">set</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>set1 <span class="token operator">&amp;</span> set2<span class="token punctuation">)</span>

<span class="token comment"># output</span>
<span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-集合的并集" tabindex="-1"><a class="header-anchor" href="#_3-集合的并集" aria-hidden="true">#</a> 3. 集合的并集</h2><p>并集：union，求两个集合中共有的元素，用 <code>|</code> 运算符实现</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>set1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">}</span>
set2 <span class="token operator">=</span> <span class="token builtin">set</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>set1 <span class="token operator">|</span> set2<span class="token punctuation">)</span>

<span class="token comment"># output</span>
<span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-集合的差集" tabindex="-1"><a class="header-anchor" href="#_4-集合的差集" aria-hidden="true">#</a> 4. 集合的差集</h2><p>差集：difference，求set1和set2的差集时，会返回在set1中但不在set2中的元素，用<code>-</code>运算符实现</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>set1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">}</span>
set2 <span class="token operator">=</span> <span class="token builtin">set</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>set1 <span class="token operator">-</span> set2<span class="token punctuation">)</span>

<span class="token comment"># output</span>
<span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-集合的对称差集" tabindex="-1"><a class="header-anchor" href="#_5-集合的对称差集" aria-hidden="true">#</a> 5. 集合的对称差集</h2><p>对称差集：symmetric difference，求set1和set2的对称差集时，会返回在set1或在set2中，但不同时存在于两个集合中的元素，用运算符<code>^</code>实现 –&gt; 等于并集减去交集，韦恩图</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>set1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">}</span>
set2 <span class="token operator">=</span> <span class="token builtin">set</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>set1 <span class="token operator">^</span> set2<span class="token punctuation">)</span>

<span class="token comment"># output</span>
<span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-思考" tabindex="-1"><a class="header-anchor" href="#_6-思考" aria-hidden="true">#</a> 6. 思考</h2><p>对称差集可以用其他三种集合操作来实现吗？如何实现？</p><p>用并集减去交集</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>set1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">}</span>
set2 <span class="token operator">=</span> <span class="token builtin">set</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
U <span class="token operator">=</span> set1 <span class="token operator">|</span> set2
N <span class="token operator">=</span> set1 <span class="token operator">&amp;</span> set2
<span class="token keyword">print</span><span class="token punctuation">(</span>U <span class="token operator">-</span> N<span class="token punctuation">)</span>

<span class="token comment"># output</span>
<span class="token punctuation">{</span><span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-add-添加集合元素" tabindex="-1"><a class="header-anchor" href="#_7-add-添加集合元素" aria-hidden="true">#</a> 7. .add() 添加集合元素</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>set1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">}</span>
set2 <span class="token operator">=</span> <span class="token builtin">set</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
set1<span class="token punctuation">.</span>add<span class="token punctuation">(</span><span class="token number">9</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>set1<span class="token punctuation">)</span>

<span class="token comment"># output</span>
<span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,23),c=[o];function u(l,i){return s(),a("div",null,c)}const d=n(e,[["render",u],["__file","08-set.html.vue"]]);export{d as default};
