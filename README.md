U.S. Names API
===

**Getting Started**

U.S. Names API is a fairly simple API to use. There are three endpoints for users to access:

URL: `https://usnames.herokuapp.com/api`

- /people - (Returns JSON containing all names)
- /people/:gender - (Returns JSON containing all names of the specified gender)
- /person/:name - (Returns JSON for the specified name)

Luckily for you, to use this API there are no secret keys required. You can simply hit one of the endpoints to get the information you need. Let's get into the code.

**Using jQuery**

It isn't too difficult to difficult to grab API information with jQuery.

```javascript
$.ajax({
  url: 'https://usnames.herokuapp.com/api/names/male',
  method: 'get',
  success: function(names) {
    console.log(names)
  }
})
```

This snippet will pass an array of objects (male names) in the variable names and log it to the screen. It will look something like this:

```javascript
[
   {
     _id: "5756815fbc5848057c9200d6",
     gender: "male",
     name: "alex"
   },
   {
     _id: "57568161f182f2087c706e2e",
     gender: "male",
     name: "mike"
   },
   {
     _id: "5756815fbc5848057c9200d4",
     gender: "male",
     name: "sam"
   },
   {
     ...
   }
]
```

From there, it is up to you how you use the names.
