ES6 introduced a new way of writing JavaScript functions called arrow function that uses a fat arrow ( => ).

The arrow function has a lexical scoping to this context.
The arrow function syntax is heavily seen when using callback functions.

This is where the arrow function comes into play. They don’t have their own this context. When used inside the outer (enclosing) function, this keyword will point to where the function is present.

arrow function this context(parent of where function present)