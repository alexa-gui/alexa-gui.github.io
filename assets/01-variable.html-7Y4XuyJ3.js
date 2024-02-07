import{_ as c}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as p,o as r,c as u,b as o,w as a,d as i,e as s,a as n}from"./app--kPdamV4.js";const d={},m=i('<h2 id="_1-understanding-variables-—-examples-from-life" tabindex="-1"><a class="header-anchor" href="#_1-understanding-variables-—-examples-from-life" aria-hidden="true">#</a> 1. Understanding Variables — Examples from Life</h2><h3 id="_1-1-literal-understanding" tabindex="-1"><a class="header-anchor" href="#_1-1-literal-understanding" aria-hidden="true">#</a> 1.1 Literal Understanding</h3><ul><li>变 (Biàn): Change</li><li>量 (Liàng): Size</li></ul><h3 id="_1-2-an-example-🌰" tabindex="-1"><a class="header-anchor" href="#_1-2-an-example-🌰" aria-hidden="true">#</a> 1.2 An Example 🌰</h3><p>Imagine you are the class monitor and you need to track the monthly exam scores of each student in the class. Each month, there&#39;s a sheet of paper with scores listed for each student, such as:</p><ol><li>Li Lei 98 points</li><li>Ma Dongmei 89 points</li><li>Liu Yitong 96 points</li><li>......</li></ol><p>One day, the teacher asks to see Liu Yitong&#39;s scores for January, February, and March. As the class monitor, what do you do? — You can&#39;t just give the teacher all the monthly exam sheets; that would be inappropriate.</p><p>You should copy Liu Yitong&#39;s scores for January, February, and March onto a separate sheet of paper and then give it to the teacher.</p><p>So, why not initially assign an envelope (or a file) for each student? The envelope starts flat, and when we put things (data) into it, does it not expand? — Does it not change? Does it not have size? Clearly, it does.</p><p>So, an envelope is like <strong><span style="color:orange;">a variable that allocates space in the computer&#39;s memory to store data.</span></strong></p><p><strong>Characteristics:</strong> The value of a variable can be overwritten, remembering only the last value.</p><h2 id="_2-how-to-create-variables-—-assignment-statements" tabindex="-1"><a class="header-anchor" href="#_2-how-to-create-variables-—-assignment-statements" aria-hidden="true">#</a> 2. How to Create Variables — Assignment Statements</h2><ol><li><strong>Variable:</strong> Represents or references a value using a variable name.</li></ol><ul><li>Nuwa molded a clay figurine, which had no life. Then Nuwa waved a willow branch, giving life to the clay figurine. Now, the clay figurine represents Nuwa&#39;s descendant. &quot;Variable: clay figurine, Value: Nuwa.&quot;</li><li>Members of the National People&#39;s Congress are elected by the masses through voting. They represent the will of the vast majority of the people. So, they can say, &quot;I represent the will of the masses.&quot; &quot;Variable: NPC representative, Value: the people.&quot;</li></ul><ol start="2"><li>Initializing Assignment Statement: <strong>Variable Name = Expression</strong></li></ol><ul><li>Variable Name: This is the space; we call it by a name.</li><li>Expression: Similar to a mathematical expression.</li></ul><p>Program logic: <strong>From top to bottom, from right to left, and finally, assignment.</strong></p>',17),k=n("div",{class:"language-python line-numbers-mode","data-ext":"py"},[n("pre",{class:"language-python"},[n("code",null,[s("x "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),s("  "),n("span",{class:"token comment"},"# 1 is assigned to x, x represents 1"),s(`
x `),n("span",{class:"token operator"},"="),s(" x "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"10"),s("  "),n("span",{class:"token comment"},"# x + 10 is equivalent to 1 + 10, and the result is 11, which is assigned to x"),s(`
`),n("span",{class:"token keyword"},"print"),n("span",{class:"token punctuation"},"("),s("x"),n("span",{class:"token punctuation"},")"),s("  "),n("span",{class:"token comment"},"# print prints/output"),s(`
`),n("span",{class:"token comment"},"# The pound sign is used for comments, explaining the functionality or purpose of a code line"),s(`

`),n("span",{class:"token comment"},"# ---output---"),s(`
`),n("span",{class:"token number"},"11"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),v=n("div",{class:"language-python line-numbers-mode","data-ext":"py"},[n("pre",{class:"language-python"},[n("code",null,[s("name1 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"lilei"'),s(`
name2 `),n("span",{class:"token operator"},"="),s(` name1
`),n("span",{class:"token keyword"},"print"),n("span",{class:"token punctuation"},"("),s("name2"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},"# Overwriting"),s(`
name1 `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"lilei"'),s(`
name1 `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"hanmeimei"'),s(`
`),n("span",{class:"token keyword"},"print"),n("span",{class:"token punctuation"},"("),s("name1"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},"# ---output---"),s(`
lilei
hanmeimei
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),b=i(`<h2 id="_3-exploring-print" tabindex="-1"><a class="header-anchor" href="#_3-exploring-print" aria-hidden="true">#</a> 3. Exploring print</h2><h3 id="_3-1-printing-multiple-data-at-once" tabindex="-1"><a class="header-anchor" href="#_3-1-printing-multiple-data-at-once" aria-hidden="true">#</a> 3.1 Printing Multiple Data at Once</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>a <span class="token operator">=</span> <span class="token number">1</span>
b <span class="token operator">=</span> <span class="token number">2</span>
c <span class="token operator">=</span> <span class="token number">3</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">)</span>

<span class="token comment"># ---output---</span>
<span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>From the output, it can be seen that <code>print</code> outputs multiple variables simultaneously, with each value separated by a default space.</p><p>Now, can we modify this default space? — The answer is obviously yes.</p><p>Use <code>sep</code>.</p><h3 id="_3-2-modifying-the-separation-of-multiple-variables-printed-simultaneously" tabindex="-1"><a class="header-anchor" href="#_3-2-modifying-the-separation-of-multiple-variables-printed-simultaneously" aria-hidden="true">#</a> 3.2 Modifying the Separation of Multiple Variables Printed Simultaneously</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>a <span class="token operator">=</span> <span class="token number">1</span>
b <span class="token operator">=</span> <span class="token number">2</span>
c <span class="token operator">=</span> <span class="token number">3</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">,</span> sep<span class="token operator">=</span><span class="token string">&#39; interval &#39;</span><span class="token punctuation">)</span>

<span class="token comment"># ---output---</span>
<span class="token number">1</span> interval <span class="token number">2</span> interval <span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-modifying-end-changes-the-output-ending-style" tabindex="-1"><a class="header-anchor" href="#_3-3-modifying-end-changes-the-output-ending-style" aria-hidden="true">#</a> 3.3 Modifying end Changes the Output Ending Style</h3>`,9),h=n("div",{class:"language-python line-numbers-mode","data-ext":"py"},[n("pre",{class:"language-python"},[n("code",null,[s("a "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),s(`
b `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),s(`
c `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),s(`
`),n("span",{class:"token keyword"},"print"),n("span",{class:"token punctuation"},"("),s("a"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"print"),n("span",{class:"token punctuation"},"("),s("b"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"print"),n("span",{class:"token punctuation"},"("),s("c"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},"# ---output---"),s(`
`),n("span",{class:"token number"},"1"),s(`
`),n("span",{class:"token number"},"1"),s(`
`),n("span",{class:"token number"},"1"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),g=n("div",{class:"language-python line-numbers-mode","data-ext":"py"},[n("pre",{class:"language-python"},[n("code",null,[s("a "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),s(`
b `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),s(`
c `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),s(`
`),n("span",{class:"token keyword"},"print"),n("span",{class:"token punctuation"},"("),s("a"),n("span",{class:"token punctuation"},","),s(" end"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},"'\\n\\n\\n'"),n("span",{class:"token punctuation"},")"),s("  "),n("span",{class:"token comment"},"# Add multiple line breaks, \\n means a line break"),s(`
`),n("span",{class:"token keyword"},"print"),n("span",{class:"token punctuation"},"("),s("b"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"print"),n("span",{class:"token punctuation"},"("),s("c"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},"# ---output---"),s(`
`),n("span",{class:"token number"},"1"),s(`


`),n("span",{class:"token number"},"1"),s(`
`),n("span",{class:"token number"},"1"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),y=n("div",{class:"language-python line-numbers-mode","data-ext":"py"},[n("pre",{class:"language-python"},[n("code",null,[s("a "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),s(`
b `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),s(`
c `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),s(`
`),n("span",{class:"token keyword"},"print"),n("span",{class:"token punctuation"},"("),s("a"),n("span",{class:"token punctuation"},","),s(" end"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'" Hugo is hugo "'),n("span",{class:"token punctuation"},")"),s("  "),n("span",{class:"token comment"},"# We can modify it to a non-line-break string"),s(`
`),n("span",{class:"token keyword"},"print"),n("span",{class:"token punctuation"},"("),s("b"),n("span",{class:"token punctuation"},")"),s("  "),n("span",{class:"token comment"},"# This output will be immediately after the end of the previous output"),s(`
`),n("span",{class:"token keyword"},"print"),n("span",{class:"token punctuation"},"("),s("c"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},"# ---output---"),s(`
`),n("span",{class:"token number"},"1"),s(" Hugo "),n("span",{class:"token keyword"},"is"),s(" hugo "),n("span",{class:"token number"},"1"),s(`
`),n("span",{class:"token number"},"1"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),w=i(`<h3 id="_3-4-end-and-sep-can-be-used-simultaneously" tabindex="-1"><a class="header-anchor" href="#_3-4-end-and-sep-can-be-used-simultaneously" aria-hidden="true">#</a> 3.4 <code>end</code> and <code>sep</code> Can Be Used Simultaneously</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>a <span class="token operator">=</span> <span class="token number">1</span>
b <span class="token operator">=</span> <span class="token number">1</span>
c <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">,</span> sep<span class="token operator">=</span><span class="token string">&quot;~&quot;</span><span class="token punctuation">,</span> end<span class="token operator">=</span><span class="token string">&quot; love Python&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># ---output---</span>
<span class="token number">1</span><span class="token operator">~</span><span class="token number">1</span><span class="token operator">~</span><span class="token number">1</span> love Python
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-advanced-assignment-methods" tabindex="-1"><a class="header-anchor" href="#_4-advanced-assignment-methods" aria-hidden="true">#</a> 4. Advanced Assignment Methods</h2><h3 id="_4-1-assigning-the-same-value-to-multiple-variables-simultaneously" tabindex="-1"><a class="header-anchor" href="#_4-1-assigning-the-same-value-to-multiple-variables-simultaneously" aria-hidden="true">#</a> 4.1 Assigning the Same Value to Multiple Variables Simultaneously</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>a <span class="token operator">=</span> b <span class="token operator">=</span> c <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">)</span>

<span class="token comment"># ---output---</span>
<span class="token number">1</span> <span class="token number">1</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-assigning-different-values-to-multiple-variables-simultaneously" tabindex="-1"><a class="header-anchor" href="#_4-2-assigning-different-values-to-multiple-variables-simultaneously" aria-hidden="true">#</a> 4.2 Assigning Different Values to Multiple Variables Simultaneously</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">)</span>

<span class="token comment"># ---output---</span>
<span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div style="text-align:center;"></div><h2 id="_5-naming-rules-for-variables" tabindex="-1"><a class="header-anchor" href="#_5-naming-rules-for-variables" aria-hidden="true">#</a> 5. Naming Rules for Variables</h2><ul><li>A combination of uppercase and lowercase English letters, numbers, and <code>_</code>, and cannot start with a number.</li><li>System keywords cannot be used as variable names. &quot;Get keyword list: <code>help(&#39;keywords&#39;)</code></li><li>Variable names are case-sensitive in Python.</li><li>Variable names cannot contain spaces, but underscores can be used to separate words.</li><li>Avoid using Python&#39;s built-in function names as variables.</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>Here <span class="token keyword">is</span> a <span class="token builtin">list</span> of the Python keywords<span class="token punctuation">.</span>  Enter <span class="token builtin">any</span> keyword to get more <span class="token builtin">help</span><span class="token punctuation">.</span>

<span class="token boolean">False</span>               <span class="token keyword">class</span>               <span class="token class-name">from</span>                <span class="token keyword">or</span>
<span class="token boolean">None</span>                <span class="token keyword">continue</span>            <span class="token keyword">global</span>              <span class="token keyword">pass</span>
<span class="token boolean">True</span>                <span class="token keyword">def</span>                 <span class="token keyword">if</span>                  <span class="token keyword">raise</span>
<span class="token keyword">and</span>                 <span class="token keyword">del</span>                 <span class="token keyword">import</span>              <span class="token keyword">return</span>
<span class="token keyword">as</span>                  <span class="token keyword">elif</span>                <span class="token keyword">in</span>                  <span class="token keyword">try</span>
<span class="token keyword">assert</span>              <span class="token keyword">else</span>                <span class="token keyword">is</span>                  <span class="token keyword">while</span>
<span class="token keyword">async</span>               <span class="token keyword">except</span>              <span class="token keyword">lambda</span>              <span class="token keyword">with</span>
<span class="token keyword">await</span>               <span class="token keyword">finally</span>             <span class="token keyword">nonlocal</span>            <span class="token keyword">yield</span>
<span class="token keyword">break</span>               <span class="token keyword">for</span>                 <span class="token keyword">not</span>      
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),f=n("div",{class:"language-python line-numbers-mode","data-ext":"py"},[n("pre",{class:"language-python"},[n("code",null,[s("n "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"A"'),s(`
N `),n("span",{class:"token operator"},"="),s(`

 `),n("span",{class:"token string"},'"a"'),s(`
`),n("span",{class:"token keyword"},"print"),n("span",{class:"token punctuation"},"("),s("n"),n("span",{class:"token punctuation"},")"),s("  "),n("span",{class:"token comment"},"# If variables are not case-sensitive, what would be the output? — a"),s(`
`),n("span",{class:"token comment"},"# However, they are case-sensitive, so the output is A"),s(`

`),n("span",{class:"token comment"},"# out"),s(`
A
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),x=n("div",{class:"language-python line-numbers-mode","data-ext":"py"},[n("pre",{class:"language-python"},[n("code",null,[n("span",{class:"token comment"},"# Numbers cannot be at the beginning"),s(`
a121iy212c21 `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"a"'),s("  "),n("span",{class:"token comment"},"# Numbers cannot be at the beginning, except for the beginning. You can place them wherever you want."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),_=n("div",{class:"language-python line-numbers-mode","data-ext":"py"},[n("pre",{class:"language-python"},[n("code",null,[s("user_name "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"aiyc"'),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),A=n("div",{class:"language-python line-numbers-mode","data-ext":"py"},[n("pre",{class:"language-python"},[n("code",null,[n("span",{class:"token keyword"},"print"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"aiyc"'),s("  "),n("span",{class:"token comment"},"# Cannot use Python built-in function name as a variable"),s(`
`),n("span",{class:"token keyword"},"print"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"print"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"# Python cannot distinguish"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),J=n("div",{class:"language-python line-numbers-mode","data-ext":"py"},[n("pre",{class:"language-python"},[n("code",null,[n("span",{class:"token comment"},"# Keywords cannot be used as variable names"),s(`
`),n("span",{class:"token keyword"},"await"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"aiyc"'),s(`
`),n("span",{class:"token keyword"},"print"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"await"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"# 'await' has a special function in Python, such as in 'while'"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),q=i('<h2 id="_6-exercises" tabindex="-1"><a class="header-anchor" href="#_6-exercises" aria-hidden="true">#</a> 6. Exercises</h2><ol><li><p>In Python, variable names can start with a number.</p><ul><li>[ ] True</li><li>[x] False</li></ul></li><li><p>In Python, which of the following variable names is valid?</p><ul><li>[ ] 2myVar</li><li>[x] myVar2</li><li>[ ] my-var</li><li>[ ] my var</li></ul></li><li><p>In Python, variable names are case-sensitive.</p><ul><li>[x] True</li><li>[ ] False</li></ul></li><li><p>In Python, <code>my_var</code> and <code>myVar</code> represent the same variable.</p><ul><li>[ ] True</li><li>[x] False</li></ul></li><li><p>Variable names can be Python keywords.</p><ul><li>[ ] True</li><li>[x] False</li></ul></li><li><p><code>None</code> is a special type in Python, representing no value or an empty value.</p><ul><li>[x] True</li><li>[ ] False</li></ul></li><li><p>Which of the following is a valid variable assignment in Python?</p><ul><li>[ ] 123abc = &quot;hello&quot;</li><li>[ ] for = &quot;world&quot;</li><li>[x] _hidden = &quot;secret&quot;</li><li>[ ] import = 123</li></ul></li><li><p>In Python, a variable can be assigned multiple values simultaneously.</p><ul><li>[ ] True</li><li>[x] False</li></ul></li><li><p>Which of the following is a multi-variable assignment in Python?</p><ul><li>[x] a, b, c = 1, 2, 3</li><li>[ ] a = 1, b = 2, c = 3</li><li>[ ] a; b; c = 1; 2; 3</li><li>[ ] a = 1; b = 2; c = 3;</li></ul></li><li><p>A variable must be assigned before using it.</p><ul><li>[x] True</li><li>[ ] False</li></ul></li><li><p>In Python, the type of a variable is static and cannot be changed once assigned.</p><ul><li>[ ] True</li><li>[x] False</li></ul></li><li><p>Which represents a global variable in Python?</p><ul><li>[ ] var = &quot;hello&quot;</li><li>[ ] global var ✅</li><li>[x] var(global) ❌</li><li>[ ] def var():</li></ul></li><li><p>Which represents deleting a variable in Python?</p><ul><li>[ ] delete x</li><li>[ ] del x ✅</li><li>[x] remove x ❌</li><li>[ ] destroy x</li></ul></li><li><p>After <code>x = 5</code>, changing the value of <code>y</code> will also change the value of <code>x</code>.</p><ul><li>[ ] True</li><li>[x] False</li></ul></li><li><p>After <code>x = [1, 2, 3]</code>, changing the content of <code>y</code> will also change the content of <code>x</code>.</p><ul><li>[ ] True ✅</li><li>[x] False ❌</li></ul></li><li><p>In Python, variables can only store values of basic data types, such as integers or strings.</p><ul><li>[ ] True</li><li>[x] False</li></ul></li><li><p>Juice Exchange</p></li></ol><p>Suppose you have two children, the elder brother is named Austin, and the younger brother is named Jaden. Austin wants to drink <strong>juice</strong>, and Jaden wants to drink <strong>cola</strong>. Both brothers have their own exclusive cups and don&#39;t like to use each other&#39;s cups.</p><p>There is only one cup of juice and one cup of cola left at home, and you accidentally filled the elder brother&#39;s cup with cola and the younger brother&#39;s cup with juice.</p><p><strong>Question: How do you swap the juice in the brothers&#39; cups?</strong></p><div class="hint-container info"><p class="hint-container-title">en</p><p>Suppose you have two children, the elder brother is named Austin, and the younger brother is named Jaden. Austin wants to drink juice, and Jaden wants to drink cola. Both brothers have their own exclusive cups and don&#39;t like to use each other&#39;s cups. There is only one cup of juice and one cup of cola left at home, and you accidentally filled the elder brother&#39;s cup with cola and the younger brother&#39;s cup with juice. How can you swap the juice in the brothers&#39; cups?</p></div>',6),C=n("div",{class:"language-python line-numbers-mode","data-ext":"py"},[n("pre",{class:"language-python"},[n("code",null,[s("Austin "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"Coke"'),s("  "),n("span",{class:"token comment"},"# This assignment can be understood as pouring juice"),s(`
Jaden `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"juice"'),s("  "),n("span",{class:"token comment"},"# This assignment can be understood as pouring juice"),s(`
`),n("span",{class:"token keyword"},"print"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Austin"'),n("span",{class:"token punctuation"},","),s(" Austin"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"print"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Jaden"'),n("span",{class:"token punctuation"},","),s(" Jaden"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token comment"},"# Supplementary code"),s(`
`),n("span",{class:"token keyword"},"print"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Austin"'),n("span",{class:"token punctuation"},","),s(" Austin"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"print"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Jaden"'),n("span",{class:"token punctuation"},","),s(" Jaden"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),T=n("div",{class:"language-tips line-numbers-mode","data-ext":"tips"},[n("pre",{class:"language-tips"},[n("code",null,`Two methods:

Method 1: Think about how you would solve it in real life?

> In real life, I think you would introduce an empty cup to operate. How would you operate? Think about it and then think about how to implement it in the code

Method 2: assigning different values to different variables (python specific)
a, b, c = 1, 2, 3

`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),P=n("div",{class:"language-python line-numbers-mode","data-ext":"py"},[n("pre",{class:"language-python"},[n("code",null,[s("Austin "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"Coke"'),s(`
Jaden `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"juice"'),s(`
`),n("span",{class:"token keyword"},"print"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Austin"'),n("span",{class:"token punctuation"},","),s(" Austin"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"print"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Jaden"'),n("span",{class:"token punctuation"},","),s(" Jaden"),n("span",{class:"token punctuation"},")"),s(`
Empty_cup `),n("span",{class:"token operator"},"="),s(` Austin
Austin `),n("span",{class:"token operator"},"="),s(` Jaden
Jaden `),n("span",{class:"token operator"},"="),s(` Empty_cup
`),n("span",{class:"token keyword"},"print"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"-"'),s(),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token number"},"12"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"print"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Austin"'),n("span",{class:"token punctuation"},","),s(" Austin"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"print"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Jaden"'),n("span",{class:"token punctuation"},","),s(" Jaden"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),V=n("div",{class:"language-python line-numbers-mode","data-ext":"py"},[n("pre",{class:"language-python"},[n("code",null,[s("Austin "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"Coke"'),s(`
Jaden `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"juice"'),s(`
`),n("span",{class:"token keyword"},"print"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Austin"'),n("span",{class:"token punctuation"},","),s(" Austin"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"print"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Jaden"'),n("span",{class:"token punctuation"},","),s(" Jaden"),n("span",{class:"token punctuation"},")"),s(`
Austin`),n("span",{class:"token punctuation"},","),s(" Jaden "),n("span",{class:"token operator"},"="),s(" Jaden"),n("span",{class:"token punctuation"},","),s(` Austin
`),n("span",{class:"token keyword"},"print"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"-"'),s(),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token number"},"12"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"print"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Austin"'),n("span",{class:"token punctuation"},","),s(" Austin"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"print"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Jaden"'),n("span",{class:"token punctuation"},","),s(" Jaden"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),S=i(`<div class="hint-container caution"><p class="hint-container-title">！！！</p><details class="hint-container details"><summary>Don’t use the following methods！！！</summary><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>Austin <span class="token operator">=</span> <span class="token string">&quot;Coke&quot;</span>
Jaden <span class="token operator">=</span> <span class="token string">&quot;juice&quot;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Austin&quot;</span><span class="token punctuation">,</span> Austin<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Jaden&quot;</span><span class="token punctuation">,</span> Jaden<span class="token punctuation">)</span>
<span class="token comment"># 待补充代码</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Austin&quot;</span><span class="token punctuation">,</span> Jaden<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Jaden&quot;</span><span class="token punctuation">,</span> Austin<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details></div><ol start="18"><li><p>Create variables</p></li><li><p>Output：</p></li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>Austin Jaden Alex Cava
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="20"><li>Output：</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>Austin$Jaden$Alex$Cava<span class="token operator">%</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,5);function N(M,j){const l=p("CodeTabs");return r(),u("div",null,[m,o(l,{id:"105",data:[{id:"demo1"},{id:"demo2"}]},{title0:a(({value:e,isActive:t})=>[s("demo1")]),title1:a(({value:e,isActive:t})=>[s("demo2")]),tab0:a(({value:e,isActive:t})=>[k]),tab1:a(({value:e,isActive:t})=>[v]),_:1}),b,o(l,{id:"136",data:[{id:"Before Modification"},{id:"Modified end 1"},{id:"Modified end 2"}]},{title0:a(({value:e,isActive:t})=>[s("Before Modification")]),title1:a(({value:e,isActive:t})=>[s("Modified end 1")]),title2:a(({value:e,isActive:t})=>[s("Modified end 2")]),tab0:a(({value:e,isActive:t})=>[h]),tab1:a(({value:e,isActive:t})=>[g]),tab2:a(({value:e,isActive:t})=>[y]),_:1}),w,o(l,{id:"195",data:[{id:"Code1"},{id:"Code2"},{id:"Code3"},{id:"Code4"},{id:"Code5"}]},{title0:a(({value:e,isActive:t})=>[s("Code1")]),title1:a(({value:e,isActive:t})=>[s("Code2")]),title2:a(({value:e,isActive:t})=>[s("Code3")]),title3:a(({value:e,isActive:t})=>[s("Code4")]),title4:a(({value:e,isActive:t})=>[s("Code5")]),tab0:a(({value:e,isActive:t})=>[f]),tab1:a(({value:e,isActive:t})=>[x]),tab2:a(({value:e,isActive:t})=>[_]),tab3:a(({value:e,isActive:t})=>[A]),tab4:a(({value:e,isActive:t})=>[J]),_:1}),q,o(l,{id:"558",data:[{id:"Sample Code"},{id:"Tips"},{id:"answer１"},{id:"answer2"}]},{title0:a(({value:e,isActive:t})=>[s("Sample Code")]),title1:a(({value:e,isActive:t})=>[s("Tips")]),title2:a(({value:e,isActive:t})=>[s("answer１")]),title3:a(({value:e,isActive:t})=>[s("answer2")]),tab0:a(({value:e,isActive:t})=>[C]),tab1:a(({value:e,isActive:t})=>[T]),tab2:a(({value:e,isActive:t})=>[P]),tab3:a(({value:e,isActive:t})=>[V]),_:1}),S])}const I=c(d,[["render",N],["__file","01-variable.html.vue"]]);export{I as default};