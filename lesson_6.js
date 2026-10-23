/*
Level 1 — Basic capturing groups
Assignments 1–10
Level 1 progress

0/10

[ ] 1. Capture first and last names

From `"Ram Adhikari"`, capture the first name and last name separately.
*/
// let text = "Ram vs Adhikari";
// let res = text.match(/(\w+)(\s)(\w+)(\s)(\w+)/i);
// console.log(res[0]);
// console.log(res[1]);
// console.log(res[2]);
// console.log(res);

/*
2. Extract username and domain

From `"abhishek@example.com"`, capture `"abhishek"` and `"example.com"` separately.
*/
// let res="abhishek@example.com".match(/(\w+)@(\w+\.\w+)/i)
// console.log(res);
// console.log(res[1])
// console.log(res[2])
/*
3. Extract date parts

From `"2026-10-20"`, capture year, month, and day.
*/
// let res = "2026-10-20".match(/(\d{4})-(\d{2})-(\d{2})/i);
// console.log(res);

/*
4. Extract phone components

From `"+977-9841234567"`, capture the country code and phone number.
*/
// let text = "+977-9841234567";
// console.log(text.match(/(.*[+].*[0-9])-(\d{10})/i));

/*
5. Capture price and currency

From `"NPR 2500"`, capture the currency and amount.
*/
// let text = "NPR 2500";
// console.log(text.match(/([a-z]+) (\d+)/i));

/*
6. Extract product ID parts

From `"PRD-2026-105"`, capture prefix, year, and ID number.
*/
// let res = "PRD-2026-105".match(/([a-z]+)-(\d{4})-(\d{3})/i);
// console.log(res);
/*
7. Extract first and last word

From `"JavaScript is powerful"`, capture the first word and last word.
*/
// let res = "JavaScript is powerful".match(/([a-z]+) is ([a-z]+)/i);
// console.log(res)
/*
8. Extract name and age

From `"Name: Ram, Age: 25"`, capture `"Ram"` and `"25"`.
*/
// let res="Name: Ram, Age: 25".match(/Name: (\w+), Age: (\d+)/i)
// console.log(res)

/*
9. Extract file name and extension

From `"report.pdf"`, capture the base filename and extension.
*/
// let res = "report.pdf".match(/(\w+).(\w+)/i);
// console.log(res);
/*
10. Capture time components

From `"14:35:50"`, capture hours, minutes, and seconds.
*/
// let res = "14:35:50".match(/(\d{2}):(\d{2}):(\d{2})/i);
// console.log(res);
/*
Level 2 — Non-capturing and alternative groups
Assignments 11–20

11. Title parser: Match names preceded by Mr, Mrs, Ms, or Dr, without capturing the title separately.
*/
// let res = "mr raj".match(/(?:(mr|mrs|ms|dr)) raj/gi);
// console.log(res);

/*
12. Payment method detector: Match Cash, Card, or Online as one alternative group.
*/
// let res = "online payment".match(/(?:(cash|card|online)) payment/gi);
// console.log(res);
/*
13. File extension matcher: Match filenames ending in .jpg, .png, or .webp using a non-capturing group.
*/
// let text = `
// index.html
// style.css
// app.js
// server.js
// package.json
// tsconfig.json
// component.tsx
// App.jsx
// main.ts
// README.md
// notes.txt
// report.pdf
// resume.docx
// data.xlsx
// students.csv
// presentation.pptx
// photo.jpg
// logo.jpeg
// banner.png
// animation.gif
// icon.svg
// background.webp
// video.mp4
// movie.mkv
// song.mp3
// recording.wav
// document.doc
// archive.zip
// backup.rar
// project.tar
// compressed.tar.gz
// database.sql
// schema.prisma
// config.yaml
// settings.yml
// data.xml
// response.json
// page.php
// index.py
// main.java
// Program.cs
// app.cpp
// header.h
// script.rb
// main.go
// lib.rs
// Dockerfile
// docker-compose.yml
// .env
// .env.local
// .gitignore
// .eslintrc.json
// .prettierrc
// webpack.config.js
// vite.config.ts
// next.config.js
// tailwind.config.js
// postcss.config.js
// jest.config.js
// vitest.config.ts
// babel.config.json
// package-lock.json
// yarn.lock
// pnpm-lock.yaml
// Makefile
// LICENSE
// CHANGELOG.md
// requirements.txt
// Pipfile
// Gemfile
// Cargo.toml
// go.mod
// composer.json
// .htaccess
// robots.txt
// sitemap.xml
// favicon.ico
// font.woff
// font.woff2
// font.ttf
// certificate.pem
// private.key
// public.crt
// backup.sql.gz
// `;
// let res = text.match(/.*[a-z]\.(?:(jpg|png|webp))/gi);
// console.log(res);
/*
14. HTTP status parser: Extract a status code from "HTTP 200 OK" or "HTTP 404 Not Found".
*/
// let res = "HTTP 404 Not Found".match(/http (?:\d{3}) [a-z\s]+/gi)
// console.log(res);
/*
15. Optional country code: Match phone numbers with or without the +977- prefix.
*/
// let text = "987653210";
// let res = text.match(/(?:\+977-)?\d{10}/gi);
// console.log(res);
/*
16. Month name matcher: Match Jan, January, Feb, or February by grouping alternatives.
*/
// let text = `
// Jan January\n
// Feb February\n
// Mar March\n
// Apr April\n
// May May\n
// Jun June\n
// Jul July\n
// Aug August\n
// Sep Sept September\n
// Oct October\n
// Nov November\n
// Dec December
// `;
// let res = text.match(/(?:jan| january|feb).*/is);
// console.log(res);

