import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as c,o as r,c as l,b as d,w as a,d as o,e as s,a as n}from"./app--kPdamV4.js";const u="/assets/image-20231218084943233-f4M9iRSp.png",m={},k=o('<h2 id="_1-characteristics-of-numeric-types" tabindex="-1"><a class="header-anchor" href="#_1-characteristics-of-numeric-types" aria-hidden="true">#</a> 1. Characteristics of Numeric Types</h2><figure><img src="'+u+`" alt="image-20231222232833034" tabindex="0" loading="lazy"><figcaption>image-20231222232833034</figcaption></figure><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>In <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token operator">+</span><span class="token number">1</span>
Out<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token number">2</span>

In <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token operator">+</span><span class="token number">1.0</span>
Out<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token number">2.0</span>

In <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token number">9</span><span class="token operator">-</span><span class="token number">1</span>
Out<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token number">8</span>

In <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token number">9</span><span class="token operator">-</span><span class="token number">1.0</span>
Out<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token number">8.0</span>

In <span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token number">2</span><span class="token operator">*</span><span class="token number">2</span>
Out<span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token number">4</span>

In <span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token number">2</span><span class="token operator">*</span><span class="token number">2.0</span>
Out<span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token number">4.0</span>

In <span class="token punctuation">[</span><span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token number">9</span><span class="token operator">/</span><span class="token number">3</span>
Out<span class="token punctuation">[</span><span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token number">3.0</span>

In <span class="token punctuation">[</span><span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token comment"># If one of the numbers is float, the result will be float (highest priority)</span>

In <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token comment"># Division involves precision issues, so the result is a float</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">Patterns</p><ul><li><p>If one of the numbers is a float, the result will be a float (highest priority).</p></li><li><p>Division involves precision issues, so the result type is a float.</p></li></ul></div><h2 id="_2-arithmetic-operators" tabindex="-1"><a class="header-anchor" href="#_2-arithmetic-operators" aria-hidden="true">#</a> 2. Arithmetic Operators</h2><p><strong>Arithmetic Operators:</strong> Used for arithmetic calculations.</p><table><thead><tr><th>Operator</th><th>Description</th><th>Example</th></tr></thead><tbody><tr><td><code>+</code></td><td>Addition operator</td><td><code>1 + 1 = 2</code></td></tr><tr><td><code>-</code></td><td>Subtraction operator</td><td><code>2 - 1 = 1</code></td></tr><tr><td><code>*</code></td><td>Multiplication operator</td><td><code>2 * 3 = 6</code></td></tr><tr><td><code>/</code></td><td>Division operator</td><td><code>9 / 3 = 3.0</code></td></tr><tr><td><code>**</code></td><td>Exponentiation operator</td><td><code>2 ** 3 = 8</code></td></tr><tr><td><code>%</code></td><td>Modulus operator, calculates remainder</td><td><code>9 % 2 = 1</code></td></tr><tr><td><code>//</code></td><td>Floor division operator, calculates quotient and removes decimal part</td><td><code>9 // 2 = 4</code></td></tr></tbody></table><blockquote><p>Note: 9 / 2 = 4......1</p></blockquote><h2 id="_3-a-little-practice-numeric-transformation" tabindex="-1"><a class="header-anchor" href="#_3-a-little-practice-numeric-transformation" aria-hidden="true">#</a> 3. A Little Practice: Numeric Transformation</h2><p>Suppose you have a two-digit integer, and you need to generate two new numbers based on the following rules:</p><ul><li>The first new number is the sum of the individual digits of the original number.</li><li>The second new number is the reversal of the original number (e.g., if the original number is 21, the reversed number is 12).</li></ul><p>Write Python code to implement the above requirements.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>a <span class="token operator">=</span> <span class="token number">12</span>
a0 <span class="token operator">=</span> a <span class="token operator">//</span> <span class="token number">10</span>
a1 <span class="token operator">=</span> a <span class="token operator">%</span> <span class="token number">10</span>
b <span class="token operator">=</span> a0 <span class="token operator">+</span> a1
c <span class="token operator">=</span> <span class="token number">10</span> <span class="token operator">*</span> a1 <span class="token operator">+</span> a0
<span class="token keyword">print</span><span class="token punctuation">(</span>b<span class="token punctuation">,</span> c<span class="token punctuation">)</span>

<span class="token comment"># output</span>
<span class="token number">3</span> <span class="token number">21</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Input:</strong></p><p>An integer <code>num</code> (10 ≤ num ≤ 99)</p><p><strong>Output:</strong></p><p>Two integers or an error message string.</p><p><strong>Example:</strong></p><p>Suppose the input number <code>num</code> is 91, then your code should output two numbers: 10 (sum of 9 and 1) and 19 (reversed form of 91).</p><p>Suppose the input number <code>num</code> is 26, then your code should output two numbers: 8 (sum of 2 and 6) and 62 (reversed form of 26).</p><p>Suppose the input number <code>num</code> is 18, then your code should output two numbers: 9 (sum of 1 and 8) and 81 (reversed form of 18).</p><h2 id="_4-comparison-operators-comparing-the-values" tabindex="-1"><a class="header-anchor" href="#_4-comparison-operators-comparing-the-values" aria-hidden="true">#</a> 4. Comparison Operators: Comparing the Values</h2><table><thead><tr><th>Operator</th><th>Description</th><th>Example</th></tr></thead><tbody><tr><td><code>&gt;</code></td><td>Checks if the first operand is greater than the second</td><td><code>print(1 &gt; 2)</code></td></tr><tr><td><code>&lt;</code></td><td>Checks if the first operand is less than the second</td><td><code>print(1 &lt; 2)</code></td></tr><tr><td><code>&gt;=</code></td><td>Checks if the first operand is greater than or equal to the second</td><td><code>print(3 &gt;= 3)</code></td></tr><tr><td><code>&lt;=</code></td><td>Checks if the first operand is less than or equal to the second</td><td><code>print(3 &lt;= 4)</code></td></tr><tr><td><code>==</code></td><td>Checks if the two operands are equal</td><td><code>print(2 == 2)</code></td></tr><tr><td><code>!=</code></td><td>Checks if the two operands are not equal</td><td><code>print(2 != 1)</code></td></tr></tbody></table><blockquote><p>Try the examples above and see the results?</p></blockquote><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">&gt;</span> <span class="token number">2</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">3</span> <span class="token operator">&gt;=</span> <span class="token number">3</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">3</span> <span class="token operator">&lt;=</span> <span class="token number">4</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">!=</span> <span class="token number">1</span><span class="token punctuation">)</span>

<span class="token comment"># output</span>
<span class="token boolean">False</span>
<span class="token boolean">True</span>
<span class="token boolean">True</span>
<span class="token boolean">True</span>
<span class="token boolean">True</span>
<span class="token boolean">True</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-assignment-operators" tabindex="-1"><a class="header-anchor" href="#_5-assignment-operators" aria-hidden="true">#</a> 5. Assignment Operators</h2><table><thead><tr><th>Operator</th><th>Description</th><th>Example</th></tr></thead><tbody><tr><td><code>=</code></td><td>Assigns the value on the right to the variable on the left</td><td><code>a = 1</code></td></tr><tr><td><code>+=</code></td><td><code>a += b</code> is equivalent to <code>a = a + b</code></td><td><code>a += 10</code></td></tr><tr><td><code>-=</code></td><td><code>a -= b</code> is equivalent to \`a</td><td></td></tr></tbody></table><p>= a - b<code> |</code>a -= 10<code> | |</code>*=<code> |</code>a *= b<code>is equivalent to</code>a = a * b<code> |</code>a *= 10<code> | |</code>/=<code> |</code>a /= b<code>is equivalent to</code>a = a / b<code> |</code>a /= 10<code> | |</code>**=<code> |</code>a **= b<code>is equivalent to</code>a = a ** b<code> |</code>a **= 10<code> | |</code>//=<code> |</code>a //= b<code>is equivalent to</code>a = a // b<code> |</code>a //= 10\` |</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>a <span class="token operator">=</span> <span class="token number">1</span>
a <span class="token operator">+=</span> <span class="token number">10</span>
a <span class="token operator">-=</span> <span class="token number">10</span>
a <span class="token operator">*=</span> <span class="token number">10</span>
a <span class="token operator">/=</span> <span class="token number">10</span>
a <span class="token operator">**=</span> <span class="token number">10</span>
a <span class="token operator">//=</span> <span class="token number">10</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>

<span class="token comment"># output </span>
<span class="token number">0.0</span> <span class="token comment"># Division results in a float</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,29),v=n("div",{class:"language-python line-numbers-mode","data-ext":"py"},[n("pre",{class:"language-python"},[n("code",null,[n("span",{class:"token comment"},"# Assignment operator form"),s(`
a `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),s(`
a `),n("span",{class:"token operator"},"+="),s(),n("span",{class:"token number"},"10"),s(`
`),n("span",{class:"token keyword"},"print"),n("span",{class:"token punctuation"},"("),s("a"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"# Outputs 11"),s(`

`),n("span",{class:"token comment"},"# Regular form"),s(`
a `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),s(`
a `),n("span",{class:"token operator"},"="),s(" a "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"10"),s(`
`),n("span",{class:"token keyword"},"print"),n("span",{class:"token punctuation"},"("),s("a"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"# Outputs 11"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),b=n("div",{class:"language-python line-numbers-mode","data-ext":"py"},[n("pre",{class:"language-python"},[n("code",null,[s("a "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"4"),s(),n("span",{class:"token operator"},"//"),s(),n("span",{class:"token number"},"2"),s(),n("span",{class:"token comment"},"# Integer result"),s(`
b `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"4.5"),s(),n("span",{class:"token operator"},"//"),s(),n("span",{class:"token number"},"2"),s(),n("span",{class:"token comment"},"# Float result"),s(`
`),n("span",{class:"token keyword"},"print"),n("span",{class:"token punctuation"},"("),s("a"),n("span",{class:"token punctuation"},","),s(" b"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},"# output"),s(`
`),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2.0"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),h=o(`<h4 id="_7-3-1-sum-and-difference-of-numbers" tabindex="-1"><a class="header-anchor" href="#_7-3-1-sum-and-difference-of-numbers" aria-hidden="true">#</a> 7.3.1 Sum and Difference of Numbers:</h4><p>Write a Python code snippet that creates two numbers <code>a</code> and <code>b</code>, calculates and prints their sum and the result of subtracting <code>a</code> from <code>b</code>.</p><p><strong>Code Template</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>a <span class="token operator">=</span> <span class="token number">10</span>
b <span class="token operator">=</span> <span class="token number">5</span>
Sum <span class="token operator">=</span> a <span class="token operator">+</span> b
Difference <span class="token operator">=</span> a <span class="token operator">-</span> b
<span class="token keyword">print</span><span class="token punctuation">(</span>Sum<span class="token punctuation">,</span> Difference<span class="token punctuation">)</span>
<span class="token comment"># Test</span>
<span class="token keyword">assert</span> Sum <span class="token operator">==</span> a <span class="token operator">+</span> b
<span class="token keyword">assert</span> Difference <span class="token operator">==</span> a <span class="token operator">-</span> b
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Output Example:</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>Sum<span class="token punctuation">:</span> <span class="token number">8</span>
Difference<span class="token punctuation">:</span> <span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_7-3-2-multiplication-and-division-of-numbers" tabindex="-1"><a class="header-anchor" href="#_7-3-2-multiplication-and-division-of-numbers" aria-hidden="true">#</a> 7.3.2 Multiplication and Division of Numbers</h4><p>Write a Python code snippet that creates two numbers <code>x</code> and <code>y</code>, calculates and prints their product and division result.</p><p><strong>Code Template</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>x <span class="token operator">=</span> <span class="token number">10</span>
y <span class="token operator">=</span> <span class="token number">5</span>
product <span class="token operator">=</span> x <span class="token operator">*</span> y
division <span class="token operator">=</span> x <span class="token operator">/</span> y
<span class="token keyword">print</span><span class="token punctuation">(</span>product<span class="token punctuation">,</span> division<span class="token punctuation">)</span>

<span class="token comment"># Test</span>
<span class="token keyword">assert</span> product <span class="token operator">==</span> x <span class="token operator">*</span> y
<span class="token keyword">assert</span> division <span class="token operator">==</span> x <span class="token operator">/</span> y
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Output Example:</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>Product<span class="token punctuation">:</span> <span class="token number">12</span>
Division<span class="token punctuation">:</span> <span class="token number">3.0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_7-3-3-remainder-and-power-operation" tabindex="-1"><a class="header-anchor" href="#_7-3-3-remainder-and-power-operation" aria-hidden="true">#</a> 7.3.3 Remainder and Power Operation</h4><p>Write a Python code snippet that creates two numbers <code>m</code> and <code>n</code>, calculates and prints the remainder of <code>m</code> divided by <code>n</code> and <code>m</code> raised to the power of <code>n</code>.</p><p><strong>Code Template</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>m <span class="token operator">=</span> <span class="token number">10</span>
n <span class="token operator">=</span> <span class="token number">5</span>
floor_div <span class="token operator">=</span> m <span class="token operator">//</span> n
power <span class="token operator">=</span> m <span class="token operator">**</span> n
<span class="token keyword">print</span><span class="token punctuation">(</span>floor_div<span class="token punctuation">,</span> power<span class="token punctuation">)</span>

<span class="token comment"># Test</span>
<span class="token keyword">assert</span> remainder <span class="token operator">==</span> m <span class="token operator">%</span> n
<span class="token keyword">assert</span> power <span class="token operator">==</span> m <span class="token operator">**</span> n
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>**Output Example:</p><p>Sure, here&#39;s the translation of the provided text into English in Markdown format:</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token bold"><span class="token punctuation">**</span><span class="token content">Code Exercise: Comparisons</span><span class="token punctuation">**</span></span>

\`\`\`python
Remainder: 1
Power: 81
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_7-3-4-comparison-operations" tabindex="-1"><a class="header-anchor" href="#_7-3-4-comparison-operations" aria-hidden="true">#</a> 7.3.4 Comparison Operations</h4><p>Write a Python code snippet that takes two numbers <code>p</code> and <code>q</code> as input, compares their sizes, and prints the corresponding result (greater than, less than, equal to).</p><p><strong>Code Template</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>p <span class="token operator">=</span> <span class="token number">10</span>
q <span class="token operator">=</span> <span class="token number">5</span>
<span class="token keyword">if</span> p <span class="token operator">&gt;</span> q<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>p<span class="token punctuation">,</span> <span class="token string">&quot; is greater than &quot;</span><span class="token punctuation">,</span> q<span class="token punctuation">)</span>
<span class="token keyword">elif</span> p <span class="token operator">&lt;</span> q<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>p<span class="token punctuation">,</span> <span class="token string">&quot; is less than &quot;</span><span class="token punctuation">,</span> q<span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>p<span class="token punctuation">,</span> <span class="token string">&quot; is equal to &quot;</span><span class="token punctuation">,</span> q<span class="token punctuation">)</span>
    

<span class="token keyword">if</span> ______<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;</span><span class="token interpolation"><span class="token punctuation">{</span>p<span class="token punctuation">}</span></span><span class="token string"> is greater than </span><span class="token interpolation"><span class="token punctuation">{</span>q<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>
    <span class="token keyword">assert</span> p <span class="token operator">&gt;</span> q
<span class="token keyword">elif</span> ______<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;</span><span class="token interpolation"><span class="token punctuation">{</span>p<span class="token punctuation">}</span></span><span class="token string"> is less than </span><span class="token interpolation"><span class="token punctuation">{</span>q<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>
    <span class="token keyword">assert</span> p <span class="token operator">&lt;</span> q
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;</span><span class="token interpolation"><span class="token punctuation">{</span>p<span class="token punctuation">}</span></span><span class="token string"> is equal to </span><span class="token interpolation"><span class="token punctuation">{</span>q<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>
    <span class="token keyword">assert</span> p <span class="token operator">==</span> q
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Output Example:</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token number">4</span> <span class="token keyword">is</span> less than <span class="token number">5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,25);function g(y,f){const p=c("CodeTabs");return r(),l("div",null,[k,d(p,{id:"321",data:[{id:"Code Example"},{id:"Example"}]},{title0:a(({value:e,isActive:t})=>[s("Code Example")]),title1:a(({value:e,isActive:t})=>[s("Example")]),tab0:a(({value:e,isActive:t})=>[v]),tab1:a(({value:e,isActive:t})=>[b]),_:1}),h])}const x=i(m,[["render",g],["__file","03-numeric-type.html.vue"]]);export{x as default};