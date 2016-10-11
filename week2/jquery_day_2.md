# jQuery day 2 #

## Variables ##

Let's say we want to create a variable that holds a number.

```js
	var dollar = 5;
```

## jQuery $ ##

We can create a variable called $, and set that to 5 instead.

This is what jQuery is doing. jQuery decided to use $ instead of having the user type out jQuery to use its library.

```js
	var $ = 5;
```

## $ as an object ##

So let's dig a little deeper. Can we have $ set to an object?

```js
	var $ = {};
```

Objects are composed of a key, and a value. Let's add a key called prop1, with a value 123.

How do we look at the value?

```js
	var $ = {
		prop1 : '123'
	};

	console.log($.prop1);
```

## $ as an object with functions ##

Sure, can the object contain functions? Yup! It's just javascript.
Let's call it.

```js
	$ = {
		html : function() {}
	};

	$.html();
```

## $ as a function ##

Can $ hold a function? Sure!

```js
	var $ = function() {
		return 'I came from jquery';
	};
```

## Invoking $ function ##

How do we call it?

```js
	$();
```

## $ function with parameters ##

Can we pass it parameters? sure!

```js
	var $ = function(identifier) {
		return identifier;
	};
```

Great, now let's invoke it.

```js
	$('#blue-button');
```

## $ function return an object of functions ##

Now it's starting to look familiar, right? I created a jQuery skeleton, just like that.

How about instead of returning some string, let's have it return an object with functions in them. We're getting a bit crazy here, but bear with me.

```js
	var $ = function(identifier) {
		var objectWithFunctions = {
			html : function() {
				console.log('html function called');
			}
		};

		return objectWithFunctions;
	};
```

## Calling the html() function ##

Now let's see what gets returned from calling the function

```js
	var objectWithFunctions = $('#blue-button');
	console.log(objectWithFunctions);
```

We have the objectWithFunctions that we returned from the $ function.

Ok so let's finalize all this. How do we call the html function?

```js
	var objectWithFunctions = $('#blue-button');
	objectWithFunctions.html();
```

This is the same as this, which looks very familiar:

```js
	$('#blue-button').html();
```

## Rebuilding the html function ##

```js
var $ = {
	html : function() {
		console.log('html function called');
	}
}
```

We may want to do more than just say, html function called. Maybe we might even want to change the content inside an element, if an id is passed in.

```js
var $ = function(id) {
	var objectWithFunctions = {
		html : function(text) {
			console.log(id);
			console.log(text);
		}
	}

	return objectWithFunctions;
}
```

If we call the html function:

```js
$('blue-box').html('change text to this');
```

## Using the native browser methods ##

Now going back to the browser javascript we had before, let's have the html inside the div update when we call this custom function.

```js
var $ = function(id) {
	var objectWithFunctions = {
		html : function(text) {
			var element = document.getElementById(id);
			element.innerHtml = text;
		}
	}

	return objectWithFunctions;
}
```

## Done! ##

If we try to run it, it'll update the view with the text we passed in.

So look at that, you rebuilt a simplified version of the html function. The html function has a bit more functionality, and the jQuery object is built more complicated. But that's the gist of it.

You could recreate all of the jQuery library, with this knowledge, using the browser's method.