/*
17. Role parser: Extract usernames followed by one of the roles admin, teacher, or student.
*/
// let text = `
// abhishek admin
// ram teacher
// sita student
// hari admin
// gita teacher
// priya student
// user123 admin
// student_01 teacher
// admin_user student
// john_doe admin
// ram123 teacher
// sita_2026 student
// user-name admin
// user.name teacher
// user@123 student
// Abhishek admin
// RAM TEACHER
// Sita Student
// alex Admin
// maria Teacher
// rohan Student
// admin
// teacher
// student
// abhishek manager
// ram moderator
// sita guest
// user123 superadmin
// teacher01 admin
// student_02 student
// admin123 teacher
// teacher_ram admin
// student_sita teacher
// john admin teacher
// ram student admin
// sita teacher student
// user1: admin
// user2: teacher
// user3: student
// Username: abhishek, Role: admin
// Username: ram, Role: teacher
// Username: sita, Role: student
// abhishek - admin
// ram - teacher
// sita - student
// abhishek,admin
// ram,teacher
// sita,student
// abhishek    admin
// ram       teacher
// sita       student
// `;
// let res = text.match(/(?:(hari|gita|priya|user123)) (admin|teacher|student)/gi);
// console.log(res);
/*
18. Invoice prefix matcher: Match invoice codes starting with either INV or BILL.
*/
// let res = "inv-52365-fghy536_".match(/(?:.*[a-z])-(\d+)-(\w+)/gi);
// console.log(res);
/*
19. Unit parser: Extract numbers followed by kg, g, km, or m.
*/
// let text = `
// 5 kg
// 10kg
// 25 kilograms
// 500 gram
// 250 grams
// 1 g
// 750 mg
// 2.5 kg
// 0.5 gram
// 100 meter
// 250 meters
// 1 m
// 5 kilometer
// 10 kilometers
// 2.5 km
// 500 centimeter
// 150 cm
// 3 millimeter
// 25 mm
// 1 liter
// 2 liters
// 500 ml
// 1.5 l
// 10 milliliter
// 50 kilometer per hour
// 100 km/h
// 60 meter per second
// 20 m/s
// 5 square meter
// 25 square meters
// 100 m2
// 10 square kilometer
// 50 cubic meter
// 20 m3
// 2 hectare
// 5 hectares
// 100 acre
// 25 milligram
// 50 microgram
// 10 tonne
// 500 gram
// 2 pound
// 5 pounds
// 10 ounce
// 250 g
// 750 kg
// 1200 km
// 350 cm
// 45 mm
// 3.75 liters
// 0.25 kilogram
// 12.5 meters
// 99.99 km
// 1000 mg
// 1500 ml
// 35 degree Celsius
// 100 Fahrenheit
// 20 °C
// 68 °F
// 220 volt
// 5 amperes
// 60 watt
// 100 kilowatt
// 50 kW
// 12 kilowatt-hour
// 5 kWh
// 200 joule
// 1000 calories
// 75 percent
// 50%
// 100 pascal
// 25 bar
// 30 psi
// 60 hertz
// 2 MHz
// 1000 bytes
// 5 kilobytes
// 10 MB
// 2 GB
// 500 milliseconds
// 30 seconds
// 15 minutes
// 2 hours
// 7 days
// 12 months
// `;
// let res = text.match(/\d+ (?:(kg|g|km|m))/g);
// console.log(res);
/*
20. Alternative date format: Match dates written as either YYYY-MM-DD or DD/MM/YYYY, using non-capturing groups where useful.
*/
// let res = "2026-06-12".match(/^(\d{4})-(\d{2})-(?:\d{2})$/gi);
// console.log(res);
/*
Level 3 — Named capturing groups
Assignments 21–30

21. Employee record: From "ID: EMP102, Name: Ram, Salary: 35000", capture id, name, and salary as named groups.
*/
// let text = "ID: EMP102, Name: Ram, Salary: 35000";
// let res = text.match(/id: (?<empId>\w+), name: (?<empName>\w+), salary: (?<empSal>\d+)/i);
// console.log(res);
/*
22. Invoice parser: From "Invoice INV-2026-105 Total: NPR 2500", capture the invoice prefix, year, sequence number, and total.
*/
// let res = "Invoice INV-2026-105 Total: NPR 2500".match(
//   /invoice (?<inv>.+[inv])-(?<year>\d+)-(?<seq>\d+) total: (?<cur>.+[a-z] \d+)/i,
// );
// console.log(res);
/*
23. Address parser: From "City: Kathmandu, Postal: 44600", capture the city and postal code.
*/
// let res = "City: Kathmandu, Postal: 44600".match(
//   /city: (?<city>[a-z]+), postal: (?<postal>\d+)/gi,
// );
// console.log(res);

