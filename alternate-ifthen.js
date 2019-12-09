

hsb.s = max != 0 ? 255 * delta / max : 0;



// It is called the Conditional Operator (which is a ternary operator).
// It has the form of: condition ? value-if-true : value-if-false
// Think of the ? as "then" and : as "else".

// is the same as

if (max != 0)
  hsb.s = 255 * delta / max;
else
  hsb.s = 0;