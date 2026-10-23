/*
1. Username starts correctly
Test whether "Abhishek123" begins with an uppercase letter.
*/
// console.log(/^[A-Z]/g.test("dbhishek123"));

/*
2. File extension checker
Check whether `"app.js"` ends with `.js`, but `"app.jsx"` does not.
*/
// console.log("app.jsx".endsWith(".js"));
// console.log(/^[a-z]+\.js$/g.test("app.jsx"));

/*
3. Exact numeric input
Validate `"12345"` as a string containing only digits.
*/

// console.log(/^[0-9]+$/g.test("123ll45"))

/*
4. Whole-word search
Find whole-word `"cat"` in `"cat scatter bobcat cat."`.
*/
// console.log("cat scatter bobcat cat.".match(/\bcat\b|\Bcat\B|\Bcat\b/g));

/*
5. Product code prefix
Check whether `"PRD-2026"` starts with `"PRD-"`.
*/
// console.log(/^PRD-/.test("PRD-2026"))

/*
6. Invoice suffix validation
Check whether `"INV-1001"` ends in four digits.
*/
// console.log(/^INV-\d{4}$/g.test("INV-1222205"));

/*
7. Line-based error detector
Find lines beginning with `"ERROR"` in `"INFO: start\nERROR: failed\nINFO: done"`.
*/
// console.log("INFO: start\nERROR: failed\nINFO: done".match(/error.+/gim));

/*
8. JavaScript filename scanner
Extract lines ending in `.js` from `"app.js\nstyle.css\nserver.js"`.
*/
// console.log("app.js\nstyle.css\nserver.js".match(/^[a-z]+\.js$/gim))

/*
9. Whole-word replacement
Replace whole-word `"bad"` with `"good"` in `"badminton is fun, but bad behavior is bad"`.
*/
// console.log(
//   "badminton is fun, but bad behavior is bad".replace(/bad/gi, "good"),
// );

/*
10. Words starting with a prefix
Find words beginning with `"pre"` in `"preview prepare prevent present"`.
*/
// console.log("preview prepare prevent present".match(/pre[a-z]+/gi));

/*
11. Words ending in a suffix
Extract words ending in `"ing"` from `"running jump sing bringing"`.
*/
// console.log("running jump sing bringing".match(/[a-z]+\Bing\b/gi))

/*
12. Not at a word boundary
Find `"cat"` when it is preceded by a word character in `"cat scatter bobcat"`.
*/
// console.log("cat scatter bobcat".match(/\Bcat/gi));

/*
13. Start and end validation
Validate a string that must start with `A` and end with `Z`, such as `"ABCZ"`.
*/
// console.log(/^a[a-z]+z$/gi.test("ABCZ"));

/*
14. Exact username format
Accept only letters, digits, and underscores in `"Abhi_123"`; reject `"Abhi-123"`
*/
// console.log(/^[a-zA-Z]+[_0-9]+$/gi.test("Abhi_123"));

/*
15. Empty-input protection
Validate a non-empty string of English letters only; reject `""` and `"Abhi123"`.
*/
// console.log(/^[A-Z]+$/gi.test("lllllllllllll"));

/*
Positive lookahead mini-projects — (?=...)
Positive lookahead means: match this part only if the specified pattern exists immediately after it.
For example, /\d(?=kg)/ matches a digit only when the next characters are kg. The kg itself is not included in the match.
Projects 16–30 · Validate conditions and find values with required following text.

16. Password contains a digit
Validate "Abhishek1" only if it contains at least one digit. Try "Abhishek" too.
*/
// console.log(/^[A-Za-z]+(?=\d)\d+$/g.test("Abh5869"));

/*
17. Password contains uppercase and lowercase letters
Validate "Abhishek" but reject "abhishek".
*/
// console.log(/^(?=[A-Z][a-z]).{8}$/g.test("Abhishekjjjjj"))

/*
18. Strong password checker
Require at least eight characters, one uppercase letter, one lowercase letter, one digit, and one special character.
*/
// console.log(
//   /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@#&!]).{8,}$/g.test("Ppass123@"),
// );

