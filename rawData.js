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
    answer: ""
  },
  {
    question: "Explain how prototypal inheritance works.",
    answer: ""
  },
  {
    question: "What do you think of AMD vs CommonJS?",
    answer: ""
  },
  {
    question: "Explain why the following doesn't work as an IIFE: function foo(){ }();. What needs to be changed to properly make it an IIFE?",
    answer: ""
  },
  {
    question: "What's the difference between a variable that is: null, undefined or undeclared? How would you go about checking for any of these states?",
    answer: ""
  },
  {
    question: "What is a closure, and how/why would you use one?",
    answer: ""
  },
  {
    question: "Can you describe the main difference between a .forEach loop and a .map() loop and why you would pick one versus the other?",
    answer: ""
  },
  {
    question: "What's a typical use case for anonymous functions?",
    answer: ""
  },
  {
    question: "How do you organize your code? (module pattern, classical inheritance?)",
    answer: ""
  },
  {
    question: "What's the difference between host objects and native objects?", answer: ""
  },
  {
    question: "Difference between: function Person(){}, var person = Person(), and var person = new Person()?",
    answer: ""
  },
  {
    question: "What's the difference between .call and .apply?",
    answer: ""
  },
  {
    question: "Explain Function.prototype.bind.",
    answer: ""
  },
  {
    question: "When would you use document.write()?",
    answer: ""
  },
  {
    question: "What's the difference between feature detection, feature inference, and using the UA string?",
    answer: ""
  },
  {
    question: "Explain Ajax in as much detail as possible.",
    answer: ""
  },
  {
    question: "What are the advantages and disadvantages of using Ajax?",
    answer: ""
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
    answer: ""
  },
  {
    question: "Describe event bubbling.",
    answer: ""
  },
  {
    question: "What's the difference between an 'attribute' and a 'property'?", answer: ""
  },
  {
    question: "Why is extending built-in JavaScript objects not a good idea?",
    answer: ""
  },
  {
    question: "Difference between document load event and document DOMContentLoaded event?",
    answer: ""
  },
  {
    question: "What is the difference between == and ===?",
    answer: ""
  },
  {
    question: "Explain the same-origin policy with regards to JavaScript.",
    answer: ""
  },
  {
    question: "Why is it called a Ternary expression, what does the word 'Ternary' indicate?",
    answer: ""
  },
  {
    question: "What is 'use strict';? What are the advantages and disadvantages to using it?",
    answer: ""
  },
  {
    question: "Create a for loop that iterates up to 100 while outputting 'fizz at multiples of 3, 'buzz' at multiples of 5 and 'fizzbuzz' at multiples of 3 and 5.", answer: "for (let i = 1; i <= 100; i++) {let f = i % 3 == 0, b = i % 5 == 0;console.log(f ? (b ? 'FizzBuzz' : 'Fizz') : b ? 'Buzz' : i);}"
  },
  {
    question: "Why is it, in general, a good idea to leave the global scope of a website as-is and never touch it?",
    answer: ""
  },
  {
    question: "Why would you use something like the load event? Does this event have disadvantages? Do you know any alternatives, and why would you use those?",
    answer: ""
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
    answer: ""
  },
  {
    question: "What is event loop? What is the difference between call stack and task queue?",
    answer: ""
  },
  {
    question: "Explain the differences on the usage of foo between function foo() {} and var foo = function() {}",
    answer: ""
  },
  {
    question: "What are the differences between variables created using let, var or const?",
    answer: ""
  }, {
    question: "What are the differences between ES6 class and ES5 function constructors?",
    answer: ""
  },
  {
    question: "Can you offer a use case for the new arrow => function syntax? How does this new syntax differ from other functions?",
    answer: ""
  },
  {
    question: "What advantage is there for using the arrow syntax for a method in a constructor?",
    answer: ""
  },
  {
    question: "What is the definition of a higher-order function?",
    answer: ""
  },
  {
    question: "Can you give an example for destructuring an object or an array?",
    answer: ""
  },
  {
    question: "ES6 Template Literals offer a lot of flexibility in generating strings, can you give an example?",
    answer: ""
  },
  {
    question: "Can you give an example of a curry function and why this syntax offers an advantage?",
    answer: ""
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
    answer: ""
  }
]