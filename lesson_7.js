/*
Level 1 — Basic quantifiers
01

Zero or more (*)

Given the following strings, match a followed by zero or more b characters.
let text = "a ab abb abbb ac";
console.log(text.match(/YOUR_REGEX/g));

Expected matches: a, ab, abb, abbb, and the a in ac if your pattern is unanchored.
*/
// console.log("a ab abb abbb ac".match(/a+b*/g));

/*
One or more (+)

Extract all sequences containing one or more digits.
let text = "Ram scored 85, Shyam scored 9, Hari scored 100";
console.log(text.match(/YOUR_REGEX/g));

Expected matches: 85, 9, 100.
*/
// let text = "Ram scored 85, Shyam scored 9, Hari scored 100";
// console.log(text.match(/\d+/g))

/*
Optional character (?)

Match both American and British spellings of the word color.
let text = "color colour colors colours";
console.log(text.match(/YOUR_REGEX/g));

Requirement: match color and colour, including their plural forms.
*/
// let text = "color colour colors colours";
// console.log(text.match(/[a-z]+/g))

/*
Exactly n times ({n})

Extract four-digit years only.
let text = "1999 2024 123 12345 2026";
console.log(text.match(/YOUR_REGEX/g));

Requirement: extract 1999, 2024, and 2026, but not portions of 12345.
*/
// let text = "1999 2024 123 12345 2026";
// console.log(text.match(/\b\d{4}\b/g))

/*
At least n times ({n,})

Extract digit sequences containing at least three digits.
let text = "7 25 345 6789 12 10000";
console.log(text.match(/YOUR_REGEX/g));

Expected matches: 345, 6789, 10000.
*/
// let text = "7 25 345 6789 12 10000";
// console.log(text.match(/\d{3,}/g))

/*
Range quantifier ({n,m})

Extract words containing between three and five English letters.
let text = "an cat tiger elephant dog house";
console.log(text.match(/YOUR_REGEX/g));

Requirement: return only whole words with 3–5 letters, not partial matches of longer words.
*/
// let text = "an cat tiger elephanthh dog house";
// console.log(text.match(/\w+/g))

/*
Level 2 — Intermediate assignments
These assignments combine quantifiers with character classes, anchors, and groups.
07. Validate a username

A username must contain between 5 and 12 characters, using only letters, digits, and underscores.
let text = "Ram_1 Ab_123456789012 user99 John Doe";


Use +, {n,m}, and the appropriate anchors to validate the entire username. Test each candidate separately.
*/
// let text = "Rajj_oe";
// console.log(text.match(/^\w{5,12}$/g))

/*
08. Validate a Nepal-style phone number

A phone number must contain exactly 10 digits and start with 98 or 97.
let text = "9841234567 9741234567 981234567 98123456789";

Use a quantifier and anchors so that only complete, valid-format numbers match.
*/
// let text = "9841234567 9741234567 981234567 98123456789";
// console.log(text.match(/\b(97|98)\B\d{8}\b/g))

/*
09. Validate a password length

A password must contain between 8 and 16 characters. For this assignment, check length only.
let passwords = [
  "abc123",
  "abc12345",
  "Abhishek123456",
  "12345678901234567"
];


Write a regex that validates each complete password based on its length.
*/
// let passwords = ["abc123", "abc12345", "Abhishek123456", "12345678901234567"];
// let res = passwords.map((m) => {
//   return /^.{8,16}$/g.test(m);
// });
// console.log(res);
/*

10. Extract product quantities

Extract the product name and quantity from this string:
let text = "Laptop x2, Mouse x12, Keyboard x1, Monitor x125";


Requirements:
- A product name contains one or more letters.
- The quantity contains one or more digits.
- Each product entry must be matched separately.
// */
// let text = "Laptop x2, Mouse x12, Keyboard x1, Monitor x125";
// let res = text.match(/\w+ x\d+/g);
// console.log(res);
/*

11. Validate decimal numbers

Match integers and decimal numbers with one or two digits after the decimal point.
let text = "12 12.5 12.55 12.555 0.9 99.";


Decide how to use ? and {1,2}. Do not accept decimals with three fractional digits or a trailing decimal point.
*/
// let text = "12 12.5 12.55 12.555 0.9 99";
// let res = text.match(/(?<![\d.])\d+(?:\.\d{1,2})?(?![\d.])/g);
// console.log(res);
/*
12. Validate a file extension

Match filenames ending in .jpg, .jpeg, or .png, ignoring case.
let text = "photo.jpg image.jpeg logo.png notes.txt banner.JPG";

Use grouping and ? where appropriate. Match the complete filename rather than a partial filename.
*/
// let text = "photo.jpg image.jpeg logo.png notes.txt banner.JPG";
// let res=text.match(/[a-z]+\.[jpg|png|jpeg]+/gi)
// console.log(res)
/*
Level 3 — Advanced quantifiers and greedy vs. lazy matching
13. Greedy matching (+)

Explain the output and then write down the exact match.
let text = "aaaaab";
console.log(text.match(/a+/g));


Question: Why does the regex return one sequence instead of five separate a characters?
*/
// let text = "aaaaab";
// console.log(text.match(/a/g));
/*
14. Greedy vs. lazy matching

Compare these two expressions:
let text = "<h1>Hello</h1><h2>World</h2>";

console.log(text.match(/<.*>/g));
console.log(text.match(/<.*?>/g));


Explain why the results are different. Identify the greedy and lazy quantifiers.
*/
// let text = "<h1>Hello</h1><h2>World</h2>";
// console.log(text.match(/<.*>/g))
// console.log(text.match(/<.*?>.*?<.*?>/g))

