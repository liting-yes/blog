import{c as n}from"./app.6e7281f6.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h2 id="\u5143\u7D20\u5B9E\u73B0\u5C45\u4E2D\u7684\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u5143\u7D20\u5B9E\u73B0\u5C45\u4E2D\u7684\u65B9\u5F0F" aria-hidden="true">#</a> \u5143\u7D20\u5B9E\u73B0\u5C45\u4E2D\u7684\u65B9\u5F0F</h2><h3 id="html\u5E03\u5C40" tabindex="-1"><a class="header-anchor" href="#html\u5E03\u5C40" aria-hidden="true">#</a> HTML\u5E03\u5C40</h3><div class="language-html ext-html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>utf-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>\u5B9E\u73B0\u6C34\u5E73\u5C45\u4E2D<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>out<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>in<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="\u5B9E\u73B0\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u65B9\u6CD5" aria-hidden="true">#</a> \u5B9E\u73B0\u65B9\u6CD5</h3><h4 id="absolute-transform" tabindex="-1"><a class="header-anchor" href="#absolute-transform" aria-hidden="true">#</a> absolute + transform</h4><div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">*</span> <span class="token punctuation">{</span>
  <span class="token property">margin</span> <span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.out</span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid red<span class="token punctuation">;</span>
  <span class="token property">width</span> <span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.in</span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid green<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>

  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-50%<span class="token punctuation">,</span> -50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="absolute-margin-auto" tabindex="-1"><a class="header-anchor" href="#absolute-margin-auto" aria-hidden="true">#</a> absolute + margin auto</h4><div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">*</span> <span class="token punctuation">{</span>
  <span class="token property">margin</span> <span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.out</span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid red<span class="token punctuation">;</span>
  <span class="token property">width</span> <span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.in</span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid green<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>

  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="flex" tabindex="-1"><a class="header-anchor" href="#flex" aria-hidden="true">#</a> flex</h4><div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">*</span> <span class="token punctuation">{</span>
  <span class="token property">margin</span> <span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.out</span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid red<span class="token punctuation">;</span>
  <span class="token property">width</span> <span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.in</span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid green<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="flex-margin-auto" tabindex="-1"><a class="header-anchor" href="#flex-margin-auto" aria-hidden="true">#</a> flex + margin auto</h4><div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">*</span> <span class="token punctuation">{</span>
  <span class="token property">margin</span> <span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.out</span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid red<span class="token punctuation">;</span>
  <span class="token property">width</span> <span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.in</span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid green<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
  
  <span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="table-cell" tabindex="-1"><a class="header-anchor" href="#table-cell" aria-hidden="true">#</a> table-cell</h4><div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">*</span> <span class="token punctuation">{</span>
  <span class="token property">margin</span> <span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.out</span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid red<span class="token punctuation">;</span>
  <span class="token property">width</span> <span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  
  <span class="token property">display</span><span class="token punctuation">:</span> table-cell<span class="token punctuation">;</span>
  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.in</span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid green<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
  
  <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="grid" tabindex="-1"><a class="header-anchor" href="#grid" aria-hidden="true">#</a> grid</h4><div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">*</span> <span class="token punctuation">{</span>
  <span class="token property">margin</span> <span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.out</span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid red<span class="token punctuation">;</span>
  <span class="token property">width</span> <span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.in</span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid green<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
  
  <span class="token property">align-self</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">justify-self</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,16);function t(o,e){return p}var l=s(a,[["render",t]]);export{l as default};