/*
19. Price followed by a currency code
From "Price: 250USD, tax: 20NPR, quantity: 5", extract numbers immediately followed by USD or NPR.
*/

// console.log(
//   "Price: 250USD, tax: 20NPR, quantity: 5".match(/\d+(?<=\d+)[usd|npr]+/gi),
// );

/*
20. Quantity followed by a unit
Extract numbers followed by kg from "5kg 10kg 20lb 8kg" without including the unit.
*/
// console.log("5kg 10kg 20lb 8kg".match(/\d+(?:kg)/gi))

/*
Continue with these assignments:
21. Product ID filter: From "AB123 CD456 XY789", match IDs only when followed by exactly three digits and a word boundary.
*/
// console.log("AB123 CD456 XY789".match(/\b[A-Z]+(?=\D+)\d{3}\b/g));

/*
22. Find numbers before commas: From "12, 345, 67 89", match number sequences only when a comma follows immediately.
*/
// console.log("12, 345, 67 89".match(/\d+(?=\,)/g));

/*
23. Find numbers before a period: Match digits immediately followed by a literal period in "12.5 99. 8abc".
*/
// console.log("12.5 99. 8abc".match(/\d+(?=\.)/g))

/*
24. Extract words before punctuation: Find words immediately followed by ! in "Hello! Great job! Welcome".
*/
// console.log("Hello! Great job! Welcome".match(/[A-Za-z]+(?=!)/g))

/*
25. Find terms followed by a colon: Match "Name" and "Age" in "Name: Ram, Age: 25, City: Kathmandu".
*/
// console.log("Name: Ram,  City: Kathmandu".match(/(?:Name|Age|city)(?=:)/gi));

/*
26. Username with a required digit: Validate a username of letters and digits that must contain at least one digit.
*/
// console.log(/(?:[a-zA-Z]+)(?:[0-9]+)/g.test("UserName_"))

/*
27. Username with no spaces: Validate that "Abhi_123" contains no whitespace and has at least one character.
*/
// console.log(/(?=\S).+/g.test("ffffffffff ffffff"))

/*
28. Repeated character detector: Find each a that is immediately followed by another a in "banana aa aardvark".
*/
// console.log("banana aa aardvark".match(/a(?:a)/g));

/*
29. Find words before .com: Match domain-name text immediately followed by .com in "google.com example.org openai.com".
*/
// console.log("google.com example.org openai.com".match(/\b[a-z]+\b(?:\.com)/g))

/*
30. Multiple password requirements: Validate a password containing at least one digit, one uppercase letter, and one underscore.
*/
// console.log(/^(?:\w+)$/g.test("A123_"));

/*
4. Negative lookahead mini-projects — (?!...)
Negative lookahead means: match this part only if the specified pattern does not occur immediately after it.
For example, /\d(?!kg)/ matches a digit when it is not immediately followed by kg.
Projects 31–45 · Exclude unwanted patterns.
31. Find digits not followed by kg: Use "5kg 10lb 20kg 8lb".
*/
// console.log("5kg 10lb 50lo 20kg 8lb".match(/\d+(?!kg)(lb|lo)/g));

/*
32. Block .exe filenames: Check whether "photo.jpg" is acceptable but "virus.exe" is not. Assume filenames must end in .jpg or .png.
*/
// console.log(/^[a-z]+(?!\.exe$)[a-z]+\.(jpg|png)$/gi.test("virus.jpg"));

/*
33. Reject usernames ending in digits: Validate "Abhishek" but reject "Abhishek123".
*/
// console.log(/^[a-z]+(?!\d+)$/gi.test("Abhikkkkkkkkkkkkkkkkkkkkkkkk"));

/*
34. Exclude a forbidden word: Find whole words other than "admin" in "admin user editor admin guest".
*/
// console.log("admin user editor admin guest".match(/(?![admin]+)\w+/gi));

/*
35. Find numbers not followed by a comma: Use "12, 34 56, 78".
*/
// console.log("12, 34 56, 78".match(/\b\d+\b(?!,)/g));

