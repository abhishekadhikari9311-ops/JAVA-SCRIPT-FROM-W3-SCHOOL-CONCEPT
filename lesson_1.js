/*
Given the string below, extract all numbers.
let text = "I bought 12 apples, 5 mangoes, and 20 oranges."; 

Your task: Use match() and a regular expression to find all numbers.
*/

// let text = "I bought 12 apples,5 mangoes, and 20 oranges.";

// let pattern = /\d+/g;

// let result = text.match(pattern);

// console.log(result);

/*
Hide a phone number
Beginner

[ ] 

Replace every digit with an asterisk.
let phone = "9841234567";

Your task: Use replace() and a regex to hide all digits.
*/

// let phone = "9841234567";

// let pattern = /\d/g;

// let result = phone.replace(pattern, "*");

// console.log(result);

/*
Determine whether a filename ends with .pdf.
let filename = "assignment.pdf";

Your task: Use endsWith() to check the filename.
*/

// let pattern = ".pdf";

// let filename = "assignment.pdf";

// let result = filename.endsWith(pattern);

// console.log(result);

/*
Change every occurrence of the word 'bad' to 'good'.
let text = "This is a bad day, and bad weather."; 

Your task: Use replace() and a regex to replace both occurrences.
*/

// let result = "This is a bad day, and bad weather.".replace(/bad/g, "good");

// console.log(result);

/*
Extract email-like strings from the text.
let text = "Contact ram@gmail.com or sita@yahoo.com";

Your task: Use match() to find both email addresses.
*/

// let text = "Contact ram@gmail.com or sita@yahoo.com";

// let pattern = /([a-z])@([a-z]).com/gi;

// console.log(text.match(pattern));

/*
Check whether the URL ends with .com.
let url = "https://example.com";

Your task: Use endsWith() to return true or false.
*/

// let url = "https://example.com";

// console.log(url.endsWith(".exe"))

/*
let username = "   Abhishek123   ";

Your tasks:
1. Remove spaces from the beginning and end using trim().
2. Replace all digits with an empty string using replace().
3. Print the final username.

*/

// let username = "   Abhishek123   ";

// console.log(username.trim());

// let pattern = /[0-9]|^\s+|\s+$/g;

// console.log(pattern);

// console.log(username.replace(pattern, ""), "hello");

/*
given,
let message = "I scored 85 marks and 92 marks in exams.";

Your tasks:
1. Use match() to find every number.
2. Use replace() to change every occurrence of "marks" to "points".
3. Use endsWith() to check whether the modified message ends with "exams.".

*/

// let message = "I scored 85 marks and 92 marks in exams.";

// console.log(message.match(/[0-9]+/g));

// console.log(message.replace(/marks/g, "points"));

// console.log(message.endsWith("exams."));

/*
let filename = "report2026.pdf";

Your tasks:
1. Use endsWith() to check whether the filename ends in .pdf.
2. Use replace() to replace every digit with X.
3. Use match() to extract the digits from the original filename.

*/

// let filename = "report2026.pdf";

// console.log(filename.endsWith(".pdf"));

// console.log(filename.replace(/[0-9]/g, "X"));

// console.log(filename.match(/[0-9]+/g));

/*
let sentence = "cat, dog, cat, rabbit, cat";

Your tasks:
1. Use match() to find every occurrence of "cat".
2. Use replace() to replace every "cat" with "lion".
3. Check whether the modified string ends with "rabbit" using endsWith().

*/

// let sentence = "cat, dog, cat, rabbit, cat";

// console.log(sentence.match(/cat/g));
// console.log(sentence.replace(/cat/g, "lion"));
// console.log(sentence.endsWith("rabbit"));

/*
Your task: Find every vowel in the following sentence using JavaScript regular expressions.
let text = "JavaScript is interesting";
*/

// let text = "JavaScript is interesting";

// console.log(text.match(/[aeiou]/g));

/*
Assignment 3: Replace all digits using replace()
Your task: Hide all digits in a phone number by replacing them with *.
let phone = "9841234567";
*/

// let phone = "9841234567";

// console.log(phone.replace(/\d/g, "*"));

/*
let text = "I have 15 books, 3 pens, and 24 pencils.";

Task: Extract every number using match().

*/

