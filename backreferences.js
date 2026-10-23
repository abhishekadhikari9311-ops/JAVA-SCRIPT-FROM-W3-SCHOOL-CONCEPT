//Find consecutive duplicate words
// let text = "JavaScript JavaScript is easy";
// let res = text.match(/(\w+) \1/i);
// console.log(res);

//  Find repeated words ignoring case
// let text = "Hello hello HELLO";
// let res=text.match(/(\w+) \1 \1/i)
// console.log(res)

// Detect consecutive duplicate letters
// let text = "bookkeeper";
// let res = text.match(/(\w)\1/gi);
// console.log(res);

// Find repeated digits
// let text="1122334455"
// let res=text.match(/(\d)\1/gi)
// console.log(res)

// Find identical words separated by a hyphen
// let text = "cat-cat dog-bird";
// let res = text.match(/([a-z]+)-\1/i);
// console.log(res);

// Find repeated usernames
// let text = "ram ram sita hari hari";
// let res = text.match(/(\w+) \1/gi);
// console.log(res);

// Detect repeated two-character sequences
// let text="abab cdcd xyzz"
// let res=text.match(/([a-z]{2})\1/gi)
// console.log(res)

// Find duplicate words separated by tabs or spaces
// let text = "Ram    Ram\tSita";
// let res = text.match(/(.+[a-z])    \1/i);
// console.log(res);

// //Match identical opening and closing quotes using a named group
// let text = '"Hello"';
// let res = text.match(/(?<quote>.*['"]).*?\k<quote>/i);
// console.log(res);

// Confirm that a username matches its confirmation
// let text = "user: ram; confirm: ram";
// let res = text.match(/user: (?<user>[a-z]+); confirm: (\k<user>)/i);
// console.log(res);

//Verify that two product codes are identical
// let text = "Product: ABC123; Repeat: ABC123";
// let res = text.match(/product: (?<productName>\w+); repeat: \k<productName>/gi);
// console.log(res);

//Match repeated email usernames
// let text = "Email user: ram; Confirm: ram";
// let res = text.match(/email user: (?<user>[a-z]+); confirm: \k<user>/i);
// console.log(res);

//Compare two identical ID values
// let text = "ID: EMP102; Confirm: EMP102";
// let res = text.match(/id: (?<id>\w+); confirm: \k<id>/i);
// console.log(res);

//Swap "Ram Sharma"
// let text = "Sharma Ram";
// let res = text.replace(/(?<fn>[a-z]+) (?<ln>[a-z]+)/i, "$2 $1");
// console.log(res);

//Swap "Kathmandu Nepal"
// let text = "Nepal Kathmandu";
// let res = text.replace(/(?<fn>[a-z]+) (?<ln>[a-z]+)/i, "$2 $1");
// console.log(res);

//Replace duplicate words with one occurrence
// let text = "hello hello world"; //→ "hello world"
// let res = text.replace(/(?<h>[a-z]+) \k<h> [a-z]+/i, "$1 world");
// console.log(res);

//Remove repeated consecutive letters
// let text = "boook"; //→ "bok"
// let res = text.replace(/^.*(\w)\1\1.*\b/i,"b$1k");
// console.log(res);

//Replace a quoted value's contents while retaining its quotes
// let text = '"Hello"'; // → "World"
// let res = text.replace(/(?<q>["']+).*?\k<q>/i, "World");
// console.log(res);

//Normalize repeated words regardless of capitalization
// let text = "Hello hello"; //→ "Hello"
// let res = text.replace(/^(?<h>[a-z]+) \k<h>/gi, "$1");
// console.log(res);

//Find consecutive duplicate words in "JavaScript JavaScript is easy".

// console.log("JavaScript JavaScript is easy".match(/(?<dup>\w+) \k<dup>/i));

//Find repeated characters in "successfully".

// console.log("successfully".match(/(?<rep>\w)\k<rep>/i))

// Match strings with identical opening and closing quotes, such as 'hello' or "world".

// console.log('"hhh"'.match(/(?<quote>["']+).*?\k<quote>/i));

// Check whether "cat-cat" contains the same word on both sides of a hyphen.

// console.log("cat-cat".match(/(?<cat>[a-z]+)-\k<cat>/i));

// Swap the words in "Nepal Kathmandu" using replace().

// console.log("Nepal Kathmandu".replace(/(?<fn>[a-z]*) (?<ln>[a-z]*)/i, "$2 $1"));

// Match "2026-2026" only when both four-digit numbers are identical.

// console.log("2026-2026".match(/(?<yr>\d{4})-\k<yr>/i));

// Use a named capturing group to match "user: abhishek; confirm: abhishek".

// console.log("user: abhishek; confirm: abhishek".match(/user: (?<user>[a-z]+); confirm: \k<user>/i))

// Find duplicate words ignoring capitalization in "Hello hello HELLO".
// console.log("Hello hello HELLO".match(/(?<hel>[a-z]+) \k<hel> \k<hel>/i));