/*
36. Find words not followed by !: From "Hello! Great job! Welcome home", match words that are not immediately followed by an exclamation mark.
*/
// console.log("Hello! Great job! Welcome home".match(/\b\w+\b(?!\!)/gi));

/*
37. Prevent duplicate hyphens: Validate product slugs such as "java-script" but reject "java--script".
*/
// console.log(/(?!--*)[a-z]+(?:-[a-z]+)*$/gi.test("-javascript"))

/*
38. Reject leading whitespace: Validate usernames that cannot begin with a space.
*/
// console.log(/(?!^\s+)\w+\s+\w+$/gi.test("555Abll         lllllh"));
/*
39. Reject trailing whitespace: Validate usernames that cannot end with whitespace.
*/
// console.log(/^(?!\s+$)\w+\s+\w+$/gi.test("Abhi1 3580000_"))

/*
40. Block a forbidden suffix: Accept "report.pdf" but reject "report.tmp".
*/
// console.log(/^(?!tmp$).+\.pdf$/gi.test("abc.pdf"))

/*
41. Exclude numbers followed by a percent sign: From "10% 25 50% 75", match numbers that are not immediately followed by %.
*/
// console.log("10% 25 50% 75".match(/\b\d+\b(?!%)/g))

/*
42. Find words not followed by digits: From "user123 admin test45 guest", match words not immediately followed by digits.
*/
// console.log("user123 admin test45 guest".match(/(?!\d+)\b[a-z]+\b/gi))

/*
43. Prevent consecutive punctuation: Validate text that must not contain !! or ??.
*/
// console.log(/^(?!.*(!!|\?\?)).+$/g.test("helloNe pal!_123"))

/*
44. Find non-admin role labels: Match role names in "admin user teacher student" while excluding "admin".
*/
// console.log("admin user teacher student".match(/\b(?!admin\b)\b.+[a-z]\b/gi))

/*
45. Create a safe filename checker: Accept filenames made of letters, digits, underscores, hyphens, and periods, but reject filenames ending in .exe.
*/
// console.log(/^\b(?!\.exe$)[\w-.]+\.(com|jpg)$/gi.test("a-.bc.com"))

/*
5. Positive lookbehind mini-projects — (?<=...)
Positive lookbehind means: match this part only if the specified pattern occurs immediately before it.
For example, /(?<=\$)\d+/ extracts digits after a dollar sign without including the dollar sign.
Projects 46–60 · Extract values based on preceding context.
46. Extract prices in dollars: From "Laptop $900, mouse $25, keyboard NPR 3000", extract numbers preceded by $.
*/
// console.log("Laptop $900, mouse $25, keyboard NPR 3000".match(/(?<=\$)\d+/gi))

/*
47. Extract values after Age:: From "Name: Ram, Age: 25, City: Kathmandu", extract the age.
*/
// console.log("Name: Ram, Age: 25, City: Kathmandu".match(/(?<=age:\s*)\b\d+\b/gi))

/*
48. Extract text after ID-: From "ID-123 ID-456 CODE-789", extract the digits preceded by ID-.
*/
// console.log("ID-123 ID-456 CODE-789".match(/(?<=ID-)\b\d+\b/gi))
/*
49. Extract digits after a plus sign: From "Phone +9779841234567, extension 123", extract the digits that begin immediately after +.
*/
// console.log("Phone +9779841234567, extension 123".match(/(?<=\+)\d+/gi))

/*
50. Extract numbers after qty=: From "qty=10 price=250 qty=5", extract the quantity values.
*/
// console.log("qty=10 price=250 qty=5".match(/(?<=qty=\b)\b\d+\b/gi))

/*
51. Extract file extensions: From "app.js style.css index.html", extract extensions preceded by a period.
*/
// console.log("app.js style.css index.html".match(/(?<=\.)[a-z]+/gi))

/*
52. Extract words after @: From "@admin @teacher @student", extract role names without @.
*/
// console.log("@admin @teacher @student".match(/(?<=@)\w+\b/gi))