// let text = "I have 15 books, 3 pens, and 24 pencils.";

// console.log(text.match(/\d+/g));

/*
Assignment 5: Find all lowercase vowels
let text = "education";


Task: Find every vowel in the word.
*/
// let text = "education";
// console.log(text.match(/[aeiou]/g));

/*
find uppercase and lowercase vowels
let text = "ApPlE Is AwEsOmE";


Task: Extract all vowels regardless of case.
*/

// let text = "ApPlE Is AwEsOmE";

// console.log(text.match(/[aeiou]/gi))

/*
Extract all words
let text = "JavaScript is fun to learn";


Task: Return all words as an array.
*/

// let text = "JavaScript is fun to learn";

// console.log(text.match(/\w+/gi))

/*
Assignment 8: Find a specific word
let text = "I love JavaScript. JavaScript is powerful.";


Task: Find every occurrence of "JavaScript".
*/

// console.log("I love JavaScript. JavaScript is powerful.".match(/JavaScript/gi));

/*
Assignment 9: Extract all capital letters
let text = "AbHiShEk AdHiKaRi";


Task: Extract only uppercase letters.
*/

// let text = "AbHiShEk AdHiKaRi";

// let pattern = /[A-Z]/g;

// console.log(text.match(pattern));

/*
Assignment 10: Extract all lowercase letters
let text = "Hello WORLD 123";


Task: Extract only lowercase English letters.
*/

// let text = "Hello WORLD 123";

// console.log(text.match(/[a-z]/g))

/*
Assignment 11: Find punctuation marks
let text = "Hello! How are you? I am fine.";


Task: Extract the !, ?, and . punctuation marks.
*/

// let text = "Hello! How are you? I am fine.";

// console.log(text.match(/[!?.]/g))

/*
Assignment 12: Hide phone digits
let phone = "9841234567";


Task: Replace every digit with *.
*/

// let phone = "9841234567";

// console.log(phone.match(/\d/g));

/*
Assignment 13: Remove all numbers
let text = "Abhishek123Adhikari456";


Task: Remove every digit from the string.
*/

// let text = "Abhishek123Adhikari456";

// console.log(text.replace(/\d+/g, ""));

/*
Assignment 14: Replace spaces with hyphens
let text = "learn javascript easily";


Task: Replace each space with -.
*/

// let text = "learn javascript easily";
// console.log(text.replace(/\s+/g, "-"));

/*
Assignment 15: Remove extra spaces
let text = "JavaScript    is   very     useful";


Task: Replace each sequence of two or more spaces with one space.
*/

// let text = "JavaScript    is   very     useful";
// console.log(text.replace(/\s+/g, " "));

/*
Assignment 16: Replace every vowel
let text = "javascript";


Task: Replace every vowel with *.
*/

// console.log("javascript".replace(/[aeiou]/g, "*"));

/*
Assignment 17: Replace a word
let text = "bad weather is bad";


Task: Replace every occurrence of "bad" with "good".
*/

// console.log("bad weather is bad".replace(/bad/g, "good"));

/*
Assignment 18: Convert spaces to underscores
let text = "my first javascript project";


Task: Replace all spaces with _.
*/

// console.log("my first javascript project".replace(/\s+/g, "_"));

/*
Assignment 19: Remove punctuation
let text = "Hello, Abhishek! How are you?";


Task: Remove commas, exclamation marks, and question marks.
*/

// console.log("Hello, Abhishek! How are you?".replace(/[,!?]/g, ""));

/*
Level 3: Beginner — endsWith() method
Assignments 20–25 · Checking the ending of a string
Remember: endsWith() takes a string, not a regular expression.
Assignment 20: Check a PDF file
let filename = "assignment.pdf";


Task: Check whether the filename ends with .pdf.
*/

// console.log("assignment.pdf".endsWith(".pdf"));

/*
Assignment 21: Check a JavaScript file
let filename = "app.js";


Task: Check whether the filename ends with .js.
*/

// console.log("app.js".endsWith(".js"));

/*
Assignment 22: Check a website domain
let url = "https://example.com";


Task: Check whether the string ends with .com.
*/

// console.log("https://example.com".endsWith(".com"));

