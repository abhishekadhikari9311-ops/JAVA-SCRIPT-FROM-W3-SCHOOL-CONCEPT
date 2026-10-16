/*
Level 1: Basic character classes
Assignments 1–10 · Match individual characters
Assignment 1 — Match specific characters
let text = "javascript";


Task: Extract every a, s, and c using [asc].
*/
// let text = "javascript";

// console.log(text.match(/[asc]+/g));

/*
Assignment 2 — Find all lowercase letters
let text = "Hello WORLD 123";

Task: Extract only lowercase letters using [a-z].
*/
// let text = "Hello WORLD 123;
// console.log(text.match(/[a-z]/g));"

/*
Assignment 3 — Find all uppercase letters
let text = "AbHiShEk AdHiKaRi";


Task: Extract uppercase letters using [A-Z].
*/
// let text = "AbHiShEk AdHiKaRi";
// console.log(text.match(/[A-Z]/g))

/*
Assignment 4 — Extract digits
let text = "Room 205, Floor 3";

Task: Extract each digit using [0-9].
*/
// let text = "Room 205, Floor 3";
// console.log(text.match(/[0-9]/g));

/*
Assignment 5 — Extract letters and digits
let text = "User123_Name!";

Task: Extract English letters and digits using [a-zA-Z0-9].
*/
// let text = "User123_Name!";
// console.log(text.match(/[a-zA-Z0-9]/g))

/*
Assignment 6 — Find vowels
let text = "JavaScript Is Amazing";


Task: Extract every vowel using [aeiou] with the gi flags.
*/
// let text = "JavaScript Is Amazing";
// console.log(text.match(/[aeiou]/gi));

/*
Assignment 7 — Find consonants
let text = "education";


Task: Extract lowercase consonants using [b-df-hj-np-tv-z].
*/
// let text = "education";
// console.log(text.match(/[b-df-hj-np-tv-z]/g))

/*
Assignment 8 — Match hexadecimal characters
let text = "#1A2B3C";


Task: Extract hexadecimal digits using [0-9A-Fa-f].
*/
// let text = "#1A2B3C";
// console.log(text.match(/[0-9a-fA-F]/g));

/*
Assignment 9 — Find punctuation marks
let text = "Hello! How are you? Fine.";


Task: Extract !, ?, and . using [!?.].
*/
// let text = "Hello! How are you? Fine.";
// console.log(text.match(/[!?.]/g));

/*
Assignment 10 — Find selected symbols
let text = "$50 + $25 = $75";


Task: Extract dollar signs and plus signs using [$+].
*/
// let text = "$50 + $25 = $75";
// console.log(text.match(/[$+]/g));

/*
Level 2: Negated character classes
Assignments 11–17 · Match everything except specified characters
The caret ^ at the beginning of a character class negates it. For example, [^0-9] matches a character that is not a digit.
Assignment 11 — Find non-digits
let text = "Abc123Xy45";


Task: Extract all characters that are not digits using [^0-9].
*/
// let text = "Abc123Xy45";
// console.log(text.match(/[^0-9]/g));

/*
Assignment 12 — Remove digits
let username = "Abhishek123Adhikari456";

Task: Use replace() with a negated class to remove everything except English letters.
*/
// let username = "Abhishek123Adhikari456";
// console.log(username.replace(/[^a-zA-Z]/g, ""));

/*
Assignment 13 — Find characters other than vowels
let text = "education";

Task: Extract all characters that are not vowels using [^aeiou]
*/
// let text = "education";
// console.log(text.match(/[^aeiou]/g));

/*
Assignment 14 — Remove punctuation
let text = "Hello, Abhishek! How are you?";

Task: Use replace() and a negated class to keep letters, digits, and whitespace only.
*/
// let text = "Hello, Abhishek! How are you?";
// console.log(text.replace(/[^a-zA-Z0-9" "]/g, ""));

/*
Assignment 15 — Extract non-uppercase characters
let text = "ABCdef123!";


Task: Extract everything that is not an uppercase English letter using [^A-Z].
*/
// let text = "ABCdef123!";
// console.log(text.match(/[^A-Z]/g));

/*
Assignment 16 — Keep only digits
let text = "Phone: 984-123-4567";

Task: Remove every character except digits.
*/
// let text = "Phone: 984-123-4567";
// console.log(text.replace(/[^0-9]/g, ""));

/*
Assignment 17 — Remove all characters except letters and spaces
let text = "Hello123, World! 2026";

Task: Keep only English letters and spaces using a negated character class.
*/
// let text = "Hello123, World! 2026";
// console.log(text.replace(/[^" "A-Za-z]/g, ""));