/*
24. Login log parser: From "2026-10-20 10:30:45 LOGIN user=abhishek", capture date, time, event, and username.
*/
// let res = "2026-10-20 10:30:45 LOGIN user=abhishek".match(
//   /(?<date>\d{4}-\d{2}-\d{2}) (?<time>\d{2}:\d{2}:\d{2}) (?<event>[a-z]+) user=(?<user>[a-z]+)/i,
// );
// console.log(res);
/*
25. Product details: From "Product: Laptop, Price: 85000, Stock: 12", capture product, price, and stock.
*/
// let res = "Product: Laptop, Price: 85000, Stock: 12".match(
//   /product: (?<productName>[a-z]+), price: (?<priceName>\d+), stock: (?<stock>\d+)/i,
// );
// console.log(res);
/*
26. Web server log: Parse an IP-like address, HTTP method, path, and status code from a sample request line.
*/

/*
27. Student record: From "Roll: 15, Name: Sita, Marks: 88", capture the roll number, name, and marks.
*/
// let res = "Roll: 15, Name: Sita, Marks: 88".match(
//   /roll: (?<roll>\d+), name: (?<name>[a-z]+), marks: (?<marks>\d+)/i,
// );
// console.log(res);
/*
28. Shipment tracker: From "SHIP-NP-2026-00125", capture country, year, and shipment number.
*/
// let res = "SHIP-NP-2026-00125".match(
//   /ship-(?<country>[a-z]+)-(?<year>\d+)-(?<shipmentNumber>\d+)/i,
// );
// console.log(res);
/*
29. Booking parser: From "Booking: BK-250, Guests: 3, Status: Approved", capture booking ID, guests, and status.
*/
// let text = "Booking: BK-250, Guests: 3, Status: Approved";
// let res = text.match(
//   /booking: (?<id>.+[-\w]), guests: (?<guests>\d+), status: (?<appr>approved)/i,
// );
// console.log(res);
/*
30. Configuration parser: From "HOST=localhost PORT=4000", capture the host and port using named groups.
*/
// let res = "HOST=localhost PORT=4000".match(
//   /host=(?<hostName>[a-z]+) port=(?<portNo>\d+)/i,
// );
// console.log(res);
/*

Level 4 — Backreferences
Assignments 31–40

31. Detect repeated adjacent words in "this is is useful".
*/
// console.log("this is is useful".match(/.* ([a-z]+) \1 .*/i));

