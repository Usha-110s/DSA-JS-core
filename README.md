**ES6** introduced a new way of writing JavaScript functions called `arrow function` that uses a fat arrow `( => )`.

- The arrow function has a lexical scoping to `this` context.
- The arrow function syntax is heavily seen when using `callback functions`.

- They don’t have their own `this` context. When used inside the outer (enclosing) function, this keyword will point to where the function is present.

```javascript 
const user= {
     
  name: "sree",
    greet: () => {
    return `Hola I am ${this.name}.`;
  },
};
console.log(user.greet()); 
```

- In the above code output will be `Hola I am undefined.` since In **greet** function `this` is pointing to  `global object`(**arrow function `this` --> scope where parent present**


``` javascript
let animals = {
  domesticAnimals: ["cat", "dog", "cow", "goat", "sheep", "donkey", "pig", "horse"],
  
  printdomesticAnimals: function () {
         console.log("inside printdomesticAnimals", this);// points to animals
    setTimeout(function () {
      console.log("inside setTimeout", this); // points to window object
    }, 3000);
  },
};
animals.printdomesticAnimals(); 
```

- In the above code normal function `printdomesticAnimals`'s this points to `animals` but settimeout function point to window object but if we repce it with `arrow function`

``` javascript
let animals = {
  domesticAnimals: ["cat", "dog", "cow", "goat", "sheep", "donkey", "pig", "horse"],
  
  printdomesticAnimals: function () {
         console.log("inside printdomesticAnimals", this);// points to animals
    setTimeout(()=> {
      console.log("inside setTimeout", this); // points to animals 
    }, 3000);
  },
};
animals.printdomesticAnimals(); 
```
- arrow function this points to scope where parent present(here arrow function parent is `printdomesticAnimals` present inside  `animals`  object so it points to animals )

- Arrow function can never be a method
- An arrow function can never be a constructor

```javascript
const Person = () => {
    this.name = "usha",
     this.age = 20;
  };
  const user = new Person();
  console.log(user);
```
> TypeError: Person is not a constructor

- They are used in callback, promise chaining, array methods, anonymous functions.
- The Arrow functions shine most whenever you need this to be attached to the context and not its own function.