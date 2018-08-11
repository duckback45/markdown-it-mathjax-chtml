const assert = require('assert');
const tex2html = require('../src/tex2html');

describe('mathjax basic conversion', function(){
    const result = tex2html('1+a');
    it('conversion succeed', function(){
        assert.notEqual(result, undefined);
        assert.notEqual(result.html, undefined);
        assert.notEqual(result.css, undefined);
    })
})