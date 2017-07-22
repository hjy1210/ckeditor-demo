## ckeditor with mathjax.js and mhchem.js
1. Use [Online Builder](http://ckeditor.com/builder) to build standard ckeditor preset and mathematical formula plugin with moono-lisa skin.
2. Copy directory mathjax into root of website.
3. In ckeditor/congig.js add line `config.mathJaxLib = '/mathjax/MathJax.js?config=TeX-AMS-MML_HTMLorMML3';`