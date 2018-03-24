#!/usr/bin/env node
/*eslint no-console:0*/
/**
 * Returns an ES6 module that exports an array with selected data
 * from emojione's emoji.json file
 *
 * Sample output:
 *
 * export default [
 * ["1F469-1F469-1F467-1F467","👩👩👧👧",":family_wwgg:"],
 * ["1F468-1F469-1F467-1F466","👨👩👧👦",":family_mwgb:"],
 * ["1F468-1F469-1F466-1F466","👨👩👦👦",":family_mwbb:"],
 * ["1F468-1F469-1F467-1F467","👨👩👧👧",":family_mwgg:"],
 * ...
 */

const {basename} = require('path');
const data = require('emojione/emoji.json');

const INCLUDE_ASCII = process.argv.slice(2).indexOf('ascii') >= 0;
const COMMENT = `/*eslint-disable*/
// Do not edit!
// This file was auto-generated by ${basename(__filename)}
`;

const items = Object.keys(data).map(key => {
    const emoji = data[key];
    const codepoint = emoji.unicode;
    
    return {
        codepoint: codepoint,
        unicode: String.fromCodePoint(...codepoint.split('-').map(c => parseInt(c, 16))),
        ascii: emoji.aliases_ascii
    };
});

items.sort((a, b) => b.codepoint.length - a.codepoint.length);

const str = items.map(item =>
    JSON.stringify([item.codepoint, item.unicode])
).join(',\n');

console.log(`${COMMENT}export default new Map([\n${str}\n]);`);