/*
53. Extract values after #: From "Color #FFAA00 and #123456", extract the six-digit hexadecimal values after #.
*/
// console.log("Color #FFAA00 and #123456".match(/(?<=#)[a-f0-9]+\b/gi))

/*
54. Extract text after a colon: From "Name: Abhishek, City: Kathmandu", extract the text following each colon up to a comma or the end of the string.
*/
// console.log("Name: Abhishek, City: Kathmandu".match(/(?<=:)\s[a-z]+(,|$)/gi))

/*
55. Extract digits preceded by Order-: From "Order-100 Order-250 Invoice-300", extract only the order numbers.
*/
// console.log("Order-100 Order-250 Invoice-300".match(/\border-(?<=order-)\d+\b/gi))

/*
56. Extract numbers after =: From "a=10, b=20, c=30", extract the values.
*/
// console.log("a=10, b=20, c=30".match(/[abc]+\=(?<=\=)\d+\b/gi))

/*
57. Extract usernames after user:: From "user:ram admin:sita user:hari", extract only usernames associated with user:.
*/
// console.log("user:ram admin:sita user:hari".match(/(?<=user:)[a-z]+\b/gi))

/*
58. Extract a year after -: From "report-2026 report-2025 draft-2024", extract the four-digit years.
*/
// console.log("report-2026 report-2025 draft-2024".match(/(?<=-)[0-9]+\b/gi))

/*
59. Extract values after ₹: From "Book ₹500, pen ₹20, bag ₹1500", extract the price amounts.
*/
// console.log("Book ₹500, pen ₹20, bag ₹1500".match(/(?<=₹)\d+\b/gi))

/*
60. Extract text after # in ticket IDs: From "BUG#123 TASK#456 BUG#789", extract numbers associated with BUG#.
*/
// console.log("BUG#123 TASK#456 BUG#789".match(/(?<=BUG#)\d+\b/gi))

/*
6. Negative lookbehind mini-projects — (?<!...)
Negative lookbehind means: match this part only if the specified pattern does not occur immediately before it.
61. Find numbers not preceded by $: From "$100 200 $300 400", extract numbers that are not preceded by a dollar sign.
*/
// console.log("$100 200 $300 400".match(/(?<!\$)\b\d+\b/gi))

/*
62. Find numbers not preceded by #: From "#123 456 #789 101", extract numbers not preceded by #.
*/
// console.log("#123 456 #789 101".match(/(?<!#)\b\d+\b/gi))

/*
63. Exclude order numbers: From "Order-123 Code-456 Order-789", extract numbers that are not preceded by "Order-".
*/
// console.log("Order-123 Code-456 Order-789".match(/\bcode-(?<!order-)\b\d+\b/gi))

/*
64. Find words not preceded by @: From "@admin guest @teacher student", find words not immediately preceded by @.
*/
// console.log("@admin guest @teacher student".match(/(?<!@)\b[a-z]+\b/gi))

/*
65. Exclude values preceded by qty=: From "qty=10 price=250 qty=5", extract numbers not immediately preceded by qty=.
*/
// console.log("qty=10 price=250 qty=5".match(/price=(?<!qty=)\b\d+\b/gi))

/*
66. Find amounts not preceded by a currency symbol: From "$50 €70 100 ₹200", match numeric amounts that do not immediately follow $, €, or ₹.
*/
// console.log("$50 €70 100 ₹200".match(/(?<!(\$|€|₹))\b\d+\b/gi))

/*
67. Extract identifiers excluding a prefix: From "ID123 CODE456 ID789", extract digit sequences not preceded by "ID".
*/
// console.log("ID123 CODE456 ID789".match(/\bcode(?<!\bID\B)\B\d+\b/gi))
/*
68. Find words not preceded by #: From "#javascript regex #coding practice", match words not immediately preceded by #.
*/
// console.log("#javascript regex #coding practice".match(/(?<!#)\b[a-z]+\b/gi))

