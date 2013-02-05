/* pagecalc
 * Simple javascript library for paging calculations.
 * (c) 2013 David (daXXog) Volm ><> + + + <><
 * Released under Apache License, Version 2.0:
 * http://www.apache.org/licenses/LICENSE-2.0.html  
 */
 
/* UMD LOADER: https://github.com/umdjs/umd/blob/master/returnExports.js */
(function (root, factory) {
    if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like developmentiroments that support module.exports,
        // like Node.
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(factory);
    } else {
        // Browser globals (root is window)
        root.returnExports = factory();
  }
}(this, function() {
    var PageCalc = function(page, limit, max) { //take a page number 1-max with a limit on items per page and get an array with valid values; returns -1 if out of range
        var _page = [],
            lower = ((page - 1)*limit),
            upper = (page*limit);
        
        if(upper>max || lower<0) {
            return -1;
        } else {
            for(var i = lower; i < upper; i++) {
                _page.push(i + 1);
            }
            
            return _page;
        }
    };
    
    return PageCalc;
}));