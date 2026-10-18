/*
Level 1 — Basic metacharacters
Assignments 1–10 · Practice . and escaped characters.
Your Level 1 checklist
0/10 completed

[ ] 1. Match any single character
Use `/a.c/` to find matches in `"abc a-c a c ac"`.
*/
// let text = "abc a-c a c ac";
// console.log(text.match(/a.c/g))

/*
Match a literal dot
Find every period in `"hello.js, app.js, website.com"` using `/\./g`.
*/
// let text = "hello.js, app.js, website.com";
// console.log(text.match(/\./g))

/*
3. Match a literal question mark
Extract every `?` from `"Why? What? Really!"`.
*/
// let text="Why? What? Really!"
// console.log(text.match(/\?/g))

/*
4. Match a literal plus sign
Extract all plus signs from `"5+3=8, 10+2=12"`.
*/
// let text="5+3=8, 10+2=12"
// console.log(text.match(/\+/g))

/*
5. Match a literal asterisk
Extract `*` from `"a*b*c"`.
*/
// let text = "a*b*c";
// console.log(text.match(/\*/g));

/*
6. Match a literal dollar sign
Find every `$` in `"$10, $25, $100"`.
*/
// let text = "$10, $25, $100";
// console.log(text.match(/\$/g));

/*
7. Match parentheses
Extract both `(` and `)` from `"Hello (JavaScript) (Regex)"`.
*/
// let text = "Hello (JavaScript) (Regex)";
// console.log(text.match(/[()]/g))

/*
8. Match brackets
Extract `[` and `]` from `"arr[0] and arr[1]"`.
*/
// let text="arr[0] and arr[1]"
// console.log(text.match(/[\[\]]/g))

/*
[ ] 9. Match a literal pipe
Extract `|` from `"HTML|CSS|JavaScript"`
*/
// let text = "HTML|CSS|JavaScript";
// console.log(text.match(/\|/g))

/*
10. Find any character before a digit
Use a pattern like `/\d./g` on `"1ab 2cd 3ef"` and inspect the matched pairs.
*/
// let text = "1ab 2cd 3ef";
// console.log(text.match(/.\d/g))

/*
3. Level 2 — Digit, word, and whitespace metacharacters
Assignments 11–20 · Practice \d, \D, \w, \W, \s, and \S.
11. Extract digits: Find all digits in "Order123Price45" using /\d/g.
*/
// let text = "Order123Price45";
// console.log(text.match(/\d/g))

/*
12. Extract non-digits: Find all non-digit characters in "Room205A" using /\D/g.
*/
// let text = "Room205A";
// console.log(text.match(/\D/g));

/*
13. Extract word characters: Find letters, digits, and underscores in "User_Name123!" using /\w/g.
*/
// let text = "User_Name123!";
// console.log(text.match(/\w/g));

/*
14. Extract non-word characters: Find punctuation and other non-word characters in "User_Name123!@" using /\W/g.
*/
// let text = "User_Name123!@";
// console.log(text.match(/\W/g));

/*
15. Find spaces: Match spaces in "JavaScript is very useful" using /\s/g.
*/
// console.log("JavaScript is very useful".match(/\s/g));

/*
16. Find all whitespace: Use /\s/g on "JavaScript\tis\nuseful" and identify spaces, tabs, and line breaks.
*/
// console.log("JavaScript\tis\nuseful".match(/\w+\s.+/gs))

/*
17. Find non-whitespace: Use /\S/g on "Hi there 123!".
*/
// let text = "Hi there 123!";
// console.log(text.match(/\S/g))

/*
18. Remove all whitespace: Transform "J a v a S c r i p t" into "JavaScript" using replace().
*/
// let text = "J a v a S c r i p t";
// console.log(text.replace(/\s/g, ""));

/*
19. Keep only digits: Transform "Phone: 984-123-4567" into "9841234567".
*/
// let text = "Phone: 984-123-4567";
// console.log(text.replace(/\D+/g, ""));

/*
20. Compare shorthand patterns: Use /\w/g and /[a-zA-Z0-9_]/g on "Abc_123!". Compare their outputs.
*/
// console.log("Abc_123!".match(/\w+/g))
// console.log("Abc_123!".match(/[a-zA-Z0-9_]/g))
/*
4. Level 3 — Word boundaries: \b and \B
These two metacharacters match positions, not actual characters.
21. Find the whole word "cat" in "cat scatter category cat." using /\bcat\b/g.
*/
// let text = "cat scatter category cat.";
// console.log(text.match(/\bcat\b/g));

// 22. Find words beginning with "Java" in "JavaScript Java JavaFX" using /\bJava\w*/g.
// console.log("JavaScript Java JavaFX".match(/\bJava\w*/g))