/*
32. Find repeated characters in "bookkeeper" using a capturing group and backreference.
*/
// console.log("bookkeeper".match(/([a-z])\1/gi));

/*
33. Match matching quotation marks around text.
*/
// let text = '"hello world!"';
// let res = text.match(/(?<hw>["']*).*?\k<hw>/i);
// console.log(res);
/*
34. Find duplicated words ignoring case in "JavaScript javascript Regex regex".
*/
// console.log("JavaScript javascript Regex regex".match(/([a-z]+) \1/i))

/*
35. Detect repeated HTML-like tag names in "<div>hello</div>" using a backreference.
*/
// console.log("<div>hello</div>".match(/<([a-z]+)>.*?<\/\1>/i));

/*
36. Match repeated separators in "A--B__C" and identify which separator is repeated.
*/
// console.log("A--B__C".match(/[a-z]{1}(?<h>--)[a-z]{1}(?<u>__)[a-z]{1}/gi));

/*
37. Validate strings where the first and last character must be identical.
*/
// let text = "Rar";
// console.log(/^([a-z])\w{1}\1$/i.test(text));
/*
38. Detect duplicate adjacent numbers in "10 10 20 30 30".
*/
// console.log("10 10 20 30 30".match(/(\d{2}) \1/ig))

/*
39. Match a word repeated three times, such as "go go go".
*/
// console.log("go go go".match(/([a-z]+) \1 \1/i));
/*
40. Match paired opening and closing characters from a limited set, such as " or ', using a backreference.
*/
// console.log(" ---- ".match(/(?<paired> ).*?\1/i));

/*
Level 5 — Groups with replace()
Assignments 41–50

41. Convert "2026-10-20" into "20/10/2026".
*/
// console.log("2026-10-20".replace(/(\d{4})-(\d{2})-(\d{2})/i, "$3/$2/$1"));

/*
42. Convert "Ram Adhikari" into "Adhikari, Ram".
*/
// console.log("Ram Adhikari".replace(/(\w+) (\w+)/i, "$2, $1"));

/*
43. Convert "984-123-4567" into "(984) 123-4567".
*/
// console.log("984-123-4567".replace(/(\d{3})/i,"($1)"))

/*
44. Convert "firstName=Ram" into "Ram is the first name".
*/
// console.log(
//   "firstName=Ram".replace(/([a-z]+)=([a-z]+)/i, "$2 is the $1."),
// );

/*
45. Convert "INV-2026-105" into "Invoice #105 from 2026".
*/
// console.log(
//   "INV-2026-105".replace(/inv-(\d{4})-(\d{3})/i, "Invoice #$2 from $1."),
// );
/*
46. Convert "Kathmandu, Nepal" into "Nepal — Kathmandu".
*/
// console.log("Kathmandu, Nepal".replace(/(\w+), (\w+)/i, "$2 -- $1"));

/*
47. Convert "12:30 PM" into "PM 12:30".
*/
// console.log("12:30 PM".replace(/(\d{2}:\d{2}) (PM)/i, "$2 $1"));

/*
48. Convert "Product: Laptop | Price: 85000" into "Laptop costs 85000".
*/
// console.log(
//   "Product: Laptop | Price: 85000".replace(
//     /[a-z]+: ([a-z]+) \| [a-z]+: (\d+)/i,
//     "$1 costs $2",
//   ),
// );

/*
49. Replace each "First Last" name with "Last, First" in a list of names.
*/
// console.log("First Last".replace(/([a-z]+) ([a-z]+)/i, "$2, $1"));
/*
50. Convert "user@example.com" into "User: user | Domain: example.com".
*/
// console.log(
//   "user@example.com".replace(/(\w+)@(\w+\.\w+)/i, "User: $1 | Domain: $2"),
// );

/*
Level 6 — Nested groups and optional groups
Assignments 51–60

51. Country code parser: From "+977-9841234567", capture the full country prefix, the country digits, and the subscriber number using nested groups.
*/
// console.log("+977-9841234567".match(/(\+(\d{2,})-)?(\d{10})$/i))

/*
52. Optional middle name: Parse "Ram Kumar Adhikari" and "Ram Adhikari", allowing the middle name to be absent.
*/
// console.log("Ram  Adhikari".replace(/^([a-z]+)\s+([a-z]+)?\s+([a-z]+$)/i,"$1 $3"));