/*
15. Extract text inside quotation marks
let text = '"JavaScript" and "Node.js" and "React"';
console.log(text.match(/YOUR_REGEX/g));

Requirement: extract each quoted string separately. Use a lazy quantifier.
*/
// let text = '"JavaScript" and "Node.js" and "React"';
// console.log(text.match(/(?:["'].*?.+["]).*(?:["'].*?.+["]).*(?:["'].*?.+["])/g));

/*
16. Clean repeated whitespace

Convert multiple spaces or tabs into a single space.
let text = "JavaScript    is\t\tvery     useful";
console.log(text.replace(/YOUR_REGEX/g, " "));

Use + with an appropriate whitespace character class.
*/
// let text = "JavaScript    is\t\tvery     useful";
// console.log(text.replace(/[\s]+/g," "))

/*
17. Match repeated letters

Find sequences of the same letter repeated at least twice.
let text = "bookkeeper committee banana coffee";
console.log(text.match(/YOUR_REGEX/gi));


Hint: combine a capturing group with a quantifier. Decide whether you want adjacent repeated pairs or entire repeated-letter sequences.
*/
// let text = "bookkeeeeeeeper committeetttt banana coffee";
// console.log(text.match(/([a-z])\1/gi))
// console.log(text.match(/(\w)\1+/g))
// console.log(text.match(/\B(\w+)\B\1/g))

/*
18. Validate an email-like format
let emails = [
  "ram@gmail.com",
  "a@b.co",
  "user.name123@example.com",
  "user@@gmail.com",
  "ram@gmail"
];


Write a beginner-friendly regex using quantifiers to validate a basic email format. You do not need to support every valid email specification.
*/
// let emails = [
//   "ram@gmail.com",
//   "a@b.co",
//   "user.name123@example.com",
//   "user@@gmail.com",
//   "ram@gmail",
// ];
// let res = emails.map((m) => {
//   return Array.from(m.matchAll(/[a-z]+@[a-z]+\.[a-z]+/g));
// });
// console.log(res);

/*
Level 4 — Mini-project assignments
These are longer exercises that combine multiple quantifiers in realistic situations.

19. Shopping invoice parser
let text =
  "Laptop x2 @85000; Mouse x3 @1200; Keyboard x1 @2500";


Extract each product's name, quantity, and unit price.

Requirements:
- Product name: one or more letters.
- Quantity: one or more digits.
- Unit price: one or more digits.
- Use a global regex to process all entries.
- Bonus: calculate each line total using JavaScript arithmetic.
*/

/*
20. Server log analyzer
let text = `
INFO: Server started
WARN: Retry 3 times
ERROR: Database failed after 12 seconds
INFO: 25 requests processed
`;


Extract:
- Log levels (INFO, WARN, ERROR).
- Numbers containing one or more digits.
- Messages containing at least five characters.
Bonus: count how many log entries have each level.
*/

/*
21. Registration form validator

Create a JavaScript function that validates:
- Username: 5–12 letters, digits, or underscores.
- Phone: exactly 10 digits.
- Password: 8–16 characters.
- Optional country code: +977- before the phone number.
Bonus: return a separate error message for every invalid field.
*/

/*
22. HTML-like tag extractor
let text =
  "<h1>Welcome</h1><p>Hello World</p><div>Content</div>";


Extract each complete opening tag, its content, and its closing tag.

Bonus: require the opening and closing tag names to be identical using a backreference.
*/
