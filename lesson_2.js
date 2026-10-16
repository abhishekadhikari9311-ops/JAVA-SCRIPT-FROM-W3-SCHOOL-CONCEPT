/*
Level 1 — Global flag (g)
Find multiple matches
[ ] 
Assignment 1: Find all numbers
let text = "I have 12 books, 5 pens, and 20 pencils.";
Use `/\d+/g` to extract every number.
*/

// let text = "I have 12 books, 5 pens, and 20 pencils.";

// console.log(text.match(/\d+/g))

/*
Assignment 2: Find repeated words
let text = "cat dog cat bird cat";
*/

// let text = "cat dog cat bird cat";

// console.log(text.match(/cat/gi));

/*
Assignment 3: Replace all digits
let text = "A1B2C3D4";
*/
// let text = "A1B2C3D4";
// console.log(text.replace(/\d/g, "*"));

/*
Assignment 4: Count all vowels
let text = "education";
Use `match()` to extract all lowercase vowels.
*/

// let text = "education";

// console.log(text.match(/[aeiou]/gi));

/*
Assignment 5: Replace all spaces
let text = "Learn JavaScript today";
Replace every space with a hyphen.
*/

// let text = "Learn JavaScript today";

// console.log(text.replace(/\s/g, "-"));

/*
Level 2 — Ignore-case flag (i)
Match uppercase and lowercase
[ ] 
Assignment 6: Find a word ignoring case
let text = "JavaScript javascript JAVASCRIPT";
Find every occurrence of JavaScript, regardless of case.
*/

// let text = "JavaScript javascript JAVASCRIPT";

// console.log(text.match(/JavaScript/gi))

/*
Assignment 7: Replace a word ignoring case
let text = "bad BAD Bad bAd";
Replace all versions of `bad` with `good`.
*/

// let text = "bad BAD Bad bAd";

// console.log(text.replace(/bad/gi, "good"));

/*
Assignment 8: Find vowels regardless of case
let text = "ApPlE Is AwEsOmE";
Extract every vowel, including uppercase vowels.
*/

// let text = "ApPlE Is AwEsOmE";

// console.log(text.match(/\w/gi));

/*
Assignment 9: Search for a name
let text = "ram RAM Ram rAm";
Find all occurrences of `ram`, ignoring case.
*/

// let text = "ram RAM Ram rAm";

// console.log(text.match(/ram/gi));

/*
Assignment 10: Replace a case-insensitive domain
let text = "Example.COM example.com";
Replace all occurrences of `example.com` with `site.org`, ignoring case. Remember to escape the dot.
*/

// let text = "Example.COM example.com";

// console.log(text.replace(/example.com/gi, "site.org"));

/*
Level 3 — Global and ignore-case (gi)
Combine two flags
[ ] 
Assignment 11: Extract all matching words
let text = "YES yes Yes NO no";
Extract every occurrence of `yes`, ignoring case.
*/

// let text = "YES yes Yes NO no";

// console.log(text.match(/yes/gi))

/*
Assignment 12: Replace all versions
let text = "hello HELLO Hello";
Replace every version of `hello` with `Hi`.
*/

// let text = "hello HELLO Hello";

// console.log(text.replace(/hello/gi, "Hi"));

/*
Assignment 13: Find all matching names
let text = "Ram met RAM and ram";
Extract every version of `Ram`.
*/

// let text = "Ram met RAM and ram";

// console.log(text.match(/Ram/gi))

/*
Assignment 14: Mask all vowels
let text = "JavaScript Is Amazing";
Replace all vowels with `*`, ignoring case.
*/

// let text = "JavaScript Is Amazing";

// console.log(text.match(/[aeiou]/gi))

/*
Assignment 15: Find every case variation
let text = "Error ERROR error eRrOr";
Extract every occurrence of `error`.
*/
// let text = "Error ERROR error eRrOr";

// console.log(text.match(/error/gi));

/*
Level 4 — Multiline flag (m)
Match line beginnings and endings
[ ] 
Assignment 16: Find every line beginning
let text = "Apple\nBanana\nAvocado";
*/

// let text = "Apple0\nBanana\nAvocado";

// console.log(text.match(/o$/gim))

/*
Assignment 17: Find every line ending
let text = "cat!\ndog!\nbird?";
*/

// let text = "cat!\ndog!\nbird?";
// console.log(text.match(/\?$/gm))

/*
  Assignment 18: Replace line beginnings
let text = "one\ntwo\nthree";
Use `replace()` with `/^/gm` to add `>` at the start of every line.
*/
// let text = "one\ntwo\nthree";
// console.log(text.replace(/^/gim, ">"));

/*
Assignment 19: Find lines beginning with a word
let text = "JavaScript is fun\nPython is useful\nJavaScript is popular";
Find each line beginning with `JavaScript`.
*/