/*
53. Optional protocol: Match "example.com" and "https://example.com" with one regex.
*/
// console.log("://example.com".match(/^([a-z]+)?\:\/\/([a-z]+\.[a-z]+)$/i))

/*
54. Grouped decimal numbers: Extract integer and decimal portions separately from "Price: 1250.75".
*/
// console.log("Price: 1250.75".match(/(\d+).(\d+)/i))

/*
55. Nested product code: Parse "PRD-ELEC-2026-105" into product prefix, category, year, and sequence number.
*/
// console.log("PRD-ELEC-2026-105".match(/(\w{3})-(\w{4})-(\w{4})-(\w{3})/i))
/*
56. Optional file suffix: Match "report" and "report.pdf", capturing the extension only when present.
*/
// console.log("report".match(/[a-z]+\.([a-z]+)?/i))
/*
57. Parenthesized contact details: From "Ram (9841234567)", capture the name and phone number separately.
*/
// console.log("Ram (9841234567)".match(/([a-z]+)\s\((\d{10})\)/i))

/*
58. Optional currency symbol: Parse "$250", "₹500", and "300" into symbol and amount, allowing the symbol to be absent.
*/
// console.log("250".match(/(\W)?(\d+)/i))
/*
59. Nested URL components: From "https://example.com:8080/blog/post", capture protocol, hostname, port, and path.
*/
// console.log(
//   "https://example.com:8080/blog/post".match(
//     /(([a-z]+)\:\/\/([a-z]+\.[a-z]+)\:(\d{1,4}).*)/i,
//   ),
// );
/*
60. Structured student record: Parse "Student[15]: Ram | Marks[88]" into roll number, name, and marks.
*/
// console.log(
//   "Student[15]: Ram | Marks[88]".match(
//     /student\[(\d{2})\]: (\w+) \| marks\[(\d{1,})\]/i,
//   ),
// );
/*
Level 7 — match(), matchAll(), and group results
Assignments 61–70

61. Multiple employee records: Use matchAll() to extract employee names and IDs from "Ram(101) Sita(102) Hari(103)".
*/
// let res = "Ram(101) Sita(102) Hari(103)".matchAll(/(\w+)(\(\d{3}\))/gi);
// console.log([...res]);

/*
63. Extract multiple invoice fields: Parse every invoice ID and total in "INV-101:250 INV-102:500 INV-103:750".
*/
// let res = "INV-101:250 INV-102:500 INV-103:750".matchAll(/inv-\d{3}\:\d{1,}/gi);
// console.log([...res])

/*
64. Capture every email component: Extract usernames and domains from multiple email-like strings using matchAll().
*/
// let text =
//   "abhishek@gmail.com ram.sharma@yahoo.com sita123@outlook.com hari_kumar@company.org support@website.net info1234@digitalparcel.com";
// let res = text.matchAll(/\w+@\w+\.\w+/gi);
// console.log([...res]);
/*
65. Find every key-value pair: Parse "name=Ram age=25 city=Kathmandu" into keys and values.
*/
// let res = "name=Ram age=25 city=Kathmandu".matchAll(/[a-z]+=\w+/gi);
// console.log([...res]);

/*
66. Repeated product records: Parse "Laptop:85000 Mouse:1200 Keyboard:2500" into product names and prices.
*/
// let res = "Laptop:85000 Mouse:1200 Keyboard:2500".matchAll(/\w+:\d+/gi);
// console.log([...res]);
/*
67. Group HTTP request data: Extract the method, path, and protocol from multiple request lines.
*/
// let text = `GET /home HTTP/1.1
// POST /api/users HTTP/1.1
// PUT /api/products/25 HTTP/1.1
// DELETE /api/users/10 HTTP/1.1
// PATCH /api/profile HTTP/2.0
// GET /about HTTP/1.0
// POST /api/login HTTP/2.0
// GET /products/category/electronics HTTP/1.1
// PUT /api/orders/105 HTTP/2.0
// DELETE /api/comments/50 HTTP/1.1`;