/*
69. Exclude years preceded by FY: From "FY2025 2026 FY2027 2028", extract years not immediately preceded by FY.
*/
// console.log("FY2025 2026 FY2027 2028".match(/(?<!fy)\b\d+\b/gi))
/*
70. Find numbers not preceded by a minus sign: From "-10 20 -30 40", extract unsigned number sequences that are not immediately preceded by -.
*/
// console.log("-10 20 -30 40".match(/(?<!-)\b\d+\b/gi));
/*
7. Advanced assertion mini-projects — combining lookarounds
These assignments combine two or more assertions. They are especially useful for understanding how assertions work together in real applications.
Projects 71–85 · Solve these without capturing the surrounding characters unnecessarily.
71. Password validation system: Require at least 10 characters, one uppercase letter, one lowercase letter, one digit, and one special character.
*/
// console.log(/(?=.*[a-z])(?=.*[0-9])(?=.*[\W]$)(?=.*[\s]).{10,}$/gi.test("Abbb   bbbb2@jj"))

/*
72. Strong username validator: Require 5–15 characters, only letters, digits, and underscores, at least one letter, and no leading or trailing underscore.
*/
// console.log(
//   /^(?:.+[a-z0-9])(?:(_[a-z0-9]+)*)(?!.+_$)(?=.{5,15}$)/gi.test(
//     "01____ek12_",
//   ),
// );

/*
73. Credit-card masking: Transform "1234567812345678" into "************5678" without hardcoding the first 12 digits.
*/
// console.log("1234567812345678".replace(/\d(?=\d{4})/gi, "*"));

/*
74. Currency extractor: From "USD 250, NPR 3000, EUR 75", extract each amount only when preceded by its currency code and a space.
*/
// console.log("USD250, NPR 3000, EUR 75".match(/(?<=(usd|npr|eur) )\b\d+\b/gi));

/*
75. Product code validator: Accept codes like "PRD-2026-001" but reject codes that do not contain a four-digit year and a three-digit final section.
*/
// console.log(/^[a-z]+-\d{4}-\d{3}$/gi.test("PRD-2001"))
/*
76. Duplicate word detector: Detect repeated adjacent words in "JavaScript is is useful and and powerful".
*/
// console.log(
//   "JavaScript is    is useful and                and    and powerful".match(
//     /\b(\w+)\s+\1\b/gi,
//   ),
// );

/*
77. Repeated whitespace cleaner: Replace repeated spaces with one space, but preserve ordinary single spaces.
*/
// console.log(
//   "hello   nepal   how       are you    now".replace(/  {2,}/gi, " "),
// );
/*
78. Exclude words with a particular suffix: From "help help helpful help helper helpless", find whole words not immediately followed by additional word characters after "help".
*/
// console.log("help help helpful help helper helpless".match(/\bhelp(?!\w+)\b/gi))

/*
79. Find numbers within a range of digits: Extract exactly four-digit numbers from "123 2026 9999 10000 42".
*/
// console.log("123 2026 9999 10000 42".match(/\b\d{4}\b/gi))
/*
80. Email-domain extractor: From "ram@gmail.com sita@yahoo.com", extract domain names without including the @ or .com.
*/
// console.log("ram@gmail.com sita@yahoo.com".match(/(?!(@|.com))(?:(gmail|yahoo))/gi))
/*
81. HTML attribute value finder: From '<input type="text" name="email" id="user">', extract the quoted values following =.
*/
// console.log(
//   '<input type="text" name="email" id="user">'.match(
//     /(?<==)"[^"]*"/gi,
//   ),
// );
/*
82. Log severity filter: Extract complete lines beginning with ERROR or WARN, using multiline mode.
*/
// let logs =
//   "INFO: Server started successfully\nERROR: Database connection failed\nWARN: Memory usage is above 80%\nDEBUG: Checking user authentication\nERROR: Invalid password entered\nINFO: User logged in successfully\nWARN: API response is slow\nDEBUG: Request processing completed";
// console.log(logs.match(/.*(error|warn).*/gim))
/*
83. Slug validator: Accept lowercase words separated by single hyphens, such as "learn-regex-today", but reject "Learn--Regex-".
*/

