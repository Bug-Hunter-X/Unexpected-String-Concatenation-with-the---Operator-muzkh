# Unexpected String Concatenation in JavaScript

This example demonstrates a common pitfall in JavaScript: unexpected string concatenation when using the `+` operator.  JavaScript's dynamic typing means the `+` operator behaves differently depending on the operands' types.  If either operand is a string, string concatenation occurs.

## Bug

The `foo` function intends to add numbers. However, if either input is a string, the result is string concatenation.

## Solution

The solution involves explicit type checking or using a more robust approach like `parseInt` to ensure operands are numbers before performing addition.