// let res=text.matchAll(/\w+\s\/.*\s\w+\/\d\.\d/gi)
// console.log([...res])
/*
68. Find every time value: Extract hours, minutes, and seconds from "Start 10:20:30 End 11:45:50".
*/
// let res = "Start 10:20:30 End 11:45:50".matchAll(/\d{2}:\d{2}:\d{2}/gi)
// console.log([...res]);
/*
69. Extract multiple phone numbers: Parse country prefixes and local numbers from a string containing several phone numbers in the same agreed format.
*/
// let res = `+977-9841234567
// +977-9801234567
// +977-9812345678
// +977-9861234567
// +977-9741234567
// +1-2025550123
// +1-4155550198
// +44-7700900123
// +91-9876543210
// +61-412345678`;
// let res1 = res.matchAll(/\+\d+-\d+/gi);
// console.log([...res1]);
/*
70. Compare global matching methods: Use match() with g, matchAll() with g, and exec() repeatedly to compare the captured groups returned by each approach.
*/
// let text = `
// Name: Abhishek, Age: 25, Salary: 35000
// Name: Ram, Age: 28, Salary: 45000
// Name: Sita, Age: 23, Salary: 30000
// Email: abhishek@gmail.com
// Email: ram.sharma@yahoo.com
// Email: sita123@outlook.com
// Phone: +977-9841234567
// Phone: +977-9801234567
// Phone: +91-9876543210
// Request: GET /home HTTP/1.1
// Request: POST /api/users HTTP/1.1
// Request: DELETE /api/products/25 HTTP/2.0
// Product: Laptop, Price: 85000
// Product: Mobile, Price: 35000
// Product: Keyboard, Price: 2500
// Status: INFO - Server started successfully
// Status: WARN - High memory usage
// Status: ERROR - Database connection failed
// `;
// let res = text.match(/\w+: (\w+),| (.* \w+: (\d+), \w+: (\d+))/gi);
// console.log([...res]);
/*
Level 8 — Advanced group challenges
Assignments 71–80

71. Repeated word cleanup: Replace adjacent duplicated words with a single occurrence, preserving the original word's spelling.
*/

/*
72. Matching quote validator: Find quoted strings with matching single or double quotation marks.
*/

/*
73. Repeated separator detector: Identify adjacent repeated separators such as --, __, and ::, and capture the repeated separator.
*/

/*
74. Named backreference validator: Validate text where a closing label must match an earlier opening label, using a named group and named backreference.
*/

/*
75. Case-insensitive duplicate detector: Find repeated adjacent words that differ only in letter case.
*/

/*
76. CSV-like field extractor: Parse simple comma-separated fields with quoted values, capturing each field separately. Test commas inside quoted values. For full CSV compliance, use a CSV parser rather than regex alone.
*/

/*
77. Nested grouping comparison: Write equivalent patterns using capturing and non-capturing groups, then compare their match arrays.
*/

/*
78. Conditional format recognition: Use grouped alternatives to recognize a date in either YYYY-MM-DD or DD/MM/YYYY format and identify which format was used.
*/

/*
79. Replacement with named groups: Transform "Ram Adhikari | Kathmandu" into "Adhikari, Ram — Kathmandu" using named captures.
*/

/*
80. Backreference-based consistency check: Validate that an identifier repeats the same captured prefix twice, such as "AB-AB-123", but reject "AB-CD-123".
*/

