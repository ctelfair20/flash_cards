const rawData = [
  {
    question: "Explain event delegation.",
    answer: "Event delegation is a technique involving adding event listeners to a parent element instead of adding them to the descendant elements. The listener will fire whenever the event is triggered on the descendant elements due to event bubbling up the DOM."
  },
  {
    question: "What are the benefits of event delegation?",
    answer: "1. Memory footprint goes down because only one single handler is needed on the parent element, rather than having to attach event handlers on each descendant. 2. There is no need to unbind the handler from elements that are removed and to bind the event for new elements."
  },
  {
    question: "Explain how 'this' works in JavaScript.",
    answer: "There's no simple explanation for this; it is one of the most confusing concepts in JavaScript. A hand-wavey explanation is that the value of this depends on how the function is called. I have read many explanations on this online, and I found Arnav Aggrawal's explanation to be the clearest. 1. If the new keyword is used when calling the function, this inside the function is a brand new object. 2. If apply, call, or bind are used to call/ create a function, this inside the function is the object that is passed in as the argument. 3. If a function is called as a method, such as obj.method() — this is the object that the function is a property of. 4. If a function is invoked as a free function invocation, meaning it was invoked without any of the conditions present above, this is the global object.In a browser, it is the window object.If in strict mode('use strict'), this will be undefined instead of the global object. 5. If multiple of the above rules apply, the rule that is higher wins and will set the this value. 6. If the function is an ES2015 arrow function, it ignores all the rules above and receives the this value of its surrounding scope at the time it is created."
  },
  {
    question: "Explain how prototypal inheritance works.",
    answer: "This is an extremely common JavaScript interview question. All JavaScript objects have a __proto__ property, that is a reference to another object, which is called the object's 'prototype'. When a property is accessed on an object and if the property is not found on that object, the JavaScript engine looks at the object's __proto__, and the __proto__'s __proto__ and so on, until it finds the property defined on one of the __proto__s or until it reaches the end of the prototype chain. This behavior simulates classical inheritance, but it is really more of delegation than inheritance."
  },
  {
    question: "What do you think of AMD vs CommonJS?",
    answer: "Both are ways to implement a module system, which was not natively present in JavaScript until ES2015 came along. CommonJS is synchronous while AMD (Asynchronous Module Definition) is obviously asynchronous. CommonJS is designed with server-side development in mind while AMD, with its support for asynchronous loading of modules, is more intended for browsers. --I find AMD syntax to be quite verbose and CommonJS is closer to the style you would write import statements in other languages. Most of the time, I find AMD unnecessary, because if you served all your JavaScript into one concatenated bundle file, you wouldn't benefit from the async loading properties. Also, CommonJS syntax is closer to Node style of writing modules and there is less context-switching overhead when switching between client side and server side JavaScript development. --I'm glad that with ES2015 modules, that has support for both synchronous and asynchronous loading, we can finally just stick to one approach. Although it hasn't been fully rolled out in browsers and in Node, we can always use transpilers to convert our code."
  },
  {
    question: "Explain why the following doesn't work as an IIFE: function foo(){ }();. What needs to be changed to properly make it an IIFE?",
    answer: "IIFE stands for Immediately Invoked Function Expressions. The JavaScript parser reads function foo(){ }(); as function foo(){ } and ();, where the former is a function declaration and the latter (a pair of parentheses) is an attempt at calling a function but there is no name specified, hence it throws Uncaught SyntaxError: Unexpected token ). --Here are two ways to fix it that involves adding more parentheses: (function foo(){ })() and (function foo(){ }()). Statements that begin with function are considered to be function declarations; by wrapping this function within (), it becomes a function expression which can then be executed with the subsequent (). These functions are not exposed in the global scope and you can even omit its name if you do not need to reference itself within the body. --You might also use void operator: void function foo(){ }();. Unfortunately, there is one issue with such approach. The evaluation of given expression is always undefined, so if your IIFE function returns anything, you can't use it."
  },
  {
    question: "What's the difference between a variable that is: null, undefined or undeclared? How would you go about checking for any of these states?",
    answer: "Undeclared variables are created when you assign a value to an identifier that is not previously created using var, let or const. Undeclared variables will be defined globally, outside of the current scope. In strict mode, a ReferenceError will be thrown when you try to assign to an undeclared variable. Undeclared variables are bad just like how global variables are bad. --A variable that is undefined is a variable that has been declared, but not assigned a value. It is of type undefined. If a function does not return any value as the result of executing it is assigned to a variable, the variable also has the value of undefined. To check for it, compare using the strict equality (===) operator or typeof which will give the 'undefined' string. Note that you should not be using the abstract equality operator to check, as it will also return true if the value is null. --A variable that is null will have been explicitly assigned to the null value. It represents no value and is different from undefined in the sense that it has been explicitly assigned. To check for null, simply compare using the strict equality operator. Note that like the above, you should not be using the abstract equality operator (==) to check, as it will also return true if the value is undefined."
  },
  {
    question: "What is a closure, and how/why would you use one?",
    answer: "A closure is the combination of a function and the lexical environment within which that function was declared. The word 'lexical' refers to the fact that lexical scoping uses the location where a variable is declared within the source code to determine where that variable is available. Closures are functions that have access to the outer (enclosing) function's variables—scope chain even after the outer function has returned."
  },
  {
    question: "Can you describe the main difference between a .forEach loop and a .map() loop and why you would pick one versus the other?",
    answer: "forEach --Iterates through the elements in an array. Executes a callback for each element. Does not return a value. map --Iterates through the elements in an array. 'Maps' each element to a new element by calling the function on each element, creating a new array as a result. --The main difference between .forEach and .map() is that .map() returns a new array. If you need the result, but do not wish to mutate the original array, .map() is the clear choice. If you simply need to iterate over an array, forEach is a fine choice."
  },
  {
    question: "What's a typical use case for anonymous functions?",
    answer: "The main difference between .forEach and .map() is that .map() returns a new array. If you need the result, but do not wish to mutate the original array, .map() is the clear choice. If you simply need to iterate over an array, forEach is a fine choice. --As a callback that is used once and does not need to be used anywhere else. The code will seem more self-contained and readable when handlers are defined right inside the code calling them, rather than having to search elsewhere to find the function body."
  },
  {
    question: "How do you organize your code? (module pattern, classical inheritance?)",
    answer: "In the past, I've used Backbone for my models which encourages a more OOP approach, creating Backbone models and attaching methods to them. --The module pattern is still great, but these days, I use React/Redux which utilize a single-directional data flow based on Flux architecture. I would represent my app's models using plain objects and write utility pure functions to manipulate these objects. State is manipulated using actions and reducers like in any other Redux application."
  },
  {
    question: "What's the difference between host objects and native objects?", answer: "Native objects are objects that are part of the JavaScript language defined by the ECMAScript specification, such as String, Math, RegExp, Object, Function, etc. --Host objects are provided by the runtime environment (browser or Node), such as window, XMLHTTPRequest, etc."
  },
  {
    question: "Difference between: function Person(){}, var person = Person(), and var person = new Person()?",
    answer: "This question is pretty vague. My best guess at its intention is that it is asking about constructors in JavaScript. Technically speaking, function Person(){} is just a normal function declaration. The convention is to use PascalCase for functions that are intended to be used as constructors. --var person = Person() invokes the Person as a function, and not as a constructor. Invoking as such is a common mistake if the function is intended to be used as a constructor. Typically, the constructor does not return anything, hence invoking the constructor like a normal function will return undefined and that gets assigned to the variable intended as the instance. --var person = new Person() creates an instance of the Person object using the new operator, which inherits from Person.prototype. An alternative would be to use Object.create, such as: Object.create(Person.prototype)."
  },
  {
    question: "What's the difference between .call and .apply?",
    answer: "Both .call and .apply are used to invoke functions and the first parameter will be used as the value of this within the function. However, .call takes in comma-separated arguments as the next arguments while .apply takes in an array of arguments as the next argument. An easy way to remember this is C for call and comma-separated and A for apply and an array of arguments."
  },
  {
    question: "Explain Function.prototype.bind.",
    answer: "The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called. --In my experience, it is most useful for binding the value of this in methods of classes that you want to pass into other functions. This is frequently done in React components."
  },
  {
    question: "When would you use document.write()?",
    answer: "document.write() writes a string of text to a document stream opened by document.open(). When document.write() is executed after the page has loaded, it will call document.open which clears the whole document (<head> and <body> removed!) and replaces the contents with the given parameter value. Hence it is usually considered dangerous and prone to misuse. --There are some answers online that explain document.write() is being used in analytics code or when you want to include styles that should only work if JavaScript is enabled. It is even being used in HTML5 boilerplate to load scripts in parallel and preserve execution order! However, I suspect those reasons might be outdated and in the modern day, they can be achieved without using document.write(). Please do correct me if I'm wrong about this."
  },
  {
    question: "What's the difference between feature detection, feature inference, and using the UA string?",
    answer: "Feature Detection --Feature detection involves working out whether a browser supports a certain block of code, and running different code depending on whether it does (or doesn't), so that the browser can always provide a working experience rather crashing/erroring in some browsers. --Feature Inference --Feature inference checks for a feature just like feature detection, but uses another function because it assumes it will also exist. This is not really recommended. Feature detection is more foolproof. --UA String --This is a browser-reported string that allows the network protocol peers to identify the application type, operating system, software vendor or software version of the requesting software user agent. It can be accessed via navigator.userAgent. However, the string is tricky to parse and can be spoofed. For example, Chrome reports both as Chrome and Safari. So to detect Safari you have to check for the Safari string and the absence of the Chrome string. Avoid this method."
  },
  {
    question: "Explain Ajax in as much detail as possible.",
    answer: "Ajax (asynchronous JavaScript and XML) is a set of web development techniques using many web technologies on the client side to create asynchronous web applications. With Ajax, web applications can send data to and retrieve from a server asynchronously (in the background) without interfering with the display and behavior of the existing page. By decoupling the data interchange layer from the presentation layer, Ajax allows for web pages, and by extension web applications, to change content dynamically without the need to reload the entire page. In practice, modern implementations commonly substitute use JSON instead of XML, due to the advantages of JSON being native to JavaScript. --The XMLHttpRequest API is frequently used for the asynchronous communication or these days, the fetch API."
  },
  {
    question: "What are the advantages and disadvantages of using Ajax?",
    answer: "Advantages --Better interactivity. New content from the server can be changed dynamically without the need to reload the entire page. Reduce connections to the server since scripts and stylesheets only have to be requested once. State can be maintained on a page. JavaScript variables and DOM state will persist because the main container page was not reloaded. Basically most of the advantages of an SPA. Disadvantages --Dynamic webpages are harder to bookmark. Does not work if JavaScript has been disabled in the browser. Some webcrawlers do not execute JavaScript and would not see content that has been loaded by JavaScript. Webpages using Ajax to fetch data will likely have to combine the fetched remote data with client-side templates to update the DOM. For this to happen, JavaScript will have to be parsed and executed on the browser, and low-end mobile devices might struggle with this. Basically most of the disadvantages of an SPA."
  },
  {
    question: "Explain how JSONP works (and how it's not really Ajax).",
    answer: ""
  },
  {
    question: "Have you ever used JavaScript templating? If so, what libraries have you used?",
    answer: ""
  },
  {
    question: "Explain 'hoisting'.",
    answer: "Hoisting is a term used to explain the behavior of variable declarations in your code. Variables declared or initialized with the var keyword will have their declaration 'moved' up to the top of their module/function-level scope, which we refer to as hoisting. However, only the declaration is hoisted, the assignment (if there is one), will stay where it is. --Note that the declaration is not actually moved - the JavaScript engine parses the declarations during compilation and becomes aware of declarations and their scopes. It is just easier to understand this behavior by visualizing the declarations as being hoisted to the top of their scope. Function declarations have the body hoisted while the function expressions (written in the form of variable declarations) only has the variable declaration hoisted. Variables declared via let and const are hoisted as well. However, unlike var and function, they are not initialized and accessing them before the declaration will result in a ReferenceError exception. The variable is in a 'temporal dead zone' from the start of the block until the declaration is processed."
  },
  {
    question: "Describe event bubbling.",
    answer: "When an event triggers on a DOM element, it will attempt to handle the event if there is a listener attached, then the event is bubbled up to its parent and the same thing happens. This bubbling occurs up the element's ancestors all the way to the document. Event bubbling is the mechanism behind event delegation."
  },
  {
    question: "What's the difference between an 'attribute' and a 'property'?", answer: "Attributes are defined on the HTML markup but properties are defined on the DOM. To illustrate the difference, imagine we have this text field in our HTML: <input type='text' value='Hello'>."
  },
  {
    question: "Why is extending built-in JavaScript objects not a good idea?",
    answer: "Extending a built-in/native JavaScript object means adding properties/functions to its prototype. While this may seem like a good idea at first, it is dangerous in practice. Imagine your code uses a few libraries that both extend the Array.prototype by adding the same contains method, the implementations will overwrite each other and your code will break if the behavior of these two methods is not the same. --The only time you may want to extend a native object is when you want to create a polyfill, essentially providing your own implementation for a method that is part of the JavaScript specification but might not exist in the user's browser due to it being an older browser."
  },
  {
    question: "Difference between document load event and document DOMContentLoaded event?",
    answer: "The DOMContentLoaded event is fired when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading. --window's load event is only fired after the DOM and all dependent resources and assets have loaded."
  },
  {
    question: "What is the difference between == and ===?",
    answer: ""
  },
  {
    question: "Explain the same-origin policy with regards to JavaScript.",
    answer: "== is the abstract equality operator while === is the strict equality operator. The == operator will compare for equality after doing any necessary type conversions. The === operator will not do type conversion, so if two values are not the same type === will simply return false. My advice is never to use the == operator, except for convenience when comparing against null or undefined, where a == null will return true if a is null or undefined."
  },
  {
    question: "Why is it called a Ternary expression, what does the word 'Ternary' indicate?",
    answer: " 'Ternary' indicates three, and a ternary expression accepts three operands, the test condition, the 'then' expression and the 'else' expression. Ternary expressions are not specific to JavaScript and I'm not sure why it is even in this list."
  },
  {
    question: "What is 'use strict';? What are the advantages and disadvantages to using it?",
    answer: " 'use strict' is a statement used to enable strict mode to entire scripts or individual functions. Strict mode is a way to opt into a restricted variant of JavaScript. Advantages: Makes it impossible to accidentally create global variables. Makes assignments which would otherwise silently fail to throw an exception. Makes attempts to delete undeletable properties throw (where before the attempt would simply have no effect). Requires that function parameter names be unique. this is undefined in the global context. It catches some common coding bloopers, throwing exceptions. It disables features that are confusing or poorly thought out. Disadvantages: Many missing features that some developers might be used to. No more access to function.caller and function.arguments. Concatenation of scripts written in different strict modes might cause issues."
  },
  {
    question: "Create a for loop that iterates up to 100 while outputting 'fizz at multiples of 3, 'buzz' at multiples of 5 and 'fizzbuzz' at multiples of 3 and 5.", answer: "for (let i = 1; i <= 100; i++) {let f = i % 3 == 0, b = i % 5 == 0;console.log(f ? (b ? 'FizzBuzz' : 'Fizz') : b ? 'Buzz' : i);}"
  },
  {
    question: "Why is it, in general, a good idea to leave the global scope of a website as-is and never touch it?",
    answer: "Every script has access to the global scope, and if everyone uses the global namespace to define their variables, collisions will likely occur. Use the module pattern (IIFEs) to encapsulate your variables within a local namespace."
  },
  {
    question: "Why would you use something like the load event? Does this event have disadvantages? Do you know any alternatives, and why would you use those?",
    answer: "The load event fires at the end of the document loading process. At this point, all of the objects in the document are in the DOM, and all the images, scripts, links and sub-frames have finished loading. --The DOM event DOMContentLoaded will fire after the DOM for the page has been constructed, but do not wait for other resources to finish loading. This is preferred in certain cases when you do not need the full page to be loaded before initializing."
  },
  {
    question: "Explain what a single page app is and how to make one SEO-friendly.",
    answer: ""
  },
  {
    question: "What is the extent of your experience with Promises and/or their polyfills?",
    answer: ""
  },
  {
    question: "What are the pros and cons of using Promises instead of callbacks?",
    answer: ""
  },
  {
    question: "What are some of the advantages/disadvantages of writing JavaScript code in a language that compiles to JavaScript?",
    answer: ""
  }, {
    question: "What tools and techniques do you use for debugging JavaScript code?",
    answer: ""
  },
  {
    question: "What language constructions do you use for iterating over object properties and array items?",
    answer: ""
  },
  {
    question: "Explain the difference between mutable and immutable objects.",
    answer: ""
  },
  {
    question: "How can you achieve immutability in your own code?",
    answer: ""
  },
  {
    question: "Explain the difference between synchronous and asynchronous functions.",
    answer: "Synchronous functions are blocking while asynchronous functions are not. In synchronous functions, statements complete before the next statement is run. In this case, the program is evaluated exactly in order of the statements and execution of the program is paused if one of the statements take a very long time.Asynchronous functions usually accept a callback as a parameter and execution continue on the next line immediately after the asynchronous function is invoked. The callback is only invoked when the asynchronous operation is complete and the call stack is empty. Heavy duty operations such as loading data from a web server or querying a database should be done asynchronously so that the main thread can continue executing other operations instead of blocking until that long operation to complete (in the case of browsers, the UI will freeze)."
  },
  {
    question: "What is event loop? What is the difference between call stack and task queue?",
    answer: "The event loop is a single-threaded loop that monitors the call stack and checks if there is any work to be done in the task queue. If the call stack is empty and there are callback functions in the task queue, a function is dequeued and pushed onto the call stack to be executed. If you haven't already checked out Philip Robert's talk on the Event Loop, you should. It is one of the most viewed videos on JavaScript."
  },
  {
    question: "Explain the differences on the usage of foo between function foo() {} and var foo = function() {}",
    answer: ""
  },
  {
    question: "What are the differences between variables created using let, var or const?",
    answer: "Variables declared using the var keyword are scoped to the function in which they are created, or if created outside of any function, to the global object. let and const are block scoped, meaning they are only accessible within the nearest set of curly braces (function, if-else block, or for-loop). var allows variables to be hoisted, meaning they can be referenced in code before they are declared. let and const will not allow this, instead throwing an error. Redeclaring a variable with var will not throw an error, but let and const will. let and const differ in that let allows reassigning the variable's value while const does not."
  }, {
    question: "What are the differences between ES6 class and ES5 function constructors?",
    answer: ""
  },
  {
    question: "Can you offer a use case for the new arrow => function syntax? How does this new syntax differ from other functions?",
    answer: "One obvious benefit of arrow functions is to simplify the syntax needed to create functions, without a need for the function keyword. The this within arrow functions is also bound to the enclosing scope which is different compared to regular functions where the this is determined by the object calling it. Lexically-scoped this is useful when invoking callbacks especially in React components."
  },
  {
    question: "What advantage is there for using the arrow syntax for a method in a constructor?",
    answer: "The main advantage of using an arrow function as a method inside a constructor is that the value of this gets set at the time of the function creation and can't change after that. So, when the constructor is used to create a new object, this will always refer to that object. The main takeaway here is that this can be changed for a normal function, but the context always stays the same for an arrow function. So even if you are passing around your arrow function to different parts of your application, you wouldn't have to worry about the context changing. --This can be particularly helpful in React class components. If you define a class method for something such as a click handler using a normal function, and then you pass that click handler down into a child component as a prop, you will need to also bind this in the constructor of the parent component. If you instead use an arrow function, there is no need to also bind 'this', as the method will automatically get its 'this' value from its enclosing lexical context."
  },
  {
    question: "What is the definition of a higher-order function?",
    answer: "A higher-order function is any function that takes one or more functions as arguments, which it uses to operate on some data, and/or returns a function as a result. Higher-order functions are meant to abstract some operation that is performed repeatedly. The classic example of this is map, which takes an array and a function as arguments. map then uses this function to transform each item in the array, returning a new array with the transformed data. Other popular examples in JavaScript are forEach, filter, and reduce. A higher-order function doesn't just need to be manipulating arrays as there are many use cases for returning a function from another function. Function.prototype.bind is one such example in JavaScript."
  },
  {
    question: "Can you give an example for destructuring an object or an array?",
    answer: "Destructuring is an expression available in ES6 which enables a succinct and convenient way to extract values of Objects or Arrays and place them into distinct variables Array destructuring Object destructuring. Array destructuring"
  },
  {
    question: "ES6 Template Literals offer a lot of flexibility in generating strings, can you give an example?",
    answer: ""
  },
  {
    question: "Can you give an example of a curry function and why this syntax offers an advantage?",
    answer: "Currying is a pattern where a function with more than one parameter is broken into multiple functions that, when called in series, will accumulate all of the required parameters one at a time. This technique can be useful for making code written in a functional style easier to read and compose. It's important to note that for a function to be curried, it needs to start out as one function, then broken out into a sequence of functions that each accepts one parameter."
  },
  {
    question: "What are the benefits of using spread syntax and how is it different from rest syntax?",
    answer: ""
  }, {
    question: "How can you share code between files?",
    answer: ""
  },
  {
    question: "Why you might want to create static class members?",
    answer: "Static class members (properties/methods) are not tied to a specific instance of a class and have the same value regardless of which instance is referring to it. Static properties are typically configuration variables and static methods are usually pure utility functions which do not depend on the state of the instance."
  }
]

export default rawData;