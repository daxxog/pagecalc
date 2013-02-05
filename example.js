/* pagecalc / example.js
 * pagecalc usage example.
 * (c) 2013 David (daXXog) Volm ><> + + + <><
 * Released under Apache License, Version 2.0:
 * http://www.apache.org/licenses/LICENSE-2.0.html  
 */

var pagecalc = require('./pagecalc.js');

console.log(pagecalc(
    2, //page number
    5, //item limit
    10 //max items
));

/* output: 
    [ 6, 7, 8, 9, 10 ]
*/