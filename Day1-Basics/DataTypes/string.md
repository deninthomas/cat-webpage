# Understanding String Data Type

## What is String?
String is TEXT data. Anything written inside quotes is a string.

## Simple Explanation
String = Text
Think of it like writing words on paper.

## How to Write Strings
Use single quotes `'` or double quotes `"`
```
const text = "Hello";
const name = 'Ali';
```

## Examples
- `"Hello World"`
- `'Ali'`
- `"123"` (This is text, not number)
- `"true"` (This is text, not boolean)

## Important Points
- Text in quotes = String
- `"123"` is different from `123`
- `"true"` is different from `true`
- Can contain numbers, letters, symbols

## Common Operations
- Combine strings: `"Hello" + "World"` → `"HelloWorld"`
- Get length: `"Hi".length` → `2`
- Uppercase: `"hello".toUpperCase()` → `"HELLO"`
- Lowercase: `"HELLO".toLowerCase()` → `"hello"`

## When to Use
- Names, addresses, messages
- Text that won't be used for math
- Any written information
