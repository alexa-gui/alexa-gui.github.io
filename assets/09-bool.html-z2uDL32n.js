import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,d as e}from"./app--kPdamV4.js";const t="/assets/image-20240207073308404-cWSSmJSR.png",o="/assets/image-20240207073333734-kOnyMxC2.png",p={},l=e(`<h2 id="_1-boolean-values" tabindex="-1"><a class="header-anchor" href="#_1-boolean-values" aria-hidden="true">#</a> 1. Boolean Values</h2><p>Meaning: Represents true or false in judgments, generally used in conditional tests.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>a <span class="token operator">=</span> <span class="token boolean">True</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">10</span> <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">10</span> <span class="token operator">&gt;</span> <span class="token number">8</span><span class="token punctuation">)</span>

<span class="token comment"># output</span>
<span class="token boolean">True</span>
<span class="token boolean">False</span>
<span class="token boolean">True</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+t+`" alt="image-20240207073308404" tabindex="0" loading="lazy"><figcaption>image-20240207073308404</figcaption></figure><ul><li>All non-empty values are considered <code>True</code>.</li><li>All empty sequences, empty numbers are considered <code>False</code>.</li></ul><h2 id="_2-logical-operators" tabindex="-1"><a class="header-anchor" href="#_2-logical-operators" aria-hidden="true">#</a> 2. Logical Operators</h2><p>Logical operators: Used to check if two or more conditions are satisfied.</p><p>Logical operators exist only in booleans.</p><table><thead><tr><th>Logical Operator</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td>and (&quot;logical and&quot;)</td><td style="text-align:left;">Returns True if both operands are True.</td></tr><tr><td>or (&quot;logical or&quot;)</td><td style="text-align:left;">Returns True if at least one of the operands is True.</td></tr><tr><td>not (&quot;logical not&quot;)</td><td style="text-align:left;">Used to reverse the state of the operand.</td></tr></tbody></table><table><thead><tr><th>exp</th><th>bool</th><th>value</th><th>Return value === print(exp)</th></tr></thead><tbody><tr><td>3 and 5</td><td>True and True</td><td>True</td><td>5 *Evaluates from left to right, returns 5 when it reaches True (both need to be True)</td></tr><tr><td>3 or 5</td><td>True or True</td><td>True</td><td>3 *Only needs one True, so stops at 3</td></tr><tr><td>0 or 5</td><td>False or True</td><td>True</td><td>5 *Stops at 5 to satisfy the condition</td></tr><tr><td>3 and not 5</td><td>True and False</td><td>False</td><td>False</td></tr><tr><td>0 and 5</td><td>False and True</td><td>False</td><td>0 *0 and False are equivalent</td></tr></tbody></table><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>s1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token boolean">False</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">}</span>
s2 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token boolean">False</span><span class="token punctuation">}</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>s1<span class="token punctuation">,</span> s2<span class="token punctuation">)</span>

<span class="token comment"># output</span>
<span class="token punctuation">{</span><span class="token boolean">False</span><span class="token punctuation">}</span> <span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span>  <span class="token comment"># The set automatically removes duplicates - 0 and False are considered equivalent</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>In <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token boolean">True</span> <span class="token keyword">and</span> <span class="token boolean">False</span> <span class="token keyword">or</span> <span class="token boolean">True</span> 
Out<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token boolean">True</span>
<span class="token comment"># Evaluates the right side of and first, from right to left</span>

In <span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token boolean">False</span> <span class="token keyword">or</span> <span class="token boolean">False</span> <span class="token keyword">or</span> <span class="token keyword">not</span> <span class="token boolean">False</span>
Out<span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token boolean">True</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-expression-application-—-conditional-testing" tabindex="-1"><a class="header-anchor" href="#_3-expression-application-—-conditional-testing" aria-hidden="true">#</a> 3. Expression Application — Conditional Testing</h2><ul><li>Check if the current variable is equal to a specific value.</li><li>Compare the size of numbers.</li><li>Check if a specific value is in a sequence.</li></ul><h3 id="_3-1-multiple-conditions-checking" tabindex="-1"><a class="header-anchor" href="#_3-1-multiple-conditions-checking" aria-hidden="true">#</a> 3.1 Multiple Conditions Checking</h3><p>Use <code>and</code> to check multiple conditions.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>age1 <span class="token operator">=</span> <span class="token number">17</span>
age2 <span class="token operator">=</span> <span class="token number">18</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>age1 <span class="token operator">&gt;=</span> <span class="token number">18</span> <span class="token keyword">and</span> age2 <span class="token operator">&gt;=</span><span class="token number">18</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>age1 <span class="token operator">&gt;=</span> <span class="token number">15</span> <span class="token keyword">and</span> age2 <span class="token operator">&gt;=</span><span class="token number">18</span><span class="token punctuation">)</span>

<span class="token comment"># output</span>
<span class="token boolean">False</span>
<span class="token boolean">True</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Use <code>or</code> to check multiple conditions.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>age1 <span class="token operator">=</span> <span class="token number">17</span>
age2 <span class="token operator">=</span> <span class="token number">18</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>age1 <span class="token operator">&gt;=</span> <span class="token number">18</span> <span class="token keyword">or</span> age2 <span class="token operator">&gt;=</span><span class="token number">18</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>age1 <span class="token operator">&gt;=</span> <span class="token number">15</span> <span class="token keyword">or</span> age2 <span class="token operator">&gt;=</span><span class="token number">18</span><span class="token punctuation">)</span>

<span class="token comment"># output</span>
<span class="token boolean">True</span>
<span class="token boolean">True</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+o+'" alt="image-20240207073333734" tabindex="0" loading="lazy"><figcaption>image-20240207073333734</figcaption></figure>',20),i=[l];function c(r,d){return s(),a("div",null,i)}const m=n(p,[["render",c],["__file","09-bool.html.vue"]]);export{m as default};