// console.log(
//   /^.+[a-z](?!.*--)(?:.*-).*[a-z](?!.+-)\w+$/gi.test("learn-regex-tod-ay-ddd6_--"),
// );
/*
84. Date-format checker: Validate dates formatted as YYYY-MM-DD with four digits for the year and two digits each for month and day. Also enforce month values 01–12 and day values 01–31; this is a format/range check, not full calendar validation.
*/
// console.log(
//   /^(\b\d{4}\b|(?![^(00|0[1-9])])\[23]{2})-\b(0[1-9]|1[0-2])\b-\b(0[1-9]|10|1[1-9]|2[0-9]|3[01])\b$/gi.test(
//     "0026-04-28",
//   ),
// );

/*
85. Sensitive-data extractor: Extract six-digit verification codes only when they are not embedded in longer digit sequences.
*/
// let text =
//   "Code: 123456, backup: 9876543, OTP: 456789, ref: 12345678, verify: 654321";
//   console.log(text.match(/(?<=\: )\b\d{6}\b/gi))

/*
8. Full practical mini-projects
These are larger exercises. Each project should contain multiple test cases, successful and unsuccessful inputs, and clear console output.

Project 86 — Registration form validator
Validate a username, email-like format, and password using regex assertions. Show a separate result for each field.
*/
// console.log(/^\w{10,} $/gi.test("Digital987 ")); //username
// console.log(/^[a-z]+[\W]+@[a-z]+\.com$/gi.test("rahul#@yahoo.dom"))//email
// console.log(/^[\w]+[\W]+[\s]---$/gi.test("digital$---"))//password

/*
Project 87 — Inventory code processor
Extract product codes, quantities, prices, and category identifiers from text. Reject codes that contain invalid prefixes or suffixes.
*/
// let text = `
// ProductCode: PRD-2026-001, Quantity: 25, Price: $199.99, CategoryID: CAT-101\nProductCode: PRD-2026-002, Quantity: 10, Price: $49.50, CategoryID: CAT-102\nProductCode: PRD-2026-003, Quantity: 5, Price: $999.00, CategoryID: CAT-103\nProductCode: XYZ-2026-004, Quantity: 12, Price: $75.25, CategoryID: CAT-104\nProductCode: PRD-26-005, Quantity: 8, Price: $120.00, CategoryID: CAT-105\nProductCode: PRD-2026-ABC, Quantity: 15, Price: $60.00, CategoryID: CAT-106\nProductCode: PRD-2026-007-INVALID, Quantity: 20, Price: $89.99, CategoryID: CAT-107\nProductCode: PRD-2026-008, Quantity: 30, Price: $15.75, CategoryID: CAT-108\nProductCode: @PRD-2026-009, Quantity: 7, Price: $45.00, CategoryID: CAT-109\nProductCode: PRD-2026-010!, Quantity: 18, Price: $150.50, CategoryID: CAT-110\n
// `;
// console.log(text.match(/(?<=ProductCode: )\b[a-z]{3}-\d{4}-\d{3}\b/gi));
// console.log(text.match(/(?<=Quantity: )\b\d{2,}\b/gi));
// console.log(text.match(/(?<=Price: \$)\b\d{2,}\.\d+\b/gi));
// console.log(text.match(/(?<=CategoryID: )\b[a-z]{3}-\d{2,}\b/gi));
// console.log(text.match(/.+/gim))

/*
Project 88 — Transaction parser
Extract amounts with currency symbols, ignore unmarked numbers, and mask sensitive account references.
*/
// let text = "Price $250, tax 30, fee €45, total £120";
// console.log(text.match(/(?:(\$|€|£))\d+/gi))

// let text = "Account ACC123456 paid $250. Reference ACC987654";
// console.log(text.replace(/(?<! acc)\d{6,}/gi, "*"));

/*
Project 89 — Log analyzer
Separate INFO, WARN, and ERROR lines, find timestamps, and extract messages following a colon.
*/
// let text = `2026-10-20 09:15:23 INFO: Server started successfully\n2026-10-20 09:16:45 WARN: Disk space is running low\n2026-10-20 09:17:10 ERROR: Database connection failed\n2026-10-20 09:18:05 INFO: User logged in\n2026-10-20 09:19:30 WARN: Response time exceeded threshold\n2026-10-20 09:20:12 ERROR: File upload failed\n2026-10-20 09:21:40 INFO: Backup completed successfully`;

