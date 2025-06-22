const chai = require('chai')
const sinon = require('sinon')
global.expect = chai.expect
const fs = require('file-system')
const jsdom = require('mocha-jsdom')
const path = require('path')
const babel = require('babel-core');
const assert = require('assert');

const html = fs.readFileSync(path.resolve(__dirname, '..', 'index.html'), 'utf-8')
const js = fs.readFileSync(path.resolve(__dirname, '..', 'index.js'), 'utf-8')

// Use Babel to transform the code
const babelResult = babel.transform(js, {
    presets: ['env']
});

const src = babelResult.code

jsdom({
    html, src
});

module.exports = {
    assert,
    chai,
    sinon,
    fs,
    jsdom,
    path,
    babel,
    html,
    babelResult,
    src,
    js
}