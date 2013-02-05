pagecalc
========

Simple javascript library for paging calculations.

Install
-------
stable
```bash
npm install pagecalc
```
edge
```bash
npm install https://github.com/daxxog/pagecalc/tarball/master
```

Usage
```javascript
var pagecalc = require('pagecalc');

console.log(pagecalc(
    2, //page number
    5, //item limit
    10 //max items
));

/* output: 
    [ 6, 7, 8, 9, 10 ]
*/
```