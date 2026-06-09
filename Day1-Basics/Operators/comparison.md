# Understanding Comparison Operators

## What are Comparison Operators?
Operators that COMPARE two values and give back true or false.

## List of Comparison Operators
| Operator | Name | Example | Result |
|----------|------|---------|--------|
| `==` | Equal to | `5 == 5` | `true` |
| `!=` | Not equal to | `5 != 3` | `true` |
| `>` | Greater than | `10 > 5` | `true` |
| `<` | Less than | `3 < 5` | `true` |
| `>=` | Greater than or equal | `5 >= 5` | `true` |
| `<=` | Less than or equal | `3 <= 5` | `true` |
| `===` | Strict equal (exact) | `5 === 5` | `true` |
| `!==` | Strict not equal | `5 !== "5"` | `true` |

## Simple Explanation
Comparison operators ask YES/NO questions and answer with `true` or `false`.

## Equal To `==`
```
5 == 5       → true
5 == "5"     → true (loosely equal)
10 == 5      → false
```

## Strict Equal `===`
```
5 === 5      → true
5 === "5"    → false (different types!)
"hello" === "hello" → true
```

## Not Equal `!=`
```
5 != 3       → true (5 is not 3)
5 != 5       → false (5 is 5)
```

## Strict Not Equal `!==`
```
5 !== "5"    → true (different types)
5 !== 5      → false (same type and value)
```

## Greater Than `>`
```
10 > 5       → true (10 is bigger)
3 > 5        → false (3 is not bigger)
5 > 5        → false (not bigger, equal)
```

## Less Than `<`
```
3 < 5        → true (3 is smaller)
10 < 5       → false (10 is not smaller)
5 < 5        → false (not smaller, equal)
```

## Greater Than or Equal `>=`
```
10 >= 5      → true (10 is bigger)
5 >= 5       → true (5 is equal)
3 >= 5       → false (3 is smaller)
```

## Less Than or Equal `<=`
```
3 <= 5       → true (3 is smaller)
5 <= 5       → true (5 is equal)
10 <= 5      → false (10 is bigger)
```

## When to Use
- Check user age
- Check scores
- Verify passwords
- Make decisions in code