// let text = "JavaScript is fun\nPython is useful\nJavaScript is popular";
// console.log(text.match(/^javascript/gim));

/*
Assignment 20: Compare with and without m
let text = "red\nblue\ngreen";
Compare the results of `/^\w+/g` and `/^\w+/gm`.
*/
// let text = "red\nblue\ngreen";
// console.log(text.match(/^\w+/g))

// console.log(text.match(/^\w+/gm))

/*
Level 5 — DotAll flag (s)
Match across newlines
[ ] 
Assignment 21: Match across a newline
let text = "Hello\nWorld";
Compare `/.+/g` with `/.+/gs`.
*/

// let text = "Hello.\nWorld";

// console.log(text.match(/.+/g))
// console.log(text.match(/.+/gs))

/*
Assignment 22: Find text between words
let text = "Start\nmiddle\nEnd";
Use a pattern with `s` to match from `Start` through `End`.
*/

// let text = "Start\nmiddle\nEnd";

// console.log(text.match(/.+/gs));

/*
Assignment 23: Replace newline-spanning text
let text = "A\nB\nC";
Use `/A.*C/s` to replace the matched text with `DONE`.
*/
// let text = "A\nB\nC";
// console.log(text.replace(/A.*C/s, "DONE"));

/*
Assignment 24: Understand dotAll
let text = "one\ntwo";
Test whether `/one.two/s` matches the entire `one`, newline, `two` sequence.
*/
// let text = "one\ntwo";
// console.log(text.match(/.+/gs))

/*
Assignment 25: Compare dot and newline
let text = "first\nsecond";
Use `test()` to compare `/first.second/` and `/first.second/s`.
*/
// let text = "first\nsecond";
// console.log(text.match(/.+/gs))

// console.log(text.match(/.+/g))

/*
Level 6 — Sticky flag (y)
Match exactly at lastIndex
[ ] 
Assignment 26: Match at index zero
let text = "JavaScript";
Use `/Java/y` with `lastIndex = 0` and `exec()`.
*/
// let text = "JavaScript";

// let pattern = /\w+/y;
// pattern.lastIndex = 0;
// console.log(pattern.exec(text));

/*
Assignment 27: Match at a specified position
let text = "hello world";
Set `lastIndex = 6` and use `/world/y`.
*/

// let text = "hello world";

// let pattern = /\w+/y;
// pattern.lastIndex = 6;

// console.log(text.match(pattern));

/*
Assignment 28: Observe sticky failure
let text = "hello world";
Set `lastIndex = 1` and try `/world/y`. Explain why it fails.
*/
// let text = "hello world";
// let pattern = /world/y;
// pattern.lastIndex = 1;
// console.log(text.match(pattern));

/*
Assignment 29: Compare g and y
let text = "cat dog";
Compare `/dog/g` and `/dog/y` when `lastIndex = 4`.
*/
// let text = "cat dog";
// let pattern = /dog/g;
// console.log(text.match(pattern));
// let pattern = /dog/y;
// pattern.lastIndex = 4;
// console.log(text.match(pattern));

/*
Assignment 30: Match sequential tokens
let text = "123abc";
Use sticky regexes to match digits first, then letters at the correct `lastIndex`.
*/
// let text = "123abc";
// let digits = /\d+/y;
// let letters = /[a-z]+/y;
// let digitResult = digits.exec(text);
// console.log(digitResult);

// console.log("digits:-", digits.lastIndex);

// letters.lastIndex = digits.lastIndex;
// let letterResult = letters.exec(text);

// console.log("letters:-", letterResult);
// console.log(letters.lastIndex);

/*
Level 7 — Unicode (u), indices (d), Unicode sets (v)
Explore modern regex features
[ ] 
Assignment 31: Unicode-aware matching
let text = "A😀B";
Compare `/./g` and `/./gu` using `match()`.
*/
// let text = "A😀B";
// console.log(text.match(/./g));
// console.log(text.match(/./gu));

/*
Assignment 32: Unicode character properties
let text = "AБ中7";
Use `/\p{L}/gu` to extract Unicode letters.
*/
// let text = "AБ中7";
// console.log(text.match(/\p{L}/gu))

/*
Assignment 33: Get match indices
let text = "Hello 123";
Use `/\d+/d` with `exec()` and inspect `result.indices`.
*/
// let text = "Hello 123";
// let pattern = /\d+/d;
// let res = pattern.exec(text);
// console.log(res.indices);

/*
Assignment 34: Compare code points
let text = "😀";
Compare the string length with the number of matches from `/./g` and `/./gu`.
*/
// let text = "😀";
// console.log(text.match(/./g));
// console.log(text.match(/./gu));

/*
Assignment 35: Unicode sets with v
let text = "A1😀";
*/
// let text = "A1😀";
// console.log(text.match(/\p{L}/gv));