// console.log(text.match(/.*(info|warn|error).*/gim))
// console.log(text.match(/.+[a-z]: (?<=: ).+[a-z]/gi))
/*
Project 90 — Text cleaner and keyword scanner
Normalize whitespace, find whole-word keywords, remove unwanted punctuation, and extract words based on their surrounding context.
*/
// let text = `  JavaScript   is             a powerful programming language!\nINFO: User123 logged in successfully.\nWARN: The server   response is slow.\nERROR: Database connection failed at 10:30.\nThe admin user sent 25 requests, but the guest user sent only 5.\nContact: admin@example.com, support@example.com!\nStatus: active; Role: teacher.\nPrice: $250, discount: 15%.
// `;
// console.log(text.trim());
// console.log(text.replace(/^ {2,}$/gim, "-"));
// console.log(text.match(/user/gi))
// console.log(text.match(/admin/gi))
// console.log(text.match(/(info|warn|error)/gi))
// console.log((text.match(/user/gi)).length)
// console.log(
//   text
//     .replace(/ {2,}/gim, " ")
//     .replace(/[^\w+]/gim, " ")
//     .trim(),
// );

/*
Continue with these more advanced projects:
91. URL component extractor: Extract protocol, hostname, and file extension from a list of URLs.
*/
// let text = `'https://www.google.com',
// 'https://www.youtube.com',
// 'https://www.facebook.com,
// 'https://www.instagram.com,
// 'https://www.linkedin.com,
// 'https://github.com,
// 'https://www.example.com,
// 'https://shop.example.com/products,
// 'http://docs.example.org/javascript/regex,
// 'https://www.example.com/login,
// 'https://www.example.com/register,
// 'https://blog.example.com/articles?id=25,
// 'https://files.example.com/downloads/app.zip,
// 'https://support.example.org/contact,
// 'http://localhost:3000,
// 'http://localhost:4000/api/users,
// 'www.example',
// 'https://example.com/about-us'`;

// console.log(text.match(/https/gi));
// console.log(text.match(/(localhost|www)/gi))
// console.log(text.match(/\b\.[a-z]*\b/gi))

/*
92. Invoice field parser: Extract invoice numbers, dates, and totals only when they follow their corresponding labels.
*/
// let text = `
// Invoice Number: INV-2026-001
// Invoice Date: 2026-10-20
// Invoice Total: $1,250.00

// Customer Name: Abhishek Adhikari
// Order Number: ORD-5001
// Date: 2026-10-19
// Amount: $850.00

// Invoice Number: INV-2026-002
// Invoice Date: 2026-10-21
// Invoice Total: $2,499.99

// Invoice Number: INV-2026-003
// Invoice Date: 2026-10-22
// Invoice Total: $750.50
// `;
// console.log(text.match(/(?<=invoice (number|date|total): )\b.*[a-z-0-9]\b/gi));
/*
93. Comment mention parser: Extract @username mentions but avoid matching the username portion of an email address.
*/

/*
94. Hashtag parser: Extract hashtags while avoiding matches embedded in ordinary words.
*/

/*
95. Phone number validator: Accept a specified phone-number format, optionally including a country code, and reject extra characters.
*/

/*
96. Form field rule engine: Define reusable validation rules for names, usernames, postal codes, and passwords. Run each rule against multiple inputs.
*/

/*
97. CSV-like data checker: Detect fields that have invalid prefixes or unexpected characters without using a full CSV parser.
*/

/*
98. Document heading extractor: Find lines beginning with heading labels such as TITLE:, SUMMARY:, and NOTES:.
*/

/*
99. Text redaction utility: Mask account numbers and identification strings based on their surrounding labels.
*/

/*
100. Regex assertion playground: Build a single JavaScript program with separate test cases for all eight concepts: ^, $, \b, \B, (?=...), (?!...), (?<=...), and (?<!...).
*/
