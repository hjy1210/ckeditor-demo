## ckeditor with mathjax.js and mhchem.js
1. Use [Online Builder](http://ckeditor.com/builder) to build standard ckeditor preset and mathematical formula,font,html5video,simple audio,list-style plugins with moono-lisa skin.
2. Copy directory mathjax into root of website.
3. In ckeditor/congig.js add line `config.mathJaxLib = '/mathjax/MathJax.js?config=TeX-AMS-MML_HTMLorMML3';`

## html
```
  <textarea cols="80" id="editor2" name="editor2" rows="30">	
    &lt;ul&gt;		
      &lt;li&gt;This is an &lt;strong&gt;unordered list&lt;/strong&gt;&lt;/li&gt;		
      &lt;li&gt;List item 2&lt;/li&gt;		
      &lt;li&gt;List item 3&lt;/li&gt;	
    &lt;/ul&gt;		
    &lt;hr&gt;		
    &lt;table border="2"&gt;			
      &lt;tr&gt;
        &lt;td&gt;A simple table &lt;/td&gt;
        &lt;td&gt;with two rows&lt;/td&gt;
      &lt;/tr&gt;		
      &lt;tr&gt;
        &lt;td style="background-color:#ffdddd;"&gt;with background color&lt;/td&gt;
        &lt;td style="background-color:#ffdddd;"&gt;for bottom cells&lt;/td&gt;
      &lt;/tr&gt;		
    &lt;/table&gt;
	</textarea>
  <script>
    CKEDITOR.replace('editor2', {
      customConfig: '/itemBodyConfig.js'
    });
  </script>
  
  <div id="editor1" contenteditable="true">
    <h1>Inline Editing in Action!</h1>
    <p>The "div" element that contains this text is now editable.
  </div>
  <script>
    // Turn off automatic editor creation first.
    CKEDITOR.disableAutoInline = true;
    CKEDITOR.inline('editor1', {
      customConfig: '/itemBodyConfig.js'
    });
  </script>
```
## itemBodyConfig.js
```
  config.mathJaxLib = '/mathjax/MathJax.js?config=TeX-AMS-MML_HTMLorMML3';
  config.font_names = '標楷體/標楷體;' + config.font_names;
  config.stylesSet = 'default:/itemBodyStyle.js';
```

## itemBodyStyl.js
```
CKEDITOR.stylesSet.add( 'default', [
  ...
  { name: 'Box', element: 'span', styles: { 'border': '1px solid black' } },
  ...
]);
```
## qtiEditor.html
用來編輯QtiItem

## index2.html clinet2.jsx
利用react-ckeditor-wrapper來實作react component with ckeditor features

## index3.html index3.jsx Editor.jsx
只用react, react-dom, ckeditor 實作react component with ckeditor features