/*
Level 9 — Real-world mini-projects
These projects combine regex groups with JavaScript string methods and validation logic.









81. Invoice information extractor

Input: "Invoice: INV-2026-105 | Date: 2026-10-20 | Total: NPR 2500"

Requirements:
- Extract invoice prefix, year, and sequence number.
- Extract the date and its individual components.
- Extract the currency and total.
- Return a structured JavaScript object.
*/
// let res = "Invoice: INV-2026-105 | Date: 2026-10-20 | Total: NPR 2500".match(
//   /invoice:\s(inv-\d{4}-\d{3})\s\|\sdate:\s(\d{4}-\d{2}-\d{2})\s\|\stotal:\s([a-z]+ \d+)/i,
// );
// console.log(res);
/*
82. Employee record parser

Input: "ID: EMP101 | Name: Ram Adhikari | Department: IT | Salary: 45000"

Requirements:
- Use named capturing groups.
- Extract all four fields.
- Validate the employee ID format.
- Print the results as an object.
*/
// let res =
//   "ID: EMP101 | Name: Ram Adhikari | Department: IT | Salary: 45000".match(
//     /id:\s(?<id>[a-z]+\d{3})\s\|\sname:\s[a-z ]+\s\|\sdepartment:\s\w{2}\s\|\ssalary:\s\d{2,}/i,
//   );
// console.log(res);
/*
83. Travel booking parser

Input: "Booking: BK-2026-001 | Passenger: Abhishek Adhikari | Date: 2026-12-15 | Guests: 2"

Requirements:
- Extract booking reference components.
- Capture the passenger's first and last names.
- Extract date components and guest count.
- Return a structured object.
*/
// let res =
//   "Booking: BK-2026-001 | Passenger: Abhishek Adhikari | Date: 2026-12-15 | Guests: 2".match(
//     /booking:\s\w{2}-\d{4}-\d{3}\s\|\spassenger: ((\w+)\s(\w+))\s\|\sdate:\s\d{4}-\d{2}-\d{2}\s\|\sguests:\s\d+/i,
//   );
// console.log(res);
/*
84. Server log analyzer

Input:

"2026-10-20 10:30:45 ERROR: Database failed"

Requirements:
- Capture date, time, severity, and message.
- Use named groups.
- Parse multiple log lines using matchAll().
- Count how many errors and warnings appear.
*/
// let res = "2026-10-20 10:30:45 ERROR: Database failed".match(
//   /(\d{4}-\d{2}-\d{2})\s(\d{2}:\d{2}:\d{2})\s(error:\s[a-z ]+)/i,
// );
// console.log(res);
/*
85. E-commerce order parser

Input: "Laptop x2 @85000; Mouse x3 @1200; Keyboard x1 @2500"

Requirements:
- Capture each product name, quantity, and unit price.
- Calculate each line total using JavaScript arithmetic.
- Calculate the grand total.
- Store the parsed records in an array of objects.
*/
// let res = "Laptop x2 @85000; Mouse x3 @1200; Keyboard x1 @2500".match(
//   /(([a-z]+)\sx(\d{1,})\s@(\d+));.*/i,
// );
// let res = "Laptop x2 @85000; Mouse x3 @1200; Keyboard x1 @2500".replace(
//   /(([a-z]+)\sx(\d{1,})\s@(\d+));.*/i,
//   "$2=$3*$4",
// );
// console.log(res);
/*
Level 10 — Final projects to master groups
86. Contact book importer: Parse lines containing a person's name, phone number, and email into an array of objects.
*/

/*
87. Password policy engine: Use multiple capturing groups to report which character classes are present. Use lookaheads separately for validation.
*/

/*
88. URL parser: Extract protocol, hostname, port, path, and query string from a defined URL format. For general URL parsing, compare your regex with JavaScript's URL API.
*/

/*
89. Product catalog cleaner: Parse SKU, product name, price, and stock count, then output standardized product records.
*/

/*
90. Log message classifier: Capture timestamp, log level, source module, and message from structured logs.
*/

/*
91. Markdown link extractor: Extract link text and destination URL from simple Markdown links such as [OpenAI](https://openai.com).
*/

/*
92. HTML-like tag matcher: Capture tag names and content in simple paired tags. Investigate why regex is not a complete parser for arbitrary nested HTML.
*/

/*
93. Transaction statement parser: Extract transaction date, reference number, description, and amount into objects.
*/

/*
94. Student marksheet parser: Extract roll number, student name, subject marks, and total marks from structured text.
*/

/*
95. Repeated-word editor: Find and clean duplicate adjacent words, while preserving punctuation and capitalization as far as your rules allow.
*/

/*
96. Configuration file parser: Extract keys and values from lines such as "PORT=4000" and "HOST=localhost" using named groups.
*/

/*
97. Resume information extractor: Parse structured resume text to identify email, phone, dates, and skill sections.
*/

/*
98. Text-to-JSON converter: Convert a defined structured text format into an array of JavaScript objects using named groups and matchAll().
*/

/*
99. Regex testing utility: Create test cases that report the complete match, each numbered capture, named captures, and whether the input passes validation.
*/

/*
100. All-in-one group mastery project: Build an invoice and order parser that uses capturing groups, non-capturing groups, named groups, nested groups, backreferences, and replacement references. Document which group type is used for each field and why.
*/