/*
Assignment 23: Check a username ending
let username = "Abhishek123";


Task: Check whether the username ends with "123".
*/

// console.log("Abhishek123".endsWith("123"));

/*
Assignment 24: Check an image extension
let image = "profile.png";


Task: Check whether the image filename ends with .png.
*/

// console.log("profile.png".endsWith(".png"));

/*
Assignment 25: Check a string ending
let text = "I am learning JavaScript";


Task: Check whether the string ends with "JavaScript".
*/
// console.log("I am learning JavaScript".endsWith("JavaScript"));

/*
Level 4: Intermediate — Combining match() and replace()
Assignments 26–31 · Extracting and modifying text together
Assignment 26: Extract and remove digits
let text = "Room 205, Floor 3";


Tasks:
- Extract all numbers using match().
- Remove all numbers using replace().
*/

// let text = "Room 205, Floor 3";

// let pattern = /\d+/g;

// let res1 = text.match(pattern);
// let res2 = text.replace(pattern, "");
// console.log(res1, res2);

/*
Assignment 27: Extract and replace vowels
let text = "JavaScript";


Tasks:
- Find all vowels.
- Replace all vowels with @.
*/

// console.log("JavaScript".match(/[aeiou]/g));
// console.log("JavaScript".replace(/[aeiou]/g, "@"));

/*
Assignment 28: Find all words and change spaces
let text = "I love web development";


Tasks:
- Extract all words.
- Replace spaces with hyphens.
*/

// console.log("I love web development".match(/[a-zA-Z]/g, "-"));
// console.log("I love web development".replace(/\s+/g, "-"));

/*
Assignment 29: Find and mask a phone number
let phone = "My number is 9841234567";


Tasks:
- Extract the phone number.
- Replace all its digits with X in the original text.
*/

// let phone = "My number is 9841234567";

// let pattern = /\d/g;

// console.log(phone.match(pattern));

// console.log(phone.replace(/\d/g, "X"));

/*
Assignment 30: Replace repeated words
let text = "JavaScript is easy. JavaScript is useful.";


Tasks:
- Find every occurrence of "JavaScript".
- Replace every occurrence with "JS".
*/

// console.log("JavaScript is easy. JavaScript is useful.".match(/JavaScript/gi));
// console.log(
//   "JavaScript is easy. JavaScript is useful.".replace(/JavaScript/gi, "JS"),
// );

/*
Assignment 31: Clean a username
let username = "   Abhishek123   ";


Tasks:
- Remove spaces from the beginning and end with trim().
- Remove digits using replace().
- Print the final username.
*/
// console.log("   Abhishek123   ".trim());
// console.log("   Abhishek123   ".replace(/^\s+|\s+$/g, ""));

/*
Assignment 32: Analyze a file
let filename = "report2026.pdf";

Tasks:
- Extract all digits.
- Replace all digits with X.
- Check whether the original filename ends with .pdf.
*/

// console.log("report2026.pdf".match(/\d/g));

// console.log("report2026.pdf".replace(/\d/g, "X"));

// console.log("report2026.pdf".endsWith(".pdf"));

/*
Assignment 33: Clean a product code
let productCode = "AB-123-CD-456";


Tasks:
- Extract all groups of digits.
- Remove all hyphens.
- Check whether the original code ends with "456".
*/

// console.log("AB-123-CD-456".match(/\w+/g));

// console.log("AB-123-CD-456".replace(/-+/g, " "));

// console.log("AB-123-CD-456".endsWith("456"));

/*
Assignment 34: Process an email message
let message = "Contact ram@gmail.com or sita@yahoo.com";


Tasks:
- Extract the email addresses.
- Replace every @ with " [at] ".
- Check whether the original message ends with "com".
*/

// let message = "Contact ram@gmail.com or sita@yahoo.com";

// console.log(message.match(/([a-z]+)@([a-z]+).com/gi));

// console.log(message.replace(/@/g, "at"));

// console.log(message.endsWith("com"));

/*
Assignment 35: Clean a sentence
let text = "Hello!!!   Welcome   to   JavaScript!!!";


Tasks:
- Extract all words.
- Replace repeated spaces with one space.
- Remove all exclamation marks.
- Check whether the cleaned string ends with "JavaScript".
*/

