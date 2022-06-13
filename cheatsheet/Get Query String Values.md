The [`window.location.search` property](https://www.w3schools.com/jsref/prop_loc_search.asp) contains the raw query string. For example, if you open `http://localhost:5000/?answer=42`, then `window.location.search` will equal `'?answer=42'`.

You can parse the query string using the [`URLSearchParams` class](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams):

```javascript
const querystring = '?answer=42';
const params = new URLSearchParams(querystring);

params.get('answer'); // '42'
```

Instances of `URLSearchParams` are similar to JavaScript maps. In order to get all keys in the search string, you can use the [`keys()` function](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/keys) or the [`entries()` function](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/entries). Keep in mind these functions return JavaScript iterators, **not** arrays, so you need to use `Array.from()` to convert them.

```javascript
const querystring = '?answer=42&question=unknown';
const params = new URLSearchParams(querystring);

Array.from(params.keys()); // ['answer', 'question']
Array.from(params.entries()); // [['answer', '42'], ['question', 'unknown']]
```

## Without `URLSearchParams`

The `URLSearchParams` class enjoys reasonable browser support and works in Node.js. The big caveat is that [`URLSearchParams` is **not** supported in Internet Explorer](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams#Browser_compatibility).

The `URLSearchParams` class handles a lot of edge cases for you, but, in many cases, you can get away with the below simple function for parsing the query string.

```javascript
function parse(qs) {
  return qs.
    replace(/^\?/, '').
    split('&').
    map(str => str.split('=').map(v => decodeURIComponent(v)));
}

parse('?answer=42&question=unknown'); // [['answer', '42'], ['question', 'unknown']]
```