/*
23. Find words ending with "ing" in "running jumping sing ring" using /\w+ing\b/g.
*/
// console.log("running jumping sing ring".match(/\w+ing\b/g));

/*
24. Find words beginning with a capital letter in "Ram lives in Kathmandu".
*/
// console.log("Ram lives in Kathmandu".match(/\b[A-Z]\w+/g))

/*
25. Find "cat" where it is not at a word boundary before the c, using /\Bcat/g on "cat scatter bobcat".
*/
// console.log("cat scatter bobcat".match(/\Bcat\b/))

/*
26. Find "ing" when the i is not at a word boundary, using /\Bing/g on "sing bringing king".
*/
// console.log("sing bringing king".match(/\Bing/g))

/*
27. Extract individual words from "Hello, Abhishek! Welcome to JavaScript." using word boundaries and word characters.
*/
// console.log("Hello, Abhishek! Welcome to JavaScript.".match(/\w+/g))
// console.log("Hello, Abhishek! Welcome to JavaScript.".match(/\b[\w]+/g))
/*
28. Count how many whole-word occurrences of "is" appear in "This is easy. Is it useful? This isn't difficult." Use the i and g flags.
*/
// console.log("This is easy. Is it useful? This isn't difficult.".match(/is/gi))

/*
29. Replace only the whole word "bad" with "good" in "badminton is fun, but bad behavior is bad".
*/
// console.log(
//   "badminton is fun, but bad behavior is bad".replace(/bad/g, "good"),
// );

/*
30. Use \b to find whole-word "Java" without accidentally matching it inside "JavaScript".
*/
// console.log("JavaScript".match(/\bjava/g))

/*
5. Level 4 — Start and end metacharacters: ^ and $
31. Test whether "Hello World" begins with "Hello" using /^Hello/.
*/
// console.log(/^hello/g.test("Hello World"));

/*
32. Test whether "JavaScript" ends with "Script" using /Script$/.
*/
// let text = "JavaScript";
// let pattern = /script$/gi;
// console.log(pattern.test(text));

/*
33. Check whether "12345" contains only digits using /^\d+$/.
*/
// let text = "12345";
// let pattern = /^\d$/g;
// console.log(pattern.test(text));

/*
34. Validate a username containing only letters, digits, and underscores using /^\w+$/.
*/
// let username = /^\w+$/g;
// console.log(username.test("hellosansaar 123"));

/*
35. Validate a string containing only English letters using /^[a-zA-Z]+$/.
*/
// console.log(/^[a-zA-Z]+$/g.test("AbhisheK"));

/*
36. Find lines beginning with "Error" in "Info: started\nError: failed\nInfo: restarted" using the m flag.
*/
// let text = "Info: started\nError: failed\nInfo: restarted";
// console.log(text.match(/error.+/gim));

/*
37. Find lines ending in .js in "app.js\nstyle.css\nserver.js" using /\.js$/gm.
*/
// let text = "app.js\nstyle.css\nserver.js";
// console.log(text.match(/^.+\.js$/gim))

/*
38. Check whether a phone number contains exactly 10 digits using /^\d{10}$/.
*/
// let number = /^\d{5}$/g;
// console.log(number.test("12345"))

/*
39. Check whether a string consists of one or more lowercase letters followed by one or more digits using /^[a-z]+\d+$/.
*/
// let text = /^[a-z]+[0-9]+$/g;
// console.log(text.test("fgh"));

/*
40. Compare /^cat/ with /^cat/m on "dog\ncat\nbird". Explain the difference.
*/
// let text = "dog\ncat\nbird";
// console.log(text.match(/^dog/g));
// console.log(text.match(/.+^cat.+/gms));

/*
6. Level 5 — Newline, tab, and escaped characters
41. Find newline characters in "A\nB\nC" using /\n/g.
*/
// let text = "A\nB\nC";
// console.log(text.replace(/\n/g, "="));

/*
42. Find tab characters in "Name\tAge\tCity" using /\t/g.
*/
// console.log("Name\tAge\tCity".match(/\t/g));

/*
43. Split "Ram\nSita\nHari" into separate names using split().
*/
// let text = "Ram\nSita\nHari";
// console.log(text.split("\n"));

/*
44. Replace every newline in "A\nB\nC" with a comma.
*/
// let text = "A\nB\nC";
// console.log(text.replace(/\n/g, ","));

/*
45. Match a literal backslash in "C:\\Users\\Admin".
*/
// let text = "C:\\Users\\Admin";
// console.log(text.match(/\\/g));

/*
46. Extract filenames ending in .js from "app.js style.css server.js" using an escaped dot.
*/
// console.log("app.js style.css server.js".match(/\b[a-z]+\.js\b/g))