// let text = "Hello!!!   Welcome   to   JavaScript!!!";

// console.log(text.match(/[a-z]/gi));

// console.log(text.replace(/\s+/g, " "));

// let cleaned = text.replace(/!/g, "");

// console.log(cleaned);

// console.log(cleaned.endsWith("JavaScript"));

/*
Assignment 36: Process a student result
let result = "Ram scored 85, Sita scored 92, and Hari scored 78.";


Tasks:
- Extract all marks.
- Replace every number with [MARK].
- Check whether the original sentence ends with ".".
*/
// let result = "Ram scored 85, Sita scored 92, and Hari scored 78.";

// console.log(result.match(/\d+/g));

// console.log(result.replace(/\d+/g, "MARK"));

// console.log(result.endsWith("."));

/*
Level 6: Advanced — Real-world challenges
Assignments 37–43 · Apply your understanding independently

Assignment 37: Username validation
let username = "Abhishek123";

Tasks:
- Use match() to extract all letters.
- Use replace() to remove all digits.
- Use endsWith() to check whether the original username ends with "123".
*/

// let username = "Abhishek123";

// console.log(username.match(/[a-z]/gi));
// console.log(username.replace(/\d+/g, ""));
// console.log(username.endsWith("123"));

/*
Assignment 38: Password character analysis
let password = "Abhi@12345";

Tasks:
- Extract all digits.
- Replace every digit with *.
- Check whether the original password ends with "45".
*/

// let password = "Abhi@12345";

// console.log(password.match(/\d/g));

// console.log(password.replace(/\d/g, "*"));

// console.log(password.endsWith("45"));

/*
Assignment 39: Extract hashtags
let post = "Learning #JavaScript and #WebDevelopment today";


Tasks:
- Extract all hashtags.
- Replace # with an empty string.
- Check whether the original post ends with "today".
*/

// let post = "Learning #JavaScript and #WebDevelopment today";

// console.log(post.match(/#/g));

// console.log(post.replace(/#/g, ""));

// console.log(post.endsWith("today"));

/*
Assignment 40: Format a date
let date = "2026-10-13";

Tasks:
- Extract all number groups.
- Replace hyphens with slashes.
- Check whether the original date ends with "13".
*/

// let date = "2026-10-13";

// console.log(date.match(/\d+/g));
// console.log(date.replace(/-/g, "/"));
// console.log(date.endsWith("13"));

/*
Assignment 41: Clean a blog title
let title = "   Learn JavaScript!!!  2026   ";


Tasks:
- Remove leading and trailing whitespace.
- Extract all words and numbers.
- Remove all exclamation marks.
- Check whether the cleaned title ends with "2026".
*/

// let title = "   Learn JavaScript!!!  2026   ";

// console.log(title.replace(/\s+/g, " "));

// console.log(title.match(/\w+/g));
// let cleaned = title.replace(/!/g, "");
// console.log(cleaned);

// console.log(cleaned.endsWith(" "));

/*
Assignment 42: Analyze a URL
let url = "https://mywebsite.com/blog123";


Tasks:
- Extract all numbers.
- Replace all numbers with ID.
- Check whether the original URL ends with "blog123".
*/

// let url = "https://mywebsite.com/blog123";

// console.log(url.match(/\d+/g));

// console.log(url.replace(/\d+/g, "ID"));

// console.log(url.endsWith("blog123"));

/*
Assignment 43: Build a text-cleaning program
let text = "   Hello!!! I have 25 books and 10 pens.   ";


Tasks:
- Trim whitespace from both ends.
- Extract all numbers.
- Replace all numbers with [NUMBER].
- Replace repeated spaces with one space.
- Check whether the final text ends with "pens.".
- Print every result separately.
*/

// let text = "   Hello!!! I have 25 books and 10 pens.   ";

// let whitespace = text.trim();
// console.log(whitespace);

// let allNum = text.match(/\d+/g);
// console.log(allNum);

// let replaceNum = text.replace(/\d+/g, "NUMBER");
// console.log(replaceNum);

// let repeatedSpace = text.replace(/\s+/g, " ");
// console.log(repeatedSpace);

// let finalText = text.endsWith(".pens");
// console.log(finalText);