/*
Level 3: Character ranges and combinations
Assignments 18–25 · Combine ranges and character groups
Assignment 18 — Extract letters from a mixed string
let text = "ABc123-xYz!";


Task: Extract all English letters using [a-zA-Z].
*/
// let text = "ABc123-xYz!";
// console.log(text.match(/[A-Za-z]/g))

/*
Assignment 19 — Extract lowercase letters and digits
let text = "abcXYZ123!";


Task: Use [a-z0-9].
*/
// let text = "abcXYZ123!";
// console.log(text.match(/[a-z0-9]/g));

/*
Assignment 20 — Find digits from 1 to 5
let text = "0123456789";

Task: Extract only digits in the range [1-5].
*/
// let text = "0123456789";
// console.log(text.match(/[1-5]/g))

/*
Assignment 21 — Find letters from a selected range
let text = "abcdefghijklmnopqrstuvwxyz";


Task: Extract letters from m through t.
*/
// let text = "abcdefghijklmnopqrstuvwxyz";
// console.log(text.match(/[m-t]/g));

/*
Assignment 22 — Match vowels or digits
let text = "A1b2e3X4";


Task: Extract vowels and digits using [aeiou0-9] with gi.
*/
// let text = "A1b2e3X4";
// console.log(text.match(/[aeiou0-9]/gi))

/*
Assignment 23 — Find alphanumeric username characters
let username = "Abhi_123!@";

Task: Extract letters, digits, and underscores using [a-zA-Z0-9_].
*/
// let username = "Abhi_123!@";
// console.log(username.match(/[a-zA-Z0-9_]/g));

/*
Assignment 24 — Find characters from multiple ranges
let text = "abcXYZ789!@#";


Task: Extract uppercase letters, lowercase letters, and punctuation separately with appropriate patterns.
*/
// let text = "abcXYZ789!@#";
// console.log(text.match(/[^0-9]/g))

/*
Assignment 25 — Match a product code
let code = "PRD-2026-AB12";


Task: Extract all uppercase letters and digits, excluding hyphens.
*/
// let code = "PRD-2026-AB12";
// console.log(code.replace(/[^A-Z0-9]/g,""))

/*
Level 4: Shorthand character classes
Assignments 26–32 · Practice \d, \D, \w, \W, \s, and \S
Assignment 26 — Use \d
let text = "Order123Price45";


Task: Extract each digit.
*/
// let text = "Order123Price45";
// console.log(text.match(/[^\D]/g))

/*
Assignment 27 — Use \D
let text = "Room205A";


Task: Extract all non-digit characters.
*/
// let text = "5Room205A";
// console.log(text.match(/[\D]+/g))

/*
Assignment 28 — Use \w
let text = "User_Name123!";


Task: Extract word characters, including the underscore.
*/
// let text = "User_Name123!";
// console.log(text.match(/\w/g))

/*
Assignment 29 — Use \W
let text = "User_Name123!@";


Task: Extract characters that are not word characters.
*/
// let text = "User_Name123!@";
// console.log(text.match(/\W/g));

/*
Assignment 30 — Use \s
let text = "JavaScript is\nvery useful";


Task: Find every whitespace character, including the newline.
*/
// let text = "JavaScript is\nvery useful";
// console.log(text.match(/[\s]./gs));

/*
Assignment 31 — Use \S
let text = "Hi there 123!";


Task: Extract every non-whitespace character.
*/
// let text = "Hi there 123!";
// console.log(text.match(/\S/g))

/*
Assignment 32 — Compare shorthand and explicit classes
let text = "Abc123_X!";


Task: Compare the results of /\w/g and /[a-zA-Z0-9_]/g. Explain why the outputs match.
*/
// let text = "Abc123_X!";
// console.log(text.match(//g))

/*
Level 5: Practical text-processing tasks
Assignments 33–40 · Use character classes with match() and replace()
Assignment 33 — Clean a username
let username = "   Abhishek123!   ";


Tasks: Trim the string, remove characters other than letters and digits, and print the result.
*/
// let username = "   Abhishek123!   ";
// console.log(username.trim());
// console.log(username.replace(/[^a-zA-z0-9]/g, ""));

/*
Assignment 34 — Clean a phone number
let phone = "+977-984-123-4567";


Task: Remove everything except digits using replace().
*/
// let phone = "+977-984-123-4567";
// console.log(phone.replace(/[^0-9]/g,""))