/*
47. Find a literal caret ^ in "2^3 = 8".
*/
// console.log("2^3 = 8".match(/\^/g));

/*
48. Find a literal hyphen in "red-green-blue" using an appropriate regex.
*/
// console.log("red-green-blue".match(/\-/g));

/*
49. Match a literal forward slash / in "html/css/js".
*/
// console.log("html/css/js".match(/\//g));

/*
50. Replace multiple whitespace characters, including tabs and newlines, with one space in "JavaScript   is\tvery\nuseful".
*/
// console.log("JavaScript   is\tvery\nuseful".replace(/\s+/g, " "));

/*
7. Level 6 — Combining metacharacters
51. Extract words containing only letters from "Ram123 Sita Hari_2".
*/
// console.log("Ram123 Sita Hari_2".match(/[A-Za-z]/g))

/*
52. Extract sequences of digits from "Ram: 85, Sita: 92, Hari: 78".
*/
// console.log("Ram: 85, Sita: 92, Hari: 78".match(/\d/g))
/*
53. Extract words that start and end with a letter from "abc a1b _hello_ JavaScript".
*/
// console.log(
//   "abc a1b _hello_ JavaScript".match(
//     /\b[a-zA-Z][A-Za-z0-9]*[a-zA-Z]\b|\b[a-zA-Z]\b/g,
//   ),
// );

// 54. Find every word beginning with "A" or "a" using /\bA\w*/gi on "Apple and apricot are amazing".
// console.log("Apple and apricot are amazing".match(/^a.+/gi))

/*
55. Extract text between parentheses from "Name (Abhishek), City (Kathmandu)".
*/
// console.log("Name (Abhishek), City (Kathmandu)".match(/[^(), ]+/gi))

/*
56. Find repeated whitespace in "Hello     World\t\tJavaScript".
*/
// console.log("Hello     World\t\tJavaScript".match(/\s/g))

/*
57. Replace every non-word character with a hyphen in "Hello, World! JavaScript 2026".
*/
// console.log("Hello, World! JavaScript 2026".replace(/\W/g, "-"));

/*
58. Extract a domain extension from "user@example.com".
*/
// console.log("user@example.com".match(/\.[a-z]+$/g))

/*
59. Find words that contain at least one digit in "user123 admin test45 guest".
*/
// console.log("user123 admin test45 guest".match(/\b[a-z]+[0-9]{1,}\b/gi));

/*
60. Build a text cleaner for "  Hello!!! Abhishek123, welcome to JavaScript 2026.  " that:
- Trims leading and trailing spaces.
- Replaces multiple whitespace characters with one space.
- Extracts all digit sequences.
- Removes punctuation while keeping letters, digits, and spaces.
*/
// console.log("  Hello!!! Abhishek123, welcome to JavaScript 2026.  ".trim());
// console.log(
//   "  Hello!!! Abhishek123, welcome to JavaScript 2026.  ".replace(/\s/g, ""),
// );
// console.log(
//   "  Hello!!! Abhishek123, welcome to JavaScript 2026.  ".match(/\d/g),
// );
// console.log(
//   "  Hello!!! Abhishek123, welcome to JavaScript 2026.  ".replace(
//     /[^\w]/g,
//     "",
//   ),
// );

/*
8. Level 7 — Mini-project assignments
For these final projects, combine multiple metacharacters rather than solving them with a single pattern.
61. Email format checker
Test whether a string resembles a basic email address. Try "abhishek123@example.com" and "not-an-email".
*/
// let pattern = /^[\w]+\@[a-z]+\.com$/g;
// console.log(pattern.test("abhishek123@example.com"));

/*
62. Password character analyzer
For "Abhishek@123", count uppercase letters, lowercase letters, digits, whitespace, and non-word characters separately.
*/
// console.log("Abhishek@123".match(/^[a-z0-9]+@[\S]+$/gi));

/*
63. Log message analyzer
From "INFO: started\nERROR: failed\nWARN: retry", extract lines beginning with ERROR or WARN.
*/
// console.log("INFO: started\nERROR: failed\nWARN: retry".match(/error.+|warn.+/gim))

/*
64. Username cleaner
Convert "  Abhishek!!!_123  " into "Abhishek_123" using trim() and replace().
*/
// console.log("  Abhishek!!!_123  ".trim());
// console.log("  Abhishek!!!_123  ".replace(/\s/g, ""));

/*
65. Search keyword highlighter
Replace whole-word occurrences of "JavaScript" with "**JavaScript**" in "JavaScript is useful. JavaScript developers use JavaScript." using replace().
*/
// console.log(
//   "JavaScript is useful. JavaScript developers use JavaScript.".replace(
//     /javascript/gi,
//     "**JavaScript**",
//   ),
// );