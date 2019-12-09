
var userType;
if (userIsYoungerThan18) {
  userType = "Minor";
} else {
  userType = "Adult";
}

if (userIsYoungerThan21) {
  serveDrink("Grape Juice");
} else {
  serveDrink("Wine");
}

// This can be shortened with the ?: like so:
var userType = userIsYoungerThan18 ? "Minor" : "Adult";
serveDrink(userIsYoungerThan21 ? "Grape Juice" : "Wine");

// Like all expressions, the conditional operator can also be used as a
// standalone statement with side-effects, though this is unusual outside of
// minification:
userIsYoungerThan21 ? serveGrapeJuice() : serveWine();

// They can even be chained:
serveDrink(userIsYoungerThan4 ? 'Milk' : userIsYoungerThan21 ? 'Grape Juice' : 'Wine');

// Be careful, though, or you will end up with convoluted code like this:
var k = a ? (b ? (c ? d : e) : (d ? e : f)) : f ? (g ? h : i) : j;




hsb.s = max != 0 ? 255 * delta / max : 0;

// It is called the Conditional Operator (which is a ternary operator).
// It has the form of: condition ? value-if-true : value-if-false
// Think of the ? as "then" and : as "else".

// is the same as

if (max != 0)
  hsb.s = 255 * delta / max;
else
  hsb.s = 0;