/*
Assignment 35 — Extract marks
let result = "Ram: 85, Sita: 92, Hari: 78";


Task: Extract every group of digits using /\d+/g.
*/
// let result = "Ram: 85, Sita: 92, Hari: 78";
// console.log(result.match(/\d+/g));

/*
Assignment 36 — Replace special characters
let text = "Hello@World#2026!";


Task: Replace every character that is not a letter or digit with a space.
*/
// let text = "Hello@World#2026!";
// console.log(text.replace(/[^a-zA-Z0-9]/g,""))

/*
Assignment 37 — Clean repeated whitespace
let text = "JavaScript    is\tvery\nuseful";


Task: Replace every sequence of whitespace with one ordinary space.
*/
// let text = "JavaScript    is\tvery\nuseful";
// console.log(text.replace(/\s+/g, " "));

/*
Assignment 38 — Extract email components
let email = "abhishek123@example.com";


Task: Extract the username portion before @ using a character class and quantifier.
*/
// let email = "abhishek123@example.com";
// console.log(email.match(/[^\W]+/g))

/*
Assignment 39 — Separate a product code
let code = "ABC-123-XYZ-456";


Task: Extract alphabetic groups and numeric groups separately.
*/
// let code = "ABC-123-XYZ-456";
// console.log(code.match(/[A-Za-z0-9]/g))

/*
Assignment 40 — Create a slug
let title = "Learn JavaScript: 10 Useful Tips!";


Task: Convert the text to lowercase, replace characters other than letters and digits with hyphens, and remove unnecessary hyphens from the beginning or end.
*/

/*
Level 6: Advanced challenges
Assignments 41–50 · Apply several concepts together
Assignment 41 — Password character analysis
let password = "Abhi@12345";


Task: Extract uppercase letters, lowercase letters, digits, and non-word characters using separate regex patterns.
*/
// let password = "Abhi@12345";
// console.log(password.match(/[A-Z]/g));
// console.log(password.match(/[a-z]/g));
// console.log(password.match(/[0-9]/g));
// console.log(password.match(/[\W]/g));

/*
Assignment 42 — Validate a basic username format
let username = "Abhishek_123";


Task: Check whether the username contains only English letters, digits, and underscores. Try /^[a-zA-Z0-9_]+$/.
*/
// let username = "Abhishek_123";
// console.log(username.match(/^[a-zA-Z0-9_]+$/g))

/*
Assignment 43 — Extract hexadecimal color values
let text = "Colors: #FFF, #12ABEF, #000000";


Task: Extract six-digit hexadecimal color codes beginning with #.
*/
// let text = "Colors: #FFF, #12ABEF, #000000";
// console.log(text.match(/#[A-Fa-f0-9]{3,}\b/g));

/*
Assignment 44 — Find dates
let text = "Dates: 2026-10-15 and 2025-01-05";


Task: Extract dates in YYYY-MM-DD format. Use digit classes and quantifiers.
*/
// let text = "Dates: 2026-10-15 and 2025-01-05";
// console.log(text.match(/\d{4}-\d{2}-\d{2}/g));

/*
Assignment 45 — Extract words that start with vowels
let text = "Apple, orange, banana, umbrella, grape";


Task: Match words beginning with a vowel, ignoring case.
*/
// let text = "Apple, orange, banana, umbrella, grape";
// console.log(text.match(/^[aeiou]\w+/gi))

/*
Assignment 46 — Extract uppercase abbreviations
let text = "HTML CSS JavaScript API SQL";


Task: Extract sequences of two or more uppercase letters.
*/
// let text = "HTML CSS JavaScript API SQL";
// console.log(text.match(/[A-Z]{2,}/g))

/*
Assignment 47 — Mask all but the last four digits
let card = "1234567812345678";


Task: Replace all digits except the last four with *. Try using a lookahead or capture groups after first considering how to match the prefix.
*/
// let card = "1234567812345678";
// console.log(card.replace(//g))

/*
Assignment 48 — Extract words without digits
let text = "abc123 hello45 world JavaScript2026";


Task: Extract alphabetic sequences that are not immediately followed by digits. Consider a negative lookahead.
*/

/*
Assignment 49 — Analyze a multiline string
let text = "Name: Ram\nAge: 25\nCity: Kathmandu";


Task: Extract labels before colons, then extract the numeric age using character classes.
*/

/*
Assignment 50 — Build a complete text cleaner
let text = "  Hello!!! Abhishek123, welcome to JavaScript 2026.  ";


Tasks:
- Trim the whitespace.
- Extract all numbers.
- Extract all words.
- Remove digits.
- Replace punctuation with spaces.
- Normalize repeated whitespace to a single space.
- Print each result separately.
*/
