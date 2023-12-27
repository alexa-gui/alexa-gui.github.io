import{_ as o}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as l,o as c,c as r,b as u,w as a,d as p,e as s,a as n}from"./app-KiXwN5gg.js";const d="/assets/image-20231218093224921--FCZrLKE.png",k="/assets/image-20231218095008709-cnGeUbVN.png",v="/assets/image-20231221214402328-mrqZd7r1.png",m="/assets/image-20231221214427299-UueSs9hO.png",b={},g=p('<h2 id="_1-字符串的定义" tabindex="-1"><a class="header-anchor" href="#_1-字符串的定义" aria-hidden="true">#</a> 1. 字符串的定义</h2><p>字符串是由字母，数字，特殊字符来组成的一个序列</p><figure><img src="'+d+`" alt="image-20231218093224921" tabindex="0" loading="lazy"><figcaption>image-20231218093224921</figcaption></figure><h2 id="_2-创建字符串" tabindex="-1"><a class="header-anchor" href="#_2-创建字符串" aria-hidden="true">#</a> 2. 创建字符串</h2><p>——使用 <strong><span style="color:orange;">单引号、双引号</span>或者<span style="color:orange;">三引号</span></strong>。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>name <span class="token operator">=</span> <span class="token string">&quot;alexa&quot;</span>
number <span class="token operator">=</span> <span class="token string">&#39;18&#39;</span>
paragraph <span class="token operator">=</span> <span class="token triple-quoted-string string">&#39;&#39;&#39;Hello, I&#39;m Alexa
&#39;&#39;&#39;</span>
para <span class="token operator">=</span> <span class="token triple-quoted-string string">&quot;&quot;&quot;Hello Alexa
&quot;&quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>单双引号混用 所以会需要接受不同类型的引号, 否则不能完全包裹字符串内容</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&#39;I&#39;</span>m Alexa <span class="token comment"># wrong</span>
string <span class="token operator">=</span> <span class="token string">&quot;I&#39;m Alexa&quot;</span> <span class="token comment"># correct</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>那么三引号呢？</p><p>假设我们现在需要存储如下文本：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>我们有时候不仅仅要看选择项以内的答案，也要去思考选择项以外的答案。——AI悦创

浅者见浅，深者见深——黄家宝

起的最早的是理想主义者，跑的最快的是骗子，而胆子最大的是那些冒险家，害怕错过一切，疯狂往里冲的是韭菜，而真正的成功者，可能还没有入场。

先实现功能，再去优化，否则一切会很乱。——AI悦创

凡是你不能清晰写下来的东西，都是你还没有真正理解的东西
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>放入字符串，我们如何在 Python 代码实现呢？</p>`,12),h=n("div",{class:"language-python line-numbers-mode","data-ext":"py"},[n("pre",{class:"language-python"},[n("code",null,[s("string "),n("span",{class:"token operator"},"="),s(` "我们有时候不仅仅要看选择项以内的答案，也要去思考选择项以外的答案。——AI悦创

浅者见浅，深者见深——黄家宝

起的最早的是理想主义者，跑的最快的是骗子，而胆子最大的是那些冒险家，害怕错过一切，疯狂往里冲的是韭菜，而真正的成功者，可能还没有入场。

先实现功能，再去优化，否则一切会很乱。——AI悦创

凡是你不能清晰写下来的东西，都是你还没有真正理解的东西"

`),n("span",{class:"token comment"},"# 这样会只能包裹到第一行内容"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),y=n("div",{class:"language-python line-numbers-mode","data-ext":"py"},[n("pre",{class:"language-python"},[n("code",null,[s("string "),n("span",{class:"token operator"},"="),s(` "我们有时候不仅仅要看选择项以内的答案，也要去思考选择项以外的答案。——AI悦创\\

浅者见浅，深者见深——黄家宝\\

起的最早的是理想主义者，跑的最快的是骗子，而胆子最大的是那些冒险家，害怕错过一切，疯狂往里冲的是韭菜，而真正的成功者，可能还没有入场。\\

先实现功能，再去优化，否则一切会很乱。——AI悦创\\

凡是你不能清晰写下来的东西，都是你还没有真正理解的东西"

`),n("span",{class:"token comment"},"# output"),s(`
我们有时候不仅仅要看选择项以内的答案，也要去思考选择项以外的答案。——AI悦创浅者见浅，深者见深——黄家宝起的最早的是理想主义者，跑的最快的是骗子，而胆子最大的是那些冒险家，害怕错过一切，疯狂往里冲的是韭菜，而真正的成功者，可能还没有入场。先实现功能，再去优化，否则一切会很乱。——AI悦创凡是你不能清晰写下来的东西，都是你还没有真正理解的东西

`),n("span",{class:"token comment"},"#加斜杠可以包裹 但是不能换行"),s(`
`),n("span",{class:"token comment"},"#所以需要使用三引号"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),q=n("div",{class:"language-python line-numbers-mode","data-ext":"py"},[n("pre",{class:"language-python"},[n("code",null,[s("string "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token triple-quoted-string string"},`"""我们有时候不仅仅要看选择项以内的答案，也要去思考选择项以外的答案。——AI悦创

浅者见浅，深者见深——黄家宝

起的最早的是理想主义者，跑的最快的是骗子，而胆子最大的是那些冒险家，害怕错过一切，疯狂往里冲的是韭菜，而真正的成功者，可能还没有入场。

先实现功能，再去优化，否则一切会很乱。——AI悦创

凡是你不能清晰写下来的东西，都是你还没有真正理解的东西"""`),s(`

`),n("span",{class:"token comment"},"# 实现原样输出"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),f=p('<p>三引号还可以用来注释</p><figure><img src="'+k+`" alt="image-20231218095008709" tabindex="0" loading="lazy"><figcaption>image-20231218095008709</figcaption></figure><h2 id="_3-字符串长度" tabindex="-1"><a class="header-anchor" href="#_3-字符串长度" aria-hidden="true">#</a> 3. 字符串长度</h2><p>使用<code>len()</code>: 返回字符串中字符长度或字符数，从一开始数, 包括空格</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>para <span class="token operator">=</span> <span class="token string">&quot;Hello, alexa&quot;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>para<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># output</span>
<span class="token number">12</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-字符串中的字符获取" tabindex="-1"><a class="header-anchor" href="#_4-字符串中的字符获取" aria-hidden="true">#</a> 4. 字符串中的字符获取</h2><h3 id="_4-1-获取单个字符" tabindex="-1"><a class="header-anchor" href="#_4-1-获取单个字符" aria-hidden="true">#</a> 4.1 获取单个字符</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>para <span class="token operator">=</span> <span class="token string">&quot;Hello, alexa&quot;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>para<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span>   <span class="token comment"># selecting the 3rd character</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>para<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>  <span class="token comment"># selecting the 1st character</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>para<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>  <span class="token comment"># selecting the last character</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>para<span class="token punctuation">[</span><span class="token builtin">len</span><span class="token punctuation">(</span>para<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>  <span class="token comment"># selecting the last character</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-获取一串连续字符" tabindex="-1"><a class="header-anchor" href="#_4-2-获取一串连续字符" aria-hidden="true">#</a> 4.2 获取一串连续字符</h3><p>使用slicing区间 （左闭右开）string[start: end]</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;语法: string = &quot;bornforthis&quot;
select = string[start: end]
PS: end 记得 +1&quot;&quot;&quot;</span>

para <span class="token operator">=</span> <span class="token string">&quot;Hello, alexa&quot;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>para<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">:</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">)</span>  <span class="token comment"># selecting the 3rd to the 6th character (not including the 7th)</span>
<span class="token comment"># output</span>
llo<span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-获取多个不连续字符" tabindex="-1"><a class="header-anchor" href="#_4-3-获取多个不连续字符" aria-hidden="true">#</a> 4.3 获取多个不连续字符</h3><p>使用slicing区间 string[start: end: sep]</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
语法: string = &quot;0123456789&quot;
select = string[start: end: sep] *sep= how many steps to the next number*
PS: end 记得 +1
&quot;&quot;&quot;</span>
string <span class="token operator">=</span> <span class="token string">&quot;0123456789&quot;</span>
<span class="token comment"># 获取字符 02468</span>
select <span class="token operator">=</span> string<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span> <span class="token builtin">len</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>select<span class="token punctuation">)</span>
<span class="token comment"># 获取字符 13579</span>
select <span class="token operator">=</span> string<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span> <span class="token builtin">len</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>select<span class="token punctuation">)</span>

string <span class="token operator">=</span> <span class="token string">&quot;bornforthis&quot;</span>
<span class="token comment"># 获取字符 ofts</span>
select <span class="token operator">=</span> string<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span> <span class="token builtin">len</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>select<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-4-优化" tabindex="-1"><a class="header-anchor" href="#_4-4-优化" aria-hidden="true">#</a> 4.4 优化</h3><p>如果我们要提取的字符是从开头到结尾，则可以省略开头和/或结尾，留空即可</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;0123456789&quot;</span>
<span class="token comment"># 获取字符 02468</span>
select <span class="token operator">=</span> string<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>select<span class="token punctuation">)</span>
<span class="token comment"># 获取字符 13579</span>
select <span class="token operator">=</span> string<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>select<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-5-字符串倒序" tabindex="-1"><a class="header-anchor" href="#_4-5-字符串倒序" aria-hidden="true">#</a> 4.5 字符串倒序</h3><p>字符串的第三个位置，控制的是字符提取的方向。默认正数为1，如果我们改成-1，则会变成反方向</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>正负控制方向，数字大小控制步长</p></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;bornforthis&quot;</span>
select <span class="token operator">=</span> string<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>select<span class="token punctuation">)</span>

<span class="token comment"># output</span>
sihtrofnrob
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>省略号省略的是什么？</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>select <span class="token operator">=</span> string<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span><span class="token number">11</span><span class="token punctuation">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>select<span class="token punctuation">)</span>

<span class="token comment"># output</span>
No result
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果使用正方向序号， 0开始往-1走没有任何值， 不成立</p><figure><img src="`+v+`" alt="image-20231221214402328" tabindex="0" loading="lazy"><figcaption>image-20231221214402328</figcaption></figure><p>如果直接使用正数序号调换位置，最后一位就是0，会被省略掉：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>select <span class="token operator">=</span> string<span class="token punctuation">[</span><span class="token builtin">len</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span><span class="token punctuation">:</span><span class="token number">0</span><span class="token punctuation">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>select<span class="token punctuation">)</span>

<span class="token comment"># output</span>
sihtrofnro <span class="token comment">#missing &quot;b&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所以应该是从-1最后一位开始往回倒:</p><figure><img src="`+m+`" alt="image-20231221214427299" tabindex="0" loading="lazy"><figcaption>image-20231221214427299</figcaption></figure><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>select <span class="token operator">=</span> string<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token operator">-</span><span class="token number">1</span><span class="token operator">*</span><span class="token builtin">len</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>select<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 获取rofn</span>
select <span class="token operator">=</span> string<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">5</span><span class="token punctuation">:</span><span class="token operator">-</span><span class="token number">9</span><span class="token punctuation">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>select<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-字符串的内置方法" tabindex="-1"><a class="header-anchor" href="#_5-字符串的内置方法" aria-hidden="true">#</a> 5. 字符串的内置方法</h2><h3 id="_5-1-upper" tabindex="-1"><a class="header-anchor" href="#_5-1-upper" aria-hidden="true">#</a> 5.1 .upper()</h3><p>将字符串全部转换为大写</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;bornforthis&quot;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>string<span class="token punctuation">.</span>upper<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># output</span>
BORNFORTHIS
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-2-lower" tabindex="-1"><a class="header-anchor" href="#_5-2-lower" aria-hidden="true">#</a> 5.2 .lower()</h3><p>将字符串全部转换为小写</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;BORNFORTHIS&quot;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>string<span class="token punctuation">.</span>lower<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># output</span>
bornforthis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-3-capitalize" tabindex="-1"><a class="header-anchor" href="#_5-3-capitalize" aria-hidden="true">#</a> 5.3 .capitalize()</h3><p>字符串开头第一个字母大写</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;BORNFORTHIS&quot;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>string<span class="token punctuation">.</span>capitalize<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># output</span>
Bornforthis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-4-title" tabindex="-1"><a class="header-anchor" href="#_5-4-title" aria-hidden="true">#</a> 5.4 .title()</h3><p>每个单词的首字母大写，只要有间隔都会大写 「形成标题的一种格式」</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;BORNFORTHIS to-aiyc&quot;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>string<span class="token punctuation">.</span>title<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># output</span>
Bornforthis To<span class="token operator">-</span>Aiyc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-5-startswith" tabindex="-1"><a class="header-anchor" href="#_5-5-startswith" aria-hidden="true">#</a> 5.5 .startswith()</h3><p>检测字符串是否以某个特定的内容开头，返回True或False</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;BORNFORTHIS to-aiyc&quot;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>string<span class="token punctuation">.</span>startswith<span class="token punctuation">(</span><span class="token string">&quot;b&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># output</span>
<span class="token boolean">False</span>

string <span class="token operator">=</span> <span class="token string">&quot;BORNFORTHIS to-aiyc&quot;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>string<span class="token punctuation">.</span>startswith<span class="token punctuation">(</span><span class="token string">&quot;BO&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># output</span>
<span class="token boolean">True</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-6-endswith" tabindex="-1"><a class="header-anchor" href="#_5-6-endswith" aria-hidden="true">#</a> 5.6 .endswith()</h3><p>检测字符串是不是以特定字符或单词结尾，返回布尔值。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;BORNFORTHIS to-aiyc&quot;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>string<span class="token punctuation">.</span>endswith<span class="token punctuation">(</span><span class="token string">&quot;BO&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># output</span>
<span class="token boolean">False</span>

string <span class="token operator">=</span> <span class="token string">&quot;BORNFORTHIS to-aiyc&quot;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>string<span class="token punctuation">.</span>endswith<span class="token punctuation">(</span><span class="token string">&quot;yc&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># output</span>
<span class="token boolean">True</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-7-count" tabindex="-1"><a class="header-anchor" href="#_5-7-count" aria-hidden="true">#</a> 5.7 .count()</h3><p>计算特定字符或单词在目标字符串中存在的次数。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;BORNFORTHIS to-aiyc bornforthis&quot;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>string<span class="token punctuation">.</span>count<span class="token punctuation">(</span><span class="token string">&quot;i&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># output</span>
<span class="token number">2</span> <span class="token comment">#区分大小写</span>

string <span class="token operator">=</span> <span class="token string">&quot;BORNFORTHIS for-aiyc bornforthis&quot;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>string<span class="token punctuation">.</span>count<span class="token punctuation">(</span><span class="token string">&quot;for&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># output</span>
<span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-8-find" tabindex="-1"><a class="header-anchor" href="#_5-8-find" aria-hidden="true">#</a> 5.8 .find()</h3><p>寻找目标字符或单词在特定字符串中，第一次出现的下标。如果是查找单词，那么 <code>find()</code> 返回目标单词的第一个字符的下标。</p><p>如果，查询的字符或单词不存在，则返回 <code>-1</code>。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;BORNFORTHIS for-aiyc bornforthis&quot;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>string<span class="token punctuation">.</span>find<span class="token punctuation">(</span><span class="token string">&quot;for&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># output</span>
<span class="token number">12</span> <span class="token comment">#返回第一次出现时的下标</span>

string <span class="token operator">=</span> <span class="token string">&quot;BORNFORTHIS for-aiyc bornforthis&quot;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>string<span class="token punctuation">.</span>find<span class="token punctuation">(</span><span class="token string">&quot;R&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># output</span>
<span class="token number">2</span>

string <span class="token operator">=</span> <span class="token string">&quot;BORNFORTHIS for-aiyc bornforthis&quot;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>string<span class="token punctuation">.</span>find<span class="token punctuation">(</span><span class="token string">&quot;k&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># output</span>
<span class="token operator">-</span><span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-9-index" tabindex="-1"><a class="header-anchor" href="#_5-9-index" aria-hidden="true">#</a> 5.9 .index()</h3><p>寻找目标字符或单词在特定字符串中，第一次出现的下标。如果是查找单词，那么 <code>index()</code> 返回目标单词的第一个字符的下标。</p><p>如果，查询的字符或单词不存在，则<strong>报错</strong>。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;BORNFORTHIS for-aiyc bornforthis&quot;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>string<span class="token punctuation">.</span>index<span class="token punctuation">(</span><span class="token string">&quot;k&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># output</span>
ValueError<span class="token punctuation">:</span> substring <span class="token keyword">not</span> found
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-10-isdigit" tabindex="-1"><a class="header-anchor" href="#_5-10-isdigit" aria-hidden="true">#</a> 5.10 .isdigit()</h3><p>判断字符串是不是纯数字字符串，字符串中但凡有一个字符不是数字，则返回false</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;01234567&quot;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>string<span class="token punctuation">.</span>isdigit<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># output</span>
<span class="token boolean">True</span>

string <span class="token operator">=</span> <span class="token string">&quot;01234567o&quot;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>string<span class="token punctuation">.</span>isdigit<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># output</span>
<span class="token boolean">False</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-11-isalpha" tabindex="-1"><a class="header-anchor" href="#_5-11-isalpha" aria-hidden="true">#</a> 5.11 .isalpha()</h3><p>判断字符串是不是纯字母字符串，字符串中但凡有一个字符不是字母，则返回false</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;abcdefg&quot;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>string<span class="token punctuation">.</span>isalpha<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># output</span>
<span class="token boolean">True</span>

string <span class="token operator">=</span> <span class="token string">&quot;abcdefg0&quot;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>string<span class="token punctuation">.</span>isalpha<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># output</span>
<span class="token boolean">False</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-12-isalnum" tabindex="-1"><a class="header-anchor" href="#_5-12-isalnum" aria-hidden="true">#</a> 5.12 .isalnum()</h3><p>判断字符串是不是纯数字或纯字母、纯数字字母字符串，字符串中但凡出现非数字、字母元素，则返回 False。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;abcdefg0&quot;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>string<span class="token punctuation">.</span>isalnum<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># output</span>
<span class="token boolean">True</span>

string <span class="token operator">=</span> <span class="token string">&quot;abcdefg0!&quot;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>string<span class="token punctuation">.</span>isalnum<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># output</span>
<span class="token boolean">False</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-13-isupper" tabindex="-1"><a class="header-anchor" href="#_5-13-isupper" aria-hidden="true">#</a> 5.13 .isupper()</h3><p>判断字符串中的字母是否全大写，全大写则返回 True，否则返回 False。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;abcdefg0!&quot;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>string<span class="token punctuation">.</span>isupper<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># output</span>
<span class="token boolean">False</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-14-islower" tabindex="-1"><a class="header-anchor" href="#_5-14-islower" aria-hidden="true">#</a> 5.14 .islower()</h3><p>判断字符串是不是字母全小写，全小写则返回 True，否则返回 False。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;abcdefg0!&quot;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>string<span class="token punctuation">.</span>islower<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># output</span>
<span class="token boolean">True</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-15-isspace" tabindex="-1"><a class="header-anchor" href="#_5-15-isspace" aria-hidden="true">#</a> 5.15 .isspace()</h3><p>判断字符串是否为纯空格，多少个空格都可以。纯空格则返回 True，否则返回 False。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;abcdefg0!&quot;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>string<span class="token punctuation">.</span>isspace<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># output</span>
<span class="token boolean">False</span>

string <span class="token operator">=</span> <span class="token string">&quot;   &quot;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>string<span class="token punctuation">.</span>isspace<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># output</span>
<span class="token boolean">True</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-16-strip" tabindex="-1"><a class="header-anchor" href="#_5-16-strip" aria-hidden="true">#</a> 5.16 .strip()</h3><p>默认去掉目标字符串的前后空白字符，如果指定参数，可以去掉指定字符</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;   bornforthis   &quot;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>string<span class="token punctuation">.</span>strip<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">#去除前后空格</span>
<span class="token comment"># output</span>
bornforthis

string <span class="token operator">=</span> <span class="token string">&quot;---bornforthis---&quot;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>string<span class="token punctuation">.</span>strip<span class="token punctuation">(</span><span class="token string">&quot;-&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">#去除前后减号</span>
<span class="token comment"># output</span>
bornforthis

string <span class="token operator">=</span> <span class="token string">&quot;--  -bornforthis-- -&quot;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>string<span class="token punctuation">.</span>strip<span class="token punctuation">(</span><span class="token string">&quot;-&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">#如果只去除前后减号 只会去除连续的减号知道遇见其他字符</span>
<span class="token comment"># output</span>
  <span class="token operator">-</span>bornforthis<span class="token operator">-</span><span class="token operator">-</span> 
    
string <span class="token operator">=</span> <span class="token string">&quot;--  -bornforthis-- -&quot;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>string<span class="token punctuation">.</span>strip<span class="token punctuation">(</span><span class="token string">&quot;- &quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">#同时去除两端的所有减号和空格</span>
<span class="token comment"># output</span>
bornforthis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-17-lstrip" tabindex="-1"><a class="header-anchor" href="#_5-17-lstrip" aria-hidden="true">#</a> 5.17 .lstrip()</h3><p>left 默认去掉字符串左边的空白字符，如果指定参数，则去掉左边的指定字符。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;--  -bornforthis-- -&quot;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>string<span class="token punctuation">.</span>lstrip<span class="token punctuation">(</span><span class="token string">&quot;- &quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># output</span>
bornforthis<span class="token operator">-</span><span class="token operator">-</span> <span class="token operator">-</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-18-rstrip" tabindex="-1"><a class="header-anchor" href="#_5-18-rstrip" aria-hidden="true">#</a> 5.18 .rstrip()</h3><p>Right 默认去掉字符串右边的空白字符，如果指定参数，则去掉右边的指定字符。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;--  -bornforthis-- -&quot;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>string<span class="token punctuation">.</span>rstrip<span class="token punctuation">(</span><span class="token string">&quot;- &quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># output</span>
<span class="token operator">-</span><span class="token operator">-</span>  <span class="token operator">-</span>bornforthis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-19-replace" tabindex="-1"><a class="header-anchor" href="#_5-19-replace" aria-hidden="true">#</a> 5.19 .replace()</h3><p><code>.replace(old, new, count)</code>第一个位置传入待替换的「old」字符，第二个位置传入要替换的新字符「new」，count控制替换次数</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;--  -bornforthis-- -&quot;</span>
string1 <span class="token operator">=</span> string<span class="token punctuation">.</span>replace<span class="token punctuation">(</span><span class="token string">&quot; &quot;</span><span class="token punctuation">,</span><span class="token string">&quot;*&quot;</span><span class="token punctuation">)</span> <span class="token comment">#默认把所有空格都换成*</span>
string2 <span class="token operator">=</span> string<span class="token punctuation">.</span>replace<span class="token punctuation">(</span><span class="token string">&quot;-&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;!&quot;</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token comment">#置换前三个减号为！</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>string<span class="token punctuation">,</span> string1<span class="token punctuation">,</span> string2<span class="token punctuation">,</span> sep<span class="token operator">=</span><span class="token string">&quot;\\n&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># output</span>
<span class="token operator">-</span><span class="token operator">-</span>  <span class="token operator">-</span>bornforthis<span class="token operator">-</span><span class="token operator">-</span> <span class="token operator">-</span>
<span class="token operator">-</span><span class="token operator">-</span><span class="token operator">**</span><span class="token operator">-</span>bornforthis<span class="token operator">-</span><span class="token operator">-</span><span class="token operator">*</span><span class="token operator">-</span>
!!  !bornforthis<span class="token operator">-</span><span class="token operator">-</span> <span class="token operator">-</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-20-split" tabindex="-1"><a class="header-anchor" href="#_5-20-split" aria-hidden="true">#</a> 5.20 .split()</h3><p><code>.split(sep, maxsplit)</code> 以特定字符进行分割，默认空格分割。如传入参数「sep」则以参数进行分割，返回分割后的列表，maxsplit用于控制分割几次, 默认从左边开始分割</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;i am bornforthis bornforthis&quot;</span>
lst1 <span class="token operator">=</span> string<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token punctuation">)</span>
lst2 <span class="token operator">=</span> string<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">&quot;o&quot;</span><span class="token punctuation">)</span>
lst3 <span class="token operator">=</span> string<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">&quot;o&quot;</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>string<span class="token punctuation">,</span> lst1<span class="token punctuation">,</span> lst2<span class="token punctuation">,</span> lst3<span class="token punctuation">,</span> sep<span class="token operator">=</span><span class="token string">&quot;\\n&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># output</span>
i am bornforthis bornforthis
<span class="token punctuation">[</span><span class="token string">&#39;i&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;am&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;bornforthis&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;bornforthis&#39;</span><span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token string">&#39;i am b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;rnf&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;rthis b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;rnf&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;rthis&#39;</span><span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token string">&#39;i am b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;rnf&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;rthis b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;rnforthis&#39;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-21-rsplit" tabindex="-1"><a class="header-anchor" href="#_5-21-rsplit" aria-hidden="true">#</a> 5.21 .rsplit()</h3><p><code>.rsplit(sep, maxsplit)</code> 从字符串右边进行分割，也可以传入参数「sep」，进行指定分割。返回分割后的列表。maxsplit 指定分割次数。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;i am bornforthis bornforthis&quot;</span>
lst1 <span class="token operator">=</span> string<span class="token punctuation">.</span>rsplit<span class="token punctuation">(</span><span class="token punctuation">)</span>
lst2 <span class="token operator">=</span> string<span class="token punctuation">.</span>rsplit<span class="token punctuation">(</span><span class="token string">&quot;o&quot;</span><span class="token punctuation">)</span>
lst3 <span class="token operator">=</span> string<span class="token punctuation">.</span>rsplit<span class="token punctuation">(</span><span class="token string">&quot;o&quot;</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>string<span class="token punctuation">,</span> lst1<span class="token punctuation">,</span> lst2<span class="token punctuation">,</span> lst3<span class="token punctuation">,</span> sep<span class="token operator">=</span><span class="token string">&quot;\\n&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># output</span>
i am bornforthis bornforthis
<span class="token punctuation">[</span><span class="token string">&#39;i&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;am&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;bornforthis&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;bornforthis&#39;</span><span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token string">&#39;i am b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;rnf&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;rthis b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;rnf&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;rthis&#39;</span><span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token string">&#39;i am bornf&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;rthis b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;rnf&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;rthis&#39;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-22-join" tabindex="-1"><a class="header-anchor" href="#_5-22-join" aria-hidden="true">#</a> 5.22 .join()</h3><p>以特定字符为字符串每个字符中间的间隔 <code>“sep”.join(string)</code></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;i am bornforthis &quot;</span>
string_joined <span class="token operator">=</span> <span class="token string">&quot;-&quot;</span><span class="token punctuation">.</span>join<span class="token punctuation">(</span>string<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>string_joined<span class="token punctuation">)</span>

<span class="token comment"># output</span>
i<span class="token operator">-</span> <span class="token operator">-</span>a<span class="token operator">-</span>m<span class="token operator">-</span> <span class="token operator">-</span>b<span class="token operator">-</span>o<span class="token operator">-</span>r<span class="token operator">-</span>n<span class="token operator">-</span>f<span class="token operator">-</span>o<span class="token operator">-</span>r<span class="token operator">-</span>t<span class="token operator">-</span>h<span class="token operator">-</span>i<span class="token operator">-</span>s<span class="token operator">-</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-字符串格式化" tabindex="-1"><a class="header-anchor" href="#_6-字符串格式化" aria-hidden="true">#</a> 6. 字符串格式化</h2><p>问题</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;Hi Bornforthis,Welcome to XiaMen.&quot;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span>

<span class="token comment"># ---output---</span>
Hi Bornforthis<span class="token punctuation">,</span>Welcome to XiaMen<span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>所存在的问题：需要换一个人名或者地区，就需要重新创建一个全新的字符串。</li><li>我们更希望有类似模版，让我们不同的人名、地面填写进去。而不是每个人都从头创建一个新字符串。</li></ul><p>当然，这个时候有可能会想到使用字符串的加法，但字符串加法存在问题。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>name <span class="token operator">=</span> <span class="token string">&quot;Bornforthis&quot;</span>
region <span class="token operator">=</span> <span class="token string">&quot;XiaMen&quot;</span>
string1 <span class="token operator">=</span> <span class="token string">&quot;Hi &quot;</span>
string2 <span class="token operator">=</span> <span class="token string">&quot;,Welcome to &quot;</span>
string3 <span class="token operator">=</span> <span class="token string">&quot;.&quot;</span>
result <span class="token operator">=</span> string1 <span class="token operator">+</span> name <span class="token operator">+</span> string2 <span class="token operator">+</span> region <span class="token operator">+</span> string3
<span class="token keyword">print</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>

<span class="token comment"># ---output---</span>
Hi Bornforthis<span class="token punctuation">,</span>Welcome to XiaMen<span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由上面的代码可知，虽然实现了。但是很繁琐，如果更复杂的字符串就不合适了。</p><p>而且另一个问题就是，在 Python 中不同的数据类型不能直接相加，除非强制转换类型为字符串：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;Money is &quot;</span> <span class="token operator">+</span> <span class="token number">190</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span>


<span class="token comment"># ---output---</span>
Traceback <span class="token punctuation">(</span>most recent call last<span class="token punctuation">)</span><span class="token punctuation">:</span>
  File <span class="token string">&quot;/Users/huangjiabao/GitHub/iMac/Pycharm/StudentCoder/40-YEWENTE/demo1.py&quot;</span><span class="token punctuation">,</span> line <span class="token number">1</span><span class="token punctuation">,</span> <span class="token keyword">in</span> <span class="token operator">&lt;</span>module<span class="token operator">&gt;</span>
    string <span class="token operator">=</span> <span class="token string">&quot;Money is &quot;</span> <span class="token operator">+</span> <span class="token number">190</span>
TypeError<span class="token punctuation">:</span> can only concatenate <span class="token builtin">str</span> <span class="token punctuation">(</span><span class="token keyword">not</span> <span class="token string">&quot;int&quot;</span><span class="token punctuation">)</span> to <span class="token builtin">str</span>


string <span class="token operator">=</span> <span class="token string">&quot;Money is &quot;</span> <span class="token operator">+</span> <span class="token builtin">str</span><span class="token punctuation">(</span><span class="token number">190</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span>
<span class="token comment"># ---output---</span>
Money <span class="token keyword">is</span> <span class="token number">190</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>—— <strong>format</strong> 就应运而生了。</p>`,110);function _(x,w){const i=l("CodeTabs");return c(),r("div",null,[g,u(i,{id:"34",data:[{id:"双引号"},{id:"双引号+斜杠"},{id:"三引号"}]},{title0:a(({value:t,isActive:e})=>[s("双引号")]),title1:a(({value:t,isActive:e})=>[s("双引号+斜杠")]),title2:a(({value:t,isActive:e})=>[s("三引号")]),tab0:a(({value:t,isActive:e})=>[h]),tab1:a(({value:t,isActive:e})=>[y]),tab2:a(({value:t,isActive:e})=>[q]),_:1}),f])}const R=o(b,[["render",_],["__file","04-string.html.vue"]]);export{R as default};
