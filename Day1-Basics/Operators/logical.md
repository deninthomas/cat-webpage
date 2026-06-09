# Understanding Logical Operators

## What are Logical Operators?
Operators that combine TRUE/FALSE values to make decisions.

## List of Logical Operators
| Operator | Name | Symbol | Meaning |
|----------|------|--------|---------|
| AND | Logical AND | `&&` | BOTH must be true |
| OR | Logical OR | `\|\|` | AT LEAST ONE must be true |
| NOT | Logical NOT | `!` | Flip true to false (and vice versa) |

## Simple Explanation
- `&&` (AND) = BOTH conditions must be true
- `||` (OR) = At least ONE condition must be true
- `!` (NOT) = Opposite of true/false

## AND `&&`
BOTH conditions must be true for result to be true.

```
true && true    → true
true && false   → false
false && true   → false
false && false  → false
```

Think of it like: "Do you have money AND do you have time?"
- Both YES → You can go shopping ✓
- One or both NO → You cannot go shopping ✗

## OR `||`
AT LEAST ONE condition must be true.

```
true || true    → true
true || false   → true
false || true   → true
false || false  → false
```

Think of it like: "Do you like pizza OR do you like burger?"
- Like pizza YES → Eat pizza ✓
- Like burger YES → Eat burger ✓
- Both YES → Choose one ✓
- Both NO → Don't eat ✗

## NOT `!`
Flips the value. True becomes false, false becomes true.

```
!true   → false
!false  → true
```

Think of it like: "Is it NOT raining?"
- Raining = true → NOT raining = false
- Not raining = false → NOT raining = true

## When to Use
- Check multiple conditions
- Make complex decisions
- Validate user input
- Check user permissions
